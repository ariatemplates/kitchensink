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
    $classpath:'templates.pages.ui.uicomponents.Tabs',
    $hasScript:true,
    $css: ["templates.pages.ui.uicomponents.TabsStyle"]
}}

{macro main()}
    {section {
        id: "tabContent",
        type: "div",
        macro: {name: "displayContent", scope : this},
        bindRefreshTo: [{to:"contentId", inside:this.inData}],
    }/}
{/macro}

{macro displayContent()}
    <div class="tabs">
        {var attr = this.inData.contentId == 1? {disabled: true, classList: ["active"]}: {}/}
        {@touch:Button {
            attributes: attr,
            on: {tap : { fn : onTab, args: 1}}
        }}
        Tab 1
        {/@touch:Button}
        {set attr = this.inData.contentId == 2? {disabled: true, classList: ["active"]}: {}/}
        {@touch:Button {
            attributes: attr,
            on: {tap : { fn : onTab, args: 2}}
        }}
        Tab 2
        {/@touch:Button}
        {set attr = this.inData.contentId == 3? {disabled: true, classList: ["active"]}: {}/}
        {@touch:Button {
            attributes: attr,
            on: {tap : { fn : onTab, args: 3}}
        }}
        Tab 3
        {/@touch:Button}
    </div>
    <div style="clear: both;"></div>

    <div class="textBorder">
        {if this.inData.contentId != null}
        <h1>Content #${this.inData.contentId}</h1>
            {if this.inData.contentId == 1}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed tortor ligula, non malesuada dui. Suspendisse viverra accumsan erat non pretium. Etiam eget molestie orci. In hac habitasse platea dictumst. Donec a eros magna. Sed blandit, mi et pulvinar tincidunt, turpis lacus aliquet arcu, vel suscipit elit sapien id lorem. Phasellus eget urna quis tortor posuere congue. Vivamus accumsan libero non sapien fermentum fringilla. Integer tincidunt aliquet nisl sit amet condimentum. Sed dignissim pharetra aliquet. Aliquam sagittis egestas nulla ut interdum.<br>
                <br>
                Integer id turpis velit, nec volutpat nisi. Nam mauris dui, fermentum adipiscing ultricies pharetra, sollicitudin vitae nisi. Nunc eu erat sem, tristique tincidunt velit. Praesent quis magna dolor, ut lobortis lorem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque luctus tellus nisi. Morbi tincidunt nisi vel ligula congue placerat. In hac habitasse platea dictumst. Donec mi odio, adipiscing eu facilisis sed, tincidunt in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat ante, gravida eu egestas id, adipiscing ut nulla. Pellentesque suscipit est non ante tincidunt imperdiet. Vestibulum vitae tortor non ligula iaculis tincidunt.<br>
            {elseif this.inData.contentId == 2/}
                Donec egestas massa et justo pellentesque tempor ac ut orci. Ut turpis lectus, semper in adipiscing ut, adipiscing et purus. Nulla fermentum dolor eget massa sagittis in pretium ante consequat. Proin eget lacinia magna. Sed congue justo vitae sem viverra eget posuere metus egestas. Ut molestie massa quis sapien sodales nec dignissim tellus tempus. Aliquam ut sem vel magna tincidunt vulputate. Duis interdum risus vitae ipsum consequat non malesuada nisl sollicitudin.<br>
                <br>
                Vivamus sit amet arcu mi. In a turpis eu nibh porttitor suscipit. Duis convallis adipiscing tincidunt. Duis at ipsum ut arcu semper malesuada. Maecenas lorem massa, aliquet et commodo egestas, feugiat pulvinar ante. Aliquam facilisis lobortis sapien in sollicitudin. Sed odio ipsum, accumsan at imperdiet id, vestibulum eget nulla. Phasellus eu mi risus. Fusce ut fringilla orci. Donec egestas, enim ac scelerisque pharetra, nisi neque ultricies sem, vitae hendrerit purus purus sed dolor. Pellentesque interdum tempus diam, id elementum ante egestas sed. Morbi scelerisque dictum aliquam. Vivamus vestibulum augue ac nunc consectetur laoreet.<br>
                <br>
                Mauris dictum luctus elit in ullamcorper. Donec tincidunt mauris purus, et condimentum dolor. Aliquam venenatis leo sed leo sollicitudin nec tincidunt urna ultrices. Nam tincidunt leo ut mi interdum quis mollis dui adipiscing. Morbi quis dui at massa luctus fringilla. Morbi a urna quam. Pellentesque cursus dui quis erat dapibus tristique quis eu justo. Ut aliquet venenatis mattis. Curabitur in nisl odio, sit amet suscipit risus.<br>
            {elseif this.inData.contentId == 3/}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed tortor ligula, non malesuada dui. Suspendisse viverra accumsan erat non pretium. Etiam eget molestie orci. In hac habitasse platea dictumst. Donec a eros magna. Sed blandit, mi et pulvinar tincidunt, turpis lacus aliquet arcu, vel suscipit elit sapien id lorem. Phasellus eget urna quis tortor posuere congue. Vivamus accumsan libero non sapien fermentum fringilla. Integer tincidunt aliquet nisl sit amet condimentum. Sed dignissim pharetra aliquet. Aliquam sagittis egestas nulla ut interdum.<br>
                <br>
                Integer id turpis velit, nec volutpat nisi. Nam mauris dui, fermentum adipiscing ultricies pharetra, sollicitudin vitae nisi. Nunc eu erat sem, tristique tincidunt velit. Praesent quis magna dolor, ut lobortis lorem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque luctus tellus nisi. Morbi tincidunt nisi vel ligula congue placerat. In hac habitasse platea dictumst. Donec mi odio, adipiscing eu facilisis sed, tincidunt in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat ante, gravida eu egestas id, adipiscing ut nulla. Pellentesque suscipit est non ante tincidunt imperdiet. Vestibulum vitae tortor non ligula iaculis tincidunt.<br>
                <br>
                Donec egestas massa et justo pellentesque tempor ac ut orci. Ut turpis lectus, semper in adipiscing ut, adipiscing et purus. Nulla fermentum dolor eget massa sagittis in pretium ante consequat. Proin eget lacinia magna. Sed congue justo vitae sem viverra eget posuere metus egestas. Ut molestie massa quis sapien sodales nec dignissim tellus tempus. Aliquam ut sem vel magna tincidunt vulputate. Duis interdum risus vitae ipsum consequat non malesuada nisl sollicitudin.<br>
                <br>
                Vivamus sit amet arcu mi. In a turpis eu nibh porttitor suscipit. Duis convallis adipiscing tincidunt. Duis at ipsum ut arcu semper malesuada. Maecenas lorem massa, aliquet et commodo egestas, feugiat pulvinar ante. Aliquam facilisis lobortis sapien in sollicitudin. Sed odio ipsum, accumsan at imperdiet id, vestibulum eget nulla. Phasellus eu mi risus. Fusce ut fringilla orci. Donec egestas, enim ac scelerisque pharetra, nisi neque ultricies sem, vitae hendrerit purus purus sed dolor. Pellentesque interdum tempus diam, id elementum ante egestas sed. Morbi scelerisque dictum aliquam. Vivamus vestibulum augue ac nunc consectetur laoreet.<br>
                <br>
                Mauris dictum luctus elit in ullamcorper. Donec tincidunt mauris purus, et condimentum dolor. Aliquam venenatis leo sed leo sollicitudin nec tincidunt urna ultrices. Nam tincidunt leo ut mi interdum quis mollis dui adipiscing. Morbi quis dui at massa luctus fringilla. Morbi a urna quam. Pellentesque cursus dui quis erat dapibus tristique quis eu justo. Ut aliquet venenatis mattis. Curabitur in nisl odio, sit amet suscipit risus.<br>
            {/if}
        {else/}
            <h1>No tab selected</h1>
        {/if}
    </div>
{/macro}
{/Template}