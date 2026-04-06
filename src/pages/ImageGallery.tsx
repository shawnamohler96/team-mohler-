import { motion } from 'motion/react';

const images = [
  '010grapevine2019_2.jpeg',
  '2_bjj_students_grappling_comp_2.jpeg',
  '2_guys_boxingscaled-100x100_copy.jpeg',
  '2_guys_grappling_close_up_2.jpeg',
  'gym_tour_pic_1.jpeg',
  'gym_tour_pic_3.jpeg',
  'gym_tour_pic_4.jpeg',
  'gym_tour_pic_6_2_2.jpeg',
  'gym_tour_pic_7.jpeg',
  'img_1490_1_2.jpeg',
  'kickboxing_image.jpeg',
  'kids_bjj_class_2.jpeg',
  'kidsprivatelesson.jpeg',
  'lady_boxing.jpeg',
  'linage_for_professor_mohler.jpeg',
  'little_lions_bjj_2.jpeg',
  'main-pic-main-pic-mohler.jpeg',
  'mma_picture_copy.jpeg',
  'mohelr_teaching_jiu-jitsu.jpeg',
  'mohler_877.jpeg',
  'mohler_logo_white_copy.jpeg',
  'mohler_pic.jpeg',
  'mohlerpic2.jpeg',
  'teenage_boxers_at_team_mohler_gym.jpeg',
  'teenclasses_copy.jpeg',
  'wrestling_class.jpeg'
];

export default function ImageGallery() {
  return (
    <div className="bg-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display uppercase mb-12 text-ink">Image Gallery</h1>
        <p className="text-lg text-ink/70 mb-12">Use this page to identify the filenames for each image. Let me know which filename should go to which section!</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <motion.div 
              key={img}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video overflow-hidden bg-gray-200">
                <img 
                  src={`/${img}`} 
                  alt={img} 
                  className="w-full h-full object-cover"
                 
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-sm font-mono font-bold text-accent-red break-all">"{img}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
