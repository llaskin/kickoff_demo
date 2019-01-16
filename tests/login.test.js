/*
 * Created by Leo Laskin on 1/14/19.
 * Tests for the Inventory Page
 */
import { expect } from 'chai'
import LoginPage from '../pages/loginPage'
import InventoryPage from '../pages/inventoryPage'
import resources from '../resources'

describe('Login Tests', () => {
    it("Logs In Successfully", () => {
        LoginPage.open()
        LoginPage.login(resources.goodUsername, resources.password)

        expect(InventoryPage.title).to.equal('Swag Labs')
    })

    it("Locked User error message", () => {
        LoginPage.open()
        LoginPage.login(resources.lockedUsername, resources.password)

        expect(LoginPage.getErrorMessage()).to.equal(resources.lockedErrorMessage)
    })

    it("Invalid User", () => {
        LoginPage.open()
        LoginPage.login(resources.invalidUsername, resources.password)

        expect(LoginPage.getErrorMessage()).to.equal(resources.invalidErrorMessage)
    })

    it("Failing Test", () => {
        LoginPage.open()
        LoginPage.login(resources.invalidUsername, resources.password)

        expect(InventoryPage.title).to.equal('Swag Labs')
    })
})
