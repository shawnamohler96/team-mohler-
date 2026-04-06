import { motion } from 'motion/react';
import { Shield, Users, Trophy, Star, Clock, Target, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

export default function PrivateLessons() {
  const benefits = [
    {
      title: "Personalized Attention",
      icon: <Target size={40} />,
      description: "Receive one-on-one instruction tailored specifically to your goals, skill level, and learning style."
    },
    {
      title: "Accelerated Learning",
      icon: <Zap size={40} />,
      description: "Progress at a much faster rate with immediate feedback and corrections on every movement."
    },
    {
      title: "Flexible Scheduling",
      icon: <Clock size={40} />,
      description: "Book sessions at times that work best for your busy lifestyle, outside of our regular class hours."
    },
    {
      title: "Specific Goal Focus",
      icon: <Star size={40} />,
      description: "Whether it's competition prep, self-defense, or fitness, we focus entirely on what you want to achieve."
    }
  ];

  return (
    <div className="bg-white pt-32">
      <SEO 
        title="Private Martial Arts Lessons Grapevine TX" 
        description="Private martial arts lessons in Grapevine. One-on-one BJJ, boxing, and MMA training with expert coaches. Ideal for beginners or advanced students." 
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
            <span className="text-micro text-white mb-8 block uppercase font-bold tracking-[0.5em] bg-accent-red px-4 py-1 inline-block">Elite Training</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-ink leading-[0.8] mb-12 uppercase tracking-tighter">
              ADULT PRIVATE <span className="text-accent-red italic">LESSONS</span>
            </h1>
            <p className="text-xl md:text-2xl text-ink font-light mb-16 leading-tight uppercase tracking-widest border-l-2 border-accent-red pl-8">
              The fastest way to reach your martial arts goals. Personalized coaching from world-class instructors.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-accent-red text-white px-12 py-6 text-micro uppercase tracking-[0.3em] font-black hover:bg-ink hover:text-white transition-all duration-500 text-center shadow-[0_20px_60px_rgba(155,27,48,0.5)]">
                Book a Session
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
            src={`${import.meta.env.BASE_URL}IMG_1490_1_2.jpeg`} 
            alt="Private Martial Arts Lesson" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden block"></div>
        </div>
      </section>

      {/* Main Content: Why Private Lessons? */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <span className="text-micro text-accent-red mb-6 block uppercase font-bold tracking-[0.4em]">Why Choose Adult Private Training?</span>
            <h2 className="text-5xl md:text-7xl font-display text-ink leading-[0.85] uppercase mb-12 tracking-tighter">
              TAILORED TO <span className="text-accent-red">YOU</span>
            </h2>
            <div className="space-y-8">
              <p className="text-xl text-ink/80 leading-relaxed font-light">
                Private lessons are the ultimate tool for any martial artist, from the complete beginner to the advanced competitor. In a one-on-one setting, your instructor can identify and correct subtle details in your technique that might be missed in a group class.
              </p>
              <p className="text-xl text-ink/80 leading-relaxed font-light">
                At Mohler MMA, our adult private lessons cover all disciplines we offer: Brazilian Jiu-Jitsu, Boxing, Muay Thai, MMA, and Wrestling. We also offer private sessions for children, helping them build confidence and skills in a focused environment.
              </p>
            </div>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
            {benefits.map((benefit, i) => (
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
                      {benefit.icon}
                    </div>
                  </div>
                  {/* Subtle Glow */}
                  <div className="absolute inset-0 bg-burnished/20 blur-xl rounded-full scale-0 group-hover:scale-125 transition-transform duration-700 -z-10"></div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-display uppercase mb-4 text-white tracking-tight group-hover:text-white transition-colors leading-tight relative z-10">
                  {benefit.title}
                </h3>
                
                <div className="w-12 h-1 bg-burnished mb-6 group-hover:bg-white group-hover:w-24 transition-all duration-500 relative z-10"></div>
                
                <p className="text-sm text-white/70 leading-relaxed font-light group-hover:text-white transition-colors relative z-10">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection image={`${import.meta.env.BASE_URL}IMG_1490_1_2.jpeg`} />
    </div>
  );
}
