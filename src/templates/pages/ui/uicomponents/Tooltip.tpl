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
    $classpath:'templates.pages.ui.uicomponents.Tooltip',
    $hasScript:true,
    $css: ["templates.pages.ui.uicomponents.TooltipStyle", "templates.layout.style.Overlays"],
    $dependencies: ["aria.popups.Popup"]
}}

{macro main()}
    <p {id "toto"/}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed tortor ligula, non malesuada dui. Suspendisse viverra accumsan erat non pretium. Etiam eget molestie orci. In hac habitasse platea dictumst. Donec a eros magna. Sed blandit, mi et pulvinar tincidunt, turpis lacus aliquet arcu, vel suscipit elit sapien id lorem. Phasellus eget urna quis tortor posuere congue. Vivamus accumsan libero non sapien fermentum fringilla. Integer tincidunt aliquet nisl sit amet condimentum. Sed dignissim pharetra aliquet. Aliquam sagittis egestas nulla ut interdum.<br>
    </p>
    {@touch:Button {
        id: "shower",
        attributes: {classList: ["opener"]},
        on: {tap : { fn : onTooltip}}
    }}
    Show tooltip
    {/@touch:Button}
  
    {@touch:Popup {
        closeOnMouseClick : true,
        contentMacro: 'getPopupContent',
        animateOut: "pop",
        animateIn: "pop",
        referenceId : "shower",
        preferredPositions: [{reference:"top left", popup:"bottom left", offset: {left: -40}}, {reference:"bottom left",popup:"top left", offset: {left: -40}}],
        bind:{
            "visible": { inside: this.inData, to: 'tooltipOpen1' }
        }
    }/}
  
    <p>
        Integer id turpis velit, nec volutpat nisi. Nam mauris dui, fermentum adipiscing ultricies pharetra, sollicitudin vitae nisi. Nunc eu erat sem, tristique tincidunt velit.<br>
    </p>
  
    {section {
        id: "selector",
        type: "div",
        attributes: {
            classList: ["selector"]
        },
        macro: {name: "getSelectContent", scope : this},
        bindRefreshTo: [{to:"selectValue", inside:this.inData}]
    }/}
  
    {@touch:Popup {
        closeOnMouseClick : true,
        contentMacro: 'getPopupContent',
        animateOut: "pop",
        animateIn: "pop",
        referenceId : "selectorButton",
        preferredPositions: [{reference:"top left", popup:"bottom left", offset: {left: 5}}, {reference:"bottom left",popup:"top left", offset: {left: 5}}],
        bind:{
            "visible": { inside: this.inData, to: 'tooltipOpen2' }
        }
    }/}

    <p>
        Integer id turpis velit, nec volutpat nisi. Nam mauris dui, fermentum adipiscing ultricies pharetra, sollicitudin vitae nisi. Nunc eu erat sem, tristique tincidunt velit.<br>
    </p>

    {@touch:Button {
        id: "shareButton",
        attributes: {classList: ["opener", "share"]},
        on: {tap : { fn : onShare}}
    }}
    Share
    {/@touch:Button}
  
    {@touch:Popup {
        closeOnMouseClick : true,
        contentMacro: 'getPopupContent',
        animateOut: "pop",
        animateIn: "pop",
        referenceId : "shareButton",
        preferredPositions: [{reference:"top left", popup:"bottom left", offset: {left: -3}}, {reference:"bottom left",popup:"top left", offset: {left: -3}}],
        bind:{
            "visible": { inside: this.inData, to: 'tooltipOpen3' }
        }
    }/}

    <p>
        Praesent quis magna dolor, ut lobortis lorem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque luctus tellus nisi. Morbi tincidunt nisi vel ligula congue placerat. In hac habitasse platea dictumst. Donec mi odio, adipiscing eu facilisis sed, tincidunt in dolor.
    </p>
    
    {@touch:Popup {
        absolutePosition: {
            right: 0,
            top: 100
        },
        closeOnMouseClick : false,
        contentMacro: 'getNotificationContent',
        animateOut: "slide left",
        animateIn: "slide left",
        modal: false,
        bind:{
            "visible": { inside: this.inData, to: 'openNotification' }
        }
    }/}
  
    {@touch:Button {
        on: {tap : { fn : onGetNotified}}
    }}
    Get notified
    {/@touch:Button}
  
    {@touch:Popup {
        center: true,
        closeOnMouseClick : true,
        contentMacro: 'getMsgContent',
        animateOut: "pop",
        animateIn: "pop",
        modal: true,
        bind:{
            "visible": { inside: this.inData, to: 'dialogOpen' }
        }
    }/}
    <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat ante, gravida eu egestas id, adipiscing ut nulla. Pellentesque suscipit est non ante tincidunt imperdiet. Vestibulum vitae tortor non ligula iaculis tincidunt.<br>
    </p>
{/macro}

