/*
 * Created by Leo Laskin on 1/14/19.
 * Tests for the Inventory Page
 */
import { expect } from 'chai'
import InventoryPage from '../pages/InventoryPage'

describe('Inventory Page Test', () => {
    it('Has 6 items on the swag page', () => {
        InventoryPage.open()
        expect(InventoryPage.InventoryItems.length.to.equal(5))
    })

    it('Can add an item to the cart', () => {
        InventoryPage.open()
        InventoryPage.InventoryItems[1].AddToCartButton.click()

        expect(InventoryPage.getCartCount().to.equal('1'))
    })

    it('Can add multiple items to the cart', () => {
        InventoryPage.open()
        InventoryPage.InventoryItems[1].AddToCartButton.click()
        InventoryPage.InventoryItems[2].AddToCartButton.click()

        expect(InventoryPage.getCartCount().to.equal('1'))
    })
})
