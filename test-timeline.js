const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function testTimeline() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  const htmlPath = 'file://' + path.resolve(__dirname, 'index.html');
  console.log(`Loading ${htmlPath}...`);
  await page.goto(htmlPath, { waitUntil: 'networkidle2' });
  
  // Wait for the timeline to be loaded
  await page.waitForSelector('#scroll-timeline', { timeout: 5000 });
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Test years: 1979, 1990, 2004, 2020
  const testYears = [1979, 1990, 2004, 2020];
  
  for (const year of testYears) {
    console.log(`\nTesting year ${year}...`);
    
    // Calculate scroll position for this year
    // Year range: 1977-2026 (49 years)
    // Scroll range: 0 to spacer height (15400px)
    const yearProgress = (year - 1977) / 49;
    const scrollY = Math.floor(yearProgress * 15400);
    
    console.log(`  Scrolling to position ${scrollY}px...`);
    await page.evaluate((scrollPos) => {
      document.documentElement.scrollTop = scrollPos;
      window.scrollTo({ top: scrollPos, behavior: 'instant' });
    }, scrollY);
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Check year counter
    const displayedYear = await page.$eval('#year-counter', el => el.textContent);
    console.log(`  Year counter shows: ${displayedYear}`);
    
    // Check dispatch cards
    const visibleCards = await page.evaluate(() => {
      const cards = document.querySelectorAll('.dispatch-card.visible');
      return Array.from(cards).map(card => ({
        year: card.getAttribute('data-year'),
        title: card.querySelector('.dispatch-card-title')?.textContent || 'N/A'
      }));
    });
    console.log(`  Visible dispatch cards: ${visibleCards.length}`);
    if (visibleCards.length > 0) {
      visibleCards.forEach(card => {
        console.log(`    - ${card.year}: ${card.title}`);
      });
    }
    
    // Check milestone
    const milestone = await page.evaluate(() => {
      const el = document.getElementById('current-milestone');
      return {
        text: el?.textContent || '',
        opacity: el?.style.opacity || ''
      };
    });
    if (milestone.text) {
      console.log(`  Current milestone: ${milestone.text}`);
    }
    
    // Check props
    const propsCount = await page.evaluate(() => {
      return document.querySelectorAll('.prop').length;
    });
    console.log(`  Scene props visible: ${propsCount}`);
    
    // Take screenshot
    const screenshotPath = `/tmp/timeline-${year}.png`;
    await page.screenshot({
      path: screenshotPath,
      fullPage: false
    });
    console.log(`  Screenshot saved to ${screenshotPath}`);
  }
  
  await browser.close();
  console.log('\nAll tests complete!');
}

testTimeline().catch(console.error);
