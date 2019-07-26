import puppeteer from 'puppeteer';

let browser = null;
let page = null;

beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 80, args: ['--start-fullscreen'], defaultViewport: null});
    page = await browser.newPage();
});

describe('<Submit/>', () => {

    test('Can fill form', async () => {
  
        await page.goto('http://localhost:3000/')
        
        await page.setViewport({ width: 1920, height: 969 })

        await page.waitForSelector('.customForm > .row > .col > .card > input:nth-child(2)')
        await page.click('.customForm > .row > .col > .card > input:nth-child(2)')
        
        await page.type('.customForm > .row > .col > .card > input:nth-child(2)', 'Krishna')  
        
        const firstName = await page.$eval('.customForm > .row > .col > .card > input:nth-child(2)', el => el.value);

        expect(firstName).toBe('Krishna')
        
        await page.type('.customForm > .row > .col > .card > input:nth-child(3)', 'chaitanya')
        
        const lastName = await page.$eval('.customForm > .row > .col > .card > input:nth-child(3)', el => el.value);

        
        expect(lastName).toBe('chaitanya')
        
        await page.type('.customForm > .row > .col > .card > .validate', 'k@test.com')        
        
        const email = await page.$eval('.customForm > .row > .col > .card > input:nth-child(4)', el => el.value);
        
        expect(email).toBe('k@test.com')

        await page.type('.customForm > .row > .col > .card > input:nth-child(5)', 'test')
        
        const message = await page.$eval('.customForm > .row > .col > .card > input:nth-child(5)', el => el.value);

        expect(message).toBe('test')
        
        await page.waitForSelector('.customForm > .row > .col > .card > .darken-4')
        await page.click('.customForm > .row > .col > .card > .darken-4')        

    }, 16000)


    test('Can Clear Form', async () => {

        await page.goto('http://localhost:3000/')
        
        await page.setViewport({ width: 1920, height: 969 })

        await page.waitForSelector('.customForm > .row > .col > .card > input:nth-child(2)')
        await page.click('.customForm > .row > .col > .card > input:nth-child(2)')
        
        await page.type('.customForm > .row > .col > .card > input:nth-child(2)', 'Krishna')

        await page.type('.customForm > .row > .col > .card > input:nth-child(3)', 'chaitanya')     
        
        await page.type('.customForm > .row > .col > .card > .validate', 'k@test.com')    

        await page.type('.customForm > .row > .col > .card > input:nth-child(5)', 'test')        
                
        await page.waitForSelector('.customForm > .row > .col > .card > .darken-4')

        await page.click('.customForm > .row > .col > .card > .darken-4')

        await page.click('.customForm > .row > .col > .card > .lighten-5')

        const firstName = await page.$eval('.customForm > .row > .col > .card > input:nth-child(2)', el => el.value);
        expect(firstName).toBe('')

        const lastName = await page.$eval('.customForm > .row > .col > .card > input:nth-child(3)', el => el.value);        
        expect(lastName).toBe('')

        const email = await page.$eval('.customForm > .row > .col > .card > input:nth-child(4)', el => el.value);        
        expect(email).toBe('')

        const message = await page.$eval('.customForm > .row > .col > .card > input:nth-child(5)', el => el.value);
        expect(message).toBe('')

    }, 16000)

})

afterAll(() => {
    browser.close();
});