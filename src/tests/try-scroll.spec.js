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

		await new Promise(r => setTimeout(r, 2000)) // sleep 2 sec

		// scroll script
		await inventoryPage.driver.executeScript(function () {
			window.scrollTo({
				top: 200,
				behavior: 'smooth'
			})
		})

		await new Promise(r => setTimeout(r, 2000)) // sleep 2 sec
	})

	after(function () {
		driver.quit()
	})
})