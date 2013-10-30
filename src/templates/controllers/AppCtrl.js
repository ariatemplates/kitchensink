/*
 * Copyright 2013 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Aria.classDefinition({
    $classpath : "templates.controllers.AppCtrl",
    $extends : "aria.templates.ModuleCtrl",
    $implements : ["templates.controllers.IAppCtrl"],
    $dependencies : ["aria.touch.Tap", "aria.pageEngine.PageEngine", "templates.pageengine.CustomPageProvider",
            "templates.pageengine.LeftCustomPageProvider", "templates.pageengine.RightCustomPageProvider",
            "aria.utils.Orientation", "aria.popups.PopupManager", "aria.utils.Event"],

    $constructor : function () {
        this.$ModuleCtrl.constructor.call(this);
        this.pageEngine = null;
        this.subPageEngine = null;
        this.cssHackDone = false;
        this._storedSubPage = null;
    },

    $destructor : function () {
        this.$ModuleCtrl.$destructor.call(this);
        this.pageEngine = null;
        this.subPageEngine = null;
    },

    $prototype : {
        $publicInterfaceName : "templates.controllers.IAppCtrl",

        /**
         * Initialization of the ModuleCtrl.
         */
        init : function (args, cb) {
            // Setting application data
            this.setData({
                navigation : {
                    currentPage : "",
                    navigationDepth : 0
                }
            });

            // Dummy fix for Android 4.0.3 to solve the "untouchable" right-side of the screen bug
            if (aria.core.Browser.osName == "Android") {
                Aria.$window.document.addEventListener('touchstart', function (e) {});
                Aria.$window.document.addEventListener('touchend', function (e) {});
                Aria.$window.document.addEventListener('touchmove', function (e) {});
            }
            // Prevents popup to close immediatel after being opened on some mobile browsers (due to mousedown fired
            // 300ms after touchend)
            if (aria.utils.Device.isTouch()) {
                aria.popups.PopupManager.$on({
                    "popupOpen" : this._disconnectMouseDown,
                    scope : this
                });
            }

            // Creating page engine(s) and registering to events
            this.pageEngine = new aria.pageEngine.PageEngine();
            if (!aria.utils.Device.isMobile()) {
                this.subPageEngine = new aria.pageEngine.PageEngine();
            }
            this.pageEngine.$on({
                "pageReady" : this._pageReady,
                scope : this
            });
            this.pageEngine.$on({
                "beforePageTransition" : this._beforePageTransition,
                scope : this
            });

            aria.utils.Orientation.$on({
                "change" : this._pageScroll,
                scope : this
            });

            this.$callback(cb);
        },

        /**
         * Starts the page engine(s). This is called after the display of the AppLayout template (in $afterRefresh).
         */
        startPageEngine : function () {
            var that = this;
            if (!aria.utils.Device.isMobile()) {
                var rightPageProvider = new Aria.$window.templates.pageengine.RightCustomPageProvider({
                    homePageId : "DEFAULT"
                });
                rightPageProvider.$on({
                    "navigateSub" : that._storeSubPage,
                    scope : that
                });
                this.pageEngine.start({
                    pageProvider : rightPageProvider,
                    oncomplete : function () {
                        that.subPageEngine.start({
                            pageProvider : new Aria.$window.templates.pageengine.LeftCustomPageProvider({
                                homePageId : that._storedSubPage?that._storedSubPage:"HOME"
                            }),
                            oncomplete : function () {
                                that.subPageEngine.getPageProvider().$on({
                                    "navigateMain" : that._navigateMain,
                                    scope : that
                                });
                                that._data.navigation.navigationDepth = 0;
                            }
                        });
                    }
                });
            } else {
                this.pageEngine.start({
                    pageProvider : new Aria.$window.templates.pageengine.CustomPageProvider({
                        homePageId : "HOME"
                    }),
                    oncomplete : function () {
                        that._data.navigation.navigationDepth = 0;
                    }
                });
            }
            this.pageEngine.getPageProvider().$on({
                "navigationDepthChange" : this._navigationDepthChange,
                scope : this
            });

        },

        /**
         * Navigates the main page engine.
         * @param {aria.pageEngine.CfgBeans:PageNavigationInformation} pageRequest.
         * @param {aria.core.CfgBeans:Callback} cb To be called when the navigation is complete.
         */
        navigate : function (page, cb) {
            this.pageEngine.navigate(page, cb);
        },

        /**
         * Navigates the sub page engine.
         * @param {aria.pageEngine.CfgBeans:PageNavigationInformation} pageRequest.
         * @param {aria.core.CfgBeans:Callback} cb To be called when the navigation is complete.
         */
        navigateSub : function (page, cb) {
            if (this.subPageEngine) {
                this.subPageEngine.navigate(page, cb);
            }
        },

        /**
         * Navigates the main page engine.
         * @param {Object} args Contains the page id.
         * @param {aria.core.CfgBeans:Callback} cb To be called when the navigation is complete.
         */
        _navigateMain : function (args, cb) {
            this.pageEngine.navigate({
                pageId : args.value
            }, cb);
        },

        /**
         * Stores the page id to which twill be used to initiate the sub page engine.
         * @param {Object} args Contains the page id.
         */
        _storeSubPage : function (args) {
            this._storedSubPage = args.value;
        },

        /**
         * Triggers the toggle of the menu.
         */
        toggleMenu : function () {
            this.$raiseEvent("toggleMenu");
        },

        /**
         * Callback for the "pageReady" event of the main page engine. It raises the same event to be used in the full
         * application.
         * @param {Object} args Contains the event data.
         */
        _pageReady : function (args) {
            this.$raiseEvent({
                name : "pageReady",
                pageId : args.pageId
            });
            // CSS hack to avoid weird scroll bars in desktop browsers
            if (!this.cssHackDone) {
                var head = Aria.$window.document.getElementsByTagName("head")[0];
                var lastChild = head.children[head.childElementCount - 1];
                if (lastChild.id === "xCsspool1") {
                    lastChild.innerHTML = lastChild.innerHTML.replace("height: 100%;", "");
                    this.cssHackDone = true;
                }
            }
        },

        /**
         * Callback for the "beforePageTransition" event of the main page engine. It raises the same event to be used in
         * the full application.
         * @param {Object} args Contains the event data.
         */
        _beforePageTransition : function (args) {
            this._pageScroll();
            this.$raiseEvent({
                name : "beforePageTransition",
                from : args.from,
                to : args.to
            });
        },

        /**
         * Tracks the navigation depth change, in order to be able to navigate back to home.
         * @param {Object} args Contains the depth change.
         */
        _navigationDepthChange : function (args) {
            if (args.value === 0) {
                this._data.navigation.navigationDepth = 0;
            } else {
                this._data.navigation.navigationDepth += args.value;
            }
        },

        /**
         * Hides the address bar in iOS browsers (Safari, Chrome). This is executed before every navigation.
         */
        _pageScroll : function () {
            if (aria.utils.Device.isMobile()
                    && aria.core.Browser.osName == "IOS"
                    && (aria.core.Browser.browserType == "Mobile Safari" && aria.core.Browser.version < 7 || aria.core.Browser.browserType == "Chrome")) {
                var addressBarShift = 0;
                if (aria.core.Browser.browserType == "Mobile Safari" && !aria.utils.Device.isPhoneGap()
                        && !Aria.$window.navigator.standalone) {
                    addressBarShift = 44;
                }
                var pageHeight = Aria.$window.screen.availHeight - addressBarShift;
                if (aria.utils.Device.isPortrait()) {
                    Aria.$window.document.body.style.height = pageHeight + 'px';
                }

                var pageWidth = Aria.$window.screen.availWidth - addressBarShift;
                if (aria.core.Browser.browserType == "Chrome") {
                    // -20 is for the notification bar
                    pageWidth -= 20;
                }
                if (!aria.utils.Device.isPortrait()) {
                    Aria.$window.document.body.style.height = pageWidth + 'px';
                }
                setTimeout(function () {
                    Aria.$window.window.scrollTo(0, 1);
                }, 100);
            }
        },

        /**
         * Removes mousedown listeners.
         */
        _disconnectMouseDown : function () {
            aria.utils.Event.removeListener(Aria.$window.document, "mousedown");
        }
    }
});
