import { motion } from 'motion/react';
import { Shield, Users, Trophy, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScheduleSection from '../components/ScheduleSection';
import CTASection from '../components/CTASection';
import { adultSchedule, adultPolicy } from './ScheduleAdult';

export default function MuayThai() {
  const pillars = [
    {
      title: "Authentic Techniques",
      icon: <Star size={40} />,
      description: "Learn the art of eight limbs from experienced instructors who will guide you through proper form and technique for punches, kicks, elbows, and knees."
    },
    {
      title: "Unleash Your Power",
      icon: <Zap size={40} />,
      description: "Develop devastating striking power, speed, and precision while improving your cardiovascular fitness and overall strength."
    },
    {
      title: "Total-Body Conditioning",
      icon: <Trophy size={40} />,
      description: "Experience a challenging and rewarding workout that engages your entire body, building lean muscle and burning calories."
    },
    {
      title: "Boost Your Confidence",
      icon: <Shield size={40} />,
      description: "Gain self-confidence and mental toughness as you master new skills and push your limits in a supportive and encouraging environment."
    }
  ];

  return (
    <div className="bg-white pt-32">
      <SEO 
        title="Adults Muay Thai Kickboxing | Team Mohler MMA" 
        description="Learn Muay Thai in Grapevine, TX at Mohler MMA. Our adult Muay Thai classes provide a high-intensity workout and elite striking instruction. Start your free trial today!" 
      />
      {/* Header & Hero Section - Split Layout */}
      <section className="relative min-h-[85vh] flex flex-col lg:flex-row bg-white overflow-hidden">
        {/* Text Content Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="text-micro text-white mb-8 block uppercase font-bold tracking-[0.5em] bg-accent-red px-4 py-1 inline-block">Adult Program</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-ink leading-[0.8] mb-12 uppercase tracking-tighter">
              MUAY THAI <span className="text-accent-red italic">KICKBOXING</span>
            </h1>
            <p className="text-xl md:text-2xl text-ink font-light mb-16 leading-tight uppercase tracking-widest border-l-2 border-accent-red pl-8">
              Perfect For: Anyone wanting an elite, full-body cardio workout while learning the "Art of Eight Limbs." Great for weight loss, stress relief, and coordination.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-accent-red text-white px-12 py-6 text-micro uppercase tracking-[0.3em] font-black hover:bg-ink hover:text-white transition-all duration-500 text-center shadow-[0_20px_60px_rgba(155,27,48,0.5)]">
                Book a FREE Trial
              </Link>
              <Link to="/schedule-adult" className="w-full sm:w-auto bg-ink text-white px-12 py-6 text-micro uppercase tracking-[0.3em] font-black hover:bg-accent-red transition-all duration-500 text-center shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                View Schedule
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={`/kickboxing-image.jpeg`} 
            alt="Muay Thai Kickboxing" 
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 25%' }}
           
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden block"></div>
        </div>
      </section>

      {/* Main Content: Philosophy & Benefits */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            <span className="text-micro text-accent-red mb-6 block uppercase font-bold tracking-[0.4em]">Program Description</span>
            <h2 className="text-5xl md:text-7xl font-display text-ink leading-[0.85] uppercase mb-12 tracking-tighter">
              THE ART OF <span className="text-accent-red italic">EIGHT LIMBS</span>
            </h2>
            <div className="space-y-8">
              <p className="text-xl text-ink/80 leading-relaxed font-light">
                The term Muay Thai kickboxing has become kind of a blanket term to cover anything that involves punching and kicking. In actuality, Muay Thai has a few distinct features.
              </p>
              <p className="text-xl text-ink/80 leading-relaxed font-light">
                It’s a centuries-old fighting art that comes mostly from Thailand. In addition to striking with fists and shins, this martial art also involves knee and elbow strikes, as well as a form of stand-up grappling called a clinch. Sometimes referred to as the “art of eight limbs,” this fighting art can be very effective.
              </p>
            </div>
            
            {/* The Four Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {pillars.map((pillar, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                  }}
                  className="p-6 md:p-8 bg-ink shadow-2xl relative group flex flex-col h-full overflow-hidden transition-all duration-500 hover:bg-accent-red"
                >
                  {/* Dynamic Glow Effect for the Card (Halo) */}
                  <div className="absolute inset-0 bg-burnished/20 blur-3xl rounded-sm scale-0 group-hover:scale-110 transition-transform duration-700 -z-10"></div>
                  
                  {/* Accent Gold Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-burnished z-20"></div>

                  {/* Animated Background Element */}
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-burnished-gold/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
                  
                  {/* Accent Gold Icon with Dynamic Glow */}
                  <div className="relative flex-shrink-0 mb-8">
                    <div className="w-16 h-16 bg-burnished rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500 border-2 border-white/20 relative z-10">
                      <div className="text-secondary-bg">
                        {pillar.icon}
                      </div>
                    </div>
                    {/* Subtle Glow */}
                    <div className="absolute inset-0 bg-burnished/20 blur-xl rounded-full scale-0 group-hover:scale-125 transition-transform duration-700 -z-10"></div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-display uppercase mb-4 text-white tracking-normal group-hover:text-white transition-colors leading-[1.1] relative z-10 break-words">
                    {pillar.title}
                  </h3>
                  
                  <div className="w-12 h-1 bg-burnished mb-6 group-hover:bg-white group-hover:w-24 transition-all duration-500 relative z-10"></div>
                  
                  <p className="text-sm text-white/70 leading-relaxed font-light group-hover:text-white transition-colors relative z-10">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <ScheduleSection 
        title="ADULT" 
        subtitle="SCHEDULE" 
        schedule={adultSchedule} 
        policy={adultPolicy} 
        variant="dark"
      />

      <CTASection image={`/kickboxing-image.jpeg`} />
    </div>
  );
}
