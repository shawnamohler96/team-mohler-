import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const publicFiles = new Set(fs.readdirSync(publicDir));

const srcDir = path.join(process.cwd(), 'src');

function checkFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find all strings that look like image paths
  const regex = /["'`]\/([^"'`]+\.(jpeg|jpg|png|gif|svg|webp))["'`]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const filename = match[1];
    if (!publicFiles.has(filename)) {
      console.log(`File: ${filePath}`);
      console.log(`Missing image: ${filename}`);
      
      // Try to find a case-insensitive match
      const lowerFilename = filename.toLowerCase();
      for (const pubFile of publicFiles) {
        if (pubFile.toLowerCase() === lowerFilename) {
          console.log(`  -> Did you mean: ${pubFile}?`);
        }
      }
    }
  }
}

function walkDir(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      checkFile(fullPath);
    }
  }
}

walkDir(srcDir);
console.log('Check complete.');
