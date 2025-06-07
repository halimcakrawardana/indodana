// register.spec.js
const { test, expect } = require('@playwright/test');

    test('Register on Cermati.com with valid data', async ({ page }) => {
    await page.goto('https://www.cermati.com/gabung');
    await page.fill('#email', 'testuser123@example.com');
    await page.fill('#mobilePhone', '081234567890');
    await page.fill('#firstName', 'Test');
    await page.fill('#lastName', 'User');
    await page.click('#__next > main > div > div.superapp-container.content > div > button > p')
    await page.waitForTimeout(5000);
});
