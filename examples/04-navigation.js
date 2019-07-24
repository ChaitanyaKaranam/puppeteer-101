const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 300, args: ['--start-fullscreen'], defaultViewport: null})
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://news.google.com/?tab=wn&hl=en-IN&gl=IN&ceid=IN:en')
  
  await page.setViewport({ width: 1920, height: 969 })
  
  await navigationPromise
  
  await page.waitForSelector('.zWHNCf > div:nth-child(6) > .SFllF > .e20EGc > .ICsaqd')

  await Promise.all([
        page.click('.zWHNCf > div:nth-child(6) > .SFllF > .e20EGc > .ICsaqd'),
        page.waitForNavigation()
    ])

  await page.screenshot({ path: 'images/screenshot1.png'});
  
  await page.waitForSelector('.zWHNCf > div:nth-child(7) > .SFllF > .e20EGc > .ICsaqd')

  await Promise.all([
        page.click('.zWHNCf > div:nth-child(7) > .SFllF > .e20EGc > .ICsaqd'),
        page.waitForNavigation()
    ])

  await page.screenshot({ path: 'images/screenshot2.png'});
  
  await page.waitForSelector('.zWHNCf > div:nth-child(8) > .SFllF > .e20EGc > .ICsaqd')

  await Promise.all([
        page.click('.zWHNCf > div:nth-child(8) > .SFllF > .e20EGc > .ICsaqd'),
        page.waitForNavigation()
    ])

  await page.screenshot({ path: 'images/screenshot3.png'});
  
  await page.waitForSelector('.zWHNCf > div:nth-child(9) > .SFllF > .e20EGc > .ICsaqd')

  await Promise.all([
        page.click('.zWHNCf > div:nth-child(9) > .SFllF > .e20EGc > .ICsaqd'),
        page.waitForNavigation()
    ])
  
  await page.screenshot({ path: 'images/screenshot4.png'});
  
  await page.waitForSelector('.zWHNCf > div:nth-child(10) > .SFllF > .e20EGc > .ICsaqd')

  await Promise.all([
        page.click('.zWHNCf > div:nth-child(10) > .SFllF > .e20EGc > .ICsaqd'),
        page.waitForNavigation()
    ])

  await page.screenshot({ path: 'images/screenshot5.png'});
  
  await browser.close()
})()