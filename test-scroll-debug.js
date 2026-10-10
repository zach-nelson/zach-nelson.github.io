const puppeteer = require('puppeteer');
const path = require('path');

async function debugScroll() {
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
  
  // Check page dimensions
  const dimensions = await page.evaluate(() => {
    const spacer = document.querySelector('.scroll-spacer');
    const timeline = document.getElementById('scroll-timeline');
    return {
      documentHeight: document.documentElement.scrollHeight,
      spacerHeight: spacer ? spacer.offsetHeight : 'not found',
      timelineHeight: timeline ? timeline.offsetHeight : 'not found',
      viewportHeight: window.innerHeight
    };
  });
  
  console.log('Page dimensions:', dimensions);
  
  // Try scrolling to various positions
  for (const scrollY of [5000, 10000, 15000, 20000]) {
    await page.evaluate((pos) => {
      window.scrollTo(0, pos);
    }, scrollY);
    
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const result = await page.evaluate(() => {
      return {
        actualScrollY: window.pageYOffset,
        year: document.getElementById('year-counter')?.textContent || 'N/A'
      };
    });
    
    console.log(`Requested ${scrollY}px → actual ${result.actualScrollY}px → year ${result.year}`);
  }
  
  await browser.close();
}

debugScroll().catch(console.error);
