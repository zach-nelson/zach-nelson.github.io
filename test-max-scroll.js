const puppeteer = require('puppeteer');
const path = require('path');

async function testMaxScroll() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  const htmlPath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(htmlPath, { waitUntil: 'networkidle2' });
  await page.waitForSelector('#scroll-timeline');
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Scroll to absolute maximum
  const dimensions = await page.evaluate(() => {
    return {
      scrollHeight: document.documentElement.scrollHeight,
      innerHeight: window.innerHeight,
      maxScroll: document.documentElement.scrollHeight - window.innerHeight
    };
  });
  
  console.log(`Attempting to scroll to ${dimensions.maxScroll}px...`);
  
  await page.evaluate((scrollPos) => {
    document.documentElement.scrollTop = scrollPos;
    window.scrollTo({ top: scrollPos, behavior: 'instant' });
  }, dimensions.maxScroll);
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const maxScrollResult = await page.evaluate(() => {
    return {
      actualScroll: window.pageYOffset || document.documentElement.scrollTop,
      year: document.getElementById('year-counter')?.textContent || 'N/A'
    };
  });
  
  console.log('Maximum scroll test:');
  console.log(`  Document scroll height: ${dimensions.scrollHeight}px`);
  console.log(`  Window inner height: ${dimensions.innerHeight}px`);
  console.log(`  Max scrollable: ${dimensions.maxScroll}px`);
  console.log(`  Actual scroll position: ${maxScrollResult.actualScroll}px`);
  console.log(`  Year at max scroll: ${maxScrollResult.year}`);
  
  await page.screenshot({ path: '/tmp/timeline-max-scroll.png' });
  console.log('Screenshot saved to /tmp/timeline-max-scroll.png');
  
  await browser.close();
}

testMaxScroll().catch(console.error);
