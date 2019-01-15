/*
 * Created by Leo Laskin on 1/14/19.
 * Tests for the Inventory Page
 */

var expect = require('chai').expect;
var resources = require('../resources');
var HomePage = require('../pages/LoginPage');


describe('Login Tests', function() {

    it("Logs In Successfully", function() {

        LoginPage.open();
        LoginPage.setUsername(resources.username);
        LoginPage.setPassword(password);
        LoginPage.login();
        
        expect(InventoryPage.title()).to.equal('Swag Labs');
    });
    
    it("Locked User error message", function() {

        LoginPage.open();
        LoginPage.setUsername(resources.lockedUsername);
        LoginPage.setPassword(resources.password);
        LoginPage.login();
        
        expect(HomePage.getErrorMessage()).to.equal(resources.lockedErrorMessage);
    });

    it("Invalid User", function() {

        LoginPage.open();
        LoginPage.setUsername('invalid username');
        LoginPage.setPassword(resources.password);
        LoginPage.login();
        
        expect(HomePage.getErrorMessage()).to.equal(resources.invalidErrorMessage);
    });

    it("Failing Test", function() {

        LoginPage.open();
        LoginPage.setUsername('invalid username');
        LoginPage.setPassword(resources.password);
        LoginPage.login();
        
        expect(InventoryPage.title()).to.equal('Swag Labs');
    });

});