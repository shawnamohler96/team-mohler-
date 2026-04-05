import { motion } from 'motion/react';

const images = [
  '2-guys-boxing.jpeg',
  'adult-mma.jpeg',
  'adult-bjj.jpg',
  'kids-private-lesson.jpeg',
  'teen-bjj-2019.jpg',
  'adultboxing.jpeg',
  'adultkickboxing-small.jpeg',
  'adultprivatelessons.png',
  'grappling-closeup.jpeg',
  'gym-tour-pic-3.jpg',
  'gym-tour-pic-4.jpg',
  'gym-tour-pic-6.jpeg',
  'gym-tour-pic-7.jpeg',
  'gymtourpic-new.png',
  'kids-bjj.jpeg',
  'little-lions.jpeg',
  'logo-navbar.jpeg',
  'main-pic-main-pic-mohler.jpeg',
  'mohlerpic2.jpeg',
  'mohlerprofilepic3.jpeg',
  'mohlerteaching-bjj.jpeg',
  'private-lesson.png',
  'professor-mohler.jpeg',
  'teen-boxing.jpeg',
  'teen-classes.jpeg',
  'wrestling.jpeg'
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
                  referrerPolicy="no-referrer"
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
