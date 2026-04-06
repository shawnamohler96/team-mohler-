import fs from 'fs';
import path from 'path';

function processDirectory(dir: string) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Add referrerPolicy="no-referrer" to <img ...>
      // We need to be careful not to add it twice
      content = content.replace(/<img\s+(?!.*referrerPolicy="no-referrer")/g, '<img referrerPolicy="no-referrer" ');
      content = content.replace(/<motion\.img\s+(?!.*referrerPolicy="no-referrer")/g, '<motion.img referrerPolicy="no-referrer" ');
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDirectory(path.join(process.cwd(), 'src'));
console.log('Done adding referrerPolicy');
