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
    $classpath: "templates.pages.html5.Html5GeolocationPage",
    $hasScript: true,
    $css: ["templates.pages.html5.Html5GeolocationPageStyle"]
}}

{macro main()}
    {@touch:Button {
        attributes: {
            classList: [""]
        },
        on: {tap : { fn : getLocation}}
    }}
    Activate Geolocation
    {/@touch:Button}

    {section {
        id: "results",
        type: "div",
        attributes : {classList : ["resultPanel"]},
        macro: {name: "displayResults", scope : this}
    }/}
{/macro}

{macro displayResults()}
    {if this.results.error != null || this.results.position}
        <h2>Results</h2>
        {if this.results.error != null}
            Error: ${this.results.error}
        {else/}
            Latitude: ${this.results.position.coords.latitude}<br>
            Longitude: ${this.results.position.coords.longitude}<br>
        {/if}
    {/if}
{/macro}

{/Template}