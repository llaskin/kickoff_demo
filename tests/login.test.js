/*
 * Created by Leo Laskin on 1/14/19.
 * Tests for the Inventory Page
 */
import { expect } from 'chai'
import LoginPage from '../pages/LoginPage'
import resources from '../resources'

describe('Login Tests', () => {
    it("Logs In Successfully", () => {
        LoginPage.open()
        LoginPage.setUsername(resources.username)
        LoginPage.setPassword(password)
        LoginPage.login()

        expect(InventoryPage.title().to.equal('Swag Labs'))
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
