const { By } = require('selenium-webdriver')
const BaseClass = require('./BaseClass')

class LoginPage extends BaseClass {
	constructor (driver) {
		super(driver)
	}

	usernameEl = By.id('user-name')
	passwordEl = By.id('password')
	submitEl = By.id('login-button')
	errorEl = By.css('h3[data-test="error"]')

	async loginProcess (username, password) {
		await this.driver.findElement(this.usernameEl).sendKeys(username)
		await this.driver.findElement(this.passwordEl).sendKeys(password)
		await this.driver.findElement(this.submitEl).click()
	}
	async getError () {
		return this.driver.findElement(this.errorEl).getText()
	}
	async openPage () {
		await this.openUrl('/')
	}
}

module.exports = LoginPage