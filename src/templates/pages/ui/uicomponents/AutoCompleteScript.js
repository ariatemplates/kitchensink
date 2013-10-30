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
    $classpath : 'templates.pages.ui.uicomponents.AutoCompleteScript',
    $dependencies : ["templates.pages.ui.uicomponents.AutoCompleteResources", "aria.html.controllers.Suggestions"],
    $prototype : {
        /**
         * Loads suggestions list.
         */
        $dataReady : function () {
            this.values = {};
            this.values.value = "";
            this.suggestionsController = Aria.getClassInstance("aria.html.controllers.Suggestions");
            this.suggestionsController.setResourcesHandler(Aria.getClassInstance("templates.pages.ui.uicomponents.AutoCompleteResources"));
        },

        /**
         * Callback on type events.
         */
        reactOnType : function () {
            this.suggestionsController.suggestValue(this.$getElementById("inputField").getValue());
            var searchButton = this.$getElementById("searchButton");
            if (this.$getElementById("inputField").getValue() === "") {
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
         * Clears the search field.
         */
        clearSearch : function () {
            var searchInput = this.$getElementById("inputField");
            searchInput.setValue("");
            searchInput.focus();
            this.reactOnType();
        },

        /**
         * Sets focus in the input field.
         */
        focusSearch : function () {
            this.$getElementById("inputField").focus();
        },

        /**
         * Selects a suggestion.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         * @param {Object} suggestion The suggestion being selected.
         */
        select : function (evt, suggestion) {
            evt.preventDefault(true);
            this.suggestionsController.setSelected(suggestion);
            this.$getElementById("inputField").setValue(suggestion.label);
        },

        /**
         * Closes the suggestion list.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        closeSuggestions : function (evt) {
            evt.preventDefault(true);
            this.suggestionsController.empty();
        },

        /**
         * Cancels the current selection.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        cancelValue : function (evt) {
            evt.preventDefault(true);
            this.suggestionsController.setSelected(null);
            this.$getElementById("inputField").setValue("");
            this.clearSearch();
        }
    }
});