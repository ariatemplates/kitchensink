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
    $classpath: "templates.pages.ui.uielements.SlidersPage",
    $hasScript: true,
    $css: ["templates.pages.ui.uielements.SlidersPageStyle"]
}}

{macro main()}
    <div class="content">
        {section {
            id: "sliderText",
            type: "span",
            macro : "displaySingle",
            bindRefreshTo: [{to:"value", inside:this.values}]
        }/}
        {@touch:Slider {
            bind: {
                value: {
                    to: "value",
                    inside: this.values
                }
            },
            tapToMove: true,
            width: 300
        }/}
    
        {section {
            id: "doubleSliderText",
            type: "span",
            macro : "displayDouble",
            bindRefreshTo: [{to:"double", inside:this.values}]
        }/}
        {@touch:DoubleSlider {
            bind: {
                value: {
                    to: "double",
                    inside: this.values
                }
            },
            width: 300
        }/}
    
        {section {
            id: "switchText",
            type: "span",
            macro : "displaySwitch",
            bindRefreshTo: [{to:"switchboolean", inside:this.values}]
        }/}
        {@touch:Slider {
            bind: {
                value: {
                    to: "switchboolean",
                    inside: this.values
                }
            },
            attributes: {
                classList: ["switch"]
            },
            toggleSwitch: true,
            tapToToggle: true,
            width: 100
        }/}
    </div>
{/macro}

{macro displaySingle()}
    Slider value: ${(this.values.value*100).toFixed(0)}
{/macro}

{macro displayDouble()}
    Double slider range: ${(100*this.values.double[0]).toFixed(0)} - ${(100*this.values.double[1]).toFixed(0)}
{/macro}

{macro displaySwitch()}
    Switch value: ${(this.values.switchboolean).toFixed(0)}
{/macro}

{/Template}