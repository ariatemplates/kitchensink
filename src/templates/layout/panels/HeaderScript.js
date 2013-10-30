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

Aria.tplScriptDefinition({
    $classpath : 'templates.layout.panels.HeaderScript',
    $dependencies : ['aria.utils.css.Animations'],

    $constructor : function () {
        this.animator = new aria.utils.css.Animations();
        this.animator2 = new aria.utils.css.Animations();
        this.animator3 = new aria.utils.css.Animations();
    },

    $destructor : function () {
        if (this.animator != null) {
            this.animator.$dispose();
        }
        this.animator = null;
        if (this.animator2 != null) {
            this.animator2.$dispose();
        }
        this.animator2 = null;
        if (this.animator3 != null) {
            this.animator3.$dispose();
        }
        this.animator3 = null;
    },

    $prototype : {
        /**
         * Navigates back to the previous page.
         */
        onBack : function () {
            Aria.$window.history.back();
        },

        /**
         * Toggles the menu.
         */
        onMenu : function () {
            this.moduleCtrl.toggleMenu();
        },

        /**
         * Navigates back to the home page.
         */
        onHome : function () {
            var depth = this.data.navigation.navigationDepth;
            this.moduleCtrl.navigateSub({
                pageId : "HOME"
            });
            if (aria.utils.Device.isMobile() && depth > 0) {
                Aria.$window.history.go(-depth);
            }
            else {
                this.moduleCtrl.navigate({
                    pageId : aria.utils.Device.isMobile()?"HOME":"DEFAULT"
                });
            }
        },

        /**
         * Reacts to te events raised by the AppCtrl module controller.
         * @param {Object} evt The event raised by the module controller.
         */
        onModuleEvent : function (evt) {
            if (evt.name === "beforePageTransition") {
                if (evt.from) {
                    if (evt.to == "HOME" || evt.to == "DEFAULT") {
                        //Navigation to HOME or DEFAULT, the menu button only is displayed
                        var homeButton = aria.utils.Dom.getElementById(this.$getId("homeButton"));
                        this.animator.start("fade", {
                            from : homeButton,
                            reverse : false,
                            type : 1
                        });

                        var backButton = aria.utils.Dom.getElementById(this.$getId("backButton"));
                        this.animator2.start("fade", {
                            from : backButton,
                            reverse : false,
                            type : 1
                        });

                        var menuButton = aria.utils.Dom.getElementById(this.$getId("menuButton"));
                        this.animator3.start("fade", {
                            to : menuButton,
                            reverse : false,
                            type : 1
                        });
                    } else if (evt.from == "HOME" || evt.from == "DEFAULT") {
                        //Navigation from HOME or DEFAULT, the back and home buttons are displayed
                        this.$getElementById("homeButton").classList.remove("out");
                        var homeButton = aria.utils.Dom.getElementById(this.$getId("homeButton"));
                        this.animator.start("fade", {
                            to : homeButton,
                            reverse : false,
                            type : 1
                        });

                        this.$getElementById("backButton").classList.remove("out");
                        var backButton = aria.utils.Dom.getElementById(this.$getId("backButton"));
                        this.animator2.start("fade", {
                            to : backButton,
                            reverse : false,
                            type : 1
                        });

                        var menuButton = aria.utils.Dom.getElementById(this.$getId("menuButton"));
                        this.animator3.start("fade", {
                            from : menuButton,
                            reverse : false,
                            type : 1
                        });
                    }
                }
                else {
                    if (evt.to !== "HOME" && evt.to !== "DEFAULT") {
                        //Not starting on the home page, menu and home buttons are displayed
                        this.$getElementById("homeButton").classList.remove("out");
                    }
                }
            }
        }
    }
});