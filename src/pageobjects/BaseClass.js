const { WebDriver } = require('selenium-webdriver')
const baseUrl = 'https://www.saucedemo.com/v1'

class BaseClass {
	/** @param {WebDriver} driver */
	constructor (driver) {
		this.driver = driver
	}

	async openUrl (path = '') {
		await this.driver.get(baseUrl + path)
	}
}

module.exports = BaseClass