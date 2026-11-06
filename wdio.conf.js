import path from 'node:path';

export const config = {
    runner: 'local',
    port: 4723,

    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],

    maxInstances: 1,

    capabilities: [
        {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'nightwatch-android-11',
            'appium:app': path.resolve('./app/wdio.apk'),
            'appium:autoGrantPermissions': true
        }
    ],

    logLevel: 'warn',
    bail: 0,
    waitforTimeout: 15000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['appium'],

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 90000
    }
};

