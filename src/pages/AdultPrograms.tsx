import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Trophy, Users, Zap, Target, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { adultSchedule, adultPolicy } from './ScheduleAdult';
import ScheduleSection from '../components/ScheduleSection';
import CTASection from '../components/CTASection';

const programs = [
  {
    id: "01",
    title: "Brazilian Jiu-Jitsu",
    icon: <Shield size={32} />,
    desc: "Perfect for those looking to build real-world self-defense and functional fitness. No experience? No problem—our beginner classes are designed for you.",
    path: "/bjj",
    img: "/2-bjj-students-grappling-comp2.jpeg"
  },
  {
    id: "02",
    title: "Boxing",
    icon: <Target size={32} />,
    desc: "Master the \"Sweet Science\" while getting in the best shape of your life. Ideal for stress relief, hand-eye coordination, and elite conditioning.",
    path: "/boxing",
    img: "/lady-boxing-877.jpeg"
  },
  {
    id: "03",
    title: "Muay Thai Kickboxing",
    icon: <Zap size={32} />,
    desc: "Learn the \"Art of Eight Limbs.\" A high-energy, full-body workout that builds incredible striking power, cardio, and coordination.",
    path: "/muay-thai-boxing",
    img: "/kickboxing-image.jpeg"
  },
  {
    id: "04",
    title: "MMA",
    icon: <Trophy size={32} />,
    desc: "The most well-rounded self-defense system. This class blends striking and grappling into one complete, high-performance system.",
    path: "/mma",
    img: "/mma-picture-copy.jpeg"
  },
  {
    id: "05",
    title: "Wrestling",
    icon: <Users size={32} />,
    desc: "Build incredible core strength, balance, and takedown confidence. The ultimate addition to your Jiu-Jitsu and grappling game.",
    path: "/wrestling",
    img: "/wrestling-class.jpeg",
    scale: "scale-125"
  }
];

