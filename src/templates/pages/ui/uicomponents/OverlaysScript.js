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
    $classpath : 'templates.pages.ui.uicomponents.OverlaysScript',

    $constructor : function () {
        this.inData = {};
        this.inData.isCollapsed = true;
        this.inData.popupContent = null;
        this.inData.dialogOpen = false;
        this.inData.bottomOpen = false;
        this.inData.topOpen = false;
        this.inData.leftOpen = false;
        this.inData.rightOpen = false;
    },

    $prototype : {
        /**
         * collapses the expandable section.
         */
        onCollapse : function () {
            this.$json.setValue(this.inData, "isCollapsed", !this.inData.isCollapsed);
        },

        /**
         * Shows the dialog popup with popup content.
         */
        onPopup : function () {
            this.$json.setValue(this.inData, "popupContent", "popup");
            this.$json.setValue(this.inData, "dialogOpen", true);
        },

        /**
         * Shows the dialog popup with alert content.
         */
        onAlert : function () {
            this.$json.setValue(this.inData, "popupContent", "alert");
            this.$json.setValue(this.inData, "dialogOpen", true);
        },

        /**
         * Shows the dialog popup with confirm content.
         */
        onConfirm : function () {
            this.$json.setValue(this.inData, "popupContent", "confirm");
            this.$json.setValue(this.inData, "dialogOpen", true);
        },

        /**
         * Shows the dialog popup with prompt content.
         */
        onPrompt : function () {
            this.$json.setValue(this.inData, "popupContent", "prompt");
            this.$json.setValue(this.inData, "dialogOpen", true);
        },

        /**
         * Shows the bottom popup with menubottom content.
         */
        onMenuBottom : function () {
            this.$json.setValue(this.inData, "popupContent", "menubottom");
            this.$json.setValue(this.inData, "bottomOpen", true);
        },

        /**
         * Shows the top popup with menutop content.
         */
        onMenuTop : function () {
            this.$json.setValue(this.inData, "popupContent", "menutop");
            this.$json.setValue(this.inData, "topOpen", true);
        },

        /**
         * Shows the left popup with menuleft content.
         */
        onMenuLeft : function () {
            this.$json.setValue(this.inData, "popupContent", "menuleft");
            this.$json.setValue(this.inData, "leftOpen", true);
        },

        /**
         * Shows the right popup with menuright content.
         */
        onMenuRight : function () {
            this.$json.setValue(this.inData, "popupContent", "menuright");
            this.$json.setValue(this.inData, "rightOpen", true);
        },

        /**
         * Closes the dialog popup.
         */
        closePopup : function () {
            this.$json.setValue(this.inData, "dialogOpen", false);
            this.$json.setValue(this.inData, "bottomOpen", false);
            this.$json.setValue(this.inData, "topOpen", false);
            this.$json.setValue(this.inData, "leftOpen", false);
            this.$json.setValue(this.inData, "rightOpen", false);
        }

    }
});