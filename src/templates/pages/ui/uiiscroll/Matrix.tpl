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
    $classpath:'templates.pages.ui.uiiscroll.Matrix',
    $hasScript:true,
    $css: ["templates.pages.ui.uiiscroll.MatrixStyle"]
}}

{macro main()}
    <div class="corner"></div>
    <div class="hidder_top"></div>
    <div {id "wrapper_top"/} class="wrapper_top" >
        <div class="cal_matrix_top">
            {foreach tdate in this.topDates}
                <div class="cal_matrix_topbar">${tdate}</div>
            {/foreach}
        </div>
    </div>
    <div class="hidder_left"></div>
    <div {id "wrapper_left"/} class="wrapper_left" >
        <div class="cal_matrix_left">
            {foreach ldate in this.leftDates}
                <div class="cal_matrix_leftbar">${ldate}</div>
            {/foreach}
        </div>
    </div>
    <div {id "wrapper"/} class="wrapper" >
        <div class="cal_matrix">
            {foreach ldate in this.leftDates}
                <div class="cal_matrix_line">
                    {foreach tdate in this.topDates}
                        {call displayCell(ldate, tdate) /}
                    {/foreach}
                </div>
            {/foreach}
        </div>
    </div>
{/macro}

{macro displayCell(ldate, tdate)}
    {@touch:Button {
        id: (ldate + tdate).replace(/ /g, ""),
        attributes: {
            classList: ["appButton", "cal_matrix_cell"]
        },
        on: {tap : { fn : onSelect}}
    }}
    ${ldate.substring(0, ldate.indexOf(" ")) * 10 + tdate.substring(0, tdate.indexOf(" ")) * 10}$
    {/@touch:Button}
{/macro}

{/Template}