const fs = require('fs');
const path = require('path');

const mappings = {
  ' MMA PICture copy.jpeg': 'MMA PICture copy.jpeg',
  ' linage for professor mohler .jpeg': 'linage for professor mohler.jpeg',
  'mohelr teaching jiu-jitsu .jpeg': 'mohelr teaching jiu-jitsu.jpeg'
};

// Rename files in public/
for (const [oldName, newName] of Object.entries(mappings)) {
  const oldPath = path.join(__dirname, 'public', oldName);
  const newPath = path.join(__dirname, 'public', newName);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed "${oldName}" to "${newName}"`);
  }
}

// Update code in src/
function walkSync(dir, callback) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    var filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile()) {
      callback(filepath);
    }
  });
}

walkSync(path.join(__dirname, 'src'), (filepath) => {
  if (filepath.endsWith('.tsx') || filepath.endsWith('.ts')) {
    let content = fs.readFileSync(filepath, 'utf8');
    let changed = false;
    for (const [oldName, newName] of Object.entries(mappings)) {
      // Replace exact matches
      const regex = new RegExp(`/${oldName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, `/${newName}`);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(filepath, content, 'utf8');
      console.log(`Updated ${filepath}`);
    }
  }
});
