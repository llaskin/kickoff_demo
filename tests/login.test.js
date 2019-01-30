/*
 * Created by Leo Laskin on 1/14/19.
 * Tests for the Inventory Page
 */
import { expect } from 'chai'
import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/inventoryPage'
import resources from '../resources'

describe('Login Tests Good', () => {
    it("Logs In Successfully", () => {
        LoginPage.open()
        LoginPage.login(resources.goodUsername, resources.password)

        expect(InventoryPage.title).to.equal('Swag Labs')
        console.error("in test")
    })
})
