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
    $classpath:'templates.pages.ui.uicomponents.EditableList',
    $hasScript:true,
    $css: ["templates.pages.ui.uicomponents.EditableListStyle"],
    $dependencies: ["aria.utils.css.Effects"]
}}

{macro main()}
    {section {
        id: "button",
        type: "div",
        attributes : {classList: ["editButton"]},
        macro: {name: "displayButton", scope : this},
        bindRefreshTo: [{to:"isEditionOn", inside:this.inData}],
    }/}
  
    <div class="boundary"
        {on dragstart {fn : this.touchHandler, scope : this}/}
        {on drag {fn : this.touchHandler, scope : this}/}
        {on dragmove {fn : this.touchHandler, scope : this}/}
        {on dragcancel {fn : this.touchHandler, scope : this}/}
        {on tapstart {fn : this.clearDeleteButton, scope : this}/}
        {on mouseleave {fn : this.cancelItemDrag, scope : this}/}
        >
        {section {
            id: "list",
            type: "div",
            macro: {name: "displayList", scope : this},
            bindRefreshTo: [{to:"draggedItemId", inside:this.inData}, {to:"isEditionOn", inside:this.inData}],
        }/}
    </div>
{/macro}

{macro displayButton()}
    {@touch:Button {
        on: {tap : { fn : toggleEdition}}
    }}
    {if this.inData.isEditionOn}
        Done
    {else/}
        Edit
    {/if}
    {/@touch:Button}
{/macro}

{macro displayList()}
    {section {
        id: "overlay",
        type: "div",
        attributes : {classList: ["overlayItem"]},
        macro: {name: "displayOverlay", scope : this},
        bindRefreshTo: [{to:"draggedItemId", inside:this.inData}],
    }/}
    {foreach item in this.inData.items}
        {call displayItem(item, true)/}
    {/foreach}
{/macro}

{macro displayItem(item, withId)}
    <div {if withId}{id "item"+item.id /}
        {on swipe {fn : this.swipeHandler, scope : this, args: item.id}/}
        {on swipemove {fn : this.swipeHandler, scope : this, args: item.id}/}
        {/if} 
        class="listElement{if withId && item.id == this.inData.draggedItemId} invisible{/if}"
    >
        {if this.inData.isEditionOn}
            <div class="delete" {on tap { fn : deleteItem, args: item.id}/}></div>
        {/if}
        ${item.label}
        <div {if withId}{id "deleteButton" + item.id/}{/if} class="deleteButtonContainer" style="width:0px;">
            {@touch:Button {
                attributes : {classList: ["deleteButton"]},
                on: {tap : { fn : deleteItem, args: item.id}}
            }}
            Delete
            {/@touch:Button}
        </div>
        {if this.inData.isEditionOn}
            <div class="anchor" data-id="${item.id}"></div>
        {/if}
    </div>
{/macro}

{macro displayOverlay()}
    {if this.draggedItem}
        {call displayItem(this.draggedItem, false)/}
    {/if}
{/macro}

{/Template}