const fs = require('fs');
const path = require('path');

const mappings = {
  'kids-bjj.jpeg': 'KIDS BJJ CLASS 2.jpeg',
  'grappling-closeup.jpeg': '2 guys grappling close up 2.jpeg',
  'adultkickboxing-small.jpeg': 'Kickboxing Image.jpeg',
  'teen-bjj-2019.jpg': '010Grapevine2019 2.jpeg',
  'kids-private-lesson.jpeg': 'KidsPrivateLesson.jpeg',
  'professor-mohler.jpeg': 'mohler 877.jpeg',
  'gym-tour-pic-4.jpg': 'gym tour pic 4.jpeg',
  'little-lions.jpeg': 'Little Lions BJJ 2.jpeg',
  'teen-boxing.jpeg': 'Teenage boxers at Team Mohler gym.jpeg',
  'mohlerteaching-bjj.jpeg': 'mohelr teaching jiu-jitsu .jpeg',
  'teen-classes.jpeg': 'teenclasses copy.jpeg',
  '2-guys-boxing.jpeg': '2 guys boxingscaled-100x100 copy.jpeg',
  'gym-tour-pic-6.jpeg': 'gym tour pic 6 2 2.jpeg',
  'gym-tour-pic-7.jpeg': 'gym tour pic 7.jpeg',
  'gym-tour-pic-3.jpg': 'gym tour pic 3.jpeg',
  'adult-bjj.jpg': '2 BJJ students grappling comp 2.jpeg',
  'mohlerprofilepic3.jpeg': 'mohler Pic.jpeg',
  'lineage-mohler.jpeg': ' linage for professor mohler .jpeg',
  'adultprivatelessons.png': 'IMG_1490 (1) 2.jpeg',
  'private-lesson.png': 'IMG_1490 (1) 2.jpeg',
  'adultboxing.jpeg': 'lady boxing.jpeg',
  'wrestling.jpeg': 'Wrestling class.jpeg',
  'gymtourpic-new.png': 'gym tour pic 1.jpeg',
  'adult-mma.jpeg': ' MMA PICture copy.jpeg',
  'logo-navbar.jpeg': 'mohler logo white copy.jpeg'
};

// Rename files in public/
for (const [oldName, newName] of Object.entries(mappings)) {
  const oldPath = path.join(__dirname, 'public', oldName);
  const newPath = path.join(__dirname, 'public', newName);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${oldName} to ${newName}`);
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
      // Replace exact matches like "/kids-bjj.jpeg" with "/KIDS BJJ CLASS 2.jpeg"
      const regex = new RegExp(`/${oldName.replace(/\./g, '\\.')}`, 'g');
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
