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
    $classpath : 'templates.pages.TransitionsPageScript',

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
         * Navigates to TRANSITIONSSLIDELEFT page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onSlideLeft : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "TRANSITIONSSLIDELEFT"
            });
        },

        /**
         * Navigates to TRANSITIONSSLIDERIGHT page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onSlideRight : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "TRANSITIONSSLIDERIGHT"
            });
        },

        /**
         * Navigates to TRANSITIONSSLIDEUP page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onSlideUp : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "TRANSITIONSSLIDEUP"
            });
        },

        /**
         * Navigates to TRANSITIONSSLIDEDOWN page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onSlideDown : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "TRANSITIONSSLIDEDOWN"
            });
        },

        /**
         * Navigates to TRANSITIONSFADE page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onFade : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "TRANSITIONSFADE"
            });
        },

        /**
         * Navigates to TRANSITIONSFLIP page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onFlip : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "TRANSITIONSFLIP"
            });
        },

        /**
         * Navigates to TRANSITIONSPOP page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onPop : function (evt) {
            this.moduleCtrl.navigate({
                pageId : "TRANSITIONSPOP"
            });
        }
    }
});