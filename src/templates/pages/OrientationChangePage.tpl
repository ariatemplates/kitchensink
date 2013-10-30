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
    $classpath: "templates.pages.OrientationChangePage",
    $dependencies: ["aria.utils.Orientation"],
    $hasScript: true,
    $css: ["templates.pages.OrientationChangePageStyle"]
}}

{macro main()}
    {section {
        id: "content",
        type: "div",
        bindRefreshTo: [ {to:"isPortrait", inside: this.orientation}],
        macro: {name: "displayContent", scope : this}
    }/}
{/macro}

{macro displayContent()}
    {if this.orientation.isPortrait}
        {call displayList()/}
    {else/}
        <div {id "ocwrapper" /} class="wrapper">
            <div class="scroller">
                {call displayList()/}
            </div>
        </div>
    {/if}
{/macro}

{macro displayList()}
    <ul>
        {foreach country in this.countries}
            <li><img src="img/flags/${country.code}.gif"/><p>${country.name}</p></li>
        {/foreach}
    </ul>
{/macro}

{/Template}