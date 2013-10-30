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
    $classpath:'templates.pages.ui.uiiscroll.Picker',
    $hasScript:true,
    $css: ["templates.pages.ui.uiiscroll.PickerStyle"],
    $dependencies: ["aria.utils.Function"]
}}

{macro main()}
    {section {
        id: "results",
        type: "div",
        attributes : {classList : ["resultPanel"]},
        macro: {name: "displayResults", scope : this},
        bindRefreshTo: [{to:"itemSelected", inside:this.inData}, {to:"isPickerShown", inside:this.inData}]
    }/}

    <div {id "wheel"/} class="wheel">
        <div class="wheelheader buttonBar">
            {@touch:Button {
                attributes: {
                    classList: ["appButton", "right"]
                },
                on: {tap : { fn : onHide}}
            }}
            Done
            {/@touch:Button}
        </div>
        <div {id "wrapper" /} class="wrapper">
            <div class="scroller">
                <ul class="thelist">
                    <li></li>
                    <li></li>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                    <li>Item 11</li>
                    <li>Item 12</li>
                    <li>Item 13</li>
                    <li>Item 14</li>
                    <li>Item 15</li>
                    <li>Item 16</li>
                    <li>Item 17</li>
                    <li>Item 18</li>
                    <li>Item 19</li>
                    <li>Item 20</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
             <div class="mask"></div>
        </div>
    </div>
{/macro}

{macro displayResults()}
    {if !this.inData.isPickerShown}
        <b>Item ${this.inData.itemSelected} was selected</b><br><br>
        {@touch:Button {
            on: {tap : { fn : onShow}}
        }}
        Show picker
        {/@touch:Button}
    {else/}
        <br>Spin the wheel to select an item in the list<br><br>
        Current selection is item ${this.inData.itemSelected}
    {/if}
{/macro}

{/Template}