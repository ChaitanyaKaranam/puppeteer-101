const puppeteer = require('puppeteer');

// Goto Website and get a screenshot
(async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 300, args: ['--start-fullscreen'], defaultViewport: null});

    const page = await browser.newPage();

    await page.goto('https://news.google.com');

    await page.screenshot({ path: 'screenshot.png'});

    await browser.close();

})();