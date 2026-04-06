const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

const publicFiles = fs.readdirSync(publicDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.svg'));

const usedImages = new Set();

function findImagesInDir(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      findImagesInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.html')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Look for anything ending in .jpeg, .jpg, .png, .svg
      const matches = content.match(/[a-zA-Z0-9_.-]+\.(jpeg|jpg|png|svg)/g);
      if (matches) {
        matches.forEach(m => usedImages.add(m));
      }
    }
  });
}

findImagesInDir(srcDir);
findImagesInDir(__dirname); // for index.html

console.log('Public files:', publicFiles);
console.log('Used images:', Array.from(usedImages));

const missingFiles = Array.from(usedImages).filter(img => !publicFiles.includes(img));
console.log('Missing files:', missingFiles);

