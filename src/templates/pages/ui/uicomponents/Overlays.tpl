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
    $classpath:'templates.pages.ui.uicomponents.Overlays',
    $hasScript:true,
    $css: ["templates.pages.ui.uicomponents.OverlaysStyle", "templates.layout.style.Overlays"],
    $dependencies: ["aria.popups.Popup"]
}}

{macro main()}
    <div class="content">
    
        {section {
            id: "tabContent",
            type: "div",
            macro: {name: "displayContent", scope : this},
            bindRefreshTo: [{to:"isCollapsed", inside:this.inData}]
        }/}
      
      
        /* Dialog for Popup, Alert, Confirm and Prompt */
        {@touch:Popup {
            center: true,
            closeOnMouseClick : true,
            contentMacro: 'getPopupContent',
            animateOut: "pop",
            animateIn: "pop",
            modal: true,
            bind:{
                "visible": { inside: this.inData, to: 'dialogOpen' }
            }
        }/}
      
        {@touch:Button {
            attributes: {classList: ["opener"]},
            on: {tap : { fn : onPopup}}
        }}
        Popup
        {/@touch:Button}
    
        {@touch:Button {
            attributes: {classList: ["opener"]},
            on: {tap : { fn : onAlert}}
        }}
        Alert
        {/@touch:Button}
    
        {@touch:Button {
            isLink: false,
            attributes: {classList: ["opener"]},
            on: {tap : { fn : onConfirm}}
        }}
        Confirm
        {/@touch:Button}
    
        {@touch:Button {
            attributes: {classList: ["opener"]},
            on: {tap : { fn : onPrompt}}
        }}
        Prompt
        {/@touch:Button}
      
        /* Menu dialogs */
        {@touch:Popup {
            absolutePosition: {
                left: 0,
                right: 0,
                bottom: 0
            },
            closeOnMouseClick : true,
            contentMacro: 'getPopupContent',
            animateOut: "slide up",
            animateIn: "slide up",
            modal: true,
            bind:{
                "visible": { inside: this.inData, to: 'bottomOpen' }
            }
        }/}
        {@touch:Button {
            attributes: {classList: ["opener"]},
            on: {tap : { fn : onMenuBottom}}
        }}
            Action Menu (bottom)
        {/@touch:Button}
    
        {@touch:Popup {
            absolutePosition: {
                left: 0,
                right: 0,
                top: 0
            },
            closeOnMouseClick : true,
            contentMacro: 'getPopupContent',
            animateOut: "slide down",
            animateIn: "slide down",
            modal: true,
            bind:{
                "visible": { inside: this.inData, to: 'topOpen' }
            }
        }/}
        {@touch:Button {
            attributes: {classList: ["opener"]},
            on: {tap : { fn : onMenuTop}}
        }}
        Action Menu (top)
        {/@touch:Button}
    
        {@touch:Popup {
            absolutePosition: {
                left: 0,
                bottom: 0,
                top: 0
            },
            closeOnMouseClick : true,
            contentMacro: 'getPopupContent',
            animateOut: "slide right",
            animateIn: "slide right",
            modal: true,
            bind:{
                "visible": { inside: this.inData, to: 'leftOpen' }
            }
        }/}
        {@touch:Button {
            attributes: {classList: ["opener"]},
            on: {tap : { fn : onMenuLeft}}
        }}
        Menu (left)
        {/@touch:Button}
    
        {@touch:Popup {
            absolutePosition: {
                bottom: 0,
                right: 0,
                top: 0
            },
            closeOnMouseClick : true,
            contentMacro: 'getPopupContent',
            animateOut: "slide left",
            animateIn: "slide left",
            modal: true,
            bind:{
                "visible": { inside: this.inData, to: 'rightOpen' }
            }
        }/}
        {@touch:Button {
            attributes: {classList: ["opener"]},
            on: {tap : { fn : onMenuRight}}
        }}
        Menu (right)
        {/@touch:Button}
    
    </div>
{/macro}


