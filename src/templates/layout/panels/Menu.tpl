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
    $classpath: "templates.layout.panels.Menu",
    $hasScript: true,
    $css: ["templates.layout.panels.MenuStyle"]
}}

{macro main()}
    <div class="menuContainer">
        <div class="menuContent">
            {@touch:Button {
                isLink: true,
                attributes: {
                    classList: ["appButton", "navigation", "forward"]
                },
                on: {tap : { fn : onChangeLog}}
            }}
            Change log
            {/@touch:Button}
            {@touch:Button {
                isLink: true,
                attributes: {
                    classList: ["appButton", "navigation", "forward"]
                },
                on: {tap : { fn : onAbout}}
            }}
            About
            {/@touch:Button}
            {call displayMenuItems() /}
        </div>
    </div>
{/macro}

{macro displayMenuItems()}
    <div class="menuSeparator">More options</div>
    {@touch:Button {
        isLink: true,
        attributes: {
            classList: ["appButton", "navigation", "forward"]
        },
        on: {tap : { fn : onNext}}
    }}
    Option 1
    {/@touch:Button}
    {@touch:Button {
        isLink: true,
        attributes: {
            classList: ["appButton", "navigation", "forward"]
        },
        on: {tap : { fn : onNext}}
    }}
    Option 2
    {/@touch:Button}
    {@touch:Button {
        isLink: true,
        attributes: {
            classList: ["appButton", "navigation", "forward"]
        },
        on: {tap : { fn : onNext}}
    }}
    Option 3
    {/@touch:Button}
{/macro}

{/Template}