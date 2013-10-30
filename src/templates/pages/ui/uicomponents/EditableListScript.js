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

Aria.tplScriptDefinition({
    $classpath : 'templates.pages.ui.uicomponents.EditableListScript',
    $dependencies : ["aria.utils.css.Animations"],

    $constructor : function () {
        this.inData = {};
        // List of items, order to synchronized with display
        this.inData.items = [{
                    label : "Item1",
                    id : 1
                }, {
                    label : "Item2",
                    id : 2
                }, {
                    label : "Item3",
                    id : 3
                }, {
                    label : "Item4",
                    id : 4
                }, {
                    label : "Item5",
                    id : 5
                }, {
                    label : "Item6",
                    id : 6
                }, {
                    label : "Item7",
                    id : 7
                }, {
                    label : "Item8",
                    id : 8
                }];
        this.inData.draggedItemId = -1;
        this.inData.isEditionOn = false;

        this.draggedItem = null;
        this.draggedItemGeometry = null;
        this.listPosition = -1;
        this.itemPosition = -1;
        this.startY = -1;
        this.previousY = -1;
        this.maxY = -1;

        this.deleteButtonId = -1;
    },

    $prototype : {
        /**
         * Computes geometry of all items each time the list is refreshed. 
         * @param {aria.templates.CfgBeans.RefreshCfg} arg The refresh data.
         */
        $afterRefresh : function (arg) {
            if (arg && arg.section === "list") {
                this.itemGeometries = {};
                for (var i = 1; i <= this.inData.items.length; i++) {
                    var item = this.inData.items[i - 1];
                    this.itemGeometries[item.id] = aria.utils.Dom.getGeometry(aria.utils.Dom.getElementById(this.$getId("item"
                            + item.id)));
                    this.itemGeometries[item.id].offset = 0;
                    this.listGeometry = aria.utils.Dom.getGeometry(aria.utils.Dom.getElementById(this.$getId("list")));
                }
            }
        },

        /**
         * Toggles edition mode.
         */
        toggleEdition : function () {
            this.$json.setValue(this.inData, "isEditionOn", !this.inData.isEditionOn);
        },

        /**
         * Reacts to swipe gesture on items: displays the Delete button.
         * @param {aria.templates.DomEventWrapper} evt The swipe event.
         * @param {Int} itemId The item id/
         */
        swipeHandler : function (event, itemId) {
            if (this.inData.isEditionOn) {
                return;
            }
            if (event.type == "dragstart" || event.type == "swipemove" || event.type == "pinchmove"
                    || event.type == "dragmove") {
                event.preventDefault();
            }
            if (this.deleteButtonId == -1 && event.detail.distance > 20
                    && (event.detail.direction === "left" || event.detail.direction === "right")) {
                aria.utils.css.Effects.animate(this.$getId("deleteButton" + itemId), {
                    width : "70px"
                }, {
                    duration : 200
                });
                this.deleteButtonId = itemId;
            }
        },

        /**
         * Deletes an item from the list.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         * @param {Int} itemId The item id.
         */
        deleteItem : function (event, itemId) {
            var indexFound = false, i = 0;
            while (!indexFound && i < this.inData.items.length) {
                if (this.inData.items[i].id == itemId) {
                    indexFound = true;
                    aria.utils.Array.removeAt(this.inData.items, i);
                    this.deleteButtonId = -1;
                    this.$refresh({
                        section : "list"
                    });
                }
                i++;
            }
        },

        /**
         * Removes the Delete button.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        clearDeleteButton : function (event) {
            if (this.deleteButtonId != -1 && !event.target.classList.contains("deleteButton")) {
                var that = this;
                aria.utils.css.Effects.animate(this.$getId("deleteButton" + this.deleteButtonId), {
                    width : "0px"
                }, {
                    duration : 200,
                    onEndAnimation : function () {
                        that.deleteButtonId = -1;
                    }
                });
            }
        },

        /**
         * Cancel the drag of an item.
         * @param {aria.templates.DomEventWrapper} evt The drag event.
         */
        cancelItemDrag : function (event) {
            if (!this.inData.isEditionOn) {
                return;
            }
            this._finalizeDrag(event);
        },

        /**
         * Reacts to events on the list.
         * @param {} event
         */
        touchHandler : function (event) {
            if (!this.inData.isEditionOn) {
                return;
            }
            if (event.type == "dragstart" || event.type == "swipemove" || event.type == "pinchmove"
                    || event.type == "dragmove") {
                event.preventDefault();
            }
            
            if (event.type == "dragstart") {
                //Starts the drag of an item
                var itemId = event.target.getData("id");
                if (itemId === null) {
                    return;
                }

                for (var i = 1; i <= this.inData.items.length; i++) {
                    var item = this.inData.items[i - 1];
                    this.itemGeometries[item.id].offset = 0;
                    if (item.id == itemId) {
                        this.draggedItem = item;
                        this.draggedItemGeometry = this.itemGeometries[item.id];
                    }
                }
                this.inData.draggedItemId = itemId;
                event.target.getParentWithName("div").classList.add("invisible");
                this.$refresh({
                    section : "overlay"
                });

                var itemGeometry = this.itemGeometries[itemId];
                this.listPosition = this.listGeometry.y;
                this.itemPosition = itemGeometry.y;
                this.startY = event.detail.currentY;
                this.previousY = event.detail.currentY;
                this.maxY = this.listGeometry.height - itemGeometry.height;
                var overlay = this.$getElementById("overlay");
                overlay.setStyle("display:block;top:" + (this.itemPosition - this.listPosition) + "px;");
            } else if (event.type == "drag" || event.type == "dragcancel") {
                //Finalize the drag of an item
                this._finalizeDrag(event);
            } else {
                if (this.inData.draggedItemId == -1) {
                    return;
                }
                // Moving the overlay
                var overlay = this.$getElementById("overlay");
                var newPosition = this.itemPosition - this.listPosition + event.detail.currentY - this.startY;
                if (newPosition < 0) {
                    newPosition = 0;
                }
                if (newPosition > this.maxY) {
                    newPosition = this.maxY;
                }
                overlay.setStyle("display:block;top:" + newPosition + "px;");

                // Moving elements in the list accordingly
                if (this.previousY < event.detail.currentY) {
                    //Case 1: Moving the overlay down
                    var overlayId = -1;
                    for (var i = 0; i < this.inData.items.length; i++) {
                        var item = this.inData.items[i];
                        if (item.id == this.inData.draggedItemId) {
                            overlayId = i;
                        } else if (overlayId > -1) {
                            var geometry = this.itemGeometries[item.id];
                            if (newPosition + this.draggedItemGeometry.height > geometry.y + geometry.offset
                                    - this.listPosition + geometry.height / 2) {
                                aria.utils.css.Effects.animate(this.$getId("item" + item.id), {
                                    top : (geometry.offset - this.draggedItemGeometry.height) + "px"
                                }, {
                                    duration : 250
                                });
                                geometry.offset = geometry.offset - this.draggedItemGeometry.height;

                                aria.utils.css.Effects.animate(this.$getId("item" + this.inData.draggedItemId), {
                                    top : (this.draggedItemGeometry.offset + geometry.height) + "px"
                                }, {
                                    duration : 200
                                });
                                this.draggedItemGeometry.offset = this.draggedItemGeometry.offset + geometry.height;

                                this._arraySwap(this.inData.items, overlayId, i);

                            }
                        }
                    }
                } else if (this.previousY > event.detail.currentY) {
                    //Case 2: Moving the overlay up
                    var overlayId = -1;
                    for (var i = this.inData.items.length - 1; i >= 0; i--) {
                        var item = this.inData.items[i];
                        if (item.id == this.inData.draggedItemId) {
                            overlayId = i;
                        } else if (overlayId > -1) {
                            var geometry = this.itemGeometries[item.id];
                            if (newPosition < geometry.y + geometry.offset - this.listPosition + geometry.height / 2) {
                                aria.utils.css.Effects.animate(this.$getId("item" + item.id), {
                                    top : (geometry.offset + this.draggedItemGeometry.height) + "px"
                                }, {
                                    duration : 250
                                });
                                geometry.offset = geometry.offset + this.draggedItemGeometry.height;

                                aria.utils.css.Effects.animate(this.$getId("item" + this.inData.draggedItemId), {
                                    top : (this.draggedItemGeometry.offset - geometry.height) + "px"
                                }, {
                                    duration : 250
                                });
                                this.draggedItemGeometry.offset = this.draggedItemGeometry.offset - geometry.height;

                                this._arraySwap(this.inData.items, overlayId, i);
                            }
                        }
                    }
                }
                this.previousY = event.detail.currentY;
            }
        },

        /**
         * Finalizes the drag of an item.
         * @param {aria.templates.DomEventWrapper} evt The drag event.
         */
        _finalizeDrag : function (event) {
            if (event.detail.currentY != this.startY && this.inData.draggedItemId != -1) {
                var newY = this.draggedItemGeometry.y - this.listPosition + this.draggedItemGeometry.offset;
                var overlay = this.$getElementById("overlay");
                var newStyle = "display:block;top:" + newY + "px;";
                if (newStyle !== overlay.getAttribute("style").replace(/\s/g, '')) {
                    var that = this;
                    aria.utils.css.Effects.animate(this.$getId("overlay"), {
                        top : newY + "px"
                    }, {
                        duration : 125,
                        onEndAnimation : function () {
                            that._doneAnimation();
                        }
                    });
                } else {
                    this.$json.setValue(this.inData, "draggedItemId", -1);
                }
            } else {
                this.$json.setValue(this.inData, "draggedItemId", -1);
            }
        },

        /**
         * Final process after the animation.
         */
        _doneAnimation : function () {
            this.$json.setValue(this.inData, "draggedItemId", -1);
            aria.utils.Event.removeListener(aria.utils.Dom.getElementById(this.$getId("overlay")), this._animationEndEvent());
        },

        /**
         * Util methods to swap 2 elements in an array.
         * @param {Array} A The array
         * @param {Int} x The index of the first element.
         * @param {Int} y The index of the second element.
         */
        _arraySwap : function (A, x, y) {
            A[x] = A.splice(y, 1, A[x])[0];
        },

        /**
         * Util methods wich returns the name of the transitionend event based on the user agent.
         * @return {String}
         */
        _animationEndEvent : function () {
            var vendorPrefix = (aria.utils.Delegate.vendorPrefix || "").toLowerCase();
            switch (vendorPrefix) {
                case "webkit" :
                    return "webkitTransitionEnd";
                case "moz" :
                    return "transitionend";
                case "o" :
                    return "otransitionend";
                case "ms" :
                    return "MSTransitionEnd";
            }
        }
    }
});