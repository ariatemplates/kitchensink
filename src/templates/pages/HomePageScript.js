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
    $classpath : 'templates.pages.HomePageScript',

    $prototype : {
        /**
         * Navigates to UI page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onUI : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UI"
            });
        },

        /**
         * Navigates to TRANSITIONS page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onTransitions : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "TRANSITIONS"
            });
        },

        /**
         * Navigates to GESTURES page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onGestures : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "GESTURES"
            });
        },

        /**
         * Navigates to ORIENTATIONCHANGE page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onOrientationChange : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "ORIENTATIONCHANGE"
            });
        },

        /**
         * Navigates to HTML5 page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onHTML5 : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "HTML5"
            });
        },

        /**
         * Navigates to BROWSERINFO page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onBrowserInfo : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "BROWSERINFO"
            });
        }
    }
});