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

{Template {
    $classpath:'templates.pages.ui.uicomponents.AutoComplete',
    $hasScript:true,
    $css: ["templates.pages.ui.uicomponents.AutoCompleteStyle"]
}}

{macro main()}
    <div class="searchInput" {on tap {fn: focusSearch}/}>
            {@html:TextInput {
                id : "inputField",
                placeholder : "Type a country name",
                bind : {
                    value : {
                        inside : this.values,
                        to : "value"
                    }
                },
                on : {
                    type : "reactOnType",
                    focus: "reactOnFocus",
                    blur: "reactOnBlur"
                }
            }/}
            <button {id "searchButton"/} {on tap {fn: clearSearch}/} class="searchClear" style="visibility: hidden;">&#10006;</button>
        </div>

    {section {
        id : "results",
        macro : {
            name : "displayResults",
            args : [suggestionsController.data, this],
            scope : this
        },
        bindRefreshTo : [
            {inside : suggestionsController.data, to : "suggestions"}
        ]
    }/}

    {section {
        id : "selection",
        macro : {
            name : "displaySelected",
            args : [suggestionsController.data, this],
            scope : this
        },
        bindRefreshTo : [
            {inside : suggestionsController.data, to : "value"}
        ]
    }/}
{/macro}

{macro displayResults(model, scope)}
    {if model.suggestions.length > 0}
        <ul>
            {foreach suggestion inArray model.suggestions}
                <li>
                    {@touch:Button {
                        on: {tap : {
                            fn : "select",
                            scope : scope,
                            args : suggestion
                        }}
                    }}
                    ${suggestion.label}
                    {/@touch:Button}
                </li>
            {/foreach}
        </ul>
    {/if}
{/macro}

{macro displaySelected (model, scope)}
    {if model.value}
        <div class="selected">Selected value
            <br />
            <strong>${model.value.label}</strong>
            <br />
            <span class="slightlyOnTheRight">
                <span {on tap {
                    fn : "cancelValue",
                    scope : scope
                } /}>cancel</span>
            </span>
        </div>
    {/if}
{/macro}

{/Template}