/*
 * Created by Leo Laskin on 1/14/19.
 * Tests for the Inventory Page
 */


var expect = require('chai').expect;
var InventoryPage = require('../pages/InventoryPage');

describe('Inventory Page Test', function() {

    it("Has 6 items on the swag page", function() {
        InventoryPage.open();
        expect(InventoryPage.InventoryItems.length.to.equal(5));
    });
    
    it("Can add an item to the cart", function() {
        InventoryPage.open();
        InventoryPage.InventoryItems[1].AddToCartButton.click();

        expect(InventoryPage.getCartCount().to.equal("1");
    });

    it("Can add multiple items to the cart", function() {
        InventoryPage.open();
        InventoryPage.InventoryItems[1].AddToCartButton.click();
        InventoryPage.InventoryItems[2].AddToCartButton.click();

        expect(InventoryPage.getCartCount().to.equal("1");
    });

});