import Page from './Page'
import LoginPage from './LoginPage'
import resources from '../resources'

class InventoryPage extends Page {
  get inventoryItems () { return $$('.inventory_item .add-to-cart-button') }
  get cartBadge () { return $('.shopping_cart_badge') }
  get cartCount () { return parseInt(this.cartBadge.getText(), 10) }
  get getErrorMessage () { return this.errorText.getText() }

  open (username, password) {
    LoginPage.open();
    LoginPage.login(
      username || resources.goodUsername,
      password || resources.password
    )
  }

  submit () {
    return this.loginButton.click()
  }

  setUsername (username) {
    return this.loginInput.setValue(username)
  }

  setPassword (password) {
    return this.passwordInput.setValue(password)
  }

  login () {
    this.loginInput.setValue(username)
    this.passwordInput.setValue(password)
    this.submit()
  }

  getCartButtonFromInventory (i) {
    return this.inventoryItems[i]
  }
}

export default new InventoryPage()
