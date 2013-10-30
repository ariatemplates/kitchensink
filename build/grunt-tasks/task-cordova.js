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
 * Builds Cordova applications.
 */
module.exports = function (grunt) {
    var cordova = require('cordova');
    var path = require('path');
    var shell = require('shelljs');

    cordova.on('log', function (stream) {
        grunt.log.writeln('[Cordova] ' + stream);
    });
    cordova.on('warn', function (stream) {
        grunt.log.writeln('[Cordova - WARN] ' + stream);
    });

    grunt.config.set('removedirs.apps', {
        folders : ['<%= apps.output.appsdir %>']
    });
    grunt.config.set('removedirs.assets', {
        folders : ['<%= apps.output.assetsdir %>']
    });

    grunt.registerTask('prepareAssets', 'Prepare assets for Cordova applications', function () {
        var platformName = process.argv[process.argv.length - 1].substr(2);
        var resourcesFolder = __dirname + "../../../" + grunt.config.get('apps.resources');
        var assetsFolder = __dirname + "../../../" + grunt.config.get('apps.output.assetsdir');
		
        // Copy built application
        shell.cp('-r', path.normalize(__dirname + "../../../" + grunt.config.get('packaging.prod.outputdir') + '/*'), path.normalize(__dirname
                + "../../../" + grunt.config.get('apps.output.assetsdir')));
        // Copy resources
        if (platformName !== "wp8") {
            shell.cp('-r', path.normalize(resourcesFolder + '/config.xml'), path.normalize(assetsFolder));
        } else {
            shell.cp('-r', path.normalize(resourcesFolder + '/configWP8.xml'), path.normalize(assetsFolder ));
            shell.mv('-f', path.normalize(assetsFolder + '/configWP8.xml'), path.normalize(assetsFolder + '/config.xml'));
        }
				
        if (platformName === "blackberry10") {
            //Create folders for landscape splashscreen
            shell.mkdir('-p', path.normalize(assetsFolder + '/res/icon/blackberry10/'));
            shell.mkdir('-p', path.normalize(assetsFolder + '/res/screen/blackberry10/'));
            //Copy icons
            shell.cp('-f', path.normalize(resourcesFolder + '/res/icon/blackberry10/*'), path.normalize(assetsFolder + '/res/icon/blackberry10/'));
            //Copy splashscreen
            shell.cp('-f', path.normalize(resourcesFolder + '/res/screen/blackberry10/*'), path.normalize(assetsFolder + '/res/screen/blackberry10/'));
        }
    });

    grunt.registerTask('buildApp', 'Build Cordova applications', function () {
        grunt.log.writeln('Building Cordova applications');
        var platformName = process.argv[process.argv.length - 1].substr(2);

        // Set config (NEEDS ADMIN RIGHTS IN WINDOWS !!!)
        cordova.config(grunt.config.get('apps.output.appsdir'), {
            lib : {
                www : {
                    id : 'kitchensink',
                    version : "",
                    uri : path.normalize(__dirname + "../../../" + grunt.config.get('apps.output.assetsdir'))
                }
            }
        });

        // Create project
        var data = {
            path : grunt.config.get('apps.output.appsdir'),
            id : "com.ariatemplates.kitchensink",
            name : "KitchenSink"
        };
        cordova.create(data.path, data.id, data.name, function (e) {
            if (e) {grunt.log.writeln(e);}
        });

        // Changing directory
        var currentPath = process.cwd();
        process.chdir(path.join(currentPath, grunt.config.get('apps.output.appsdir')));

        //Installing Cordova's patc in %HOME%
        if (platformName === "blackberry10") {
            shell.cp('-f', path.normalize(__dirname + '../../../build/cordova-patch/bb10/init.bat'),
                path.normalize(process.env.HOME + '/.cordova/lib/blackberry10/cordova/3.1.0/bin'));
        }
        

        // Build and deploy the project
        var done = this.async();
        cordova.platform('add', platformName, function (e) {
            if (e) {grunt.log.writeln(e);}
            copyResources(platformName);
            cordova.plugin('add', ["org.apache.cordova.console", "org.apache.cordova.geolocation", "org.apache.cordova.splashscreen"], function(e){
                if (e) {grunt.log.writeln(e);}
          
                cordova.compile({
                    platforms : [platformName],
                    options : []
                }, function (e) {
                    if (e) {grunt.log.writeln(e);}
                    if (platformName === "blackberry10") {
                        var bbcmd = "node platforms/blackberry10/cordova/lib/target.js add mydevice "
                                + process.env.npm_package_config_blackberry10_ip + " -t device --password "
                                + process.env.npm_package_config_blackberry10_password + " --pin "
                                + process.env.npm_package_config_blackberry10_pin;
                        shell.exec(bbcmd, {
                            silent : false,
                            async : false
                        });
                    }
                    if (platformName !== "ios") {
                        cordova.run({
                            platforms : [platformName],
                            options : platformName==="blackberry10"?['--target mydevice']:[]
                        }, function (e) {
                            if (e) {grunt.log.writeln(e);}
                            done();
                        });
                    } else {
                        done();
                        cordova.emulate({
                            platforms : [platformName],
                            options : []
                        }, function (e) {
                            if (e) {grunt.log.writeln(e);}
                        });
                    }
                });
            });
        });
    });

    // Copy platform dependant resources manually, config.xml is not fully taken into account in local builds.
    function copyResources(platformName) {
        var resourcesFolder = __dirname + "../../../" + grunt.config.get('apps.resources');
        var appFolder = __dirname + "../../../" + grunt.config.get('apps.output.appsdir') + '/platforms/' + platformName;
        if (platformName === "android") {
            //Copy icons
            shell.cp('-f', path.normalize(resourcesFolder + '/res/icon/android/icon-96-xhdpi.png'), path.normalize(appFolder + '/res/drawable/icon.png'));
            shell.cp('-f', path.normalize(resourcesFolder + '/res/icon/android/icon-96-xhdpi.png'), path.normalize(appFolder + '/res/drawable-xhdpi/icon.png'));
            shell.cp('-f', path.normalize(resourcesFolder + '/res/icon/android/icon-72-hdpi.png'), path.normalize(appFolder + '/res/drawable-hdpi/icon.png'));
            shell.cp('-f', path.normalize(resourcesFolder + '/res/icon/android/icon-48-mdpi.png'), path.normalize(appFolder + '/res/drawable-mdpi/icon.png'));
            shell.cp('-f', path.normalize(resourcesFolder + '/res/icon/android/icon-36-ldpi.png'), path.normalize(appFolder + '/res/drawable-ldpi/icon.png'));
            //Create folders for landscape splashscreen
            shell.mkdir('-p', path.normalize(appFolder + '/res/drawable-land-xhdpi'));
            shell.mkdir('-p', path.normalize(appFolder + '/res/drawable-land-hdpi'));
            shell.mkdir('-p', path.normalize(appFolder + '/res/drawable-land-mdpi'));
            shell.mkdir('-p', path.normalize(appFolder + '/res/drawable-land-ldpi'));
            //Copy splashscreen
            shell.cp('-f', path.normalize(resourcesFolder + '/res/screen/android/screen-xhdpi-portrait.png'), path.normalize(appFolder + '/res/drawable-xhdpi/splash.png'));
            shell.cp('-f', path.normalize(resourcesFolder + '/res/screen/android/screen-xhdpi-landscape.png'), path.normalize(appFolder + '/res/drawable-land-xhdpi/splash.png'));
            shell.cp('-f', path.normalize(resourcesFolder + '/res/screen/android/screen-hdpi-portrait.png'), path.normalize(appFolder + '/res/drawable-hdpi/splash.png'));
            shell.cp('-f', path.normalize(resourcesFolder + '/res/screen/android/screen-hdpi-landscape.png'), path.normalize(appFolder + '/res/drawable-land-hdpi/splash.png'));
            shell.cp('-f', path.normalize(resourcesFolder + '/res/screen/android/screen-mdpi-portrait.png'), path.normalize(appFolder + '/res/drawable-mdpi/splash.png'));
            shell.cp('-f', path.normalize(resourcesFolder + '/res/screen/android/screen-mdpi-landscape.png'), path.normalize(appFolder + '/res/drawable-land-mdpi/splash.png'));
            shell.cp('-f', path.normalize(resourcesFolder + '/res/screen/android/screen-ldpi-portrait.png'), path.normalize(appFolder + '/res/drawable-ldpi/splash.png'));
            shell.cp('-f', path.normalize(resourcesFolder + '/res/screen/android/screen-ldpi-landscape.png'), path.normalize(appFolder + '/res/drawable-land-ldpi/splash.png'));
        }
        else if (platformName === "wp8") {
            shell.cp('-f', path.normalize(resourcesFolder + '/res/icon/wp8/icon-62-tile.png'), path.normalize(appFolder + '/ApplicationIcon.png'));
            shell.cp('-f', path.normalize(resourcesFolder + '/res/icon/wp8/icon-173-tile.png'), path.normalize(appFolder + '/Background.png'));
            shell.cp('-f', path.normalize(resourcesFolder + '/res/screen/wp8/screen-portrait.jpg'), path.normalize(appFolder + '/SplashScreenImage.jpg'));
            shell.cp('-f', path.normalize(resourcesFolder + '/configWP8.xml'), path.normalize(appFolder + '/config.xml'));
        }
        else if (platformName === "ios") {
            //Copy icons
            shell.cp('-f', path.normalize(resourcesFolder + '/res/icon/ios/*'), path.normalize(appFolder + '/KitchenSink/Resources/icons/'));
            //Copy splashscreen
            shell.cp('-f', path.normalize(resourcesFolder + '/res/screen/ios/*'), path.normalize(appFolder + '/KitchenSink/Resources/splash/'));
        }
    }
};
