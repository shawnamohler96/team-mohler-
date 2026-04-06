import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const files = fs.readdirSync(publicDir);

for (const file of files) {
  const stat = fs.statSync(path.join(publicDir, file));
  console.log(`${file}: ${stat.size} bytes`);
}