{macro getSelectContent()}
    {@touch:Button {
        id: "selectorButton",
        attributes: {classList: ["opener", "collapsible", "collapsed"]},
        on: {tap : { fn : onSelect}}
    }}
    ${this.inData.selectValue}
    {/@touch:Button}
    Select an option:
{/macro}

{macro getPopupContent()}
    {if this.inData.popupContent != null}
        {if this.inData.popupContent == "tooltip"}
            <div class="dialog">
                <h1>Tooltip</h1>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed tortor ligula, non malesuada dui. Suspendisse viverra accumsan erat non pretium. Etiam eget molestie orci.</div>
            </div>
        {elseif this.inData.popupContent == "select"/}
            <div class="dialog selectbox">
                <h1>Options</h1>
                <div>
                    {@touch:Button {
                        on: {tap : { fn : onSelectValue, args: "Option 1"}}
                    }}
                    Option 1
                    {/@touch:Button}
                    {@touch:Button {
                        on: {tap : { fn : onSelectValue, args: "Option 2"}}
                    }}
                    Option 2
                    {/@touch:Button}
                    {@touch:Button {
                        on: {tap : { fn : onSelectValue, args: "Option 3"}}
                    }}
                    Option 3
                    {/@touch:Button}
                    {@touch:Button {
                        on: {tap : { fn : onSelectValue, args: "Option 4"}}
                    }}
                        Option 4
                    {/@touch:Button}
                </div>
            </div>
        {elseif this.inData.popupContent == "share"/}
            <div class="action">
                <div class="menuover contextmenu">
                    {@touch:Button {
                        isLink: true,
                        on: {tap : { fn : closePopup}},
                        attributes: {classList : ["facebook"]}
                    }}
                    Facebook
                    {/@touch:Button}
                    {@touch:Button {
                        isLink: true,
                        on: {tap : { fn : closePopup}},
                        attributes: {classList : ["twitter"]}
                    }}
                    Twitter
                    {/@touch:Button}
                    {@touch:Button {
                        isLink: true,
                        on: {tap : { fn : closePopup}},
                        attributes: {classList : ["googleplus"]}
                    }}
                    Google +
                    {/@touch:Button}
                    {@touch:Button {
                        isLink: true,
                        on: {tap : { fn : closePopup}},
                        attributes: {classList : ["linkedin"]}
                    }}
                    Linked In
                    {/@touch:Button}
                    {@touch:Button {
                        isLink: true,
                        attributes: {
                            classList: ["cancel"]
                        },
                        on: {tap : { fn : closePopup}}
                    }}
                    Cancel
                    {/@touch:Button}
                </div>
            </div>
        {else/}
            <div class="dialog">
                <div>This is the ${this.inData.popupContent} content!!!</div>
                <button {on tap {fn: "closePopup", scope: this} /}>Close</button>
            </div>
        {/if}
    {/if}
{/macro}

{macro getNotificationContent()}
    <div class="notification" {on tap {fn: onPopup}/}>You have one new message</div>
{/macro}

{macro getMsgContent()}
    <div class="dialog">
        <h1>Message</h1>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed tortor ligula, non malesuada dui. Suspendisse viverra accumsan erat non pretium. Etiam eget molestie orci.</div>
    </div>
{/macro}

{/Template}