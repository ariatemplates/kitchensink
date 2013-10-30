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
    $classpath : 'templates.pages.ui.uiiscroll.GroupedListScript',

    $constructor : function () {
        this.myScroll = null;

        this.listData = [];
        this.listData.push({
            label : "A",
            items : ["Adam", "Anna", "Arnold"]
        });
        this.listData.push({
            label : "B",
            items : ["Benoit", "Bertrand"]
        });
        this.listData.push({
            label : "C",
            items : ["Camilia", "Charlene", "Charles", "Claudia"]
        });
        this.listData.push({
            label : "D",
            items : ["David-Emmanuel"]
        });
        this.listData.push({
            label : "F",
            items : ["Fabiano", "Fabio", "Fabrice", "Francesco"]
        });
        this.listData.push({
            label : "G",
            items : ["Girish"]
        });
        this.listData.push({
            label : "J",
            items : ["Jakub", "Julian"]
        });
        this.listData.push({
            label : "L",
            items : ["Lorenzo"]
        });
        this.listData.push({
            label : "M",
            items : ["Marc"]
        });
        this.listData.push({
            label : "O",
            items : ["Olaf"]
        });
        this.listData.push({
            label : "R",
            items : ["Renju"]
        });
        this.listData.push({
            label : "S",
            items : ["Simon", "Srinath", "Susanta"]
        });
        this.listData.push({
            label : "Y",
            items : ["Yannick"]
        });

        this.stickyText = null;
        this.hiddenSeparator = null;
        this.selectedId = null;

        this.listShortcuts = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                "S", "T", "U", "V", "W", "X", "Y", "Z"];
    },

    $destructor : function () {
        if (this.myScroll != null) {
            this.myScroll.destroy();
        }
        this.myScroll = null;
    },

    $prototype : {
        /**
         * Intializes the iScroll.
         */
        $viewReady : function () {
            var _this = this;
            var callback = aria.utils.Function.bind(this._scrollHandler, this);
            setTimeout(function () {
                _this.myScroll = new Aria.$window.iScroll(_this.$getId('wrapper'), {
                    onScrollMove : callback,
                    onAnimationMove : callback
                });
            }, 100);
        },

        /**
         * Hadles the scroll events from iScroll.
         * @param {Event} evt The scroll event.
         */
        _scrollHandler : function (evt) {
            var result = this._computeSticky(-this.myScroll.y);
            var label = result.label;
            if (label == null) {
                this.$getElementById("sticky").classList.remove("isvisible");
            } else {
                if (label != this.stickyText) {
                    this.stickyText = label;
                    this.$refresh({
                        section : "sticky"
                    });
                }
                var sticky = this.$getElementById("sticky");
                sticky.classList.add("isvisible");
                if (result.distance <= 20) {
                    sticky.setStyle("top: " + (result.distance - 20) + "px;");
                } else {
                    sticky.setStyle("");
                }
            }
            if (result.hideSeparator) {
                this.$getElementById("separarator_" + label).setStyle("visibility:hidden;");
                this.hiddenSeparator = "separarator_" + label;
            } else {
                if (this.hiddenSeparator != null) {
                    this.$getElementById(this.hiddenSeparator).setStyle("");
                    this.hiddenSeparator = null;
                }
            }
        },

        /**
         * Computes the sticky geometry for the current scroll position.
         * @param {Int} y The scroll position.
         * @return {Object} The sticky geometry.
         */
        _computeSticky : function (y) {
            var result = {};
            result.label = null;
            result.distance = 99;
            result.hideSeparator = false;
            if (y >= 0) {
                var counter = 0;
                for (var i = 0; i < this.listData.length; i++) {
                    counter += 20;
                    if (counter > y) {
                        result.label = this.listData[i].label;
                        result.hideSeparator = true;
                        break;
                    }
                    counter += this.listData[i].items.length * 40;
                    if (counter > y) {
                        result.label = this.listData[i].label;
                        result.distance = counter - y;
                        break;
                    }
                }
            }
            return result;
        },

        /**
         * Generates id for the quick access buttons.
         * @param {String} label The label used to build the id.
         * @return {String} The id.
         */
        _generateId : function (label) {
            return "separarator_" + label;
        },

        /**
         * Reacts to the quick access buttons.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         * @param {String} label The label of the button.
         */
        onScrollToGroup : function (evt, label) {
            var counter = 0;
            for (var i = 0; i < this.listData.length; i++) {
                if (label <= this.listData[i].label) {
                    if (counter <= -this.myScroll.maxScrollY) {
                        this.myScroll.scrollTo(0, -counter);
                    } else {
                        this.myScroll.scrollTo(0, this.myScroll.maxScrollY);
                    }
                    if (this.hiddenSeparator != null) {
                        this.$getElementById(this.hiddenSeparator).setStyle("");
                        this.hiddenSeparator = null;
                    }
                    this._scrollHandler();
                    break;
                }
                counter += 20 + this.listData[i].items.length * 40;
            }
        },

        /**
         * Selects an element in the list.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onSelect : function (evt) {
            var itemId = evt.target.getProperty("id");
            if (this.selectedId !== itemId) {
                evt.target.classList.toggle("selected");
                if (this.selectedId != null) {
                    var cl = new aria.utils.ClassList(aria.utils.Dom.getElementById(this.selectedId));
                    cl.toggle("selected");
                }
                this.selectedId = itemId;
            }

        }
    }
});