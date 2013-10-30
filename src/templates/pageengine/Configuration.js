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

/**
 * Configuration of the page engine which is used:
 *  - as the main page engine in Mobile mode
 *  - as the slave page engine in Tablet/Desktop mode
 */
Aria.resourcesDefinition({
    $classpath : 'templates.pageengine.Configuration',
    $resources : {
        "config" : {
            containerId : "output",
            appData : {},
            navigation : "hash",
            animations : true,
            storage: {
                active: false
            }
        },
        "pageDefinitionTemplate" : {
            pageId : "TO_BE_REPLACED",
            url : "TO_BE_REPLACED",
            title : "TO_BE_REPLACED",
            contents : {},
            animation : {
                "animateIn" : "slide left",
                "animateOut" : "slide left"
            },
            pageComposition : {
                template : "templates.layout.PageLayout",
                placeholders : {
                    "pageContent" : {
                        "template" : "TO_BE_REPLACED"
                    }
                },
                modules : {}
            }
        },
        "pages" : {
            "HOME" : {
                url : "",
                title : "Kitchen Sink",
                pageContent : "templates.pages.HomePage"
            },
            "DEFAULT" : {
                url : "",
                title : "Kitchen Sink",
                pageContent : "templates.pages.WelcomePage"
            },
            "UI" : {
                url : "/ui",
                title : "User Interface",
                pageContent : "templates.pages.UIPage"
            },
            "UIELEMENTS" : {
                url : "/elements",
                title : "UI Elements",
                pageContent : "templates.pages.ui.UIElementsPage"
            },
            "UIELEMENTSBUTTONS" : {
                url : "/buttons",
                title : "Buttons",
                pageContent : "templates.pages.ui.uielements.ButtonsPage"
            },
            "UIELEMENTSINPUTS" : {
                url : "/inputs",
                title : "Inputs",
                pageContent : "templates.pages.ui.uielements.InputsPage"
            },
            "UIELEMENTSSLIDERS" : {
                url : "/sliders",
                title : "Sliders",
                pageContent : "templates.pages.ui.uielements.SlidersPage"
            },
            "UICOMPONENTS" : {
                url : "/components",
                title : "UI Components",
                pageContent : "templates.pages.ui.UIComponentsPage"
            },
            "UICOMPONENTSACCORDION" : {
                url : "/accordion",
                title : "Accordion",
                pageContent : "templates.pages.ui.uicomponents.Accordion"
            },
            "UICOMPONENTSAUTOCOMPLETE" : {
                url : "/autocomplete",
                title : "Auto Complete",
                pageContent : "templates.pages.ui.uicomponents.AutoComplete"
            },
            "UICOMPONENTSCOLLAPSIBLE" : {
                url : "/collapsible",
                title : "Collapsible Element",
                pageContent : "templates.pages.ui.uicomponents.Collapsible"
            },
            "UICOMPONENTSEDITABLELIST" : {
                url : "/editablelist",
                title : "Editable List",
                pageContent : "templates.pages.ui.uicomponents.EditableList"
            },
            "UICOMPONENTSOVERLAYS" : {
                url : "/overlays",
                title : "Overlays",
                pageContent : "templates.pages.ui.uicomponents.Overlays"
            },
            "UICOMPONENTSTABS" : {
                url : "tabs",
                title : "Tabs",
                pageContent : "templates.pages.ui.uicomponents.Tabs"
            },
            "UICOMPONENTSTOOLTIP" : {
                url : "/tooltip",
                title : "Tooltip",
                pageContent : "templates.pages.ui.uicomponents.Tooltip"
            },
            "UIISCROLL" : {
                url : "/iscroll",
                title : "iScroll Components",
                pageContent : "templates.pages.ui.UIiscrollPage"
            },
            "UIISCROLLBOTTOMBAR" : {
                url : "/bottombar",
                title : "Bottom Bar",
                pageContent : "templates.pages.ui.uiiscroll.BottomBar"
            },
            "UIISCROLLCAROUSEL" : {
                url : "/carousel",
                title : "Carousel",
                pageContent : "templates.pages.ui.uiiscroll.Carousel"
            },
            "UIISCROLLGROUPEDLIST" : {
                url : "/groupedlist",
                title : "Grouped List",
                pageContent : "templates.pages.ui.uiiscroll.GroupedList"
            },
            "UIISCROLLMATRIX" : {
                url : "/matrix",
                title : "Matrix",
                pageContent : "templates.pages.ui.uiiscroll.Matrix"
            },
            "UIISCROLLPICKER" : {
                url : "/picker",
                title : "Kitchen Sink UI iScroll Picker",
                pageContent : "templates.pages.ui.uiiscroll.Picker"
            },
            "UIISCROLLPULLTOREFRESH" : {
                url : "/pulltorefresh",
                title : "Pull to Refresh",
                pageContent : "templates.pages.ui.uiiscroll.PullToRefresh"
            },
            "TRANSITIONS" : {
                url : "/transitions",
                title : "Transitions",
                pageContent : "templates.pages.TransitionsPage"
            },
            "TRANSITIONSFADE" : {
                url : "/fade",
                title : "Fade",
                pageContent : "templates.pages.transition.TransitionsFadePage",
                animation : {
                    "animateIn" : "fade",
                    "animateOut" : "fade"
                }
            },
            "TRANSITIONSFLIP" : {
                url : "/flip",
                title : "Flip",
                pageContent : "templates.pages.transition.TransitionsFlipPage",
                animation : {
                    "animateIn" : "flip",
                    "animateOut" : "flip"
                }
            },
            "TRANSITIONSPOP" : {
                url : "/pop",
                title : "Pop",
                pageContent : "templates.pages.transition.TransitionsPopPage",
                animation : {
                    "animateIn" : "pop",
                    "animateOut" : "pop"
                }
            },
            "TRANSITIONSSLIDEDOWN" : {
                url : "/slidedown",
                title : "Slide Down",
                pageContent : "templates.pages.transition.TransitionsSlideDownPage",
                animation : {
                    "animateIn" : "slide down",
                    "animateOut" : "slide down"
                }
            },
            "TRANSITIONSSLIDELEFT" : {
                url : "/slideleft",
                title : "Slide Left",
                pageContent : "templates.pages.transition.TransitionsSlideLeftPage",
                animation : {
                    "animateIn" : "slide left",
                    "animateOut" : "slide left"
                }
            },
            "TRANSITIONSSLIDERIGHT" : {
                url : "/slideright",
                title : "Slide Right",
                pageContent : "templates.pages.transition.TransitionsSlideRightPage",
                animation : {
                    "animateIn" : "slide right",
                    "animateOut" : "slide right"
                }
            },
            "TRANSITIONSSLIDEUP" : {
                url : "/slideup",
                title : "Slide Up",
                pageContent : "templates.pages.transition.TransitionsSlideUpPage",
                animation : {
                    "animateIn" : "slide up",
                    "animateOut" : "slide up"
                }
            },
            "GESTURES" : {
                url : "/gestures",
                title : "Gestures",
                pageContent : "templates.pages.GesturesPage"
            },
            "ORIENTATIONCHANGE" : {
                url : "/orientationchange",
                title : "Orientation Change",
                pageContent : "templates.pages.OrientationChangePage"
            },
            "HTML5" : {
                url : "/html5",
                title : "HTML5",
                pageContent : "templates.pages.Html5Page"
            },
            "HTML5GEOLOCATION" : {
                url : "/geolocation",
                title : "Geolocation",
                pageContent : "templates.pages.html5.Html5GeolocationPage"
            },
            "HTML5LOCALSTORAGE" : {
                url : "/localstorage",
                title : "Local Storage",
                pageContent : "templates.pages.html5.Html5LocalStoragePage"
            },
            "BROWSERINFO" : {
                url : "/browserinfo",
                title : "Browser Info",
                pageContent : "templates.pages.BrowserInfoPage"
            },
            "NEXT" : {
                url : "/next",
                title : "Next",
                pageContent : "templates.pages.menu.NextPage"
            },
            "ABOUT" : {
                url : "/about",
                title : "About",
                pageContent : "templates.pages.menu.AboutPage"
            },
            "CHANGELOG" : {
                url : "/changelog",
                title : "Change Log",
                pageContent : "templates.pages.menu.ChangeLogPage"
            }
        }
    }
});