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
    $classpath : "templates.layout.AppLayoutScript",

    $prototype : {
        /**
         * Starts the page engine(s) after the display.
         */
        $afterRefresh : function () {
            this.moduleCtrl.startPageEngine();
        },
        
        /**
         * Reacts to te events raised by the AppCtrl module controller.
         * @param {Object} evt The event raised by the module controller.
         */
        onModuleEvent : function (evt) {
            if (evt.name === "toggleMenu") {
                this._toggleMenu();
            }
        },

        /**
         * Toggles the menu.
         */
        _toggleMenu : function () {
            Aria.$window.document.body.style.overflowX = "hidden";

            var menuWidth = 270;
            if (aria.utils.Device.isMobile()) {
                menuWidth = aria.utils.Dom.getFullPageSize().width - 50;
            }

            var pageContentMask = this.$getElementById("pageContentMask");
            pageContentMask.classList.toggle("activated");

            var sidemenu = this.$getElementById("sidemenu");
            var currentWidth = sidemenu.getProperty("style").width;
            if (currentWidth === "" || currentWidth === "0px") {
                var innermenu = this.$getElementById("innermenu");
                var innermenuWidth = innermenu.getProperty("style").width;
                if (innermenuWidth === "" || innermenuWidth == "0px" || innermenuWidth !== menuWidth + "px") {
                    innermenu.setStyle("width: " + menuWidth + "px;");
                }

                sidemenu.setStyle("width: " + menuWidth + "px;");
            } else {
                sidemenu.setStyle("width: 0px;");
            }
            var pagecontent = this.$getElementById("pagecontent");
            var currentLeft = pagecontent.getProperty("style").left;
            if (currentLeft === "" || currentLeft === "0px") {
                pagecontent.setStyle("left: " + menuWidth + "px;");
            } else {
                pagecontent.setStyle("left: 0px;");
            }
        }
    }
});