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
        LoginPage.setUsername('standard_user')
        LoginPage.setPassword('secret_sauce')
        // LoginPage.setUsername(resources.goodUsername)
        // LoginPage.setPassword(resources.password)
        LoginPage.login()

        expect(InventoryPage.title.to.equal('Swag Labs'))
    })

    it("Locked User error message", () => {
        LoginPage.open()
        LoginPage.setUsername(resources.lockedUsername)
        LoginPage.setPassword(resources.password)
        LoginPage.login()

        expect(LoginPage.getErrorMessage().to.equal(resources.lockedErrorMessage))
    })

    it("Invalid User", () => {
        LoginPage.open()
        LoginPage.setUsername('invalid username')
        LoginPage.setPassword(resources.password)
        LoginPage.login()

        expect(LoginPage.getErrorMessage().to.equal(resources.invalidErrorMessage))
    })

    it("Failing Test", () => {
        LoginPage.open()
        LoginPage.setUsername('invalid username')
        LoginPage.setPassword(resources.password)
        LoginPage.login()

        expect(InventoryPage.title().to.equal('Swag Labs'))
    })
})
