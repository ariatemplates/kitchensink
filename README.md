# Aria Templates' Kitchen Sink

The **Kitchen Sink** is a showcase application which demonstrates how mobile applications and websites can be implemented with [Aria Templates](http://ariatemplates.com/ "Aria Templates").

A demo site is available at [http://ariatemplates.com/mobile/kitchensink/](http://ariatemplates.com/mobile/kitchensink/ "Demo Site").

It has been tested in the default browsers of the following mobile platforms:

- iOS (5.1.1, 6.1.3 and 7.0.2)
- Android (2.3.6, 4.2.2 and 4.3)
- BlackBerry 10
- Windows Phone 8

In addition, it has also been tested on the latest version of these modern browsers:

- Chrome
- Firefox
- IE 10
- Opera
- Safari

## Usage

To use it, there is a set of scripts that are available after the usual `npm install`:

- `npm run-script lint`: runs JShint, verifies lowercase and checks files indentation
- `npm run-script build`: packages the Kitchen Sink with [atpackager](https://github.com/ariatemplates/atpackager "atpackager") and put the results in target/www folder
- `npm run-script startServerDev`: starts a webserver to run the Kitchen Sink in dev mode (at <http://localhost:8080/>)
- `npm run-script startServerProd`: performs a build and starts a webserver to run the Kitchen Sink in packaged mode (at <http://localhost:8080/>)
- `npm run-script android`: performs a build and then creates, compiles and deploys on device a Cordova application for Android
- `npm run-script blackberry10`: performs a build and then creates, compiles and deploys on device a Cordova application for BlackBerry 10
- `npm run-script ios`: performs a build and then creates, compiles and deploys on simulator a Cordova application for iOS
- `npm run-script wp8`: performs a build and then creates, compiles and deploys on device a Cordova application for Windows Phone 8

## Creating Cordova applications

Creating applications requires to have the SDK installed for the targeted platform.
To set this up, have a look at the [Platform Guides](http://cordova.apache.org/docs/en/3.1.0/guide_platforms_index.md.html) in Cordova documentation.

On top of that, here are a few more recommendations.

### All platforms

- The computer must have access to the Internet as Cordova will download and cache files in `%HOME%/.cordova` folder
- Scripts must be run in a terminal with administrative rights

### Android

Starts the adb daemon first, for example by typing `adb devices` in the terminal.

### Blackberry 10

Creates a debug token named `blackberry10debugtoken.bar` for your device.
Installs it on the device, and copies it in `%HOME%/.cordova`
More information on [developer.blackberry.com](https://developer.blackberry.com/android/documentation/running_unsigned_applications_using_a_debug_token_1727941_11.html)

`npm run-script blackberry10` will fail the first time it is run, simply run it again.

Finally, device information must be edited in the `config` section of the [`package.json`](./package.json) file.

### iOS

Scripts cannot deploy the application automatically on a device, the project has to be opened in XCode.
But it can deploy it to the simulator, if [ios-sim](https://github.com/phonegap/ios-sim) is installed.

### Windows Phone 8

Make sure that `msbuild.exe` 32bits version is in the `PATH` (e.g. `C:\Windows\Microsoft.NET\Framework\v4.0.30319`).

## Changelog

28th October 2013

- Upgrade to AT 1.4-11
- New layout for tablet and desktop
- New flat design
- New UI components page: Editable List
- Improvement of the Sliders, Overlays and Tooltip pages
- Management of all dependencies with NPM (AT, iScroll, Cordova)
- New scripts to create, compile and deploy Cordova applications for Android, BlackBerry 10, iOS and Windows Phone 8
- Added resources (icons, splashcreens) for Cordova applications
- Added documentation

13th August 2013

- Upgrade to AT 1.4-7
- Integration of new HTML widgets
- New "mobile-like" side menu
- Header animation decoupled from the main page one
- Address bar hiding in iOS browsers (Safari, Chrome)
- New About and Change Log pages

1st August 2013

- Upgrade to AT 1.4-6
- Bug fixing
