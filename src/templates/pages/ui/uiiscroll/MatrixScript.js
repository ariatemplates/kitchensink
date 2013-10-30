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
    $classpath : 'templates.pages.ui.uiiscroll.MatrixScript',

    $constructor : function () {
        this.myScroll = null;
        this.myScrollTop = null;
        this.myScrollLeft = null;
        this.topDates = ["14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan"];
        this.leftDates = ["7 Feb", "8 Feb", "9 Feb", "10 Feb", "11 Feb", "12 Feb", "13 Feb"];
        this.selectedId = null;
    },

    $destructor : function () {
        if (this.myScroll != null) {
            this.myScroll.destroy();
        }
        this.myScroll = null;

        if (this.myScrollTop != null) {
            this.myScrollTop.destroy();
        }
        this.myScrollTop = null;

        if (this.myScrollLeft != null) {
            this.myScrollLeft.destroy();
        }
        this.myScrollLeft = null;
    },

    $prototype : {
        /**
         * Initializes the iScrolls.
         */
        $viewReady : function () {
            var _this = this;
            setTimeout(function () {
                _this.myScrollTop = new Aria.$window.iScroll(_this.$getId('wrapper_top'), {
                    hScrollbar : false,
                    vScrollbar : false,
                    bounce : false
                });
            }, 100);
            setTimeout(function () {
                _this.myScrollLeft = new Aria.$window.iScroll(_this.$getId('wrapper_left'), {
                    hScrollbar : false,
                    vScrollbar : false,
                    bounce : false
                });
            }, 100);
            var callback = aria.utils.Function.bind(this._scrollHandlerMain, this);
            setTimeout(function () {
                _this.myScroll = new Aria.$window.iScroll(_this.$getId('wrapper'), {
                    lockDirection : false,
                    bounce : false,
                    onScrollMove : callback,
                    onAnimationMove : callback
                });
            }, 100);
        },

        /**
         * Handle scroll events for the main iScroll, and synchronizes the other two.
         */
        _scrollHandlerMain : function () {
            this.myScrollTop.scrollTo(this.myScroll.x, 0);
            this.myScrollLeft.scrollTo(0, this.myScroll.y);
        },

        /**
         * Selects a cell.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        onSelect : function (evt) {
            var cellId = evt.target.getProperty("id");
            if (this.selectedId !== cellId) {
                evt.target.classList.toggle("selected");
                if (this.selectedId != null) {
                    var cl = new aria.utils.ClassList(aria.utils.Dom.getElementById(this.selectedId));
                    cl.toggle("selected");
                }
                this.selectedId = cellId;
            }

        }
    }
});