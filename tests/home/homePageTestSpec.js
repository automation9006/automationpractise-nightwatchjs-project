
var messages = require('../../messages/messages');

module.exports = {

    beforeEach: function(client) {
        client
            .init().windowMaximize().waitForElementVisible('body')
    },

    afterEach: function(client,done) {

        client.perform(function() {
            done()
        });

    },

    'Verify Home Page Elements' : function (client) {

        const homePage = client.page.homePageObjects();

        homePage
            .click('@linkSignIn')
            .waitForElementVisible('@inputSignInEmailAddress')
            .waitForElementVisible('@buttonCreateAnAccount')
            .assert.elementPresent('@buttonCreateAnAccount')
            .assert.elementPresent('@inputCreateAccountEmailAddress')
            .assert.elementPresent('@inputSignInEmailAddress')
            .assert.elementPresent('@inputSignInPassword')
            .assert.elementPresent('@linkForgotPassword')
            .assert.elementPresent('@buttonSignIn')
    },

    'Verify application title' : function (client) {

        const homePage = client.page.homePageObjects();

        homePage
            .waitForElementVisible('@linkSignIn')
            .assert.title(messages.titleMessage)
    },

}