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
    $classpath: "templates.pages.ui.uielements.InputsPage",
    $hasScript: true,
    $css: ["templates.pages.ui.uielements.InputsPageStyle"]
}}

{macro main()}
    <div class="content">
        {@html:TextInput {
            placeholder : "Type some text",
            bind : {
                value : {
                    inside : this.values,
                    to : "input1"
                }
            }
        }/}
        <br>

        {@html:TextInput {
            placeholder : "Type a password",
            attributes: {
                type: "password"
            },
            bind : {
                value : {
                    inside : this.values,
                    to : "input2"
                }
            }
        }/}
        <br>

        <div class="searchInput" {on tap {fn: focusSearch}/}>
            {@html:TextInput {
                id : "searchInput",
                placeholder : "Type a search",
                bind : {
                    value : {
                        inside : this.values,
                        to : "searchValue"
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
        <br><br>
        
        <label class="select collapsible collapsed">
            {@html:Select {
                options : ["Option 1", "Option 2", "Option 3", "Option 4"],
                bind : {
                    value : {
                        inside : this.values,
                        to : "selectValue"
                    }
                }
            }/}
        </label>
    
        <p class="checkbox"><label>
            {@html:CheckBox {
                bind : {
                    checked : {
                        inside : this.values,
                        to : "checkBoxValue"
                    }
                }
            }/}
            <span>Checkbox</span>
        </label></p>
    
        <div class="group">
            <p><label>
                {@html:RadioButton {
                    value : 1,
                    bind : {
                        selectedValue : {
                            inside : this.values,
                            to : "radio1"
                        }
                    }
                }/}
                <span>Radio 1</span>
            </label></p>
            <p><label>
                {@html:RadioButton {
                    value : 2,
                    bind : {
                        selectedValue : {
                            inside : this.values,
                            to : "radio1"
                        }
                    }
                }/}
                <span>Radio 2</span>
            </label></p>
            <p><label>
                {@html:RadioButton {
                    value : 3,
                    bind : {
                        selectedValue : {
                            inside : this.values,
                            to : "radio1"
                        }
                    }
                }/}
                <span>Radio 3</span>
            </label></p>
        </div>
    
        <div class="groupHorizontal">
            <p><label>
                {@html:RadioButton {
                    value : 1,
                    bind : {
                        selectedValue : {
                            inside : this.values,
                            to : "radio2"
                        }
                    }
                }/}
                <span>One</span>
            </label></p>
            <p><label>
                {@html:RadioButton {
                    value : 2,
                    bind : {
                        selectedValue : {
                            inside : this.values,
                            to : "radio2"
                        }
                    }
                }/}
                <span>Two</span>
            </label></p>
            <p><label>
                {@html:RadioButton {
                    value : 3,
                    bind : {
                        selectedValue : {
                            inside : this.values,
                            to : "radio2"
                        }
                    }
                }/}
                <span>Three</span>
            </label></p>
        </div>
        <br><br>
    </div>
{/macro}

{/Template}