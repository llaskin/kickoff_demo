import Page from './Page'
import LoginPage from './LoginPage'
import resources from '../resources'

class InventoryPage extends Page {
  get inventoryItems () { return $$('.inventory_item') }
  get addToCartButton () { return $('.add-to-cart-button') }
  get cartBadge () { return $('.fa-layers-counter.shopping_cart_badge') }
  get getCartCount () { return this.cartBadge.getText() }

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

  getErrorMessage () {
    return this.errorText.getText()
  }

  login () {
    this.loginInput.setValue(username)
    this.passwordInput.setValue(password)
    submit()
  }
}

export default new InventoryPage()
