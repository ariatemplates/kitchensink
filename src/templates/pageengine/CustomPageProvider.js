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
    $classpath : "templates.pageengine.CustomPageProvider",
    $extends : "aria.pageEngine.pageProviders.BasePageProvider",
    $dependencies : ["templates.pageengine.Configuration", "aria.utils.Device"],

    $events : {
        "navigationDepthChange" : {
            description : "The navigation depth has changed.",
            properties : {
                "value" : "The change in the navigation depth (relative value, 0 means back to home page)."
            }
        },
        "navigateMain" : {
            description : "The navigation must happen in the main page engine.",
            properties : {
                "value" : "Id of the page for the slave."
            }
        },
        "navigateSub" : {
            description : "The navigation must happen in the sub page engine.",
            properties : {
                "value" : "Id of the page for the slave."
            }
        }
    },

    $constructor : function (config) {
        this.$BasePageProvider.constructor.call(this, config);
        this.currentPageId = null;
        this.currentPageComposition = null;
        this.transitionType = this._getTransitionType();
        // Loading the page engine configuration
        this.customconfig = Aria.$window.templates.pageengine.Configuration;
    },

    $prototype : {

        /**
         * Post processing after the load of the page definition.
         * @param {aria.core.CfgBeans:Callback} callback To be called when the load is complete.
         * @param {Object} pageDefinition The page definition loaded.
         */
        _postProcess : function (callback, pageDefinition) {
            var newDef = null;
            var newId = pageDefinition.pageId;

            // Reverse animation if the navigation is backward
            if (this.currentPageId != null && !this._isTransitionForward(this.currentPageId, newId)) {
                newDef = aria.utils.Json.copy(pageDefinition);
                var cachedDef = this._loadPageDefinitionFromResource(this.currentPageId);
                newDef.animation.animateIn = this._getReverseAnimation(cachedDef.animation.animateIn);
                newDef.animation.animateOut = this._getReverseAnimation(cachedDef.animation.animateOut);
                this.$raiseEvent({
                    name : "navigationDepthChange",
                    value : -1
                });
            } else {
                this.$raiseEvent({
                    name : "navigationDepthChange",
                    value : 1
                });
            }

            // Navigation from Menu
            if (this._isTransitionDisabled(this.currentPageId, newId)) {
                if (newDef == null) {
                    newDef = aria.utils.Json.copy(pageDefinition);
                }
                newDef.animation.animateIn = "fadefast";
                newDef.animation.animateOut = "fadefast";
            }

            // Alter page definition
            newDef = this._alterPageDefinition(newId, newDef, pageDefinition);

            if (this._isHome(newId)) {
                this.$raiseEvent({
                    name : "navigationDepthChange",
                    value : 0
                });
            }
            // Adds transition type and proceed with the process
            if (newDef) {
                if (newDef.animation) {
                    newDef.animation.type = this.transitionType;
                }
                this.currentPageComposition = aria.utils.Json.copy(newDef.pageComposition);
                this.$callback(callback.onsuccess, newDef);
            } else {
                pageDefinition.animation.type = this.transitionType;
                this.currentPageComposition = aria.utils.Json.copy(pageDefinition.pageComposition);
                this.$callback(callback.onsuccess, pageDefinition);
            }
        },

        /**
         * Modifies the page definition on te fly after the load.
         * @param {String} newId The id of the new page.
         * @param {Object} newDef The page definition already modified.
         * @param {Object} oldDef The original loaded page definition.
         * @return {Object} The modified page definition.
         */
        _alterPageDefinition : function (newId, newDef) {
            this.currentPageId = newId;
            return newDef;
        },

        /**
         * Determines if a page is the home page.
         * @param {String} id The page ID.
         * @return {Boolean} True if the page is the home page.
         */
        _isHome : function (id) {
            return id === "HOME";
        },

        /**
         * Determines if a page transition between two pages is forward or backward.
         * @param {String} fromPage The origin page ID.
         * @param {String} toPage The destination page ID.
         * @return {Boolean} True if the transition is forward.
         */
        _isTransitionForward : function (fromPage, toPage) {
            return fromPage == "HOME" && toPage == "UI" || fromPage == "UI" && toPage == "UIELEMEMTS"
                    || fromPage == "UIELEMEMTS" && toPage == "NEXT" || fromPage == "UI" && toPage == "UIELEMENTS"
                    || fromPage == "UIELEMENTS" && toPage == "UIELEMENTSBUTTONS" || fromPage == "UIELEMENTS"
                    && toPage == "UIELEMENTSSLIDERS" || fromPage == "UIELEMENTS" && toPage == "UIELEMENTSINPUTS"
                    || fromPage == "UI" && toPage == "UICOMPONENTS" || fromPage == "UICOMPONENTS"
                    && toPage == "UICOMPONENTSAUTOCOMPLETE" || fromPage == "UICOMPONENTS"
                    && toPage == "UICOMPONENTSTABS" || fromPage == "UICOMPONENTS"
                    && toPage == "UICOMPONENTSCOLLAPSIBLE" || fromPage == "UICOMPONENTS"
                    && toPage == "UICOMPONENTSACCORDION" || fromPage == "UICOMPONENTS"
                    && toPage == "UICOMPONENTSOVERLAYS" || fromPage == "UICOMPONENTS"
                    && toPage == "UICOMPONENTSTOOLTIP" || fromPage == "UICOMPONENTS"
                    && toPage == "UICOMPONENTSEDITABLELIST" || fromPage == "UI" && toPage == "UIISCROLL"
                    || fromPage == "UIISCROLL" && toPage == "UIISCROLLBOTTOMBAR" || fromPage == "UIISCROLL"
                    && toPage == "UIISCROLLCAROUSEL" || fromPage == "UIISCROLL" && toPage == "UIISCROLLMATRIX"
                    || fromPage == "UIISCROLL" && toPage == "UIISCROLLPICKER" || fromPage == "UIISCROLL"
                    && toPage == "UIISCROLLGROUPEDLIST" || fromPage == "UIISCROLL"
                    && toPage == "UIISCROLLPULLTOREFRESH" || fromPage == "HOME" && toPage == "TRANSITIONS"
                    || fromPage == "TRANSITIONS" && toPage == "TRANSITIONSSLIDELEFT" || fromPage == "TRANSITIONS"
                    && toPage == "TRANSITIONSSLIDERIGHT" || fromPage == "TRANSITIONS" && toPage == "TRANSITIONSSLIDEUP"
                    || fromPage == "TRANSITIONS" && toPage == "TRANSITIONSSLIDEDOWN" || fromPage == "TRANSITIONS"
                    && toPage == "TRANSITIONSFADE" || fromPage == "TRANSITIONS" && toPage == "TRANSITIONSFLIP"
                    || fromPage == "TRANSITIONS" && toPage == "TRANSITIONSPOP" || fromPage == "HOME"
                    && toPage == "GESTURES" || fromPage == "HOME" && toPage == "ORIENTATIONCHANGE"
                    || fromPage == "HOME" && toPage == "HTML5" || fromPage == "HTML5" && toPage == "HTML5LOCALSTORAGE"
                    || fromPage == "HTML5" && toPage == "HTML5GEOLOCATION" || fromPage == "HOME"
                    && toPage == "BROWSERINFO" || toPage == "NEXT" || toPage == "ABOUT" || toPage == "CHANGELOG";
        },

        /**
         * Determines if page transition is to be disabled between two pages. Deactivation means in fact using the
         * fadefast animation which lasts 10ms.
         * @param {String} fromPage The origin page ID.
         * @param {String} toPage The destination page ID.
         * @return {Boolean} True if the transition sould be disabled.
         */
        _isTransitionDisabled : function (fromPage, toPage) {
            return fromPage == "HOME" && toPage == "NEXT" || fromPage == "HOME" && toPage == "ABOUT"
                    || fromPage == "HOME" && toPage == "CHANGELOG";
        },

        /**
         * For a given animation, returns the reverse one.
         * @param {String} anim The animation name.
         * @return {String} The reversed animation name.
         */
        _getReverseAnimation : function (anim) {
            var name = null;
            switch (anim) {
                case "slide left" : {
                    name = "slide right";
                }
                    break;
                case "slide right" : {
                    name = "slide left";
                }
                    break;
                case "slide up" : {
                    name = "slide down";
                }
                    break;
                case "slide down" : {
                    name = "slide up";
                }
                    break;
                case "fade" : {
                    name = "fade reverse";
                }
                    break;
                case "fade reverse" : {
                    name = "fade";
                }
                    break;
                case "pop" : {
                    name = "pop reverse";
                }
                    break;
                case "pop reverse" : {
                    name = "pop";
                }
                    break;
                case "flip" : {
                    name = "flip reverse";
                }
                    break;
                case "flip reverse" : {
                    name = "flip";
                }
                    break;
            }
            return name;
        },

        /**
         * Loads the site configuration.
         * @param {aria.core.CfgBeans:Callback} cb To be called when the load is complete.
         */
        loadSiteConfig : function (callback) {
            if (this.customconfig && this.customconfig.config) {
                if (aria.core.Browser.osName === "Android" && aria.core.Browser.osVersion.indexOf("2") === 0) {
                    this.customconfig.config.animations = false;
                }
                this.$callback(callback.onsuccess, this.customconfig.config);
            } else {
                this.$callback(callback.onfailure);
            }
        },

        /**
         * Loads the page definition for the given page request.
         * @param {aria.pageEngine.CfgBeans:PageNavigationInformation} pageRequest.
         * @param {aria.core.CfgBeans:Callback} cb To be called when the load is complete.
         */
        loadPageDefinition : function (pageRequest, callback) {
            pageRequest = pageRequest || {};
            var pageId = this._getPageId(pageRequest);
            pageRequest.pageId = pageId;
            this._updateUrlMap(pageRequest);
            if (this.customconfig && this.customconfig.pageDefinitionTemplate && this.customconfig.pages
                    && this.customconfig.pages[pageId]) {
                this._postProcess(callback, this._loadPageDefinitionFromResource(pageId));
            } else {
                this.$callback(callback.onfailure);
            }
        },

        /**
         * Loads the page definition for the given page ID.
         * @param {String} The page ID.
         */
        _loadPageDefinitionFromResource : function (pageId) {
            var pageDefinition = aria.utils.Json.copy(this.customconfig.pageDefinitionTemplate);
            var extension = this.customconfig.pages[pageId];
            pageDefinition.pageId = pageId;
            pageDefinition.url = extension.url;
            pageDefinition.title = extension.title;
            this._setContent(pageDefinition.pageComposition.placeholders, extension.pageContent);
            if (extension.animation) {
                pageDefinition.animation = extension.animation;
            }
            return pageDefinition;
        },

        /**
         * Sets the page content in the page definition.
         * @param {Object} The pageDefinition.pageComposition.placeholders element in the page definition.
         * @param {String} The template classpath
         */
        _setContent : function (placeholders, tpl) {
            placeholders.pageContent.template = tpl;
        },

        /**
         * Returns the transition type to be used depending on the user agent.
         * @return {Int} The transition type.
         */
        _getTransitionType : function () {
            var result = 1;
            if (aria.utils.Device.is3DTransformCapable()
                    || (aria.utils.Device.is2DTransformCapable() && !(aria.core.Browser.osName === "Android" || aria.utils.Device.ua.match(/Windows Phone OS 7/) !== null))) {
                if (aria.core.Browser.osName === "Android" || aria.core.Browser.osName === "Blackberry"
                        && aria.utils.Device.is3DTransformCapable() || aria.utils.Device.ua.match(/bb10;/)) {
                    result = 3;
                } else if (aria.core.Browser.osName === "IOS") {
                    result = 2;
                } else if (aria.utils.Device.isDesktop()) {
                    result = 3;
                }
            }
            return result;
        },

        /**
         * Retrieve the pageId based on the pageRequest information, as well as the url map. As a default, the
         * homePageId is returned
         * @param {aria.pageEngine.CfgBeans:PageRequest} pageRequest
         * @return {String} the pageId
         */
        _getPageId : function (pageRequest) {
            var map = this._urlMap.urlToPageId, pageId = pageRequest.pageId, url = pageRequest.url;
            if (pageId) {
                return pageId;
            }
            if (url) {
                for (var page in this.customconfig.pages) {
                    var pageUrl = this.customconfig.pages[page].url;
                    if (url === pageUrl || url + "/" === pageUrl || url.replace(/\/$/, "") === pageUrl) {
                        return page;
                    }
                }
            }
            return this._config.homePageId;
        },

        /**
         * Determines if the navigation should occur in the main page engine.
         * @param {String} id The page ID.
         * @return {Boolean} True if it should.
         */
        _isMainNavigation : function (id) {
            return !aria.utils.Device.isMobile()
                    && (id !== "HOME" && id !== "UI" && id !== "UIELEMENTS" && id !== "UICOMPONENTS"
                            && id !== "UIISCROLL" && id !== "TRANSITIONS" && id !== "HTML5");
        }
    }
});