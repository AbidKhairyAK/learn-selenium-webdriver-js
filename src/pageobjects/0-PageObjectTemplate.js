const { By } = require('selenium-webdriver')
const BaseClass = require('./BaseClass')

class YourPage extends BaseClass {
	constructor(driver) {
		super(driver)
	}

	// element locators
	someEl = By.id('some-element')

	// page actions
	async someAction () {
		await this.driver.findElement(this.someEl).doSomething()
	}
	async openPage() {
		this.openUrl('/your-page-url')
	}
}

module.exports = YourPage