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
    $classpath : 'templates.pages.ui.uicomponents.TooltipScript',

    $constructor : function () {
        this.inData = {};
        this.inData.isCollapsed = true;
        this.inData.popupContent = null;
        this.inData.selectValue = "Option 1";

        this.inData.initPopup = false;
        this.inData.tooltipOpen1 = false;
        this.inData.tooltipOpen2 = false;
        this.inData.tooltipOpen3 = false;
        
        this.inData.openNotification = false;
        this.inData.dialogOpen = false;
    },

    $prototype : {
        /**
         * Opens the tooltip.
         */
        onTooltip : function () {
            this.inData.popupContent = "tooltip";
            this.$json.setValue(this.inData, "tooltipOpen1", true);
        },

        /**
         * Opens the select box.
         */
        onSelect : function () {
            this.inData.popupContent = "select";
            this.$json.setValue(this.inData, "tooltipOpen2", true);
        },

        /**
         * Sets the selected value and closes the select box.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         * @param {Int} arg The selected value.
         */
        onSelectValue : function (evt, arg) {
            this.$json.setValue(this.inData, "selectValue", arg);
            this.$json.setValue(this.inData, "tooltipOpen2", false);
        },

        /**
         * Opens the share box.
         */
        onShare : function () {
            this.inData.popupContent = "share";
            this.$json.setValue(this.inData, "tooltipOpen3", true);
        },

        /**
         * Closes the share box.
         */
        closePopup : function () {
            this.$json.setValue(this.inData, "tooltipOpen3", false);
        },
        
        /**
         * On notification fired, shows the notification popup and starts a timer to close it.
         */
        onGetNotified : function () {
            this.$json.setValue(this.inData, "openNotification", true);
            aria.core.Timer.addCallback({
                fn : this._closeNotification,
                scope : this,
                delay : 2000
            });
        },

        /**
         * Opens the message popup.
         */
        onPopup : function () {
            this.$json.setValue(this.inData, "dialogOpen", true);
            this._closeNotification();
        },

        /**
         * Closes the notification popup.
         */
        _closeNotification : function () {
            this.$json.setValue(this.inData, "openNotification", false);
        }

    }
});