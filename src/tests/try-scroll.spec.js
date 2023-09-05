const { WebDriver } = require('selenium-webdriver')
const { expect } = require('chai')

const setupDriver = require('../helpers/setupDriver')
const { loginWithStandardUser } = require('../helpers/authentication')
const InventoryPage = require('../pageobjects/InventoryPage')

describe('coba scroll', function () {
	/** @type {WebDriver} */ let driver
	/** @type {InventoryPage} */ let inventoryPage

	before(async function () {
		driver = await setupDriver()
		await loginWithStandardUser(driver)

		inventoryPage = new InventoryPage(driver)
	})

	it('scroll ke bawah', async function () {
		await inventoryPage.openPage()
		await inventoryPage.scrollToBottom()
		await new Promise(r => setTimeout(r, 1000)) // sleep 1 sec
	})

	after(function () {
		driver.quit()
	})
})