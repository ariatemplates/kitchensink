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
    $classpath : 'templates.pages.html5.Html5GeolocationPageScript',

    $constructor : function () {
        this.results = {};
        this.results.position = null;
        this.results.error = null;
    },

    $prototype : {
        /**
         * Gets the geolocation.
         */
        getLocation : function () {
            var successCB = aria.utils.Function.bind(this._geolocSuccess, this);
            var errorCB = aria.utils.Function.bind(this._geolocError, this);
            Aria.$window.navigator.geolocation.getCurrentPosition(function (position) {
                successCB(position);
            }, function (error) {
                errorCB(error);
            });
        },

        /**
         * Success callback, saves the position and triggers a refresh.
         * @param {Objects} position The position returned by the browser.
         */
        _geolocSuccess : function (position) {
            if (position.coords.latitude != null && position.coords.longitude != null) {
                this.results.error = null;
                this.results.position = position;
                this.$refresh({
                    section : "results"
                });
            } else {
                this._setError("Position not available");
            }
        },

        /**
         * Error callback.
         * @param {} error The error returned by the browser.
         */
        _geolocError : function (error) {
            switch (error.code) {
                case error.TIMEOUT :
                    this._setError('Timeout');
                    break;
                case error.POSITION_UNAVAILABLE :
                    this._setError('Position unavailable');
                    break;
                case error.PERMISSION_DENIED :
                    this._setError('Permission denied');
                    break;
                case error.UNKNOWN_ERROR :
                    this._setError('Unknown error');
                    break;
            }
        },
        
        /**
         * Sets the error message and triggers a refresh.
         * @param {String} msg The error message.
         */
        _setError : function (msg) {
            this.results.error = msg;
            this.results.position = null;
            this.$refresh({
                section : "results"
            });
        }
    }
});