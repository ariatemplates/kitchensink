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
    $classpath : 'templates.pages.ui.uiiscroll.CarouselScript',

    $constructor : function () {
        this.myScroll = null;
        this.inData = {};
        this.inData.currentPage = 1;
    },

    $destructor : function () {
        if (this.myScroll != null) {
            this.myScroll.destroy();
        }
        this.myScroll = null;
    },

    $prototype : {
        /**
         * Initializes the iScrolls.
         */
        $viewReady : function () {
            var _this = this;
            var callback = aria.utils.Function.bind(this._handleDots, this);
            setTimeout(function () {
                _this.myScroll = new Aria.$window.iScroll(_this.$getId('wrapper'), {
                    snap : 'li',
                    momentum : false,
                    hScrollbar : true,
                    vScrollbar : false,
                    vScroll : false,
                    snapSpacing : 0,
                    onScrollEnd : callback
                });
            }, 100);
        },

        /**
         * Navigates the carousel to previous or next page.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         * @param {} direction The direction, 'next' or 'prev'.
         */
        navigateTo : function (evt, direction) {
            this.myScroll.scrollToPage(direction, 0);
        },
        
        /**
         * Updates the data model with the current page index.
         */
        _handleDots:function () {
            this.$json.setValue(this.inData, "currentPage", this.myScroll.currPageX + 1);
        }
    }
});