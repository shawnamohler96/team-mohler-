import { motion } from 'motion/react';

const images = [
  'kids-bjj-class2.jpeg',
  '2-bjj-students-grappling-comp2.jpeg',
  '2-guys-boxing-scaled-100x100copy.jpeg',
  '2-guys-grappling-closeup2.jpeg',
  'gym-tour-pic1.jpeg',
  'gym-tour-pic3.jpeg',
  'gym-tour-pic4.jpeg',
  'gym-tour-pic622.jpeg',
  'gym-tour-pic7.jpeg',
  'adult-private-lesson.jpeg',
  'kickboxing-image.jpeg',
  'kids-bjj-class2.jpeg',
  'kids-private-lesson.jpeg',
  'lady-boxing-877.jpeg',
  'professor-mohler-pic490-1-2.jpeg',
  'little-lions-bjj2.jpeg',
  'main-pic-main-pic-mohler.jpeg',
  'mma-picture-copy.jpeg',
  'mohler-teaching-jiu-jitsu-2.jpeg',
  'mohlerpic2.jpeg',
  'mohler-logo-white-copy.jpeg',
  'mohlerpic2.jpeg',
  '2-guys-boxing-scaled-100x100copy.jpeg',
  'kids-bjj-class2.jpeg',
  '2-guys-grappling-closeup2.jpeg',
  'wrestling-class.jpeg',
  'teen-jiu-jitsu.jpeg',
  'teen-boxing-class.jpeg',
  'linage-for-professor-mohler.jpeg'
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
                <img referrerPolicy="no-referrer" src={img}
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
