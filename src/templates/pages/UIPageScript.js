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
    $classpath : 'templates.pages.UIPageScript',

    $prototype : {
        /**
         * Navigates to HOME page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onUp : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "HOME"
            });
        },

        /**
         * Navigates to UIELEMENTS page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onUIElements : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UIELEMENTS"
            });
        },

        /**
         * Navigates to UICOMPONENTS page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onUIComponents : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UICOMPONENTS"
            });
        },

        /**
         * Navigates to UIISCROLL page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onIscroll : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UIISCROLL"
            });
        }
    }
});