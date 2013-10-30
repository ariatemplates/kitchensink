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
    $classpath : "templates.layout.PageLayoutScript",

    $prototype : {

        /**
         * Removes the splash screen after the display of the page.
         */
        $displayReady : function () {
            //Hide www splashsreen if any
            var splashScreenDiv = aria.utils.Dom.getElementById("splashScreenContainer");
            if (splashScreenDiv) {
                Aria.$window.setTimeout(function () {
                    splashScreenDiv.style.opacity = 0;
                    Aria.$window.setTimeout(function () {
                        Aria.$window.document.body.style.overflow = "visible";
                        if (splashScreenDiv.parentNode) {
                            Aria.$window.document.body.removeChild(splashScreenDiv);
                        }
                        splashScreenDiv = null;
                    }, 300);
                }, 0);

            }
            //Hide Cordova splashsreen if any
            if (Aria.$window.navigator.splashscreen) {
                Aria.$window.navigator.splashscreen.hide();
            }

        },
        
        $afterRefresh: function() {
            if (aria.core.Browser.osName == "IOS" || !aria.utils.Device.isDesktop()) {
                var elem;
                var pageClass = aria.utils.Device.isMobile()?"page":"pagedetails";
                var elems = Aria.$window.document.getElementsByClassName("xanimation-element " + pageClass);
                if (elems.length > 0) {
                    elem = elems[0];
                } else {
                    elem = Aria.$window.document.getElementsByClassName(pageClass)[0];
                }
                aria.core.Timer.addCallback({
                    fn : this._updateBodyheight,
                    scope : this,
                    delay : 0,
                    args: elem
                });
            }
        },

        /**
         * Updates the height of the body based on the height of the page content.
         * This is required to have a perfect address bar hidding in iOS browsers.
         */
        _updateBodyheight : function (elem) {
            if (elem.childElementCount > 0) {
                var totalHeight = elem.children[0].clientHeight + 90;

                var isIOBrowser = aria.utils.Device.isMobile()
                        && aria.core.Browser.osName == "IOS"
                        && (aria.core.Browser.browserType == "Mobile Safari" && aria.core.Browser.version < 7|| aria.core.Browser.browserType == "Chrome");
                var pageHeight = Aria.$window.document.body.clientHeight;

                if (totalHeight > pageHeight) {
                    Aria.$window.document.body.style.height = totalHeight + 'px';
                } else if (Aria.$window.document.body.style.height !== "" && !isIOBrowser) {
                    Aria.$window.document.body.style.height = null;
                }
            }
        }
    }
});