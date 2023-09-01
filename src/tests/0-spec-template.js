const { WebDriver } = require('selenium-webdriver')
const { expect } = require('chai')

const setupDriver = require('../helpers/setupDriver')
const { loginWithStandardUser } = require('../helpers/authentication')

describe('test story / suite title', function () {
	/** @type {WebDriver} */ let driver
	// declare your pageobject variable here

	before(async function () {
		driver = await setupDriver()
		await loginWithStandardUser(driver)

		// initialize your pageobject class here
	})

	it('test case title', async function () {
		// write your test script here
	})

	after(function () {
		driver.quit()
	})
})