{macro displayContent()}
    {var attr = this.inData.isCollapsed? {classList: ["collapsible", "collapsed"]} : {classList: ["collapsible"]}/}
    {@touch:Button {
        attributes: attr,
        on: {tap : { fn : onCollapse}}
    }}
    For scrolling purpose
    {/@touch:Button}
    {if !this.inData.isCollapsed}
        <span class="textBorder">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed tortor ligula, non malesuada dui. Suspendisse viverra accumsan erat non pretium. Etiam eget molestie orci. In hac habitasse platea dictumst. Donec a eros magna. Sed blandit, mi et pulvinar tincidunt, turpis lacus aliquet arcu, vel suscipit elit sapien id lorem. Phasellus eget urna quis tortor posuere congue. Vivamus accumsan libero non sapien fermentum fringilla. Integer tincidunt aliquet nisl sit amet condimentum. Sed dignissim pharetra aliquet. Aliquam sagittis egestas nulla ut interdum.<br>
            <br>
            Integer id turpis velit, nec volutpat nisi. Nam mauris dui, fermentum adipiscing ultricies pharetra, sollicitudin vitae nisi. Nunc eu erat sem, tristique tincidunt velit. Praesent quis magna dolor, ut lobortis lorem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque luctus tellus nisi. Morbi tincidunt nisi vel ligula congue placerat. In hac habitasse platea dictumst. Donec mi odio, adipiscing eu facilisis sed, tincidunt in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat ante, gravida eu egestas id, adipiscing ut nulla. Pellentesque suscipit est non ante tincidunt imperdiet. Vestibulum vitae tortor non ligula iaculis tincidunt.<br>
        </span>
    {/if}
{/macro}

{macro getPopupContent()}
    {if this.inData.popupContent != null}
        {if this.inData.popupContent == "popup"}
            <div class="dialog">
                <h1>Popup</h1>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed tortor ligula, non malesuada dui. Suspendisse viverra accumsan erat non pretium. Etiam eget molestie orci.</div>
            </div>
        {elseif this.inData.popupContent == "alert"/}
            <div class="dialog">
                <h1>Alert !</h1>
                <div>This is an alert message.</div>
                <div class="buttonBar">
                    {@touch:Button {
                        on: {tap : { fn : closePopup}}
                    }}
                    Dismiss
                    {/@touch:Button}
                </div>
            </div>
        {elseif this.inData.popupContent == "confirm"/}
            <div class="dialog">
                <h1>Warning !</h1>
                <div>Are you sure you want to continue?</div>
                <div class="buttonBar">
                    {@touch:Button {
                        on: {tap : { fn : closePopup}}
                    }}
                    Cancel
                    {/@touch:Button}
                    {@touch:Button {
                        on: {tap : { fn : closePopup}}
                    }}
                    Go
                    {/@touch:Button}
                </div>
            </div>
        {elseif this.inData.popupContent == "prompt"/}
            <div class="dialog">
                <h1>ID Password</h1>
                <div>user.id@myexample.com</div>
                {@html:TextInput {
                    placeholder : "password",
                    autoselect: true,
                    password: true
                }/}
                <div class="buttonBar">
                    {@touch:Button {
                        on: {tap : { fn : closePopup}}
                    }}
                    Cancel
                    {/@touch:Button}
                    {@touch:Button {
                        on: {tap : { fn : closePopup}}
                    }}
                    OK
                    {/@touch:Button}
                </div>
            </div>
        {elseif this.inData.popupContent == "menuleft" || this.inData.popupContent == "menuright"/}
            <div class="menuover">
                {@touch:Button {
                    isLink: true,
                    on: {tap : { fn : closePopup}}
                }}
                Main
                {/@touch:Button}
                <div class="menuSeparator">More options</div>
                {@touch:Button {
                    isLink: true,
                        on: {tap : { fn : closePopup}}
                }}
                Option 1
                {/@touch:Button}
                {@touch:Button {
                    isLink: true,
                    on: {tap : { fn : closePopup}}
                }}
                Option 2
                {/@touch:Button}
                {@touch:Button {
                    isLink: true,
                    on: {tap : { fn : closePopup}}
                }}
                Option 3
                {/@touch:Button}
            </div>
        {elseif this.inData.popupContent == "menutop" || this.inData.popupContent == "menubottom"/}
            <div class="action">
                <div class="menuover">
                    {@touch:Button {
                        isLink: true,
                        on: {tap : { fn : closePopup}}
                    }}
                    Reply
                    {/@touch:Button}
                    {@touch:Button {
                        isLink: true,
                        on: {tap : { fn : closePopup}}
                    }}
                    Reply All
                    {/@touch:Button}
                    {@touch:Button {
                        isLink: true,
                        on: {tap : { fn : closePopup}}
                    }}
                    Forward
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

{/Template}