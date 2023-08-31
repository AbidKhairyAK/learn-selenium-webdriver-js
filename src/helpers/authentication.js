const LoginPage = require('../pageobjects/LoginPage')

async function loginWithStandardUser (driver) {
	const loginPage = new LoginPage(driver)
	await loginPage.openPage()
	await loginPage.loginProcess('standard_user', 'secret_sauce')
}

module.exports = {
	loginWithStandardUser
}