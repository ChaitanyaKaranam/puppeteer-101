const puppeteer = require('puppeteer');

// Goto Website and get a screenshot
(async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 300});

    const page = await browser.newPage();

    await page.goto('https://google.com');

    await page.screenshot({ path: 'google.png'});

    await browser.close();

})();