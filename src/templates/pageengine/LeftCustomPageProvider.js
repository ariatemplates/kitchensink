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

Aria.classDefinition({
    $classpath : "templates.pageengine.LeftCustomPageProvider",
    $extends : "templates.pageengine.CustomPageProvider",
    $dependencies : ["templates.pageengine.Configuration", "aria.utils.Device"],

    $constructor : function (config) {
        this.$CustomPageProvider.constructor.call(this, config);
        //Loading the page engine configuration
        this.customconfig = Aria.$window.templates.pageengine.Configuration;
        delete this.customconfig.config.navigation;
        this.customconfig.pageDefinitionTemplate.animation.animateIn = "pop";
        this.customconfig.pageDefinitionTemplate.animation.animateOut = "pop";
        this.isFirst = true;
    },

    $prototype : {
        /**
         * Modifies the page definition on te fly after the load.
         * @param {String} newId The id of the new page.
         * @param {Object} newDef The page definition already modified. 
         * @param {Object} oldDef The original loaded page definition.
         * @return {Object} The modified page definition.
         */
        _alterPageDefinition : function (newId, newDef, oldDef) {
            // Navigation in master
            if (this._isMainNavigation(newId)) {
                this.$raiseEvent({
                    name : "navigateMain",
                    value : newId
                });
                newDef = aria.utils.Json.copy(this._loadPageDefinitionFromResource(this.currentPageId));
                newDef.animation.animateIn = "invisible";
                newDef.animation.animateOut = "invisible";
            } else {
                this.currentPageId = newId;
            }

            // Skip animation if composition doesn't change
            if (aria.utils.Json.equals(oldDef.pageComposition, this.currentPageComposition)) {
                if (newDef == null) {
                    newDef = aria.utils.Json.copy(oldDef);
                }
                newDef.animation.animateIn = "invisible";
                newDef.animation.animateOut = "invisible";
            }
            
            if (this.isFirst) {
                this.isFirst = false;
                if (newDef == null) {
                    newDef = aria.utils.Json.copy(oldDef);
                }
                newDef.animation.animateIn = "slide right";
            }

            return newDef;
        },

        /**
         * Determines if a page is the home page.
         * @param {String} id The page ID.
         * @return {Boolean} True if the page is the home page.
         */
        _isHome : function (id) {
            return false;
        },
        
        /**
         * Determines if page transition is to be disabled between two pages.
         * Deactivation means in fact using the fadefast animation which lasts 10ms.
         * @param {String} fromPage The origin page ID.
         * @param {String} toPage The destination page ID.
         * @return {Boolean} True if the transition sould be disabled.
         */
        _isTransitionDisabled : function (fromPage, toPage) {
            return false;
        }
    }
});