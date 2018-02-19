const homePageCommands = {

    userLogin:function(email,password){

            this.waitForElementVisible('@linkSignIn')
                .click('@linkSignIn')
                .waitForElementVisible('@inputSignInEmailAddress')
                .setValue('@inputSignInEmailAddress',email)
                .setValue('@inputSignInPassword',password)
                .click('@buttonSignIn')
                .waitForElementVisible('@linkLogout')
        return this;
    },





}

 module.exports = {

    url: function () {
        return this.api.launch_url;

    },

     commands: [homePageCommands],




     elements: {


         buttonCreateAnAccount : '#SubmitCreate',
         inputCreateAccountEmailAddress:'#email_create',
         inputSignInEmailAddress:'#email',
         inputSignInPassword:'#passwd',
         linkForgotPassword:'a[href="http://automationpractice.com/index.php?controller=password"]',
         buttonSignIn:'#SubmitLogin',
         linkLogout:'.logout',
         linkSignIn:'.login',



     }


 }