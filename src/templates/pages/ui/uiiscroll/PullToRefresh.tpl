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
    $classpath:'templates.pages.ui.uiiscroll.PullToRefresh',
    $hasScript:true,
    $css: ["templates.pages.ui.uiiscroll.PullToRefreshStyle"]
}}

{macro main()}
    <div {id "wrapper" /} class="wrapper">
        <div class="scroller">
            <div {id "pullDown" /} class="pullDown">
                <span class="pullDownIcon"></span>
                {section {
                    id: "results",
                    type: "span",
                    macro: {name: "displayMsg", scope : this},
                    bindRefreshTo: [{to:"msg", inside:this.inData}],
                }/}
            </div>
            {section {
                id: "ul",
                type: "div",
                macro: {name: "displayList", scope : this},
                bindRefreshTo: [{to:"generatedCount", inside:this.inData}]
            }/}
        </div>
    </div>
{/macro}
  
{macro displayMsg()}
    ${this.inData.msg}
{/macro}
  
{macro displayList()}
    <ul>
        {if this.inData.generatedCount > 0}
            {for var i = 0; i < this.inData.generatedCount ; i++}
                <li>Generated row ${this.inData.generatedCount - i}</li>
            {/for}
        {/if}
        <li>Some row 1</li>
        <li>Some row 2</li>
        <li>Some row 3</li>
        <li>Some row 4</li>
        <li>Some row 5</li>
        <li>Some row 6</li>
        <li>Some row 7</li>
        <li>Some row 8</li>
        <li>Some row 9</li>
        <li>Some row 10</li>
        <li>Some row 11</li>
        <li>Some row 12</li>
        <li>Some row 13</li>
        <li>Some row 14</li>
        <li>Some row 15</li>
        <li>Some row 16</li>
        <li>Some row 17</li>
        <li>Some row 18</li>
        <li>Some row 19</li>
        <li>Some row 20</li>
    </ul>
{/macro}

{/Template}