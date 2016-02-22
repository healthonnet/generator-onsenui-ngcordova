'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var OnsenuiNgCordovaGenerator = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../package.json');

        this.on('end', function() {
            this.installDependencies({
                skipInstall: this.options['skip-install'],
                callback: function () {
                    var that = this;
                    this.log(typeof this.spawnCommand);
                    this.installPlugins.forEach(function(pluginGit){
                        that.spawnCommand('cordova', ['plugin','add', pluginGit]);
                    });
                }.bind(this) // bind the callback to the parent scope
            });
        });
    },

    askFor: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the marvelous OnsenuiPhonegap generator!'));

        var prompts = [{
            type: 'input',
            name: 'appname',
            message: 'What is the name of your app?',
            default: path.basename(process.cwd())
        }, {
            type: 'list',
            name: 'templateName',
            message: 'Please choose a template from below (more info: http://goo.gl/Cm3GRn) :',
            choices: [{
                name: 'Minimum',
                value: 'minimum'
            }, {
                name: 'Sliding Menu',
                value: 'smenu'
            }, {
                name: 'Tab bar',
                value: 'tab'
            }, {
                name: 'Master-Detail',
                value: 'mdetail'
            }, {
                name: 'Split View',
                value: 'sview'
            }],
            default: 'minimum'
        },  {
            type: 'checkbox',
            name: 'installPlugins',
            message: 'Check plugins you want to install.',
            choices: [{
                name: '$cordovaActionSheet',
                value: 'https://github.com/EddyVerbruggen/cordova-plugin-actionsheet.git'
            },{
                name: '$cordovaAdMobSource',
                value: 'https://github.com/floatinghotpot/cordova-plugin-admob.git'
            },{
              name: '$cordovaAppAvailabilitySource',
              value: 'https://github.com/ohh2ahh/AppAvailability.git'
            },{
              name: '$cordovaAppRate',
              value: 'https://github.com/pushandplay/cordova-plugin-apprate.git'
            },{
              name: '$cordovaAppVersion',
              value: 'https://github.com/whiteoctober/cordova-plugin-app-version.git'
            },{
              name: '$cordovaBadge',
              value: 'https://github.com/katzer/cordova-plugin-badge.git'
            },{
              name: '$cordovaBackgroundGeolocation',
              value: 'https://github.com/transistorsoft/cordova-background-geolocation-lt.git'
            },{
              name: '$cordovaBatteryStatus',
              value: 'cordova-plugin-battery-status'
            },{
              name: '$cordovaBarcodeScanner',
              value: 'https://github.com/phonegap/phonegap-plugin-barcodescanner.git'
            },{
              name: '$cordovaCalendar',
              value: 'https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin.git'
            },{
              name: '$cordovaCamera',
              value: 'cordova-plugin-camera'
            },{
              name: '$cordovaCapture',
              value: 'cordova-plugin-media-capture'
            },{
              name: '$cordovaClipboard',
              value: 'https://github.com/VersoSolutions/CordovaClipboard.git'
            },{
              name: '$cordovaContacts',
              value: 'cordova-plugin-contacts'
            },{
              name: '$cordovaDatePicker',
              value: 'https://github.com/VitaliiBlagodir/cordova-plugin-datepicker.git'
            },{
              name: '$cordovaDevice',
              value: 'cordova-plugin-device'
            },{
              name: '$cordovaDeviceMotion',
              value: 'cordova-plugin-device-motion'
            },{
              name: '$cordovaDeviceOrientation',
              value: 'cordova-plugin-device-orientation'
            },{
              name: '$cordovaDialogs',
              value: 'cordova-plugin-dialogs'
            },{
              name: '$cordovaEmailComposer',
              value: 'https://github.com/katzer/cordova-plugin-email-composer.git'
            },{
              name: '$cordovaFile',
              value: 'cordova-plugin-file'
            },{
              name: '$cordovaFileTransfer',
              value: 'cordova-plugin-file-transfer'
            },{
              name: '$cordovaFileOpener2',
              value: 'https://github.com/pwlin/cordova-plugin-file-opener2.git'
            },{
              name: '$cordovaFlashlight',
              value: 'https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git'
            },{
              name: '$cordovaGeolocation',
              value: 'cordova-plugin-geolocation'
            },{
              name: '$cordovaGlobalization',
              value: 'cordova-plugin-globalization'
            },{
              name: '$cordovaGoogleAnalytics',
              value: 'https://github.com/danwilson/google-analytics-plugin.git'
            },{
              name: '$cordovaBeacon',
              value: 'https://github.com/petermetz/cordova-plugin-ibeacon.git'
            },{
              name: '$cordovaImagePicker',
              value: 'https://github.com/wymsee/cordova-imagePicker.git'
            },{
              name: '$cordovaInAppBrowser',
              value: 'cordova-plugin-inappbrowser'
            },{
              name: '$cordovaInstagram',
              value: 'https://github.com/vstirbu/InstagramPlugin.git'
            },{
              name: '$cordovaKeyboard',
              value: 'https://github.com/driftyco/ionic-plugins-keyboard.git'
            },{
              name: '$cordovaKeychain',
              value: 'https://github.com/shazron/KeychainPlugin.git'
            },{
              name: '$cordovaLaunchNavigator',
              value: 'uk.co.workingedge.phonegap.plugin.launchnavigator'
            },{
              name: '$cordovaLocalNotification',
              value: 'https://github.com/katzer/cordova-plugin-local-notifications.git'
            },{
              name: '$cordovaMedia',
              value: 'cordova-plugin-media'
            },{
              name: '$cordovaNativeAudio',
              value: 'https://github.com/SidneyS/cordova-plugin-nativeaudio.git'
            },{
              name: '$cordovaNetwork',
              value: 'cordova-plugin-network-information'
            },{
              name: '$cordovaOauth',
              value: 'https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git'
            },{
              name: '$cordovaPinDialog',
              value: 'https://github.com/Paldom/PinDialog.git'
            },{
              name: '$cordovaPreferences',
              value: 'cordova-plugin-app-preferences'
            },{
              name: '$cordovaPrinter',
              value: 'https://github.com/katzer/cordova-plugin-printer.git'
            },{
              name: '$cordovaProgress',
              value: 'https://github.com/pbernasconi/cordova-progressIndicator.git'
            },{
              name: '$cordovaPush',
              value: 'https://github.com/phonegap-build/PushPlugin.git'
            },{
              name: '$cordovaSMS',
              value: 'https://github.com/cordova-sms/cordova-sms-plugin.git'
            },{
              name: '$cordovaSocialSharing',
              value: 'https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git'
            },{
              name: '$cordovaSpinnerDialog',
              value: 'https://github.com/Paldom/SpinnerDialog.git'
            },{
              name: '$cordovaSplashscreen',
              value: 'cordova-plugin-splashscreen'
            },{
              name: '$cordovaSQLite',
              value: 'https://github.com/litehelpers/Cordova-sqlite-storage.git'
            },{
              name: '$cordovaStatusbar',
              value: 'cordova-plugin-statusbar'
            },{
              name: '$cordovaToast',
              value: 'https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git'
            },{
              name: '$cordovaTouchID',
              value: 'https://github.com/leecrossley/cordova-plugin-touchid.git'
            },{
              name: '$cordovaVibration',
              value: 'cordova-plugin-vibration'
            },{
              name: '$cordovaZip',
              value: 'https://github.com/MobileChromeApps/zip.git'
            }]
        }];

        this.prompt(prompts, function(props) {
            this.appname = props.appname;
            this.templateName = props.templateName;
            this.installPlugins = props.installPlugins;
            done();
        }.bind(this));
    },

    app: function() {
        this.mkdir('hooks');
        this.mkdir('merges');
        this.mkdir('platforms');
        this.mkdir('plugins');
        this.mkdir('www');

        this.copy('phonegap/hooks/README.md', 'hooks/README.md');
        this.directory('phonegap/www/res', 'www/res');
        this.copy('phonegap/www/icon.png', 'www/icon.png');
        this.copy('phonegap/www/_config.xml', 'www/config.xml');

        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy('_.bowerrc', '.bowerrc');

        if (this.templateName === 'minimum') {
            this.directory('onsenui/minimum/', 'www/');
        } else if (this.templateName === 'smenu') {
            this.directory('onsenui/sliding_menu/', 'www/');
        } else if (this.templateName === 'menunav') {
            this.directory('onsenui/sliding_menu_navigator/', 'www/');
        } else if (this.templateName === 'tab') {
            this.directory('onsenui/tab_bar/', 'www/');
        } else if (this.templateName === 'mdetail') {
            this.directory('onsenui/master_detail/', 'www/');
        } else if (this.templateName === 'sview') {
            this.directory('onsenui/split_view/', 'www/');
        } else if (this.templateName === 'sviewnav') {
            this.directory('onsenui/split_view_navigator/', 'www/');
        }
    },

    projectfiles: function() {
        this.copy('Gruntfile.js', 'Gruntfile.js');
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
    }
});

module.exports = OnsenuiNgCordovaGenerator;
