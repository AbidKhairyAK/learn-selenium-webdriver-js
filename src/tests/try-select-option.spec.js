const { WebDriver, By } = require('selenium-webdriver')
const { expect } = require('chai')

const setupDriver = require('../helpers/setupDriver')
const { loginWithStandardUser } = require('../helpers/authentication')
const InventoryPage = require('../pageobjects/InventoryPage')

describe.only('coba select option', function () {
	/** @type {WebDriver} */ let driver
	/** @type {InventoryPage} */ let inventoryPage

	before(async function () {
		driver = await setupDriver()
		await loginWithStandardUser(driver)

		inventoryPage = new InventoryPage(driver)
	})

	it('urutkan produk berdasarkan nama secara descending', async function () {
		await inventoryPage.openPage()
		await inventoryPage.sortByTitleDescending()
		await new Promise(r => setTimeout(r, 3000)) // sleep 1 sec
	})

	after(function () {
		driver.quit()
	})
})