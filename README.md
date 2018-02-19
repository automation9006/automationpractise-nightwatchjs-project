# partner-registration-functional-nightwatch-project
this is a nightwatch ui tests framework using webdriver API

--- steps to setup on your local windows machine

1. clone the project to your local workspace folder

2. open windows command line or git bash window

3. access to you root directory of the project folder

4. run command  "npm install"

5. make sure node_modules folder is created and folders inside are present : selenium-standalone>.selenium

6. ".selenium" folder will have all the jar files for web driver,chrome driver ,edge driver,ie driver and gecko driver, the only issues is

 the npm might download the latest web driver version if so please update the version in root folder of project "nightwatch.conf.js" under server_path

 Example: server_path: './node_modules/selenium-standalone/.selenium/selenium-server/selenium-server-standalone-3.4.0.jar',

 7. Now you can run the tests from command line

 to run specific tests

 node nightwatch.js tests/login/loginTestSpec.js -e test_firefox

to run all the tests

 node nightwatch.js tests/ -e test_firefox

to run all the tests or one test with html reporter please add the param like "--reporter html-reporter.js"

Example : node nightwatch.js tests/ -e test_firefox --reporter html-reporter.js


Here is the reference document for  Nightwatch JS framework

http://nightwatchjs.org/api/#protocol

http://nightwatchjs.org/guide#using-nightwatch

http://nightwatchjs.org/guide#page-objects



--------End--------------------




Happy Testing !!!!!!!!
