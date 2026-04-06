import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook } from 'lucide-react';

export default function SocialSection() {
  const fallbackImages = [
    { src: `/gym-tour-pic622.jpeg`, alt: 'Training 1' },
    { src: `/gym-tour-pic7.jpeg`, alt: 'Training 2' },
    { src: `/gym-tour-pic3.jpeg`, alt: 'Training 3' },
    { src: `/gym-tour-pic4.jpeg`, alt: 'Training 4' },
    { src: `/mohler-teaching-jiu-jitsu-2.jpeg`, alt: 'Training 5' },
    { src: `/2-guys-grappling-closeup2.jpeg`, alt: 'Training 6' },
  ];

  const [instagramImages, setInstagramImages] = useState(fallbackImages);

  useEffect(() => {
    // To connect live: 
    // 1. Create a free account at Behold.so or similar service
    // 2. Connect your Instagram @mohlermma
    // 3. Paste the provided JSON URL below
    const fetchLiveFeed = async () => {
      try {
        const FEED_URL = ''; // PASTE YOUR LIVE FEED URL HERE
        if (!FEED_URL) return;

        const response = await fetch(FEED_URL);
        const data = await response.json();
        
        // Map the data to the format we need (src and alt)
        if (Array.isArray(data)) {
          const formatted = data.slice(0, 6).map((post: any) => ({
            src: post.media_url || post.thumbnail_url,
            alt: post.caption || 'Instagram Post'
          }));
          setInstagramImages(formatted);
        }
      } catch (err) {
        console.error("Live feed failed, using fallback images", err);
      }
    };

    fetchLiveFeed();
  }, []);

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-secondary-bg overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full text-center flex flex-col items-center text-white"
        >
          <h2 className="text-3xl md:text-5xl font-display uppercase leading-tight mb-3 tracking-tighter">
            FOLLOW US ON <br />
            <span className="text-accent-red">SOCIAL MEDIA</span>
          </h2>
          <div className="w-16 h-1 bg-accent-red mb-6"></div>
          
          <div className="flex gap-4 mb-8">
            <a 
              href="https://www.facebook.com/allen.mohler" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent-red rounded-full flex items-center justify-center hover:bg-white hover:text-accent-red transition-all duration-300 shadow-lg group"
            >
              <Facebook size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.instagram.com/mohlermma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent-red rounded-full flex items-center justify-center hover:bg-white hover:text-accent-red transition-all duration-300 shadow-lg group"
            >
              <Instagram size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Instagram Widget Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl bg-white rounded-sm overflow-hidden shadow-2xl"
        >
          {/* Instagram Header */}
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-red p-0.5">
                <img referrerPolicy="no-referrer" src={`/mohler-logo-white-copy.jpeg`} 
                  alt="Mohler MMA Logo" 
                  className="w-full h-full object-contain bg-black rounded-full"
                 
                />
              </div>
              <div>
                <h3 className="font-bold text-ink leading-tight">mohlermma</h3>
                <p className="text-xs text-gray-500 font-medium">TEAM MOHLER - MOHLER MMA</p>
                <div className="flex gap-3 mt-1">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">4,726 followers</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">1,017 posts</span>
                </div>
              </div>
            </div>
            <a 
              href="https://www.instagram.com/mohlermma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-red hover:scale-110 transition-transform"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-3 gap-0.5 bg-gray-100">
            {instagramImages.map((img, idx) => (
              <div key={idx} className="aspect-square overflow-hidden relative group">
                <img referrerPolicy="no-referrer" src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white opacity-70" size={20} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
