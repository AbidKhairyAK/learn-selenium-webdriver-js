const { By } = require('selenium-webdriver')
const BaseClass = require('./BaseClass')

class InventoryPage extends BaseClass {
	constructor (driver) {
		super(driver)
	}

	mainTitleEl = By.className('product_label')
	sortOptionDescEl = By.css('.product_sort_container option[value="za"]')

	async getMainTitle () {
		return this.driver.findElement(this.mainTitleEl).getText()
	}
	async scrollToBottom () {
		await this.driver.executeScript(function () {
			window.scrollTo({
				top: 200,
				behavior: 'smooth'
			})
		})
	}
	async sortByTitleDescending () {
		await this.driver.findElement(this.sortOptionDescEl).click()
	}
	async openPage () {
		this.openUrl('/inventory.html')
	}
}

module.exports = InventoryPage