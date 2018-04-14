//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './app',

        files: [
            '../node_modules/jquery/dist/jquery.min.js',
            '../node_modules/angular/angular.js',
            '../node_modules/angular-route/angular-route.js',
            '../node_modules/angular-mocks/angular-mocks.js',
            "../node_modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js",
            "../node_modules/blueimp-file-upload/js/jquery.iframe-transport.js",
            "../node_modules/blueimp-file-upload/js/jquery.fileupload.js",
            "//fast.wistia.net/assets/external/E-v1.js",
            'app.js',
            'app/components/ui-wistia/ui-wistia.component.js',
            'components/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
