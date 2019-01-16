/*
 * Created by Leo Laskin on 1/14/19.
 * Tests for the Inventory Page
 */
import { expect } from 'chai'
import InventoryPage from '../pages/inventoryPage'

describe('Inventory Page Test', () => {
    it('Has 6 items on the swag page', () => {
        InventoryPage.open()
        expect(InventoryPage.inventoryItems.length).to.equal(6)
    })

    it('Can add an item to the cart', () => {
        InventoryPage.open()
        const item = InventoryPage.getCartButtonFromInventory(1)
        item.waitForDisplayed(10000)
        item.click() 
        expect(InventoryPage.cartCount).to.equal(1)
    })

    it('Can add multiple items to the cart', () => {
        InventoryPage.open()
        const item1 = InventoryPage.getCartButtonFromInventory(1)
        const item2 = InventoryPage.getCartButtonFromInventory(2)
        item1.waitForDisplayed(10000)
        item1.click() 
        item2.click()

        expect(InventoryPage.cartCount).to.equal(2)
    })
})
