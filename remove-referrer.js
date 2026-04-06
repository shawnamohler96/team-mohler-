import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');

function updateFilesInDir(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      updateFilesInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      if (content.includes('referrerPolicy="no-referrer"')) {
        let newContent = content.replace(/ referrerPolicy="no-referrer"/g, '');
        newContent = newContent.replace(/ referrerPolicy="no-referrer-when-downgrade"/g, '');
        
        if (newContent !== content) {
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log('Updated', fullPath);
        }
      }
    }
  });
}

updateFilesInDir(srcDir);
