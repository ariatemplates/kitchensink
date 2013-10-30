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
    $classpath : 'templates.layout.panels.MenuScript',

    $constructor : function () {
        // Needed for browsers where classList doesn't exist natively (e.g Android 2.X)
        this._classList = null;
    },
    $destructor : function () {
        this._classList = null;
    },

    $prototype : {
        /**
         * Navigates to NEXT page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onNext : function (evt) {
            this._classList = new aria.utils.ClassList(aria.utils.Dom.getElementById(evt.target.getProperty("id")));
            this.moduleCtrl.navigate({
                pageId : "NEXT",
                testParam : 0
            }, {
                fn : this._closeMenu,
                scope : this,
                arg : evt
            });
        },

        /**
         * Navigates to ABOUT page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onAbout : function (evt) {
            this._classList = new aria.utils.ClassList(aria.utils.Dom.getElementById(evt.target.getProperty("id")));
            this.moduleCtrl.navigate({
                pageId : "ABOUT",
                testParam : 0
            }, {
                fn : this._closeMenu,
                scope : this,
                arg : evt
            });
        },

        /**
         * Navigates to CHANGELOG page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onChangeLog : function (evt) {
            this._classList = new aria.utils.ClassList(aria.utils.Dom.getElementById(evt.target.getProperty("id")));
            this.moduleCtrl.navigate({
                pageId : "CHANGELOG",
                testParam : 0
            }, {
                fn : this._closeMenu,
                scope : this,
                arg : evt
            });
        },

        /**
         * Closes the menu after the navigation.
         */
        _closeMenu : function () {
            this.moduleCtrl.toggleMenu();
            this.timerId = aria.core.Timer.addCallback({
                fn : this._delayedHighlightCB,
                scope : this,
                delay : 50
            });
        },

        /**
         * Removes the highlighting from the menu after the navigation.
         */
        _delayedHighlightCB : function () {
            if (this._classList) {
                this._classList.toggle("touchLibButtonPressed");
                this._classList = null;
            }
        }
    }

});