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
 * Kitchen Sink production build file.<br>
 * This build depends on the bootstrap build to execute properly.<br>
 * This build does the following things:
 * <ul>
 * <li>creates packages from multiple input files</li>,
 * <li>compiles templates to JavaScript classes</li>,
 * <li>minifies JavaScript</li>,
 * <li>adds a header in each package with license and current release version</li>,
 * <li>appends MD5 checksum to each file name as a way to make files cacheable for longer periods</li>.
 * </ul>
 */

module.exports = function (grunt) {
    var atExtensions = ['**/*.js', '**/*.tpl', '**/*.tpl.css', '**/*.tpl.txt', '**/*.tml', '**/*.cml'];
    var notAtExtensions = atExtensions.map(function (value) {
        return '!' + value;
    });
    var mainATFile = 'aria/ariatemplates_for_kitchensink_' + process.env.npm_package_devDependencies_ariatemplates + '.js';

    var imgToBase64 = require('../visitors/ImgToBase64');

    grunt.config.set('atpackager.prod', {
        options : {
            ATBootstrapFile : mainATFile,
            sourceDirectories : ['<%= packaging.bootstrap.outputdir %>'],
            sourceFiles : ['<%= packaging.prod.source_files %>'],
            defaultBuilder : {
                type : 'ATMultipart',
                cfg : {
                    header : '<%= packaging.license %>'
                }
            },
            outputDirectory : '<%= packaging.prod.outputdir %>',
            visitors : [{
                type : 'ATDependencies',
                cfg : {
                    externalDependencies : '<%= packaging.bootstrap.files %>',
                    files : atExtensions.concat(['!' + mainATFile])
                }
            }, {
                type : 'CheckDependencies',
                cfg : {
                    checkPackagesOrder : false
                }
            },
            {
                type : imgToBase64
            },
            'ATCompileTemplates',
            'ATRemoveDoc'
            , {
                type : 'JSMinify',
                cfg : {
                    files : atExtensions
                }
            }, {
                type : 'Hash',
                cfg : {
                    files : atExtensions.concat(['aria/core/transport/iframeSource*',
                                                 'aria/utils/FrameATLoaderHTML*', '**/*.jnlp', '!aria/css/**', '!iscroll.js', '!' + mainATFile,
                                                 '<%= packaging.prod.hash_include_files %>'])
                }
            }, {
                type : 'ATUrlMap',
                cfg : {
                    mapFile : mainATFile,
                    sourceFiles : ['**/*', '!aria/css/**/*'],
                    starCompress : ['**/*', '!aria'],
                    starStarCompress : ['**/*', '!aria/resources']
                }
            }, {
                type : 'CopyUnpackaged',
                cfg : {
                    files : [mainATFile, '<%= packaging.prod.allow_unpackaged_files %>'],
                    builder : {
                        type : 'ATMultipart',
                        cfg : {
                            header : '<%= packaging.license %>'
                        }
                    }
                }
            },
            {
                type : 'CopyUnpackaged',
                cfg : {
                    files : ['img/**/*']
                }
            }, {
                type : 'CopyUnpackaged',
                cfg : {
                    files : ['iscroll.js', '*.html'],
                    builder : {
                        type : 'Concat'
                    }
                }
            }],
            packages : ['<%= packaging.prod.files %>']
        }
    });

    grunt.config.set('gzipStats.prod', {
        src : '<%= packaging.prod.outputdir %>'
    });

    grunt.config.set('removedirs.prod', {
        folders : ['<%= packaging.prod.outputdir %>']
    });

    grunt.registerTask('prod', ['atpackager:prod']);
};
