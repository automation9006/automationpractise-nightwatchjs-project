
var messages = require('../../messages/messages');
var testData = require('../../testdata/test_data');

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

    'Verify login functionality' : function (client) {

        const homePage = client.page.homePageObjects();


        homePage
            .userLogin(testData.INPUT_USER_EMAIL,testData.INPUT_PASSWORD)
            .assert.elementPresent('@linkLogout')
    },


}