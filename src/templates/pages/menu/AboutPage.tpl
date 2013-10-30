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
    $classpath: "templates.pages.menu.AboutPage",
    $css: ["templates.pages.menu.MiscStyle"]
}}

{macro main()}
    <div>
        <p>
            The Kitchen Sink is a showcase application which demontrates 
            how mobile applications and websites can be implemented with <a href="http://www.ariatemplates.com">Aria Templates</a>.
        </p>
    
        <p>
            It has been tested in the default browsers of the following mobile platforms:
            <ul>
                <li>iOS (5.1.1, 6.1.3 and 7.0.2)</li>
                <li>Android (2.3.6, 4.2.2 and 4.3)</li>
                <li>BlackBerry 10</li>
                <li>Windows Phone 8</li>
            </ul>
        </p>
    
        <p>
            In addition, it has also been tested on the latest version of these modern browsers:
            <ul>
                <li>Chrome</li>
                <li>Firefox</li>
                <li>IE 10</li>
                <li>Opera</li>
                <li>Safari</li>
            </ul>
        </p>
        
        <p>
            This Kitchen Sink is open-source, and relies on open-source technologies:
            <ul>
                <li><a href="http://www.ariatemplates.com">Aria Templates</a></li>
                <li><a href="http://cubiq.org/iscroll-4">iScroll</a></li>
                <li><a href="http://designmodo.github.io/Flat-UI/">Flat UI</a></li>
                <li><a href="http://cordova.apache.org/">Cordova</a></li>
                <li><a href="http://nodejs.org/">NodeJS</a>, <a href="https://npmjs.org/">NPM</a> and community modules</li>
            </ul>
        </p>
        
        <a href="https://github.com/ariatemplates/kitchensink" class="forkme">
            <img src="img/forkme.png" alt="Fork me on GitHub">
        </a>
    </div>
{/macro}

{/Template}