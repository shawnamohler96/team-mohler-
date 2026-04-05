import { motion } from 'motion/react';
import { Shield, Award, Users, Star } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

export default function About() {
  return (
    <div className="bg-primary-bg pt-32">
      <SEO 
        title="About Professor Allen Mohler | Team Mohler MMA Grapevine" 
        description="Learn about Professor Allen Mohler, a 5th-degree BJJ black belt and pioneer of Texas martial arts. With over 30 years of experience, he leads Team Mohler MMA in Grapevine, TX." 
      />
      {/* Hero Section - Prestige Layout */}
      <section className="split-layout border-b border-ink/10 relative">
        <div className="flex flex-col justify-center section-padding border-r border-ink/10 relative z-20 bg-primary-bg/80 lg:bg-transparent">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-burnished mb-12 block uppercase tracking-widest font-bold">The Founder</span>
            <h1 className="text-[12vw] lg:text-[8vw] xl:text-[7vw] mb-12 leading-[0.8] tracking-tighter whitespace-nowrap">
              PROFESSOR<br />
              <span className="text-accent-red">MOHLER</span>
            </h1>
            <p className="text-xl text-ink/60 font-light max-w-md mb-16 leading-relaxed">
              A pioneer of Brazilian Jiu-Jitsu in Texas, Professor Mohler brings over 30 years of elite Brazilian Jiu-Jitsu and MMA coaching experience to the mats.
            </p>
          </motion.div>
        </div>
        
        <div className="relative h-[60vh] lg:h-auto overflow-hidden bg-secondary-bg z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            src="/mohlerprofilepic3.jpeg" 
            alt="Professor Mohler" 
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-12 right-12">
            <span className="vertical-text text-micro text-white/40">BLACK BELT 5TH DEGREE</span>
          </div>
        </div>
      </section>

      {/* The Legacy & Lineage Combined Section */}
      <section className="section-padding border-b border-ink/10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Column: The Legacy Text */}
            <div className="lg:col-span-7">
              <h2 className="text-5xl md:text-7xl mb-12 font-display uppercase tracking-tighter">THE LEGACY</h2>
              <div className="space-y-8 text-xl text-ink/70 font-light leading-relaxed">
                <p>
                  Widely recognized as one of the most respected figures in the Texas martial arts community, Professor Mohler’s journey began decades ago—driven by a passion for technical excellence and a commitment to his students’ growth.
                </p>
                <p>
                  As a 5th Degree Black Belt under the legendary Romero “Jacare” Cavalcanti, he represents a direct lineage to the founders of Brazilian Jiu-Jitsu. His teaching philosophy emphasizes precision, discipline, and the “gentle art” as a way of life.
                </p>
                <p>
                  Beyond his own accolades, he has produced countless champions at the highest levels of IBJJF and MMA competition. However, his greatest pride remains the community he has built—a place where everyone, from kids to professionals, can thrive.
                </p>
              </div>

              {/* Credentials Gold Boxes */}
              <div className="mt-16">
                <span className="text-burnished mb-8 block uppercase tracking-widest font-bold">Credentials</span>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="p-6 bg-burnished shadow-xl relative group overflow-hidden rounded-sm"
                  >
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-secondary-bg flex items-center justify-center rounded-full shadow-inner border border-white/10">
                        <Award className="text-burnished-gold glow-burnished" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-display uppercase text-secondary-bg tracking-tight leading-none mb-1">5th Degree</h3>
                        <p className="text-[9px] text-secondary-bg/70 uppercase tracking-[0.2em] font-black">BJJ Black Belt</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="p-6 bg-burnished shadow-xl relative group overflow-hidden rounded-sm"
                  >
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-secondary-bg flex items-center justify-center rounded-full shadow-inner border border-white/10">
                        <Shield className="text-burnished-gold glow-burnished" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-display uppercase text-secondary-bg tracking-tight leading-none mb-1">30+ Years</h3>
                        <p className="text-[9px] text-secondary-bg/70 uppercase tracking-[0.2em] font-black">Experience</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="p-6 bg-burnished shadow-xl relative group overflow-hidden rounded-sm"
                  >
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-secondary-bg flex items-center justify-center rounded-full shadow-inner border border-white/10">
                        <Users className="text-burnished-gold glow-burnished" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-display uppercase text-secondary-bg tracking-tight leading-none mb-1">Master</h3>
                        <p className="text-[9px] text-secondary-bg/70 uppercase tracking-[0.2em] font-black">Instructor</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="p-6 bg-burnished shadow-xl relative group overflow-hidden rounded-sm"
                  >
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-secondary-bg flex items-center justify-center rounded-full shadow-inner border border-white/10">
                        <Star className="text-burnished-gold glow-burnished" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-display uppercase text-secondary-bg tracking-tight leading-none mb-1">Pioneer</h3>
                        <p className="text-[9px] text-secondary-bg/70 uppercase tracking-[0.2em] font-black">Texas Jiu-Jitsu & MMA</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Column: The Lineage Integrated */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="relative aspect-[4/5] overflow-hidden group mb-12 shadow-2xl">
                  <img 
                    src="/lineage-mohler.jpeg" 
                    alt="The Gracie Lineage" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-burnished-gold/10 mix-blend-overlay"></div>
                  
                  {/* Overlay Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-ink to-transparent">
                    <span className="text-burnished mb-2 block uppercase tracking-widest font-bold">The Lineage</span>
                    <p className="text-white text-sm font-light tracking-widest uppercase">Direct connection to the source</p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-ink p-8 border-l-4 border-burnished shadow-2xl"
                >
                  <h3 className="text-xl md:text-2xl font-serif italic font-medium leading-tight text-white">
                    Helio Gracie <span className="text-burnished-gold mx-2 glow-burnished">→</span> 
                    Rolls Gracie <span className="text-burnished-gold mx-2 glow-burnished">→</span> 
                    Romero "Jacare" Cavalcanti <span className="text-accent-red mx-2">→</span> 
                    Professor Mohler
                  </h3>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection image="/mohlerprofilepic3.jpeg" />
    </div>
  );
}
