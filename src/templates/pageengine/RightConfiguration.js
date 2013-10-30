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
 * Configuration of the page engine which is used as the main page engine in Tablet/Desktop mode.
 */
Aria.resourcesDefinition({
    $classpath : 'templates.pageengine.RightConfiguration',
    $resources : {
        "config" : {
            containerId : "output2",
            appData : {},
            navigation : "hash",
            animations : true
        },
        "pageDefinitionTemplate" : {
            pageId : "TO_BE_REPLACED",
            url : "TO_BE_REPLACED",
            title : "TO_BE_REPLACED",
            contents : {},
            animation : {
                "animateIn" : "slide left",
                "animateOut" : "fade"
            },
            pageComposition : {
                template : "templates.layout.SubPageLayout",
                placeholders : {
                    "pageContentRight" : {
                        "template" : "TO_BE_REPLACED"
                    }
                },
                modules : {}
            }
        }
    }
});