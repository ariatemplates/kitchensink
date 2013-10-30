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
    $classpath : 'templates.pages.ui.UIElementsPageScript',

    $prototype : {
        /**
         * Navigates to UI page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onUp : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UI"
            });
        },

        /**
         * Navigates to UIELEMENTSBUTTONS page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onButtons : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UIELEMENTSBUTTONS"
            });
        },

        /**
         * Navigates to UIELEMENTSSLIDERS page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onSliders : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UIELEMENTSSLIDERS"
            });
        },

        /**
         * Navigates to UIELEMENTSINPUTS page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onInputs : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UIELEMENTSINPUTS"
            });
        }
    }
});