const { By } = require('selenium-webdriver')
const BaseClass = require('./BaseClass')

class InventoryPage extends BaseClass {
	constructor (driver) {
		super(driver)
	}

	mainTitleEl = By.className('product_label')

	async getMainTitle () {
		return this.driver.findElement(this.mainTitleEl).getText()
	}
	async openPage () {
		this.openUrl('/inventory.html')
	}
}

module.exports = InventoryPage