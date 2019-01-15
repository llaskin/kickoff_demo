/**
 * Created by Leo Laskin on 1/14/19.
 * Page Object file for the login page
 */
var Page = require('./page');

var LoginPage = Object.create(Page, {
    open: {
        value: function () {
            Page.open.call(this, '');
        }
    },

    loginInput: {
        get: function () {
            return browser.element("#user-name");
        }
    },

    passwordInput: {
        get: function () {
            return browser.element("#password");
        }
    },

    loginButton: {
        get: function () {
            return browser.element('#login-button');
        }
    },

    errorText: {
        get: function () {
            return browser.element('h3[data-test=error]');
        }
    },

    submit: {
        value: function () {
            this.loginButton.click();
        }
    },
    setUsername: {
        value: function (username) {
            this.loginInput.setValue(username);
        }
    },
    setPassword: {
        value: function (password) {
            this.passwordInput.setValue(password);
        }
    },

    getErrorMessage: {
        value: function () {
            return this.errorText.getText();
        }
    },

    login: {
        value: function (username, password){
            this.loginInput.setValue(username);
            this.passwordInput.setValue(password);
            submit();
        }
    }


});

module.exports = LoginPage;