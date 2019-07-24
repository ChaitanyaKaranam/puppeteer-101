const puppeteer = require('puppeteer');

// Goto Website and get a screenshot
(async () => {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('https://news.google.com', {waitUntil: 'networkidle2'});

    await page.pdf({ path: 'news.pdf', format: 'A4'});

    await browser.close();

})();