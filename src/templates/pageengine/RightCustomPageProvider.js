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
    $classpath : "templates.pageengine.RightCustomPageProvider",
    $extends : "templates.pageengine.CustomPageProvider",
    $dependencies : ["templates.pageengine.Configuration", "templates.pageengine.RightConfiguration",
            "aria.utils.Device"],

    $constructor : function (config) {
        this.$CustomPageProvider.constructor.call(this, config);
        // Loading the page engine configuration
        this.customconfig = Aria.$window.templates.pageengine.RightConfiguration;
        this.customconfig.pages = Aria.$window.templates.pageengine.Configuration.pages;
        this.customconfig.pages.HOME.url = "/home";
    },

    $prototype : {
        /**
         * Determines if a page is the home page.
         * @param {String} id The page ID.
         * @return {Boolean} True if the page is the home page.
         */
        _isHome : function (id) {
            return id == "DEFAULT";
        },

        /**
         * Determines if a page transition between two pages is forward or backward.
         * @param {String} fromPage The origin page ID.
         * @param {String} toPage The destination page ID.
         * @return {Boolean} True if the transition is forward.
         */
        _isTransitionForward : function (fromPage, toPage) {
            return true;
        },

        /**
         * Sets the page content in the page definition.
         * @param {Object} The pageDefinition.pageComposition.placeholders element in the page definition.
         * @param {String} The template classpath
         */
        _setContent : function (placeholders, tpl) {
            placeholders.pageContentRight.template = tpl;
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
                        if (this._isMainNavigation(page)) {
                            return page;
                        } else {
                            this.$raiseEvent({
                                name : "navigateSub",
                                value : page
                            });
                        }
                        break;
                    }
                }
            }
            return this._config.homePageId;
        }
    }
});