# Kickoff Demo
This code is provided for Acme, Inc for use of testing their SauceSwag application.  It shows good examples of testing and promotes ideal test automation best practices.

### Environment Setup

1. Global Dependencies
    * Install [Node.js](https://nodejs.org/en/)
    * Or Install Node.js with [Homebrew](http://brew.sh/)
    ```
    $ brew install node
    ```
2. Sauce Credentials
    * In the terminal export your Sauce Labs Credentials as environmental variables:
    ```
    $ export SAUCE_USERNAME=<your Sauce Labs username>
	$ export SAUCE_ACCESS_KEY=<your Sauce Labs access key>
    ```
3. Project Dependencies
	* Install Node modules
	```
	$ npm install
	```

### Running Tests

* Tests in Parallel:
	```
	$ ./node_modules/.bin/wdio wdio.conf.js
	```

[Sauce Labs Dashboard](https://saucelabs.com/beta/dashboard/)

### Best Practices Exemplified

* Parallelization

* Behavior Driven Development(BDD)

* Page Objects

* Explicit Waiting for elements

* Positive and Negative testing

### Resources
##### [Sauce Labs Documentation](https://wiki.saucelabs.com/)

##### [SeleniumHQ Documentation](http://www.seleniumhq.org/docs/)

##### [WebdriverIO Documentation](http://webdriver.io/api.html)

##### [Node Documentation](https://nodejs.org/en/docs/)

##### [Mocha Documentation](https://mochajs.org/)

