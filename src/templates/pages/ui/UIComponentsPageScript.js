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
    $classpath : 'templates.pages.ui.UIComponentsPageScript',

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
         * Navigates to UICOMPONENTSAUTOCOMPLETE page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onAutoComplete : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UICOMPONENTSAUTOCOMPLETE"
            });
        },

        /**
         * Navigates to UICOMPONENTSTABS page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onTabs : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UICOMPONENTSTABS"
            });
        },

        /**
         * Navigates to UICOMPONENTSCOLLAPSIBLE page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onCollapsible : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UICOMPONENTSCOLLAPSIBLE"
            });
        },

        /**
         * Navigates to UICOMPONENTSACCORDION page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onAccordion : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UICOMPONENTSACCORDION"
            });
        },

        /**
         * Navigates to UICOMPONENTSOVERLAYS page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onOverlays : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UICOMPONENTSOVERLAYS"
            });
        },

        /**
         * Navigates to UICOMPONENTSTOOLTIP page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onTooltip : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UICOMPONENTSTOOLTIP"
            });
        },

        /**
         * Navigates to UICOMPONENTSEDITABLELIST page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onEditableList : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UICOMPONENTSEDITABLELIST"
            });
        }
    }
});