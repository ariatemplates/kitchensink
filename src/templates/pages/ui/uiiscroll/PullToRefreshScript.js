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
    $classpath : 'templates.pages.ui.uiiscroll.PullToRefreshScript',

    $constructor : function () {
        this.myScroll = null;
        this.pullDownEl = null;
        this.pullDownOffset = null;
        this.inData = {};
        this.inData.msg = "Pull down to refresh...";
        this.inData.generatedCount = 0;
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
                _this.pullDownEl = _this.$getElementById('pullDown');
                var elem = aria.utils.Dom.getElementById(_this.$getId("pullDown"));
                _this.pullDownOffset = elem.offsetHeight;

                _this.myScroll = new Aria.$window.iScroll(_this.$getId('wrapper'), {
                    useTransition : true,
                    topOffset : _this.pullDownOffset,
                    onRefresh : function () {
                        if (_this.pullDownEl.classList.contains('loading')) {
                            _this.pullDownEl.classList.remove('loading');
                            _this.$json.setValue(_this.inData, "msg", "Pull down to refresh...");
                        }
                    },
                    onScrollMove : function () {
                        if (this.y > 5 && !_this.pullDownEl.classList.contains('flip')) {
                            _this.pullDownEl.classList.add('flip');
                            _this.$json.setValue(_this.inData, "msg", "Release to refresh...");
                            this.minScrollY = 0;
                        } else if (this.y < 5 && _this.pullDownEl.classList.contains('flip')) {
                            _this.pullDownEl.classList.remove('flip');
                            _this.$json.setValue(_this.inData, "msg", "Pull down to refresh...");
                            this.minScrollY = -_this.pullDownOffset;
                        }
                    },
                    onScrollEnd : function () {
                        if (_this.pullDownEl.classList.contains('flip')) {
                            _this.pullDownEl.classList.remove('flip');
                            _this.pullDownEl.classList.add('loading');
                            _this.$json.setValue(_this.inData, "msg", "Loading...");
                            _this._pullDownAction();
                        }
                    }
                });
            }, 100);
        },

        /**
         * Adds 3 items to the list.
         */
        _pullDownAction : function () {
            var _this = this;
            setTimeout(function () {
                _this.$json.setValue(_this.inData, "generatedCount", _this.inData.generatedCount + 3);
                _this.myScroll.refresh();
            }, 1000);
        }
    }
});