export default function AdultPrograms() {
  return (
    <div className="bg-white pt-32">
      <SEO 
        title="Adult Martial Arts Programs | Team Mohler MMA Grapevine" 
        description="Explore our adult martial arts programs in Grapevine, TX. From Brazilian Jiu-Jitsu to Boxing and MMA, we offer world-class instruction for all skill levels." 
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
            <span className="text-micro text-white mb-8 block uppercase font-bold tracking-[0.5em] bg-accent-red px-4 py-1 inline-block">Adult Programs</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-ink leading-[0.8] mb-12 uppercase tracking-tighter">
              ADULT <span className="text-accent-red italic">CLASSES</span>
            </h1>
            <p className="text-xl md:text-2xl text-ink font-light mb-16 leading-tight uppercase tracking-widest border-l-2 border-accent-red pl-8">
              Whether you're stepping on the mat for the first time or training at a high level, you'll find real training in a focused, supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-accent-red text-white px-12 py-6 text-micro uppercase tracking-[0.3em] font-black hover:bg-white hover:text-ink transition-all duration-500 text-center shadow-[0_20px_60px_rgba(155,27,48,0.5)]">
                Book a FREE Trial
              </Link>
              <a href="#schedule" className="w-full sm:w-auto bg-ink text-white px-12 py-6 text-micro uppercase tracking-[0.3em] font-black hover:bg-white hover:text-ink transition-all duration-500 text-center shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                VIEW SCHEDULE
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
          <motion.img referrerPolicy="no-referrer" initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src="/2-bjj-students-grappling-comp2.jpeg" 
            alt="Adult Martial Arts Training" 
            className="absolute inset-0 w-full h-full object-cover"
           
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden block"></div>
        </div>
      </section>

      {/* Programs Offered Section */}
      <section id="programs" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-micro text-accent-red mb-4 block uppercase font-bold tracking-[0.4em]">What we offer</span>
              <h2 className="text-5xl md:text-7xl font-display text-ink uppercase tracking-tighter">Adult <span className="text-accent-red italic">PROGRAMS</span></h2>
            </div>
            <div className="max-w-md">
              <p className="text-ink/60 text-lg uppercase tracking-widest font-display leading-tight border-l-2 border-accent-red pl-6">
                “Click on a program below to learn more!”
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog, i) => (
              <Link 
                key={i}
                to={prog.path}
                className="group relative flex flex-col bg-ink shadow-2xl transition-all duration-500 rounded-sm overflow-hidden hover:bg-accent-red transform hover:-translate-y-2"
              >
                {/* Background Number */}
                <div className="absolute top-6 right-8 text-9xl font-display text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-700 select-none pointer-events-none z-0">
                  {prog.id}
                </div>

                <div className="relative h-64 overflow-hidden">
                  <img referrerPolicy="no-referrer" src={prog.img} 
                    alt={prog.title} 
                    className={`w-full h-full object-cover ${prog.scale || ''} group-hover:scale-110 transition-all duration-1000 ease-out`}
                   
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                
                <div className="p-8 md:p-10 flex-grow flex flex-col justify-between space-y-6 relative">
                  {/* Accent Gold Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-burnished z-20"></div>

                  {/* Vertical Accent Line on Hover */}
                  <div className="absolute left-0 top-10 bottom-10 w-0.5 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-display text-white uppercase tracking-tighter mb-4 group-hover:text-white transition-colors duration-500">{prog.title}</h3>
                    <p className="text-white/70 text-base leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                      {prog.desc}
                    </p>
                  </div>
                  
                  <div className="inline-flex items-center gap-4 text-white text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300">
                    <span className="relative">
                      Learn More
                      <span className="absolute -bottom-2 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500"></span>
                    </span>
                    <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-accent-red transition-all duration-500 shadow-sm">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - The "4 Boxes" Pattern */}
      <section className="py-32 px-6 bg-ink text-white overflow-hidden relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-red/5 -skew-x-12 transform translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-micro text-accent-red mb-4 block uppercase font-bold tracking-[0.4em]">Why train with us</span>
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">THE TEAM MOHLER <span className="text-accent-red italic">ADVANTAGE</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Elite Conditioning", 
                icon: <Zap size={28} />, 
                desc: "Build strength, endurance, and flexibility through functional movements." 
              },
              { 
                title: "Real Self-Defense", 
                icon: <Shield size={28} />, 
                desc: "Learn practical techniques that work in real-world situations." 
              },
              { 
                title: "Stress Relief", 
                icon: <Target size={28} />, 
                desc: "Channel your energy and clear your mind in a focused training environment." 
              },
              { 
                title: "Expert Coaching", 
                icon: <Users size={28} />, 
                desc: "Train under world-class instructors with decades of experience." 
              }
            ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                  }}
                  className="p-10 bg-ink shadow-2xl relative group flex flex-col h-full overflow-hidden transition-all duration-500 hover:bg-accent-red"
                >
                  {/* Burnished Gold Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-burnished z-20"></div>

                  {/* Animated Background Element */}
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-burnished-gold/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
                  
                  {/* Burnished Gold Icon with Dynamic Glow */}
                  <div className="relative flex-shrink-0 mb-8">
                    <div className="w-16 h-16 bg-burnished rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500 border-2 border-white/20 relative z-10">
                      <div className="text-ink">
                        {benefit.icon}
                      </div>
                    </div>
                  </div>
                
                <h3 className="text-2xl font-display uppercase mb-4 tracking-tight text-white group-hover:text-white transition-colors duration-500 relative z-10">{benefit.title}</h3>
                
                <div className="w-12 h-1 bg-burnished mb-6 group-hover:bg-white group-hover:w-24 transition-all duration-500 relative z-10"></div>

                <p className="text-white/60 group-hover:text-white/90 transition-colors duration-500 font-light leading-relaxed relative z-10">
                  {benefit.desc}
                </p>
                
                {/* Background Number */}
                <div className="absolute -bottom-4 -right-4 text-8xl font-display text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-500 select-none pointer-events-none">
                  0{i + 1}
                </div>
              </motion.div>
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

      <CTASection image="/2-guys-grappling-closeup2.jpeg" />
    </div>
  );
}
