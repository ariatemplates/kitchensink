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

Aria.interfaceDefinition({
    $classpath : "templates.controllers.IAppCtrl",
    $extends : 'aria.templates.IModuleCtrl',
    $events : {
        "toggleMenu" : {
            description : "This event is fired when the menu is toggled"
        },
        "beforePageTransition" : {
            description : "This event is fired before the page transition",
            properties : {
                "from" : "The id of the current page.",
                "to" : "The id of the next page."
            }
        },
        "pageReady" : {
            description : "This event is fired after the page transition",
            properties : {
                "pageId" : "The id of the current page."
            }
        }
    },
    $interface : {
        startPageEngine : {
            $type : "Function",
            $callbackParam : 0
        },
        navigate : {
            $type : "Function",
            $callbackParam : 1
        },
        navigateSub : {
            $type : "Function",
            $callbackParam : 1
        },
        toggleMenu : {
            $type : "Function",
            $callbackParam : 0
        }
    }
});