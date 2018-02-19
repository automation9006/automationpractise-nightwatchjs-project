var SELENIUM_CONFIGURATION = {
    start_process: true,
    server_path: './node_modules/selenium-standalone/.selenium/selenium-server/selenium-server-standalone-3.4.0.jar',

};

var FIREFOX_CONFIGURATION = {
    browserName: 'firefox',
    javascriptEnabled: true,
    acceptSslCerts: true,
    marionette: true,

};

var CHROME_CONFIGURATION = {
    browserName: 'chrome',
    javascriptEnabled: true,
    acceptSslCerts: true,
    acceptAlert: true,
    chromeOptions: {
        args: ['start-maximized'],
        useAutomationExtension: false,
    },
};

var IE_CONFIGURATION = {
    browserName: 'internet explorer',
    javascriptEnabled: true,
    acceptSslCerts: true
};


var DEFAULT_CONFIGURATION = {

    launch_url: 'http://automationpractice.com/',
    selenium_port: 4444,
    selenium_host: 'localhost',
    end_session_on_fail: true,
    skip_testcases_on_fail: false,

    desiredCapabilities: FIREFOX_CONFIGURATION,
    custom_commands_path: "./commands",

    cli_args: {

        "webdriver.gecko.driver" : "./node_modules/selenium-standalone/.selenium/geckodriver/geckodriver.exe",
        // "webdriver.firefox.marionette": "./node_modules/selenium-standalone/.selenium/geckodriver/geckodriver.exe",
        "webdriver.chrome.driver": "./node_modules/selenium-standalone/.selenium/chromedriver/chromedriver.exe",
        "webdriver.edge.driver": "",
        "webdriver.ie.driver": "./node_modules/selenium-standalone/.selenium/iedriver/IEDriverServer.exe",
        "nightwatch-html-reporter": "-d /reports [--theme (default:'default')] [--output (default:generatedReport.html)]"
    },
};

var UAT_ENV_FIREFOX_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/',
    desiredCapabilities: FIREFOX_CONFIGURATION

});

var UAT_ENV_CHROME_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/',
    desiredCapabilities: CHROME_CONFIGURATION
});

var UAT_EN_INERNET_EXPLORER_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/',
    desiredCapabilities: IE_CONFIGURATION
});


var TEST_ENV_FIREFOX_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/',
    desiredCapabilities: FIREFOX_CONFIGURATION
});

var TEST_ENV_CHROME_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/',
    desiredCapabilities: CHROME_CONFIGURATION
});

var TEST_ENV_INTERNET_EXPLORER_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/',
    desiredCapabilities: IE_CONFIGURATION
});

var INT_ENV_FIREFOX_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/',
    desiredCapabilities: FIREFOX_CONFIGURATION
});

var INT_ENV_CHROME_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/',
    desiredCapabilities: CHROME_CONFIGURATION
});

var INT_ENV_INTERNET_EXPLORER_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/',
    desiredCapabilities: IE_CONFIGURATION
});

var ENVIRONMENTS = {
    default: DEFAULT_CONFIGURATION,
    test_firefox: TEST_ENV_FIREFOX_CONFIGURATION,
    test_chrome: TEST_ENV_CHROME_CONFIGURATION,
    test_ie: TEST_ENV_INTERNET_EXPLORER_CONFIGURATION,
    uat_firefox: UAT_ENV_FIREFOX_CONFIGURATION,
    uat_chrome: UAT_ENV_CHROME_CONFIGURATION,
    uat_ie: UAT_EN_INERNET_EXPLORER_CONFIGURATION,
    int_firefox:INT_ENV_FIREFOX_CONFIGURATION,
    int_chrome:INT_ENV_CHROME_CONFIGURATION,
    int_ie:INT_ENV_INTERNET_EXPLORER_CONFIGURATION,

};

module.exports = {

    src_folders: ['tests'],
    globals_path:'globalModules.js',
    page_objects_path:['pageObjects'],
   test_data:['testData'],
    custom_commands_path: ['customFunctions'],
    test_workers: {enabled: true,workers: 4},
    selenium: SELENIUM_CONFIGURATION,
    test_settings: ENVIRONMENTS
}

