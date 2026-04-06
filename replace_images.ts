import fs from 'fs';
import path from 'path';

const replacements = {
  '010grapevine2019_2.jpeg': 'kids-bjj-class2.jpeg', // fallback
  '2_bjj_students_grappling_comp_2.jpeg': '2-bjj-students-grappling-comp2.jpeg',
  '2_guys_boxingscaled-100x100_copy.jpeg': '2-guys-boxing-scaled-100x100copy.jpeg',
  '2_guys_grappling_close_up_2.jpeg': '2-guys-grappling-closeup2.jpeg',
  'gym_tour_pic_1.jpeg': 'gym-tour-pic1.jpeg',
  'gym_tour_pic_3.jpeg': 'gym-tour-pic3.jpeg',
  'gym_tour_pic_4.jpeg': 'gym-tour-pic4.jpeg',
  'gym_tour_pic_6_2_2.jpeg': 'gym-tour-pic622.jpeg',
  'gym_tour_pic_7.jpeg': 'gym-tour-pic7.jpeg',
  'img_1490_1_2.jpeg': 'adult-private-lesson.jpeg',
  'kickboxing_image.jpeg': 'kickboxing-image.jpeg',
  'kids_bjj_class_2.jpeg': 'kids-bjj-class2.jpeg',
  'kidsprivatelesson.jpeg': 'kids-private-lesson.jpeg',
  'lady_boxing.jpeg': 'lady-boxing-877.jpeg',
  'linage_for_professor_mohler.jpeg': 'professor-mohler-pic490-1-2.jpeg',
  'little_lions_bjj_2.jpeg': 'little-lions-bjj2.jpeg',
  'mma_picture_copy.jpeg': 'mma-picture-copy.jpeg',
  'mohelr_teaching_jiu-jitsu.jpeg': 'mohler-teaching-jiu-jitsu-2.jpeg',
  'mohler_877.jpeg': 'mohlerpic2.jpeg',
  'mohler_logo_white_copy.jpeg': 'mohler-logo-white-copy.jpeg',
  'mohler_pic.jpeg': 'mohler-pic.jpeg',
  'teenage_boxers_at_team_mohler_gym.jpeg': '2-guys-boxing-scaled-100x100copy.jpeg',
  'teenclasses_copy.jpeg': 'kids-bjj-class2.jpeg',
  'wrestling_class.jpeg': '2-guys-grappling-closeup2.jpeg',
};

function walkDir(dir: string, callback: (filePath: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    for (const [oldName, newName] of Object.entries(replacements)) {
      content = content.split(oldName).join(newName);
    }
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
