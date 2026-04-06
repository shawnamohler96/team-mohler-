import { motion } from 'motion/react';
import { Shield, Users, Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScheduleSection from '../components/ScheduleSection';
import CTASection from '../components/CTASection';
import { kidsSchedule, kidsPolicy } from './ScheduleKids';

export default function LittleLions() {
  const pillars = [
    {
      title: "Focus & Listening Skills",
      icon: <Users size={40} />,
      description: "Through engaging drills and \"Mat Chats,\" we teach Little Lions how to follow multi-step instructions and stay focused on the task at hand—skills that translate directly to success in life."
    },
    {
      title: "Physical Coordination & Confidence",
      icon: <Trophy size={40} />,
      description: "Jiu-Jitsu is \"human chess.\" Your child will develop balance, agility, and body awareness, giving them the physical confidence to participate in any sport or activity as they grow."
    },
    {
      title: "The Black Belt Creed",
      icon: <Star size={40} />,
      description: "We don't just teach moves; we teach values. Every class reinforces our Six Power Principles: Modesty, Courtesy, Integrity, Self-Control, Perseverance, and Indomitable Spirit."
    },
    {
      title: "Safe & Structured Environment",
      icon: <Shield size={40} />,
      description: "Our 13,000 sq. ft. facility is designed for safety. With professional-grade mats and a high coach-to-student ratio, your child gets the attention and care they deserve."
    }
  ];

  return (
    <div className="bg-white pt-32">
      <SEO 
        title="Little Lions Jiu Jitsu (Ages 4-6) | Team Mohler MMA" 
        description="Our Little Lions program in Grapevine, TX introduces kids ages 4-6 to Jiu-Jitsu. Start your free trial today! We focus on coordination and building confidence." 
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
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display text-ink leading-[0.8] mb-12 uppercase tracking-tighter">
              LITTLE LIONS <br />
              <span className="text-accent-red italic">JIU-JITSU</span> <br />
              <span className="text-2xl md:text-4xl lg:text-6xl text-ink/40 block mt-4">(AGES 4-6)</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-ink font-light mb-16 leading-tight uppercase tracking-widest border-l-2 border-accent-red pl-8">
              Focus on Coordination, Listening Skills, and Fun.
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
            src="/Little_Lions_BJJ_2.jpeg" 
            alt="Little Lions Jiu-Jitsu" 
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
            <span className="text-micro text-accent-red mb-6 block uppercase font-bold tracking-[0.4em]">Philosophy & Benefits</span>
            <h2 className="text-5xl md:text-7xl font-display text-ink leading-[0.85] uppercase mb-12 tracking-tighter">
              GIVE YOUR CHILD A HEAD START IN LIFE!
            </h2>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-ink leading-relaxed font-medium">
                Is your child ready for a boost in confidence and focus? Our Little Lions program takes the energy of a 4–6 year old and channels it into something productive.
              </p>
              <p className="text-xl text-ink/70 leading-relaxed font-light">
                We don’t just teach Jiu-Jitsu; we teach the foundational life skills your child needs for school and beyond. Our students learn to stay calm under pressure, listen to instructors, and build the "unstoppable confidence" needed to overcome obstacles. Your child will find a supportive community where they can grow, learn, and succeed in a safe environment.
              </p>
            </div>
          </div>
          
          {/* The Four Key Pillars */}
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

      {/* Class Schedule Section */}
      <ScheduleSection 
        title="KIDS" 
        subtitle="SCHEDULE" 
        schedule={kidsSchedule} 
        policy={kidsPolicy} 
      />

      <CTASection image="/Little_Lions_BJJ_2.jpeg" />
    </div>
  );
}
