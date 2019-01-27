/*
 * Created by Leo Laskin on 1/14/19.
 * Tests for the Login Page
 */
import { expect } from 'chai'
import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/inventoryPage'
import resources from '../resources'

describe('Login Tests Bad', () => {
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

        expect(LoginPage.currentUrl()).to.contain('inventory')
    })
})
