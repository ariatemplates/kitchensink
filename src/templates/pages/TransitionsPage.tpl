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

{Template {
    $classpath: "templates.pages.TransitionsPage",
    $hasScript: true
}}

{macro main()}

    {if !aria.utils.Device.isMobile()}
        {@touch:Button {
            isLink: true,
            attributes: {
                classList: ["navigation close"]
            },
            on: {tap : { fn : onUp}}
        }}
        {/@touch:Button}
    {/if}

    {@touch:Button {
        isLink: true,
        attributes: {
        classList: ["navigation forward"]
      },
      on: {tap : { fn : onSlideLeft}}
    }}
    Slide Left
    {/@touch:Button}

    {@touch:Button {
        isLink: true,
        attributes: {
            classList: ["navigation forward"]
        },
        on: {tap : { fn : onSlideRight}}
    }}
    Slide Right
    {/@touch:Button}

    {@touch:Button {
        isLink: true,
        attributes: {
            classList: ["navigation forward"]
        },
        on: {tap : { fn : onSlideUp}}
    }}
    Slide Up
    {/@touch:Button}

    {@touch:Button {
        isLink: true,
        attributes: {
            classList: ["navigation forward"]
        },
        on: {tap : { fn : onSlideDown}}
    }}
    Slide Down
    {/@touch:Button}

    {@touch:Button {
        isLink: true,
        attributes: {
            classList: ["navigation forward"]
        },
        on: {tap : { fn : onFade}}
    }}
    Fade
    {/@touch:Button}

    {@touch:Button {
        isLink: true,
        attributes: {
            classList: ["navigation forward"]
        },
        on: {tap : { fn : onFlip}}
    }}
    Flip
    {/@touch:Button}

    {@touch:Button {
        isLink: true,
        attributes: {
            classList: ["navigation forward"]
        },
        on: {tap : { fn : onPop}}
    }}
    Pop
    {/@touch:Button}

{/macro}


{/Template}