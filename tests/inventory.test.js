/*
 * Created by Leo Laskin on 1/14/19.
 * Tests for the Inventory Page
 */
import { expect } from 'chai'
import InventoryPage from '../pages/InventoryPage'

describe('Inventory Page Test', () => {
    it('Has 6 items on the swag page', () => {
        InventoryPage.open()
        expect(InventoryPage.inventoryItems.length).to.equal(6)
    })

    it('Can add an item to the cart', () => {
        InventoryPage.open()
        InventoryPage.getCartButtonFromInventory(1).click()

        expect(InventoryPage.cartCount).to.equal(1)
    })

    it('Can add multiple items to the cart', () => {
        InventoryPage.open()
        InventoryPage.getCartButtonFromInventory(1).click()
        InventoryPage.getCartButtonFromInventory(2).click()

        expect(InventoryPage.cartCount).to.equal(2)
    })
})
