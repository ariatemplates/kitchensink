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
    $classpath: "templates.pages.BrowserInfoPage",
    $dependencies: ["aria.core.Browser", "aria.utils.Device"],
    $css: ["templates.pages.BrowserInfoPageStyle"]
}}

{macro main()}
    <div class="panel">
        <h2>Browser Information</h2>
        <table>
            <tr><td>deviceName</td><td>${aria.core.Browser.deviceName}</td></tr>
            <tr><td>name</td><td>${aria.core.Browser.name}</td></tr>
            <tr><td>version</td><td>${aria.core.Browser.version}</td></tr>
            <tr><td>browserType</td><td>${aria.core.Browser.browserType}</td></tr>
            <tr><td>browserVersion</td><td>${aria.core.Browser.browserVersion}</td></tr>
            <tr><td>osName</td><td>${aria.core.Browser.osName}</td></tr>
            <tr><td>osVersion</td><td>${aria.core.Browser.osVersion}</td></tr>
        </table>
    </div>
    
    <div class="panel">
        <h2>Device Information</h2>
        <table>
            <tr><td>isDesktop</td><td>{call displayTickCell(aria.utils.Device.isDesktop()) /}</td></tr>
            <tr><td>isDevice</td><td>{call displayTickCell(aria.utils.Device.isDevice()) /}</td></tr>
            <tr><td>isTablet</td><td>{call displayTickCell(aria.utils.Device.isTablet()) /}</td></tr>
            <tr><td>isMobile</td><td>{call displayTickCell(aria.utils.Device.isMobile()) /}</td></tr>
            <tr><td>isPortrait</td><td>{call displayTickCell(aria.utils.Device.isPortrait()) /}</td></tr>
            <tr><td>isTouch</td><td>{call displayTickCell(aria.utils.Device.isTouch()) /}</td></tr>
            <tr><td>isClickNavigation</td><td>{call displayTickCell(aria.utils.Device.isClickNavigation()) /}</td></tr>
            <tr><td>is2DTransformCapable</td><td>{call displayTickCell(aria.utils.Device.is2DTransformCapable()) /}</td></tr>
            <tr><td>is3DTransformCapable</td><td>{call displayTickCell(aria.utils.Device.is2DTransformCapable()) /}</td></tr>
            <tr><td>isPhoneGap</td><td>{call displayTickCell(aria.utils.Device.isPhoneGap()) /}</td></tr>
        </table>
    </div>
    
    <div class="footer">
        <h2>User-agent</h2>
        <span>${aria.utils.Device.ua}</span>
    </div>
{/macro}

{macro displayTickCell(value)}
    {if value}
        <div class="tickok"></div>
    {else/}
        <div class="tickok not"></div>
    {/if}
{/macro}


{/Template}