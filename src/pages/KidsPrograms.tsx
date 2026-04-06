import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Shield, Users, Trophy, Star, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScheduleSection from '../components/ScheduleSection';
import CTASection from '../components/CTASection';
import { kidsSchedule, kidsPolicy } from './ScheduleKids';

const MotionLink = motion.create(Link);

export default function KidsPrograms() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const kidsFaqs = [
    {
      question: "What age can my child start martial arts?",
      answer: "We offer classes for children starting as young as 4 years old, with programs designed specifically for each age and development level."
    },
    {
      question: "Does my child need experience to start?",
      answer: "Not at all. Most kids start with no experience. Our classes are designed to build skills, confidence, and coordination from the ground up."
    },
    {
      question: "Will martial arts help my child’s confidence and behavior?",
      answer: "Yes. Our program focuses on discipline, respect, and focus—helping children build confidence both on and off the mats."
    },
    {
      question: "Is martial arts safe for kids?",
      answer: "Safety is a top priority. Classes are structured, supervised, and taught in a controlled environment to ensure your child learns safely."
    },
    {
      question: "What if my child is shy or nervous?",
      answer: "That’s very common. Our coaches are experienced in helping shy children feel comfortable and included at their own pace."
    },
    {
      question: "How many times a week should my child train?",
      answer: "Most children start with 2–3 classes per week to build consistency and confidence. As they progress, many choose to train more frequently—and are always welcome to attend as often as they’d like."
    },
    {
      question: "What should my child wear to class?",
      answer: "For their first class, comfortable athletic clothing is perfect. If they continue training, we’ll guide you on the proper uniform and gear."
    }
  ];

  const programs = [
    {
      title: "Little Lions Jiu-Jitsu",
      age: "Ages 4–6",
      path: "/little-lions",
      img: `/little-lions-bjj2.jpeg`,
      desc: "Build coordination, listening skills, and confidence in a fun, structured environment.",
      icon: <Star size={32} />
    },
    {
      title: "Kids Brazilian Jiu-Jitsu",
      age: "Ages 7–12",
      path: "/kids-jiu-jitsu",
      img: `/kids-bjj-class2.jpeg`,
      desc: "Develop real self-defense skills, confidence, and anti-bullying awareness.",
      icon: <Shield size={32} />
    },
    {
      title: "Teen Brazilian Jiu-Jitsu",
      age: "Ages 13+",
      path: "/teen-jiu-jitsu",
      img: `/teen-jiu-jitsu.jpeg`,
      desc: "Build strength, discipline, and leadership through structured training.",
      icon: <Trophy size={32} />
    },
    {
      title: "Teen Boxing & Kickboxing",
      age: "Ages 13+",
      path: "/teen-boxing",
      img: `/teen-boxing-class.jpeg`,
      desc: "Improve fitness, confidence, and striking skills in a focused, high-energy class.",
      icon: <Users size={32} />
    }
  ];

  return (
    <div className="bg-white pt-32">
      <SEO 
        title="Kids & Teen Classes | Team Mohler MMA Grapevine" 
        description="Explore our kids and teen martial arts programs in Grapevine, TX. From Little Lions Jiu-Jitsu to Teen Boxing, we offer age-appropriate classes that build confidence, discipline, and fitness." 
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
            <span className="text-micro text-white mb-8 block uppercase font-bold tracking-[0.5em] bg-accent-red px-4 py-1 inline-block">Kids & Teen Martial Arts Classes</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-ink leading-[0.8] mb-12 uppercase tracking-tighter">
              BUILD <span className="text-accent-red italic">CONFIDENCE.</span> <br />
              DEVELOP <span className="text-accent-red italic">DISCIPLINE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-ink font-light mb-16 leading-tight uppercase tracking-widest border-l-2 border-accent-red pl-8">
              Give your child the tools to handle life’s challenges through Brazilian Jiu-Jitsu, boxing, and kickboxing—right here in a safe, structured environment.
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
            src={`/little-lions-bjj2.jpeg`} 
            alt="Kids Jiu-Jitsu" 
            className="absolute inset-0 w-full h-full object-cover"
           
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden block"></div>
        </div>
      </section>

      {/* Programs Offered Section */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <span className="text-micro text-accent-red mb-4 block uppercase font-bold tracking-[0.4em]">Programs</span>
            <h2 className="text-5xl md:text-7xl font-display text-ink uppercase tracking-tighter leading-[0.9]">
              Kids & Teen <br className="hidden md:block" />
              <span className="text-accent-red italic">Martial Arts Classes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {programs.map((prog, i) => (
              <MotionLink 
                key={i}
                to={prog.path}
                whileHover={{ 
                  y: -6,
                  scale: 1.01,
                }}
                className="group relative flex flex-col bg-accent-red shadow-xl overflow-hidden transition-all duration-500 hover:bg-ink"
              >
                {/* Burnished Gold Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-burnished z-20"></div>

                {/* Animated Background Element */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-burnished-gold/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>

                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={prog.img} 
                    alt={prog.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out brightness-90 group-hover:brightness-100"
                   
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-700"></div>
                </div>
                
                <div className="p-5 md:p-8 flex-grow flex flex-col justify-between space-y-4 relative z-10">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-burnished rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 border border-white/20">
                        <div className="text-secondary-bg">
                          {prog.icon}
                        </div>
                      </div>
                      <div className="h-px flex-grow bg-burnished-gold/30 group-hover:bg-white/30 transition-all duration-500"></div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-display text-white uppercase tracking-tighter mb-1 group-hover:text-burnished-gold transition-colors duration-500 leading-none">
                      {prog.title}
                    </h3>
                    <div className="text-base md:text-lg italic text-burnished-gold/80 mb-3 font-display uppercase tracking-tight">
                      ({prog.age})
                    </div>
                    
                    <div className="w-8 h-1 bg-burnished mb-3 group-hover:bg-white group-hover:w-16 transition-all duration-500"></div>
                    
                    <p className="text-white text-xs md:text-sm leading-relaxed font-medium">
                      {prog.desc}
                    </p>
                  </div>
                  
                  <div className="inline-flex items-center gap-4 text-white text-[9px] uppercase tracking-[0.3em] font-bold transition-all duration-300">
                    <span className="relative">
                      Explore Program
                      <span className="absolute -bottom-2 left-0 w-0 h-px bg-burnished-gold group-hover:w-full transition-all duration-500"></span>
                    </span>
                    <div className="w-7 h-7 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-burnished group-hover:border-burnished group-hover:text-ink transition-all duration-500 shadow-sm">
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </MotionLink>
            ))}
          </div>
        </div>
      </section>

      {/* Why Team Mohler */}
      <section className="py-20 md:py-24 px-6 bg-secondary-bg text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display mb-8 uppercase leading-[0.85] tracking-tighter">
                Why Parents Choose <br />
                <span className="text-accent-red italic">Team Mohler</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "World-Class Instruction", desc: "Led by Professor Allen Mohler, our experienced coaches are dedicated to your child’s growth and success." },
                  { title: "Safe & Structured Environment", desc: "We maintain a clean, professional, and supportive space where every child can learn safely." },
                  { title: "Character Development", desc: "We build discipline, respect, and confidence that carries over into everyday life." },
                  { title: "Proven Results", desc: "Our students grow both on and off the mats, developing skills that last a lifetime." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="text-accent-red" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-display uppercase mb-1 tracking-tight">{item.title}</h4>
                      <p className="text-sm md:text-base text-white/80 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square border-2 border-accent-red p-3">
                <img 
                  src={`/kids-bjj-class2.jpeg`} 
                  alt="Team Mohler Kids" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 
                />
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent-red flex items-center justify-center text-center p-4 rotate-12 shadow-2xl">
                <div className="flex flex-col">
                  <span className="text-lg font-display uppercase leading-tight">Team Mohler Kids</span>
                  <span className="text-[8px] uppercase tracking-widest mt-1 font-bold">Trusted by Families Across Grapevine & DFW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kids Martial Arts FAQ */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <span className="text-micro text-accent-red mb-4 block uppercase font-bold tracking-[0.4em]">Common Questions</span>
            <h2 className="text-5xl md:text-7xl font-display text-ink uppercase tracking-tighter mb-6">Kids Martial Arts <span className="text-accent-red italic">FAQ</span></h2>
            <p className="text-xl text-ink/60 font-light uppercase tracking-widest">Answers to the most common questions from parents</p>
          </div>

          <div className="space-y-4">
            {kidsFaqs.map((faq, index) => (
              <div key={index} className="border-b border-ink/10">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full py-8 flex justify-between items-start text-left group"
                >
                  <span className={`text-xl md:text-2xl font-display uppercase tracking-tight leading-tight transition-colors pr-8 ${openFaqIndex === index ? 'text-accent-red' : 'text-ink group-hover:text-accent-red'}`}>
                    {faq.question}
                  </span>
                  <div className={`mt-1 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                    {openFaqIndex === index ? <Minus className="text-accent-red" size={20} /> : <Plus className="text-ink/30" size={20} />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaqIndex === index ? 'auto' : 0, 
                    opacity: openFaqIndex === index ? 1 : 0,
                    marginBottom: openFaqIndex === index ? 32 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="text-base md:text-lg text-ink/70 font-medium leading-relaxed max-w-3xl">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <ScheduleSection 
        title="KIDS & TEEN" 
        subtitle="SCHEDULE" 
        schedule={kidsSchedule} 
        policy={kidsPolicy} 
      />

      <CTASection 
        image={`/little-lions-bjj2.jpeg`} 
        title="Ready to Get Your Child Started?"
        titleAccent=""
        description="Give your child the confidence, discipline, and skills that last a lifetime."
        buttonText="👉 Book a FREE Trial Class"
      />
    </div>
  );
}
