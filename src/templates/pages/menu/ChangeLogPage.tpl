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
    $classpath: "templates.pages.menu.ChangeLogPage",
    $css: ["templates.pages.menu.MiscStyle"]
}}

{macro main()}
    <div>
        <p>
            <strong>28th of October 2013</strong>
            <ul>
                <li>Upgrade to AT 1.4-11</li>
                <li>New layout for tablet and desktop</li>
                <li>New flat design</li>
                <li>New UI components page: Editable List</li>
                <li>Improvement of the Sliders, Overlays and Tooltip pages</li>
                <li>Management of all dependencies with NPM (AT, iScroll, Cordova)</li>
                <li>New scripts to create, compile and deploy Cordova applications for Android, BlackBerry 10, iOS and Windows Phone 8</li>
                <li>Added resources (icons, splashcreens) for Cordova applications</li>
                <li>Added documentation</li>
            </ul>
        </p>
        
        <p>
            <strong>13th of August 2013</strong>
            <ul>
                <li>Upgrade to AT 1.4-7</li>
                <li>Integration of new HTML widgets</li>
                <li>New "mobile-like" side menu</li>
                <li>Header animation decoupled from the main page one</li>
                <li>Address bar hiding in iOS browsers (Safari, Chrome)</li>
                <li>New About and Change Log pages</li>
            </ul>
        </p>
    
        <p>
            <strong>1st of August 2013</strong>
            <ul>
                <li>Upgrade to AT 1.4-6</li>
                <li>Bug fixing</li>
            </ul>
        </p>
    </div>
{/macro}

{/Template}