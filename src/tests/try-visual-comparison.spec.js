const { WebDriver } = require('selenium-webdriver')
const chai = require('chai')
const { chaiImage } = require('chai-image')
const { existsSync, writeFileSync, readFileSync } = require('fs')

const setupDriver = require('../helpers/setupDriver')
const { loginWithStandardUser } = require('../helpers/authentication')
const InventoryPage = require('../pageobjects/InventoryPage')
const html2canvas = require('html2canvas')

chai.use(chaiImage)
const { expect } = chai

describe.only('coba compare gambar', function () {
	/** @type {WebDriver} */ let driver
	// declare your pageobject variable here
	/** @type {InventoryPage} */ let inventoryPage


	before(async function () {
		driver = await setupDriver()
		await loginWithStandardUser(driver)

		// initialize your pageobject class here
		inventoryPage = new InventoryPage(driver)
	})


	it('coba simpen gambar pakai selenium', async function () {
		// write your test script here
		const baseSnapshotPath = 'src/snapshots/base/check.jpg'
		const actualSnapshotPath = 'src/snapshots/actual/check.jpg'
		const isBaseSnapshotExist = existsSync(baseSnapshotPath)

		const pageSnapshot = await driver.takeScreenshot()
		const imageBuffer = Buffer.from(pageSnapshot, 'base64')

		if (isBaseSnapshotExist) {
			writeFileSync(actualSnapshotPath, imageBuffer)

			const baseSnapshot = readFileSync(baseSnapshotPath)
			expect(imageBuffer).to.matchImage(baseSnapshot)
		} else {
			writeFileSync(baseSnapshotPath, imageBuffer)
		}
	})

	after(function () {
		driver.quit()
	})
})