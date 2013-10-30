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
    $classpath:'templates.pages.ui.uiiscroll.GroupedList',
    $hasScript:true,
    $css: ["templates.pages.ui.uiiscroll.GroupedListStyle"],
    $dependencies: ["aria.touch.Event"]
}}

{macro main()}
    <div {id "wrapper" /} class="wrapper">
        <div class="scroller">
            {foreach group in this.listData}
                <div {id this._generateId(group.label) /} class="separator">${group.label}</div>
                {foreach item in group.items}
                    {@touch:Button {
                        id: item,
                        on: {tap : { fn : onSelect}}
                    }}
                    ${item}
                    {/@touch:Button}
                {/foreach}
            {/foreach}
        </div>
        <div class="separator sticky">S</div>
        {section {
            id: "sticky",
            type: "div",
            attributes : {classList : ["separator", "sticky"]},
            macro: {name: "displaySticky", scope : this}
        }/}
        <div class="rightBar">
            {foreach shortcut in this.listShortcuts}
                <div {on mousedown {fn: onScrollToGroup, args: shortcut}/} {on mousemove {fn: onScrollToGroup, args: shortcut}/}
                {on touchstart {fn: onScrollToGroup, args: shortcut}/} {on touchmove {fn: onScrollToGroup, args: shortcut}/}
                >${shortcut}</div>
            {/foreach}
        </div>
    </div>
{/macro}

{macro displaySticky()}
    ${this.stickyText}
{/macro}

{/Template}