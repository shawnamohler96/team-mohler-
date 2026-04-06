const fs = require('fs');
const path = require('path');

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

    // Replace src="/..." with src={`${import.meta.env.BASE_URL}...`}
    const srcRegex = /src="\/([^"]+\.jpeg)"/g;
    if (srcRegex.test(content)) {
      content = content.replace(srcRegex, 'src={`${import.meta.env.BASE_URL}$1`}');
      changed = true;
    }

    // Replace image="/..." with image={`${import.meta.env.BASE_URL}...`}
    const imageRegex = /image="\/([^"]+\.jpeg)"/g;
    if (imageRegex.test(content)) {
      content = content.replace(imageRegex, 'image={`${import.meta.env.BASE_URL}$1`}');
      changed = true;
    }

    // Replace img: "/..." with img: `${import.meta.env.BASE_URL}...`
    const imgPropRegex = /img:\s*"\/([^"]+\.jpeg)"/g;
    if (imgPropRegex.test(content)) {
      content = content.replace(imgPropRegex, 'img: `${import.meta.env.BASE_URL}$1`');
      changed = true;
    }

    // Replace image = "/..." with image = `${import.meta.env.BASE_URL}...`
    const imagePropRegex = /image\s*=\s*"\/([^"]+\.jpeg)"/g;
    if (imagePropRegex.test(content)) {
      content = content.replace(imagePropRegex, 'image = `${import.meta.env.BASE_URL}$1`');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filepath, content, 'utf8');
      console.log(`Updated ${filepath}`);
    }
  }
});
