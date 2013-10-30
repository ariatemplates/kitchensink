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
 * A flat UI theme fully inspired by http://designmodo.github.io/Flat-UI/
 */
Aria.classDefinition({
    $classpath : "templates.layout.style.Flat",
    $singleton : true,
    $prototype : {
        themeName : "flat",
        Body : {
            bg : templates.layout.style.FlatPalette.White,
            text : templates.layout.style.FlatPalette.WetAsphalt
        },
        Header : {
            bg : templates.layout.style.FlatPalette.WetAsphalt,
            border : templates.layout.style.FlatPalette.Turquoise
        },
        PanelSeparator : {
            bg : templates.layout.style.FlatPalette.Turquoise
        },
        Menu : {
            bg : templates.layout.style.FlatPalette.MidnightBlue,
            border : templates.layout.style.FlatPalette.Turquoise,
            separator : templates.layout.style.FlatPalette.WetAsphalt,
            text : {
                link : templates.layout.style.FlatPalette.White,
                separator : templates.layout.style.FlatPalette.Asbestos
            },
            pressed : templates.layout.style.FlatPalette.MidnightBlue_Dark
        },
        ButtonBar : {
            bg : templates.layout.style.FlatPalette.WetAsphalt
        },
        TextBorder : {
            border : templates.layout.style.FlatPalette.PeterRiver
        },
        Link : {
            text : templates.layout.style.FlatPalette.PeterRiver
        },
        Input : {
            border : {
                normal : templates.layout.style.FlatPalette.Silver,
                focus : templates.layout.style.FlatPalette.PeterRiver_Dark
            },
            text : templates.layout.style.FlatPalette.WetAsphalt
        },
        SearchInput : {
            border : {
                normal : templates.layout.style.FlatPalette.Silver,
                focus : templates.layout.style.FlatPalette.PeterRiver_Dark
            },
            button : {
                bg : templates.layout.style.FlatPalette.Silver,
                cross : templates.layout.style.FlatPalette.White
            }
        },
        Checkbox : {
            border : {
                normal : templates.layout.style.FlatPalette.Silver
            },
            text : {
                selected : templates.layout.style.FlatPalette.PeterRiver_Dark
            }
        },
        VerticalRadio : {
            border : {
                normal : templates.layout.style.FlatPalette.Silver
            },
            text : {
                selected : templates.layout.style.FlatPalette.PeterRiver_Dark
            }
        },
        HorizontalRadio : {
            text : templates.layout.style.FlatPalette.White,
            bg : {
                normal : templates.layout.style.FlatPalette.PeterRiver,
                selected : templates.layout.style.FlatPalette.PeterRiver_Dark
            },
            border : templates.layout.style.FlatPalette.PeterRiver_Dark
        },
        Select : {
            border : {
                normal : templates.layout.style.FlatPalette.Silver,
                focus : templates.layout.style.FlatPalette.PeterRiver_Dark
            },
            text : templates.layout.style.FlatPalette.WetAsphalt
        },
        Button : {
            normal : {
                bg : templates.layout.style.FlatPalette.PeterRiver,
                pressed : templates.layout.style.FlatPalette.PeterRiver_Light,
                active : templates.layout.style.FlatPalette.PeterRiver_Dark,
                text : templates.layout.style.FlatPalette.White
            },
            disabled : {
                bg : templates.layout.style.FlatPalette.Concrete,
                text : templates.layout.style.FlatPalette.Clouds
            },
            navigation : {
                bg : templates.layout.style.FlatPalette.Turquoise,
                pressed : templates.layout.style.FlatPalette.Turquoise_Light
            },
            header : {
                bg : templates.layout.style.FlatPalette.Turquoise,
                pressed : templates.layout.style.FlatPalette.Turquoise_Light
            }
        },
        Slider : {
            bg : templates.layout.style.FlatPalette.Clouds,
            highlight : templates.layout.style.FlatPalette.Emerald,
            thumb : templates.layout.style.FlatPalette.PeterRiver,
            text : {
                on : templates.layout.style.FlatPalette.White,
                off : templates.layout.style.FlatPalette.Silver_Dark
            }
        },
        Dialog : {
            bg : templates.layout.style.FlatPalette.WetAsphalt,
            text : templates.layout.style.FlatPalette.White,
            h1 : templates.layout.style.FlatPalette.Turquoise,
            cancel : templates.layout.style.FlatPalette.MidnightBlue_Dark,
            cancelpressed : templates.layout.style.FlatPalette.Black,
            notify : {
                bg : templates.layout.style.FlatPalette.Pomegranate,
                text : templates.layout.style.FlatPalette.White
            }
        }
    }
});