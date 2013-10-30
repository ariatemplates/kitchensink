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
    $classpath:'templates.pages.ui.uiiscroll.Carousel',
    $hasScript:true,
    $css: ["templates.pages.ui.uiiscroll.CarouselStyle"]
}}

{macro main()}
    <div {id "wrapper" /} class="wrapper">
        <div class="scroller">
            <ul class="thelist">
                <li><strong>Aria Templates (a.k.a. AT)</strong> <em>is a JavaScript framework aimed at building rich and highly scalable enterprise web applications. Its core components include a versatile object oriented language, a strong dependency management system and an efficient client-side templating engine, available for HTML and CSS, with bidirectional data bindings.</em></li>
                <li><strong>AT</strong> <em>has been developed internally by Amadeus since 2009 for its professional products. It isn't the Amadeus' first JavaScript library, although it is the first to be released as open source software.<br><br>Previous libraries, also built internally by Amadeus, had been around since early 2007, and offered a complete set of features, but based on different technological stack. At this time, all pages were made using JSPs. The library, developed as a JSP Tag Library associated to JavaScript objects (some of them homemade and some from YUI library), was providing a rich set of user interface widgets.</em></li>
                <li><em>On one hand, our support standards were based, and are still based, on many factors including usage stats and the upgrade paths available for our customers in term of resources (computers, browsers, ...). For instance, we still have a significant number of users on Internet Explorer 6. On the other hand our professional applications are more and more complex, involving 100+ different available screens.<br><br>All these events prompted us, back in 2009, to start thinking at a more adapted and powerful solution for our technical stack: Aria Templates was born.</em></li>
                <li><em><strong>The first question to ask is: Why not use an existing library?</strong><br><br>Back in 2009, no clear and wide range of open source JavaScript libraries was available. Most popular ones were ExtJS, YUI 2, and jQuery. So we had a full review of these major libraries, but we found that none met our requirements and guidelines, with especially browser support and performances being major issues.</em></li>
                <li><em>The core idea that led us to the create Aria Templates is the advanced client side template engine. With such an engine :<br><br>
                    We can manage in the DOM at one point in time only what is visible on screen.<br>
                    We can also benefit of bidirectional data bindings.<br>
                    We can have automatic refreshes.<br>
                    We can hide browsers hacks behind CSS templating.<br>
                    We can easily debug, everything is JavaScript!<br>
                    ...<br>
                    Efficiency and performances are finally here!<br><br>
                    In other words, "yes, we can !"</em></li>
                <li><strong>Amadeus</strong> <em>has a strong tradition of using a lot of different open source softwares. We use it widely across many of our platforms. Unfortunately we are less used to contribute.<br><br>So we decided to be also part of the adventure, and Aria Templates became an obvious candidate for open-sourcing. As a pure JavaScript library, it is free of dependencies, and therefore easy for anyone to use.</em></li>
                <li><em>The first release available is version 1.2, as we think it is now quite stable. It has been used for more than 2 years internally. More importantly, we already started thinking about what changes to commit for next version 2.0.<br><br>Trying to create a wider community around AT, gather feedback, and help us building the future of Aria Templates was an opportunity we couldn't miss.<br><br>Let's hope you'll like it, we invite you to take a look at Aria Templates, try it out, and share your thoughts and ideas.</em></li>
                <li><strong>Aria Templates</strong> <em>Aria Templates is an open source project under the Apache 2.0 license. All your contributions are very welcome, have a look at the Contribute page for more information.</em></li>
            </ul>
        </div>
    </div>
    <div class="nav">
        <div class="prev" {on tap {fn: navigateTo, args: 'prev'}/}></div>
        {section {
            id: "dots",
            type: "ul",
            attributes : {classList : ["indicator"]},
            macro: {name: "displayIndicators", scope : this},
            bindRefreshTo: [{to:"currentPage", inside:this.inData}]
        }/}
        <div class="next" {on tap {fn: navigateTo, args: 'next'}/}></div>
    </div>
{/macro}

{macro displayIndicators()}
    {for var i = 1; i <= 8 ; i++}
        <li{if i === this.inData.currentPage} class="active"{/if}>${i}</li>
    {/for}
{/macro}

{/Template}