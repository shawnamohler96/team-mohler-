import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  page.on('response', response => {
    if (!response.ok()) {
      console.log('NETWORK ERROR:', response.url(), response.status());
    }
  });

  await page.goto('https://www.teammohler.com/', { waitUntil: 'networkidle2' });
  
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      visible: img.offsetParent !== null,
      opacity: window.getComputedStyle(img).opacity,
      naturalWidth: img.naturalWidth
    }));
  });
  
  console.log('Images:', images);
  
  await browser.close();
})();
