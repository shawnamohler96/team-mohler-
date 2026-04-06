import { motion } from 'motion/react';
import { Shield, Users, Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScheduleSection from '../components/ScheduleSection';
import CTASection from '../components/CTASection';
import { kidsSchedule, kidsPolicy } from './ScheduleKids';

export default function TeenBoxing() {
  const pillars = [
    {
      title: "Confidence Through Action",
      icon: <Shield size={40} />,
      description: "Striking training builds real confidence. As teens improve their skills and push past challenges, they develop a strong sense of self-belief that carries into everyday life."
    },
    {
      title: "Discipline & Focus",
      icon: <Users size={40} />,
      description: "Boxing and kickboxing demand attention, consistency, and control. These habits translate directly into better focus at school and improved discipline at home."
    },
    {
      title: "Strength, Conditioning & Athleticism",
      icon: <Trophy size={40} />,
      description: "Our program delivers a full-body workout—improving endurance, coordination, speed, and overall fitness in a way that keeps teens motivated."
    },
    {
      title: "Respect & Character",
      icon: <Star size={40} />,
      description: "We reinforce respect, accountability, and work ethic in every class. Teens learn how to push themselves, support others, and carry themselves with confidence."
    }
  ];

  return (
    <div className="bg-white pt-32">
      <SEO 
        title="Teen Boxing & Kickboxing (Ages 13+) | Team Mohler MMA" 
        description="Our teen boxing and kickboxing classes in Grapevine, TX help teenagers build confidence, discipline, and respect. Start your free trial today!" 
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
            <span className="text-micro text-accent-red mb-8 block uppercase font-bold tracking-[0.5em]">TEEN BOXING & KICKBOXING (AGES 13+)</span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display text-ink leading-[0.8] mb-12 uppercase tracking-tighter">
              BUILD <br />
              <span className="text-accent-red italic">CONFIDENCE.</span> <br />
              <span className="text-accent-red italic text-4xl md:text-6xl lg:text-8xl">DEVELOP DISCIPLINE.</span> <br />
              <span className="text-2xl md:text-4xl lg:text-6xl text-ink/40 block mt-4">RELEASE ENERGY.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-ink font-light mb-8 leading-tight uppercase tracking-widest border-l-2 border-accent-red pl-8">
              Give your teen a powerful outlet to build confidence, improve fitness, and develop real striking skills—inside a structured, high-energy training environment.
            </p>

            <div className="space-y-2 mb-12">
              <div className="flex items-center space-x-3 text-ink font-bold uppercase tracking-widest text-sm">
                <span>👉</span>
                <span>Beginner-friendly. No experience needed.</span>
              </div>
              <div className="flex items-center space-x-3 text-ink font-bold uppercase tracking-widest text-sm">
                <span>👉</span>
                <span>Trusted by families across Grapevine & DFW</span>
              </div>
            </div>

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
            src={`/teenage_boxers_at_team_mohler_gym.jpeg`} 
            alt="Teen Boxing" 
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
              STRUCTURE. DISCIPLINE. REAL TRAINING.
            </h2>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-ink leading-relaxed font-medium">
                At Team Mohler, our Teen Boxing & Kickboxing program is about more than just hitting pads—it’s about developing focus, discipline, and confidence through real training.
              </p>
              <p className="text-xl text-ink/70 leading-relaxed font-light">
                Teens learn proper striking technique, footwork, and conditioning while being pushed in a positive, controlled environment. Our coaches create structure, accountability, and energy in every class—helping students stay engaged and motivated.
              </p>
              <p className="text-xl text-ink/70 leading-relaxed font-light">
                Whether your teen needs an outlet, wants to build confidence, or is looking to take their training to the next level—we give them the tools to grow.
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
            🔥 REAL TRAINING. <span className="text-accent-red">REAL SKILLS.</span>
          </h2>
          <div className="space-y-8">
            <p className="text-2xl font-bold uppercase tracking-tight text-ink">
              This isn’t just cardio—and it’s not chaos.
            </p>
            <p className="text-xl text-ink/70 leading-relaxed">
              Your teen will learn:
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-4 mb-8">
              {[
                "Proper boxing technique (stance, punches, defense)",
                "Kickboxing fundamentals (kicks, combinations, timing)",
                "Pad work, drills, and controlled partner training",
                "How to stay composed and confident under pressure"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4 text-xl text-ink font-bold uppercase tracking-tight">
                  <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl text-ink/70 leading-relaxed">
              All within a structured, beginner-friendly system designed for long-term growth.
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
        image={`/teenage_boxers_at_team_mohler_gym.jpeg`} 
        title="Start with 2 Free Classes"
        description="No pressure. No experience needed. Just show up and get started."
        buttonText="👉 Book Your Free Trial Today"
      />
    </div>
  );
}
