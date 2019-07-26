const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 300, args: ['--start-fullscreen'], defaultViewport: null})
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('http://localhost:3000/')
  
  await page.setViewport({ width: 1920, height: 969 })
  
  await navigationPromise
  
  await page.waitForSelector('.customForm > .row > .col > .card > input:nth-child(2)')
  await page.click('.customForm > .row > .col > .card > input:nth-child(2)')
  
  await page.type('.customForm > .row > .col > .card > input:nth-child(2)', 'Krishna')
  
  await page.type('.customForm > .row > .col > .card > input:nth-child(3)', 'chaitanya')
  
  await page.type('.customForm > .row > .col > .card > .validate', 'k@tst.ocm')

  await page.type('.customForm > .row > .col > .card > input:nth-child(5)', 'test')
  
  await page.waitForSelector('.customForm > .row > .col > .card > .darken-4')
  await page.click('.customForm > .row > .col > .card > .darken-4')
  
  await browser.close()
})()