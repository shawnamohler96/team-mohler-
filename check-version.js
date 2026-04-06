import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('https://www.teammohler.com/adult-programs', { waitUntil: 'networkidle2' });
  
  const html = await page.content();
  if (html.includes('2-bjj-students-grappling-comp2.jpeg')) {
    console.log('LATEST CODE IS DEPLOYED');
  } else if (html.includes('gym-tour-pic1.jpeg')) {
    console.log('OLD CODE IS DEPLOYED');
  } else {
    console.log('NEITHER IMAGE FOUND');
  }
  
  await browser.close();
})();
