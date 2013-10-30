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
    $classpath : 'templates.pages.ui.uiiscroll.PickerScript',

    $constructor : function () {
        this.myScroll = null;
        this.inData = {};
        this.inData.itemSelected = 1;
        this.inData.isPickerShown = true;
    },

    $destructor : function () {
        if (this.myScroll != null) {
            this.myScroll.destroy();
        }
        this.myScroll = null;
    },

    $prototype : {
        /**
         * Initializes the iScroll.
         */
        $viewReady : function () {
            var _this = this;
            var callback = aria.utils.Function.bind(this._handleSelection, this);
            setTimeout(function () {
                _this.myScroll = new Aria.$window.iScroll(_this.$getId('wrapper'), {
                    snap : 'li',
                    momentum : true,
                    vScrollbar : false,
                    hScrollbar : false,
                    hScroll : false,
                    snapSpacing : 0,
                    onAnimationMove : callback
                });
            }, 100);
        },

        /**
         * Handles the selection.
         */
        _handleSelection : function () {
            if (this.myScroll.y <= 0) {
                var index = Math.round(-this.myScroll.y / 40) + 1;
                this.$json.setValue(this.inData, "itemSelected", index);
            }
        },
        
        /**
         * Shows the picker.
         */
        onShow: function () {
            this.$json.setValue(this.inData, "isPickerShown", true);
            var picker = this.$getElementById("wheel");
            picker.setStyle("");
        },
        
        /**
         * Hides the picker.
         */
        onHide: function() {
            this.$json.setValue(this.inData, "isPickerShown", false);
            var picker = this.$getElementById("wheel");
            picker.setStyle("display:none;");
        }
    }
});