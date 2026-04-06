import { motion } from 'motion/react';
import { Shield, Users, Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScheduleSection from '../components/ScheduleSection';
import CTASection from '../components/CTASection';
import { adultSchedule, adultPolicy } from './ScheduleAdult';

export default function MMA() {
  const pillars = [
    {
      title: "Complete Skill Set",
      icon: <Trophy size={40} />,
      description: "Learn how to strike, clinch, take down, and control an opponent using a proven combination of martial arts disciplines."
    },
    {
      title: "Confidence Under Pressure",
      icon: <Shield size={40} />,
      description: "MMA training teaches you how to stay calm, think clearly, and react effectively in high-pressure situations."
    },
    {
      title: "Strength, Conditioning & Endurance",
      icon: <Star size={40} />,
      description: "Build real-world strength, explosive power, and endurance through functional, high-intensity training."
    },
    {
      title: "Discipline & Mental Toughness",
      icon: <Users size={40} />,
      description: "Push past limits, stay consistent, and develop the mindset required to improve and perform."
    }
  ];

  return (
    <div className="bg-white pt-32">
      <SEO 
        title="Adults MMA | Team Mohler MMA" 
        description="Master the art of Mixed Martial Arts at Mohler MMA in Grapevine, TX. Our adult MMA classes combine striking and grappling for a complete combat system. Start your free trial today!" 
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
            <span className="text-micro text-white mb-8 block uppercase font-bold tracking-[0.5em] bg-accent-red px-4 py-1 inline-block">ADULT MMA PROGRAM</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-ink leading-[0.8] mb-12 uppercase tracking-tighter">
              MASTER <br />
              <span className="text-accent-red italic">EVERY RANGE.</span> <br />
              <span className="text-2xl md:text-4xl lg:text-6xl text-ink/40 block mt-4">CONTROL EVERY SITUATION.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-ink font-light mb-8 leading-tight uppercase tracking-widest border-l-2 border-accent-red pl-8">
              Train in a complete combat system that blends striking and grappling into one seamless, effective approach to real-world self-defense and high-level martial arts.
            </p>

            <div className="space-y-2 mb-12">
              <div className="flex items-center space-x-3 text-ink font-bold uppercase tracking-widest text-sm">
                <span>👉</span>
                <span>Designed for students with a foundation in training</span>
              </div>
              <div className="flex items-center space-x-3 text-ink font-bold uppercase tracking-widest text-sm">
                <span>👉</span>
                <span>Built for those ready to take their skills to the next level</span>
              </div>
            </div>
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
            src={`${import.meta.env.BASE_URL}MMA_PICture_copy.jpeg`} 
            alt="Adult MMA" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden block"></div>
        </div>
      </section>

      {/* Main Content: Philosophy & Benefits */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            <span className="text-micro text-accent-red mb-6 block uppercase font-bold tracking-[0.4em]">The Mohler Way</span>
            <h2 className="text-5xl md:text-7xl font-display text-ink leading-[0.85] uppercase mb-12 tracking-tighter">
              REAL TRAINING. COMPLETE SYSTEM.
            </h2>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-ink leading-relaxed font-medium">
                At Team Mohler, MMA isn’t just a workout—it’s where everything comes together.
              </p>
              <p className="text-xl text-ink/70 leading-relaxed font-light">
                Our program integrates Brazilian Jiu-Jitsu, Muay Thai, Boxing, and Wrestling into a structured, high-level training environment. You’ll learn how to transition seamlessly between striking and grappling while developing real control, awareness, and confidence.
              </p>
              <p className="text-xl text-ink/70 leading-relaxed font-light">
                This training is for students who are ready to apply and refine their skills under pressure.
              </p>
            </div>
          </div>
          
          {/* What You'll Develop */}
          <div className="mt-32 mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-display uppercase mb-6">WHAT YOU’LL DEVELOP</h2>
          </div>
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
      </section>

      {/* One System Section */}
      <section className="py-32 px-6 bg-secondary-bg text-white border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-12 leading-tight">
            🔥 ONE SYSTEM. <span className="text-accent-red">TOTAL CONTROL.</span>
          </h2>
          <div className="space-y-8">
            <p className="text-2xl font-bold uppercase tracking-tight text-white/90">
              This isn’t random training—and it’s not just mixing styles.
            </p>
            <p className="text-xl text-white/70 leading-relaxed">
              You’ll learn how to:
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-4 mb-8">
              {[
                "Blend striking and grappling seamlessly",
                "Control distance, timing, and positioning",
                "Execute takedowns and transitions with purpose",
                "Stay composed and effective in real situations"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4 text-xl text-white font-bold uppercase tracking-tight">
                  <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl text-white/70 leading-relaxed">
              All within a structured system designed for serious progression.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display uppercase mb-6">WHO THIS IS FOR</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Students with prior training in Jiu-Jitsu, Boxing, Kickboxing, or Wrestling",
              "Adults ready to take their training to a higher level",
              "Athletes looking to develop a complete martial arts system",
              "Those serious about training—not just working out"
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4 p-6 bg-gray-50 border border-ink/5">
                <div className="w-6 h-6 bg-accent-red flex items-center justify-center text-white text-xs font-bold shrink-0 mt-1">
                  {i + 1}
                </div>
                <p className="text-lg font-bold uppercase tracking-tight text-ink">{item}</p>
              </div>
            ))}
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

      <CTASection 
        image={`${import.meta.env.BASE_URL}MMA_PICture_copy.jpeg`} 
        title="Start Your Training"
        description="This is where everything comes together."
        buttonText="👉 Book Your Free Trial Today"
      />
    </div>
  );
}
