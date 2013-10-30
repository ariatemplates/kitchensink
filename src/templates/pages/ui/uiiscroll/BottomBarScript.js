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
    $classpath : 'templates.pages.ui.uiiscroll.BottomBarScript',

    $constructor : function () {
        this.myScroll = null;
        this.inData = {};
        this.inData.option = null;
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
            setTimeout(function () {
                _this.myScroll = new Aria.$window.iScroll(_this.$getId('wrapper'));
            }, 100);
        },

        /**
         * Refreshes the iScroll after each refresh, and scrolls it back to top.
         */
        $afterRefresh : function () {
            if (this.myScroll != null) {
                this.myScroll.refresh();
                this.myScroll.scrollTo(0, 0);
            }
        },

        /**
         * Switches tabs.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         * @param {} arg The tab ID.
         */
        onOption : function (evt, arg) {
            this.$json.setValue(this.inData, "option", arg);
        }
    }
});