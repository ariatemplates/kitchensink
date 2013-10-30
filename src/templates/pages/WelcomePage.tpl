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
    $classpath: "templates.pages.WelcomePage",
    $css: ["templates.pages.WelcomePageStyle"]
}}

{macro main()}
    <a href="https://github.com/ariatemplates/kitchensink" class="forkme">
        <img src="img/forkme.png" alt="Fork me on GitHub">
    </a>
    <div class="menuhint">
        <div></div>
        <span>Use the side menu to browse and try the features</span>
    </div>

    <div class="welcome">
        <div>
            <h1>Welcome to Aria Templates' Kitchen Sink</h1>
            <div>
                This showcase application demontrates how mobile applications and websites can be implemented with <a href="http://www.ariatemplates.com">Aria Templates</a>.
            </div>
        </div>
    </div>
    
    
    <div class="smartphoneversion">
        <div>
            <span>Try the smartphone version</span>
            <div></div>
        </div>
        {if Aria.$window.cordova}
            <a href="indexCordova.html?smartphone=true">
        {else/}
            <a href="index.html?smartphone=true">
        {/if}
            <img src="img/smartphone.png" alt="Smartphone">
        </a>
    </div>
    
{/macro}


{/Template}