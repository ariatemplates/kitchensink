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
    $classpath : 'templates.pages.GesturesPageScript',

    $constructor : function () {
        this.inData = {};
        this.inData.messages = [];
        this.inData.messagesCount = 0;
    },

    $prototype : {
        /**
         * Updates the gesture console when receiving some events.
         * @param {aria.templates.DomEventWrapper} evt The gesture event.
         */
        touchHandler : function (event) {
            if (event.type == "dragstart" || event.type == "swipemove" || event.type == "pinchmove"
                    || event.type == "dragmove") {
                event.preventDefault();
            }
            var msg = event.duration + "ms - " + event.type;
            this.inData.messages.push(msg);
            this.$json.setValue(this.inData, "messagesCount", this.inData.messages.length);
        },

        /**
         * Clears the gesture console.
         */
        clearConsole : function () {
            this.inData.messages = [];
            this.$json.setValue(this.inData, "messagesCount", 0);
        }
    }
});