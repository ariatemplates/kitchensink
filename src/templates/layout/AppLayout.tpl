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
    $classpath: "templates.layout.AppLayout",
    $dependencies: ["templates.layout.style.Flat", "templates.layout.style.FlatPalette"],
    $css : ["templates.layout.AppLayoutStyle", "templates.layout.style.Theme", "templates.layout.style.ThemeUnprefixed", "templates.layout.style.Widgets"],
    $hasScript: true
}}

{macro main()}
    //The side menu
    <div {id "sidemenu"/} class="sidemenu">
        <div {id "innermenu"/} class="innermenu">
            {@html:Template {
                type:"div",
                classpath: "templates.layout.panels.Menu"
            }/}
        </div>
    </div>
    
    //The page content: header + page engine(s)
    <div {id "pagecontent"/} class="pagecontent">
        <div {id "pageContentMask"/} class="pagecontentMask" {on tap {fn : this._toggleMenu, scope : this}/}></div>
    
        //The header
        <div class="pageHeader">
            {@html:Template {
                type:"div",
                classpath: "templates.layout.panels.Header",
                attributes: {
                    classList: ["header"]
                }
            }/}
        </div>
        //The content itself
        {if aria.utils.Device.isMobile()}
            //Mobile layout
            <div id="output" class="page"></div>
        {else/}
            //Tablet and desktop layout
            <div><div id="output" class="page side"/></div>
            <div class="panelseparator"></div>
            <div><div id="output2" class="pagedetails"/></div>
        {/if}
    </div>
{/macro}

{/Template}