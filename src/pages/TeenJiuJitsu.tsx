import { motion } from 'motion/react';
import { Shield, Users, Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScheduleSection from '../components/ScheduleSection';
import CTASection from '../components/CTASection';
import { kidsSchedule, kidsPolicy } from './ScheduleKids';

export default function TeenJiuJitsu() {
  const pillars = [
    {
      title: "Confidence That Carries Over",
      icon: <Shield size={40} />,
      description: "Jiu-Jitsu teaches teens how to stay calm under pressure and overcome challenges. As they progress, they build real confidence—not just on the mats, but in everyday life."
    },
    {
      title: "Discipline & Focus",
      icon: <Users size={40} />,
      description: "Our program requires attention, consistency, and respect. These habits naturally carry over into school, home life, and everything they do."
    },
    {
      title: "Strength, Fitness & Athleticism",
      icon: <Trophy size={40} />,
      description: "Jiu-Jitsu develops full-body strength, coordination, balance, and endurance—while keeping teens engaged and motivated."
    },
    {
      title: "Leadership & Character",
      icon: <Star size={40} />,
      description: "We emphasize accountability, respect, and perseverance. Teens learn how to lead by example, support their teammates, and take ownership of their growth."
    }
  ];

  return (
    <div className="bg-white pt-32">
      <SEO 
        title="Teen Brazilian Jiu Jitsu (Ages 13-17) | Team Mohler MMA" 
        description="Our teen BJJ classes in Grapevine, TX empower teenagers with confidence, discipline, and resilience. Start your free trial today!" 
      />
      {/* Header & Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row bg-white overflow-hidden">
        {/* Text Content Side with Atmospheric Background */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-atmospheric-kids z-10 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="text-micro text-accent-red mb-8 block uppercase font-bold tracking-[0.5em]">Teen Jiu-Jitsu (Ages 13–17)</span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display text-ink leading-[0.8] mb-12 uppercase tracking-tighter">
              BUILD <br />
              <span className="text-accent-red italic">CONFIDENCE.</span> <br />
              <span className="text-2xl md:text-4xl lg:text-6xl text-ink/40 block mt-4">DEVELOP DISCIPLINE. FIND DIRECTION.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-ink font-light mb-16 leading-tight uppercase tracking-widest border-l-2 border-accent-red pl-8">
              Give your teen a positive outlet where they can build confidence, develop discipline, and learn real-world self-defense—inside a structured, high-level training environment.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-accent-red text-white px-12 py-6 text-micro uppercase tracking-[0.3em] font-black hover:bg-white hover:text-ink transition-all duration-500 text-center shadow-[0_20px_60px_rgba(155,27,48,0.5)]">
                Book a FREE Trial
              </Link>
              <Link to="/schedule-kids" className="w-full sm:w-auto bg-ink text-white px-12 py-6 text-micro uppercase tracking-[0.3em] font-black hover:bg-white hover:text-ink transition-all duration-500 text-center shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
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
            src={`${import.meta.env.BASE_URL}010Grapevine2019_2.jpeg`} 
            alt="Teen Jiu-Jitsu" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient for smooth transition on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block"></div>
          {/* Subtle gradient for smooth transition on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden block"></div>
        </div>
      </section>

      {/* Main Content: Philosophy & Benefits */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <span className="text-micro text-accent-red mb-6 block uppercase font-bold tracking-[0.4em]">The Mohler Way</span>
            <h2 className="text-5xl md:text-7xl font-display text-ink leading-[0.85] uppercase mb-12 tracking-tighter">
              MORE THAN JUST A WORKOUT — A FOUNDATION FOR LIFE
            </h2>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-ink leading-relaxed font-medium">
                At Team Mohler, we don’t just teach techniques—we develop strong, confident, disciplined young adults.
              </p>
              <p className="text-xl text-ink/70 leading-relaxed font-light">
                Our Teen Jiu-Jitsu program is designed to challenge students physically and mentally while giving them the tools to succeed both on and off the mats. Through structured training, expert coaching, and a positive team environment, teens learn how to push through challenges, stay focused, and build real confidence.
              </p>
              <p className="text-xl text-ink/70 leading-relaxed font-light">
                Whether your teen wants to get in shape, learn self-defense, or take their training to a higher level—we meet them where they are and help them grow.
              </p>
            </div>
          </div>
          
          {/* The Four Key Pillars */}
          <div className="mt-32 mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-display uppercase mb-6">WHAT YOUR TEEN WILL GAIN</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i} 
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                }}
                className="p-6 md:p-8 bg-accent-red shadow-2xl relative group flex flex-col h-full overflow-hidden transition-all duration-500 hover:bg-ink"
              >
                {/* Burnished Gold Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-burnished z-20"></div>

                {/* Animated Background Element */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-burnished-gold/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
                
                {/* Burnished Gold Icon with Dynamic Glow */}
                <div className="relative flex-shrink-0 mb-8">
                  <div className="w-16 h-16 bg-burnished rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500 border-2 border-white/20 relative z-10">
                    <div className="text-ink">
                      {pillar.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-display uppercase mb-4 text-white tracking-tight group-hover:text-white transition-colors leading-tight relative z-10">
                  {pillar.title}
                </h3>
                
                <div className="w-12 h-1 bg-burnished mb-6 group-hover:bg-white group-hover:w-24 transition-all duration-500 relative z-10"></div>
                
                <p className="text-base text-white leading-relaxed font-medium transition-colors relative z-10">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Training Section */}
      <section className="py-32 px-6 bg-gray-50 border-y border-ink/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-12 leading-tight">
            REAL TRAINING. <span className="text-accent-red">REAL RESULTS.</span>
          </h2>
          <div className="space-y-8">
            <p className="text-2xl font-bold uppercase tracking-tight text-ink">
              This isn’t daycare—and it’s not just games.
            </p>
            <p className="text-xl text-ink/70 leading-relaxed">
              Your teen will learn a proven system of Brazilian Jiu-Jitsu, wrestling fundamentals, and real self-defense in a structured, beginner-friendly environment.
            </p>
            <p className="text-xl text-ink/70 leading-relaxed">
              From first-timers to competitors, we develop students at every level.
            </p>
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <ScheduleSection 
        title="TEEN" 
        subtitle="SCHEDULE" 
        schedule={kidsSchedule} 
        policy={kidsPolicy} 
      />

      <CTASection 
        image={`${import.meta.env.BASE_URL}010Grapevine2019_2.jpeg`} 
        title="Start with 2 Free Classes"
        description="No pressure. No experience needed. Just show up and get started."
        buttonText="👉 Book Your Free Trial Today"
      />
    </div>
  );
}
