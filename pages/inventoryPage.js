/**
 * Created by Leo Laskin on 1/14/19.
 * Page Object file for the Inventory Page
 */

 var Page = require('./page');
 var HomePage = require('HomePage');
 var resources = require('../resources');

var InventoryPage = Object.create(Page, {
    open: {
        value: function () {
           	LoginPage.open();
			LoginPage.login(resources.goodUsername, resources.password);
        }
    },

    inventoryItems: {
        get: function () {
            return browser.elements(".inventory_item");
            //For counting the number of inventory elements
        }
    },
    addToCartButton: {
        get: function () {
            return browser.element(".add-to-cart-button");
            //For counting the number of inventory elements
        }
    },
    cartBadge: {
        get: function () {
            return browser.element(".fa-layers-counter.shopping_cart_badge");
            //For counting the number of inventory elements
        }
    },

    getCartCount: {
        value: function () {
            return this.cartBadge.getText();
        }
    },

