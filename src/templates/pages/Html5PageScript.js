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
    $classpath : 'templates.pages.Html5PageScript',

    $prototype : {
        /**
         * Navigates to HOME page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onUp: function(evt) {
            this.moduleCtrl.navigate({pageId : "HOME"});
        },
        
        /**
         * Navigates to HTML5LOCALSTORAGE page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onLocalStorage: function(evt) {
            this.moduleCtrl.navigate({pageId : "HTML5LOCALSTORAGE"});
        },

        /**
         * Navigates to HTML5GEOLOCATION page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onGeolocation: function(evt) {
            this.moduleCtrl.navigate({pageId : "HTML5GEOLOCATION"});
        }
    }
});