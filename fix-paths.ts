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
      
      // Replace src={`/filename.ext`} with src="/filename.ext"
      content = content.replace(/src=\{`(\/[^`]+)`\}/g, 'src="$1"');
      
      // Replace img: `/filename.ext` with img: "/filename.ext"
      content = content.replace(/img:\s*`(\/[^`]+)`/g, 'img: "$1"');
      
      // Replace src: `/filename.ext` with src: "/filename.ext"
      content = content.replace(/src:\s*`(\/[^`]+)`/g, 'src: "$1"');
      
      // Replace image={`/filename.ext`} with image="/filename.ext"
      content = content.replace(/image=\{`(\/[^`]+)`\}/g, 'image="$1"');
      
      // Replace bg-[url(`/filename.ext`)] with bg-[url('/filename.ext')]
      content = content.replace(/bg-\[url\(`(\/[^`]+)`\)\]/g, "bg-[url('$1')]");
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDirectory(path.join(process.cwd(), 'src'));
console.log('Done fixing image paths');
