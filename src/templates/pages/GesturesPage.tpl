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
    $classpath: "templates.pages.GesturesPage",
    $hasScript: true,
    $css: ["templates.pages.GesturesPageStyle"]
}}

{macro main()}
    <div class="touchboard"
        {on tap {fn : this.touchHandler, scope : this}/}
        {on tapstart {fn : this.touchHandler, scope : this}/}
        {on tapcancel {fn : this.touchHandler, scope : this}/}
        {on singletap {fn : this.touchHandler, scope : this}/}
        {on singletapstart {fn : this.touchHandler, scope : this}/}
        {on singletapcancel {fn : this.touchHandler, scope : this}/}
        {on doubletap {fn : this.touchHandler, scope : this}/}
        {on doubletapstart {fn : this.touchHandler, scope : this}/}
        {on doubletapcancel {fn : this.touchHandler, scope : this}/}
        {on doubletap {fn : this.touchHandler, scope : this}/}
        {on longpress {fn : this.touchHandler, scope : this}/}
        {on longpressstart {fn : this.touchHandler, scope : this}/}
        {on longpresscancel {fn : this.touchHandler, scope : this}/}
        {on dragstart {fn : this.touchHandler, scope : this}/}
        {on drag {fn : this.touchHandler, scope : this}/}
        {on dragmove {fn : this.touchHandler, scope : this}/}
        {on dragcancel {fn : this.touchHandler, scope : this}/}
        {on swipe {fn : this.touchHandler, scope : this}/}
        {on swipestart {fn : this.touchHandler, scope : this}/}
        {on swipemove {fn : this.touchHandler, scope : this}/}
        {on swipecancel {fn : this.touchHandler, scope : this}/}
        {on pinch {fn : this.touchHandler, scope : this}/}
        {on pinchstart {fn : this.touchHandler, scope : this}/}
        {on pinchmove {fn : this.touchHandler, scope : this}/}
        {on pinchcancel {fn : this.touchHandler, scope : this}/}
        >
        <span class="touchMe">TOUCH ME</span>
    </div>
    
    {section {
        id: "console",
        type: "div",
        attributes : {classList : ["console"]},
        bindRefreshTo: [{to:"messagesCount", inside:this.inData}],
        macro: {name: "displayConsole", scope : this}
     }/}
{/macro}

{macro displayConsole()}
    {@touch:Button {
        attributes: {
          classList: ["clear"]
        },
        on: {tap : { fn : clearConsole}}
    }}
        Clear
    {/@touch:Button}
    <h2>Event log</h2>
    {foreach msg in this.inData.messages}
        <span>${msg}</span>
    {/foreach}
{/macro}

{/Template}