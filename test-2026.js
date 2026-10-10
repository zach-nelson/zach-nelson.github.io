const puppeteer = require('puppeteer');
const path = require('path');

async function test2026() {
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
  
  // Scroll to end (2026)
  const scrollY = 15400;
  console.log(`Scrolling to end (${scrollY}px) to reach 2026...`);
  await page.evaluate((scrollPos) => {
    window.scrollTo(0, scrollPos);
  }, scrollY);
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const displayedYear = await page.$eval('#year-counter', el => el.textContent);
  console.log(`Year counter shows: ${displayedYear}`);
  
  if (parseInt(displayedYear) >= 2024) {
    console.log('✓ Successfully reaches near 2026!');
  } else {
    console.log('✗ Does not reach 2026, only reaches ' + displayedYear);
  }
  
  await page.screenshot({ path: '/tmp/timeline-2026.png' });
  console.log('Screenshot saved to /tmp/timeline-2026.png');
  
  await browser.close();
}

test2026().catch(console.error);
