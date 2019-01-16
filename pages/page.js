export default class Page {
  open (path) {
    return browser.url('/' + (path ? path : ''))
  }

  get title () {
    return browser.getTitle()
  }
}
