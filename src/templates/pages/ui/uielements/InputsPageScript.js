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
    $classpath : 'templates.pages.ui.uielements.InputsPageScript',

    $prototype : {
        $dataReady : function () {
            this.values = {};
            this.values.input1 = "";
            this.values.input2 = "";
            this.values.searchValue = "";
            this.values.selectValue = "Option 1";
            this.values.checkBoxValue = 1;
            this.values.radio1 = 1;
            this.values.radio2 = 2;
        },

        /**
         * Clears the search field.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        clearSearch : function (evt) {
            var searchInput = this.$getElementById("searchInput");
            searchInput.setValue("");
            searchInput.focus();
            this.reactOnType(evt);
        },

        /**
         * Reacts on type.
         * @param {aria.templates.DomEventWrapper} evt The type event.
         */
        reactOnType : function (evt) {
            var searchButton = this.$getElementById("searchButton");
            if (this.$getElementById("searchInput").getValue() === "") {
                searchButton.setStyle("visibility: hidden;");
            } else {
                searchButton.setStyle("");
            }
        },

        /**
         * Reacts on focus.
         * @param {aria.templates.DomEventWrapper} evt The type event.
         */
        reactOnFocus : function (evt) {
            evt.target.getParentWithName("div").classList.add("focus");
        },

        /**
         * Reacts on blur.
         * @param {aria.templates.DomEventWrapper} evt The type event.
         */
        reactOnBlur : function (evt) {
            evt.target.getParentWithName("div").classList.remove("focus");
        },

        /**
         * Focuses the search field.
         */
        focusSearch : function () {
            this.$getElementById("searchInput").focus();
        }
    }
});