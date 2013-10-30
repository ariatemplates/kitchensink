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
    $classpath : 'templates.pages.OrientationChangePageScript',

    $constructor : function () {
        aria.utils.Orientation.$on({
            "change" : this._handleOrientationChange,
            scope : this
        });
        this.orientation = {};
        this.orientation.isPortrait = aria.utils.Orientation.__isPortrait();
        this.countries = [{
                    code : "AU",
                    name : "Australia"
                }, {
                    code : "CA",
                    name : "Canada"
                }, {
                    code : "FR",
                    name : "France"
                }, {
                    code : "GE",
                    name : "Germany"
                }, {
                    code : "IN",
                    name : "India"
                }, {
                    code : "TH",
                    name : "Thailand"
                }, {
                    code : "UK",
                    name : "United Kingdom"
                }, {
                    code : "US",
                    name : "United States"
                }];
        this.myScroll = null;
    },

    $destructor : function () {
        if (this.myScroll != null) {
            this.myScroll.destroy();
        }
        this.myScroll = null;
    },

    $prototype : {
        /**
         * Creates the iScroll after the display.
         */
        $afterRefresh : function () {
            if (this.$getElementById('ocwrapper') != null) {
                var _this = this;
                setTimeout(function () {
                    _this.myScroll = new Aria.$window.iScroll(_this.$getId('ocwrapper'), {
                        snap : 'li',
                        momentum : false,
                        hScrollbar : true,
                        vScrollbar : false,
                        vScroll : false,
                        snapSpacing : 0
                    });
                }, 100);
            }
        },

        /**
         * Handles the orientation change case.
         * @param {aria.templates.DomEventWrapper} evt The tap event.
         */
        _handleOrientationChange : function (evt) {
            this.$json.setValue(this.orientation, "isPortrait", evt.isPortrait);
        }
    }
});