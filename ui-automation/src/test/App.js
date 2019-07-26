import puppeteer from 'puppeteer';

let page = null;
let browser = null;

beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 80, args: ['--start-fullscreen'], defaultViewport: null});
    page = await browser.newPage();
  });

  describe('<App/>', () => {
      test('Should have header', async () => {
            await page.goto('http://localhost:3000/')
            await page.waitForSelector('.header > h4')
            const header = await page.$eval('.header > h4', el => el.textContent)
            expect(header).toBe('Puppeteer Demoadfasdaf')
      })

      test('Should have Form Component', async () => {
            await page.goto('http://localhost:3000/')
            await page.waitForSelector('.customForm')
      })

      test('Should have submit component', async () => {
            await page.goto('http://localhost:3000/')
            await page.waitForSelector('.customForm > .row > .col:nth-child(1) > .card') 
      })

      test('Should have form data component', async () => {
            await page.goto('http://localhost:3000/')
            await page.waitForSelector('.customForm > .row > .col:nth-child(2) > .card') 
      })

  })

afterAll(() => {
browser.close();
});
