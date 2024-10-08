const { Given, When, Then } = require('@cucumber/cucumber');


Given(/^the user opens the application$/, async () => {
	await driver.launchApp();
});

When(/^the user enters the username "([^"]*)"$/, async (username) => {
	await $('~test-Username').setValue(username);
});

When(/^the user enters the password "([^"]*)"$/, async (password) => {
	await $('~test-Password').setValue(password);
});

When(/^the user clicks on the login button$/, async () => {
	await $('~test-LOGIN').click();
});

Then(/^the user should be logged in successfully$/, async () => {
	const inventoryPage = await $('~test-PRODUCTS');
    await expect(inventoryPage).toBeDisplayed();
});

When(/^the user selects a product$/, async () => {
	await $('~test-item_4_title_link').click();
});

When(/^the user adds the product to the cart$/, async () => {
    await $('~test-ADD TO CART').click();
});

When(/^the user proceeds to the checkout$/, async () => {
	await $('~test-Cart').click();
    await $('~test-CHECKOUT').click();
    await $('~test-Finish').click();
});

Then(/^the user should complete the checkout successfully$/, async () => {
	const confirmationText = await $('~test-CHECKOUT: COMPLETE!');
    await expect(confirmationText).toBeDisplayed();
});