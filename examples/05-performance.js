/*
    Reference from - https://michaljanaszek.com/blog/test-website-performance-with-puppeteer
*/

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');

  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.timing))
  );
  
  console.log(extractDataFromPerformanceTiming(
    performanceTiming,
    'domainLookupStart',
    'domainLookupEnd',
    'connectStart',
    'connectEnd',
    'secureConnectionStart',
    'requestStart',
    'responseStart',
    'responseEnd',
    'domLoading',
    'domInteractive',
    'domContentLoadedEventStart',
    'domContentLoadedEventEnd',
    'domComplete',
    'loadEventStart',
    'loadEventEnd'
  ))

  await browser.close();
})();

const extractDataFromPerformanceTiming = (timing, ...dataNames) => {
    const navigationStart = timing.navigationStart;
  
    const extractedData = {};
    dataNames.forEach(name => {
      extractedData[name] = `${timing[name] - navigationStart} ms`;
    });
  
    return extractedData;
  };