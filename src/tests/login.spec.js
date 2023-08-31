const { WebDriver } = require('selenium-webdriver')
const { expect } = require('chai')

const setupDriver = require('../helpers/setupDriver')
const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')

describe('fitur login', function () {
	/** @type {WebDriver} */ let driver
	/** @type {LoginPage} */ let loginPage
	/** @type {InventoryPage} */ let inventoryPage

	before(async function () {
		driver = await setupDriver()
		loginPage = new LoginPage(driver)
		inventoryPage = new InventoryPage(driver)
	})


	it('user login dengan password yang salah', async function () {
		await loginPage.openPage()
		await loginPage.loginProcess('standard_user', 'wrong_password')

		const errorText = await loginPage.getError()

		expect(errorText).to.include('Username and password do not match any user in this service')
	})


	it('user login dengan username dan password yang benar', async function () {
		await loginPage.openPage()
		await loginPage.loginProcess('standard_user', 'secret_sauce')

		const inventoryMainTitle = await inventoryPage.getMainTitle()

		expect(inventoryMainTitle).to.equal('Products')
	})


	after(function () {
		driver.quit()
	})
})