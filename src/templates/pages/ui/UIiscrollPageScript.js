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
    $classpath : 'templates.pages.ui.UIiscrollPageScript',

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
         * Navigates to UIISCROLLBOTTOMBAR page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onBottomBar : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UIISCROLLBOTTOMBAR"
            });
        },

        /**
         * Navigates to UIISCROLLCAROUSEL page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onCarousel : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UIISCROLLCAROUSEL"
            });
        },

        /**
         * Navigates to UIISCROLLMATRIX page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onMatrix : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UIISCROLLMATRIX"
            });
        },

        /**
         * Navigates to UIISCROLLPICKER page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onPicker : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UIISCROLLPICKER"
            });
        },

        /**
         * Navigates to UIISCROLLGROUPEDLIST page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onGroupedList : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UIISCROLLGROUPEDLIST"
            });
        },

        /**
         * Navigates to UIISCROLLPULLTOREFRESH page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onPullToRefresh : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "UIISCROLLPULLTOREFRESH"
            });
        }
    }
});