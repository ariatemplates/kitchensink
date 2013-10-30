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
    $classpath : 'templates.pages.ui.uicomponents.TabsScript',

    $constructor : function () {
        this.inData = {};
        this.inData.contentId = 1;
    },

    $prototype : {
        /**
         * Switches the opened tab.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         * @param {} arg The id of the tab to switch to.
         */
        onTab : function (evt, arg) {
            this.$json.setValue(this.inData, "contentId", arg);
        }

    }
});