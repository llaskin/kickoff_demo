import Page from './Page'

class LoginPage extends Page {
  get loginInput () { return $('#user-name') }
  get passwordInput () { return $('#password') }
  get loginButton () { return $('#login-button') }
  get errorText () { return $('h3[data-test=error]') }

  open (...args) {
    return super.open(...args)
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

export default new LoginPage()
