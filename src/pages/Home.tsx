import { motion } from 'motion/react';
import { ArrowRight, Trophy, Shield, Users, Building2, Zap, Calendar, Star, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SocialSection from '../components/SocialSection';
import CTASection from '../components/CTASection';

import { adultSchedule } from './ScheduleAdult';
import { kidsSchedule } from './ScheduleKids';

export default function Home() {
  const unlimitedPlan = {
    name: "UNLIMITED Class Memberships",
    category: "Any (2) or more Arts",
    options: [
      { label: "Pay Monthly", price: "179", period: "a month", terms: "6 month contract", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6456" },
      { label: "3 Month Paid-in-Full", price: "537", period: "3 months", terms: "no contract", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6450?view=memberInfo" },
      { label: "6 Month Paid-in-Full", price: "984", period: "6 months", terms: "SAVE $15 per month", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6583" }
    ]
  };

  const individualPlans = [
    {
      name: "Adult Jiu-Jitsu Memberships",
      options: [
        { label: "Pay Monthly", price: "152", period: "a month", terms: "6 month contract", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6586" },
        { label: "3 Month Paid-in-Full", price: "456", period: "3 months", terms: "no contract", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6464" },
        { label: "6 Month Paid-in-Full", price: "822", period: "6 months", terms: "SAVE $15 per month", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6584" }
      ]
    },
    {
      name: "Muay Thai Memberships",
      options: [
        { label: "Pay Monthly", price: "152", period: "a month", terms: "6 month contract", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6591" },
        { label: "3 Month Paid-in-Full", price: "456", period: "3 months", terms: "no contract", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6588" },
        { label: "6 Month Paid-in-Full", price: "822", period: "6 months", terms: "SAVE $15 per Month", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6589" }
      ]
    },
    {
      name: "Boxing Memberships",
      options: [
        { label: "Pay Monthly", price: "152", period: "a month", terms: "6 month contract", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6596" },
        { label: "3 Month Paid-in-Full", price: "456", period: "3 months", terms: "no contract", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6593" },
        { label: "6 Month Paid-in-Full", price: "822", period: "6 months", terms: "SAVE $15 per Month", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6594" }
      ]
    },
    {
      name: "Teen Jiu-Jitsu Memberships",
      age: "Ages 13+",
      options: [
        { label: "Pay Monthly", price: "152", period: "a month", terms: "6 month contract", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6601" },
        { label: "3 Month Paid-in-Full", price: "456", period: "3 months", terms: "no contract", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6598" },
        { label: "6 Month Paid-in-Full", price: "822", period: "6 months", terms: "SAVE $15 per Month", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6599" }
      ]
    },
    {
      name: "Kids Jiu-Jitsu Memberships",
      age: "Ages 4-12",
      options: [
        { label: "Pay Monthly", price: "152", period: "a month", terms: "6 month contract", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6924" },
        { label: "3 Month Paid-in-Full", price: "456", period: "3 months", terms: "no contract", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6604" },
        { label: "6 Month Paid-in-Full", price: "822", period: "6 months", terms: "SAVE $15 per Month", link: "https://www.mymemberaccount.com/member-enrollment/60486/offer/6921" }
      ]
    }
  ];
  return (
    <div className="bg-primary-bg">
      <SEO 
        title="Martial Arts & Jiu-Jitsu in Grapevine | Team Mohler MMA" 
        description="Train at DFW’s premier 13,000 sq ft gym. Led by Allen Mohler (30+ yrs exp), we offer BJJ, Boxing & Kids classes in Grapevine. Beginner safe! Start your free trial today!" 
      />
      {/* Hero Section - Immersive Full-Bleed */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-secondary-bg">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src="/2 guys grappling close up 2.jpeg" 
          alt="Mohler MMA Elite Training" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        
        <div className="relative z-10 text-center px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-micro text-white tracking-[0.2em] mb-8 block uppercase">Martial arts for everyone</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[0.85] mb-8 uppercase">
              THE STANDARD OF<br />
              <span className="text-accent-red">EXCELLENCE.</span>
            </h1>
            <p className="text-burnished text-micro md:text-sm uppercase tracking-[0.3em] font-bold mb-12 text-center">
              Brazilian Jiu-Jitsu • Boxing • Kickboxing • MMA
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="bg-accent-red text-white px-12 py-6 text-micro hover:bg-white hover:text-ink transition-all duration-500 min-w-[240px] shadow-[0_0_20px_rgba(155,27,48,0.3)] hover:shadow-none"
              >
                Book a FREE Trial
              </Link>
              <Link
                to="/schedule-adult"
                className="border border-white text-white px-12 py-6 text-micro hover:bg-white hover:text-ink transition-all duration-500 min-w-[240px]"
              >
                View Class Schedule
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-12 hidden md:block">
          <div className="flex items-center space-x-4">
            <div className="h-px w-12 bg-burnished"></div>
            <span className="text-micro text-white/40 uppercase tracking-widest">Est. 1993 · Grapevine, TX · Serving DFW</span>
          </div>
        </div>
      </section>

      {/* Welcome Section - Hero-Impact Editorial Wrap (Compact) */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden border-b border-ink/10">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero-Style Heading - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-ink leading-[0.85] uppercase">
              One of Texas' most<br />
              <span className="text-accent-red">established</span> and <br />
              notable Jiu-Jitsu gyms.
            </h2>
          </motion.div>

          <div className="block">
            <p className="text-lg md:text-xl text-ink font-display leading-relaxed mb-10 max-w-4xl">
              At Team Mohler, we believe martial arts is about more than just technique—it’s about mental and physical growth. Whether you’re training for fitness, self-defense, or competition, you’ll do it alongside a supportive team and expert coaches. From kids to adults—and from beginners to experienced athletes—there is a place for everyone in our academy. We offer martial arts classes in Grapevine, including Brazilian Jiu-Jitsu, boxing, kickboxing, wrestling, and MMA.
            </p>

            {/* Integrated Icons - High-Readability Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 mb-12">
              {[
                {
                  icon: <Star size={40} className="glow-burnished" />,
                  title: "World-Class Lineage",
                  desc: "Led by Professor Mohler, a pioneer with over 30 years of elite Brazilian Jiu-Jitsu and MMA coaching."
                },
                {
                  icon: <Users size={40} className="glow-burnished" />,
                  title: "A True Community",
                  desc: "We aren't just a gym; we’re a team that supports your goals, on and off the mats."
                },
                {
                  icon: <Trophy size={40} className="glow-burnished" />,
                  title: "Proven Results",
                  desc: "From a hobbyist to an IBJJF World Champion, to parents looking for kids' character development—we deliver results."
                },
                {
                  icon: <Building2 size={40} className="glow-burnished" />,
                  title: "13,000 Sq. Ft. Facility",
                  desc: "Plenty of mat space, top-tier equipment, and a professional, friendly coaching environment for the whole family."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-8 group">
                  <div className="flex-shrink-0 w-20 h-20 bg-burnished rounded-full flex items-center justify-center text-secondary-bg shadow-xl group-hover:scale-110 transition-all duration-500 border border-white/20 glow-burnished">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display uppercase tracking-tight text-ink mb-2 group-hover:text-accent-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink/70 leading-relaxed font-medium max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Discreet SEO Text */}
          <div className="mt-16 pt-8 border-t border-ink/5 text-center">
            <p className="text-[10px] text-ink/10 uppercase tracking-[0.2em] font-medium">
              Serving Grapevine, Southlake, Coppell, Colleyville, flower mound, Irving, keller, westlake, euless, bedford, and the surrounding DFW area.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section - High-Impact Split Layout */}
      <section className="bg-secondary-bg overflow-hidden relative border-y border-white/5">
        <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]">
          {/* Content Side */}
          <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <span className="text-micro text-burnished tracking-[0.4em] mb-8 block uppercase font-bold">The Visionary</span>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-display text-white leading-[0.82] mb-8 uppercase tracking-tighter">
                MEET THE<br />
                <span className="text-accent-red">FOUNDER</span>
              </h2>
              
              <div className="max-w-xl">
                <p className="text-xl md:text-2xl text-white/90 font-display uppercase leading-tight mb-6 border-l-4 border-accent-red pl-8">
                  Professor Mohler
                </p>
                <p className="text-base text-white/90 leading-relaxed mb-8">
                  With three decades of leadership, Professor Mohler has established one of the most respected academies in the nation. His coaching awards and lineage speak to a career dedicated to the art—and the community he has built.
                </p>

                <Link 
                  to="/about" 
                  className="group inline-flex items-center gap-4 text-micro text-white hover:text-accent-red transition-all duration-500 uppercase tracking-[0.3em] font-bold"
                >
                  <span className="border-b-2 border-burnished pb-1">Full Biography</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Background Decorative Text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-[0.02] pointer-events-none select-none">
              <span className="text-[30vw] font-display uppercase leading-none text-white">MOHLER</span>
            </div>
          </div>

          {/* Image Side - Full Bleed & Artistic Crop */}
          <div 
            className="w-full md:w-2/5 relative min-h-[500px] md:min-h-[600px] overflow-hidden"
          >
            <img 
              src="/main-pic-main-pic-mohler.jpeg" 
              alt="Professor Mohler" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-bg via-transparent to-transparent md:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg via-transparent to-transparent md:hidden block"></div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-12 right-12 text-right z-20">
              <div className="h-px w-12 bg-accent-red ml-auto mb-4"></div>
              <span className="text-micro text-white/40 uppercase tracking-[0.4em] block mb-2">#1 Ranked in Texas</span>
              <span className="text-4xl font-display text-white uppercase tracking-tight">30+ Years</span>
              <span className="text-micro text-burnished uppercase tracking-[0.2em] block mt-1 font-bold">Of Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Showcase - Refined Technical Grid */}
      <section className="bg-white py-12 md:py-16 border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 md:mb-14">
            <div className="lg:col-span-8">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-burnished mb-3 block">Brazilian Jiu-Jitsu • Boxing • Kickboxing • MMA Classes</span>
              <h2 className="text-5xl md:text-7xl text-ink uppercase leading-[0.9] tracking-tighter">
                Martial Arts Classes <br />
                for <span className="text-accent-red">all levels</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex items-end">
              <p className="text-ink text-xl md:text-2xl max-w-md border-l-4 border-accent-red pl-6 font-sans leading-relaxed">
                Whether you're just starting or ready to compete—there’s a place for you here.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                id: "01",
                title: "KIDS CLASSES",
                headline: "BUILD ROCK-SOLID CONFIDENCE.",
                desc: "Our kids’ Jiu-Jitsu classes teach more than just self-defense. We focus on discipline, focus, and respect in a fun, high-energy environment.",
                path: "/kids-programs",
                img: "/KIDS BJJ CLASS 2.jpeg"
              },
              {
                id: "02",
                title: "TEEN CLASSES",
                headline: "BUILD CONFIDENCE & DIRECTION.",
                desc: "Our teen martial arts classes give students a strong, positive outlet while building confidence, discipline, and respect through real training.",
                path: "/kids-programs",
                img: "/teenclasses copy.jpeg"
              },
              {
                id: "03",
                title: "ADULT CLASSES",
                headline: "MASTER THE ART.",
                desc: "Learn the world’s most effective martial arts system in a beginner-friendly, structured training environment. Perfect for fitness, self-defense, or high-level competition.",
                path: "/adult-programs",
                img: "/2 guys boxingscaled-100x100 copy.jpeg"
              }
            ].map((program, idx) => (
              <Link 
                key={idx} 
                to={program.path}
                className="group relative flex flex-col bg-accent-red shadow-xl overflow-hidden transition-all duration-500 hover:bg-ink rounded-sm transform hover:-translate-y-2"
              >
                {/* Burnished Gold Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-burnished z-20"></div>

                {/* Animated Background Element */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-burnished-gold/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>

                <div className="relative h-48 lg:h-56 overflow-hidden z-10">
                  <img 
                    src={program.img} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out brightness-90 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-700"></div>
                  
                  {/* Image Border Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-burnished transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </div>
                
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6 z-10 relative">
                  <div>
                    <h3 className="text-2xl md:text-3xl text-white mb-3 uppercase leading-none tracking-tighter font-display font-medium transition-colors duration-500">{program.title}</h3>
                    
                    <div className="w-10 h-1 bg-burnished mb-4 group-hover:bg-white group-hover:w-20 transition-all duration-500"></div>

                    <div className="space-y-2">
                      <p className="text-white text-[11px] md:text-[13px] font-black tracking-wider uppercase leading-tight">
                        {program.headline}
                      </p>
                      <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                        {program.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div 
                    className="group/link inline-flex items-center gap-4 text-white text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300"
                  >
                    <span className="relative">
                      Explore Program
                      <span className="absolute -bottom-2 left-0 w-0 h-px bg-white group-hover/link:w-full transition-all duration-500"></span>
                    </span>
                    <div className="w-10 h-10 rounded-full bg-burnished text-ink flex items-center justify-center group-hover/link:scale-110 transition-all duration-500 shadow-lg border border-white/20">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Gallery - Dynamic Grid */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-secondary-bg border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl leading-[0.85] uppercase text-white">World-Class<br /><span className="text-accent-red">Training Facility</span></h2>
            </div>
            <p className="text-lg text-white/60 font-light max-w-md leading-relaxed">
              Train in a professional, clean, and inspiring environment designed for Brazilian Jiu-Jitsu, boxing, Muay Thai kickboxing, and MMA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="aspect-[16/9] overflow-hidden border border-accent-red/10 group">
              <img 
                src="/gym tour pic 6 2 2.jpeg" 
                alt="Mohler MMA Heavy Bags" 
                className="w-full h-full object-cover group-hover:scale-105 group-hover:border-accent-red/50 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[16/9] overflow-hidden border border-accent-red/10 group">
              <img 
                src="/gym tour pic 7.jpeg" 
                alt="Mohler MMA Elite Training Floor" 
                className="w-full h-full object-cover group-hover:scale-105 group-hover:border-accent-red/50 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[16/9] overflow-hidden border border-accent-red/10 group">
              <img 
                src="/gym tour pic 3.jpeg" 
                alt="Mohler MMA Professional Mats" 
                className="w-full h-full object-cover group-hover:scale-105 group-hover:border-accent-red/50 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[16/9] overflow-hidden border border-accent-red/10 group">
              <img 
                src="/gym tour pic 4.jpeg" 
                alt="Mohler MMA Training Environment" 
                className="w-full h-full object-cover group-hover:scale-105 group-hover:border-accent-red/50 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Advantage - Bento Grid Section */}
      {/* What Our Members Are Saying - Testimonials Grid */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-white border-y border-ink/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-micro text-burnished mb-4 block uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl md:text-6xl uppercase text-ink">What Our Members<br /><span className="text-accent-red">Are Saying</span></h2>
            <div className="w-24 h-px bg-accent-red mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Our family loves this gym and the owners. The environment is friendly, safe, and most of all builds confidence in every single individual that trains with Mohler! If you are looking for self defense or just looking for a new home gym for Jiu Jitsu, then this is your school.",
                author: "Catherine",
                role: "Team Mohler Member"
              },
              {
                quote: "One of the most beautiful MMA gyms ever!!! State of the Art facility and a professional staff. Professor Mohler is an amazing coach and still has the same strong love and passion of the art since he first opened in 93! This gym is a direct result of him and his family's love and commitment to the community!",
                author: "Brandon",
                role: "Team Mohler Member"
              },
              {
                quote: "I visited from out of town and participated in a jiu jitsu class. Instructor Mohler was very welcoming and gave me a personal tour at entry. Good guys at every level, both gi and no-gi. Great culture/environment! Thanks Team Mohler for the great experience!",
                author: "Shane",
                role: "Visiting Student"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="p-8 md:p-10 bg-secondary-bg text-white group relative overflow-hidden border-2 border-burnished-gold/20 rounded-sm transition-all duration-500 flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-burnished opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative z-10">
                  <span className="text-5xl md:text-6xl font-serif italic text-accent-red mb-2 block leading-none">"</span>
                  <p className="text-base text-white/80 mb-8 leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-px bg-accent-red mb-4"></div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-tight">{testimonial.author}</h4>
                  <p className="text-xs text-burnished uppercase tracking-widest font-bold mb-4">{testimonial.role}</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-burnished-gold text-burnished-gold glow-burnished" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adult Class Schedule */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-secondary-bg border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <span className="text-micro text-burnished mb-6 block uppercase tracking-widest">Elite Performance</span>
            <h2 className="text-5xl md:text-7xl mb-8 uppercase leading-[0.85] text-white">ADULT<br /><span className="text-accent-red">CLASS SCHEDULE</span></h2>
            <div className="w-24 h-px bg-accent-red"></div>
          </motion.div>

          <div className="mb-8 flex flex-wrap gap-6 items-center bg-white/5 p-5 rounded-sm border border-white/10 max-w-fit">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-burnished rounded-full glow-burnished animate-pulse"></div>
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-black text-burnished">Best for trial class</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-accent-red rounded-full shadow-[0_0_15px_rgba(255,0,0,0.4)]"></div>
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-black text-white">Trial Classes: Mon-Thur & Sat Only</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adultSchedule.map((day, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border-l-4 border-accent-red p-6 shadow-sm hover:shadow-xl transition-all duration-500 relative group overflow-hidden rounded-sm"
              >
                {/* Decorative Number */}
                <div className="absolute -top-4 -right-4 text-8xl font-display uppercase text-secondary-bg/[0.03] group-hover:text-accent-red/5 transition-colors pointer-events-none select-none">
                  0{idx + 1}
                </div>

                <h3 className="text-xl font-black mb-6 uppercase tracking-tighter text-ink border-b border-gray-100 pb-3">{day.day}</h3>
                <div className="space-y-6 relative z-10">
                  {day.classes.map((item, cIdx) => (
                    <div key={cIdx} className={`group/item transition-all ${item.gold ? 'bg-burnished-gold/5 -mx-4 px-4 py-3 rounded-sm border-l-2 border-burnished' : ''}`}>
                      <div className="flex items-center gap-3 mb-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-accent-red">{item.time}</p>
                        {item.gold && (
                          <span className="text-[7px] bg-burnished text-white px-2 py-0.5 font-black uppercase tracking-[0.2em] rounded-full shadow-sm">
                            GOLD
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-ink leading-tight mb-1 uppercase tracking-tight group-hover/item:text-accent-red transition-colors">{item.class}</h4>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-wide">{item.level}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Adult Policy Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-burnished p-6 relative overflow-hidden flex flex-col justify-center rounded-sm shadow-[0_10px_30px_rgba(184,134,11,0.1)]"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-burnished"></div>
              <div className="relative z-10">
                <h4 className="text-burnished uppercase tracking-[0.3em] text-[8px] font-black mb-1">Adult Policy</h4>
                <h3 className="text-lg font-black uppercase italic mb-3 tracking-tighter text-ink">The Mohler <span className="text-burnished">Standard</span></h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-black uppercase text-[8px] tracking-widest block mb-0.5 text-ink">New Students:</span>
                    <p className="text-[10px] leading-relaxed text-ink/80 font-bold">
                      Trial classes are exclusively available for sessions marked <span className="text-burnished">Gold</span>. All other classes are reserved for active members.
                    </p>
                  </div>
                  <div>
                    <span className="font-black uppercase text-[8px] tracking-widest block mb-0.5 text-ink">Official Attire:</span>
                    <p className="text-[10px] leading-relaxed text-ink/80 font-bold">
                      We prefer all students train in <span className="text-burnished">Mohler Brand</span> gear to maintain a unified, professional team environment.
                    </p>
                  </div>
                  <div>
                    <span className="font-black uppercase text-[8px] tracking-widest block mb-0.5 text-ink">Safety & Risk:</span>
                    <p className="text-[10px] leading-relaxed text-ink/80 font-bold">
                      Sparring is an optional privilege (3–6 months training recommended). Protective gear is the student's sole responsibility; training without it is at your own risk.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 text-5xl font-black text-ink/[0.02] italic select-none pointer-events-none">
                POLICY
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Kids Class Schedule */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-primary-bg border-b border-ink/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 text-center"
          >
            <span className="text-micro text-burnished mb-6 block uppercase tracking-widest">Future Champions</span>
            <h2 className="text-5xl md:text-7xl mb-8 uppercase leading-[0.85] text-ink">KIDS<br /><span className="text-accent-red">CLASS SCHEDULE</span></h2>
            <div className="w-24 h-px bg-accent-red mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kidsSchedule.map((day, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border-l-4 border-secondary-bg p-6 shadow-sm hover:shadow-xl transition-all duration-500 relative group overflow-hidden rounded-sm"
              >
                {/* Decorative Number */}
                <div className="absolute -top-4 -right-4 text-8xl font-display uppercase text-secondary-bg/[0.03] group-hover:text-accent-red/5 transition-colors pointer-events-none select-none">
                  0{idx + 1}
                </div>

                <h3 className="text-xl font-black mb-6 uppercase tracking-tighter text-ink border-b border-gray-100 pb-3">{day.day}</h3>
                <div className="space-y-6 relative z-10">
                  {day.classes.map((item, cIdx) => (
                    <div key={cIdx} className={`group/item transition-all ${(item as any).gold ? 'bg-burnished-gold/5 -mx-4 px-4 py-3 rounded-sm border-l-2 border-burnished' : ''}`}>
                      <div className="flex items-center gap-3 mb-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-accent-red">{item.time}</p>
                        {(item as any).gold && (
                          <span className="text-[7px] bg-burnished text-white px-2 py-0.5 font-black uppercase tracking-[0.2em] rounded-full shadow-sm">
                            GOLD
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-ink leading-tight mb-1 uppercase tracking-tight group-hover/item:text-accent-red transition-colors">{item.class}</h4>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-wide">{item.level}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-burnished p-6 relative overflow-hidden flex flex-col justify-center rounded-sm shadow-[0_10px_30px_rgba(184,134,11,0.1)]"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-burnished"></div>
              <div className="relative z-10">
                <h4 className="text-burnished uppercase tracking-[0.3em] text-[8px] font-black mb-1">Kids Policy</h4>
                <h3 className="text-lg font-black uppercase italic mb-3 tracking-tighter text-ink">The Mohler <span className="text-burnished">Standard</span></h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-black uppercase text-[8px] tracking-widest block mb-0.5 text-ink">Team Uniform:</span>
                    <p className="text-[10px] leading-relaxed text-ink/80 font-bold">
                      To maintain the professional environment of our academy, we train exclusively in official Mohler Brand gear. We take pride in a unified team appearance that reflects our 30-year lineage.
                    </p>
                  </div>
                  <div>
                    <span className="font-black uppercase text-[8px] tracking-widest block mb-0.5 text-ink">New Student Entry:</span>
                    <p className="text-[10px] leading-relaxed text-ink/80 font-bold">
                      To ensure a world-class introduction, all new students are scheduled for Monday–Thursday or Saturday sessions only. Please arrive 15 minutes early for your orientation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 text-5xl font-black text-ink/[0.02] italic select-none pointer-events-none">
                POLICY
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <span className="text-micro text-accent-red mb-4 block uppercase font-bold tracking-[0.4em]">Team Mohler</span>
            <h2 className="text-5xl md:text-7xl font-display text-ink leading-none mb-8 uppercase tracking-tighter">
              MEMBERSHIPS
            </h2>
            <div className="w-24 h-px bg-accent-red mx-auto"></div>
          </motion.div>

          <div className="flex flex-col gap-12 mb-12 max-w-7xl mx-auto">
            {/* Unlimited Plan */}
            <div className="bg-ink text-white shadow-2xl relative group overflow-hidden flex flex-col lg:flex-row border border-burnished-gold/20 hover:border-burnished-gold/40 transition-colors duration-700">
              {/* Header - Left Side */}
              <div className="p-8 lg:w-1/4 relative z-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-accent-red/60 bg-ink/50">
                <div className="absolute left-0 top-8 bottom-8 w-2 bg-accent-red"></div>
                <h2 className="text-2xl md:text-3xl font-display uppercase leading-tight mb-3 pl-8 text-white">
                  {unlimitedPlan.name}
                </h2>
                <p className="text-burnished font-black uppercase tracking-[0.4em] text-[10px] italic pl-8">
                  {unlimitedPlan.category}
                </p>
                <div className="absolute -bottom-6 -right-6 opacity-[0.03] text-7xl font-display uppercase pointer-events-none select-none">UNLIMITED</div>
              </div>

              {/* Body - Right Side */}
              <div className="p-8 flex-grow relative z-10">
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                  <Star size={100} className="text-burnished-gold glow-burnished" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  {unlimitedPlan.options.map((opt, i) => (
                    <div key={i} className={`flex flex-col ${i !== unlimitedPlan.options.length - 1 ? 'border-b border-white/20 pb-8 md:pb-0 md:border-b-0 md:border-r border-white/20 md:pr-8' : ''}`}>
                      <div className="text-left">
                        <h4 className="text-[9px] font-bold text-burnished uppercase tracking-[0.2em] mb-3">{opt.label}</h4>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-display leading-none">${opt.price}</span>
                          <span className="text-[10px] text-burnished font-black uppercase tracking-widest">/ {opt.period}</span>
                        </div>
                        <p className="text-[9px] text-white/90 font-bold uppercase tracking-[0.2em] mt-2">+$49.94 Enrollment Fee</p>
                      </div>
                      
                      <div className="space-y-3 text-left my-6">
                        <div className="flex items-center gap-3">
                          <Check size={14} className="text-burnished-gold shrink-0 glow-burnished" />
                          <p className="text-[9px] font-bold uppercase tracking-wide">{opt.terms}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check size={14} className="text-burnished-gold shrink-0 glow-burnished" />
                          <p className="text-[9px] font-bold uppercase tracking-wide">Unlimited Access to All Arts</p>
                        </div>
                      </div>

                      <a 
                        href={opt.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block w-full text-center py-3 bg-accent-red text-white text-[9px] uppercase tracking-[0.3em] font-black hover:bg-white hover:text-secondary-bg transition-all duration-500 shadow-lg mt-auto"
                      >
                        SELECT PLAN
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Individual Plans */}
            {[
              { ...individualPlans[0], subLabel: "CORE PROGRAM", short: "BJJ" },
              { ...individualPlans[1], subLabel: "STRIKING PROGRAM", short: "MT" },
              { ...individualPlans[2], subLabel: "STRIKING PROGRAM", short: "BOX" },
              { ...individualPlans[3], subLabel: "", short: "TEEN", name: `${individualPlans[3].name} (${individualPlans[3].age})` },
              { ...individualPlans[4], subLabel: "", short: "KIDS", name: `${individualPlans[4].name} (${individualPlans[4].age})` }
            ].map((plan, idx) => (
              <div key={idx} className="bg-ink text-white shadow-2xl relative group overflow-hidden flex flex-col lg:flex-row border border-burnished-gold/20 hover:border-burnished-gold/40 transition-colors duration-700">
                {/* Header - Left Side */}
                <div className="p-8 lg:w-1/4 relative z-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-accent-red/60 bg-ink/50">
                  <div className="absolute left-0 top-8 bottom-8 w-2 bg-accent-red"></div>
                  <h2 className="text-2xl md:text-3xl font-display uppercase leading-tight mb-3 pl-8 text-white">
                    {plan.name}
                  </h2>
                  {plan.subLabel && (
                    <p className="text-burnished font-black uppercase tracking-[0.4em] text-[10px] italic pl-8">
                      {plan.subLabel}
                    </p>
                  )}
                  <div className="absolute -bottom-6 -right-6 opacity-[0.03] text-7xl font-display uppercase pointer-events-none select-none">{plan.short}</div>
                </div>

                {/* Body - Right Side */}
                <div className="p-8 flex-grow relative z-10">
                  <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                    <Star size={100} className="text-burnished-gold glow-burnished" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {plan.options.map((opt, i) => (
                      <div key={i} className={`flex flex-col ${i !== plan.options.length - 1 ? 'border-b border-white/20 pb-8 md:pb-0 md:border-b-0 md:border-r border-white/20 md:pr-8' : ''}`}>
                        <div className="text-left">
                          <h4 className="text-[9px] font-bold text-burnished uppercase tracking-[0.2em] mb-3">{opt.label}</h4>
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-display leading-none">${opt.price}</span>
                            <span className="text-[10px] text-burnished font-black uppercase tracking-widest">/ {opt.period}</span>
                          </div>
                          <p className="text-[9px] text-white/90 font-bold uppercase tracking-[0.2em] mt-2">+$49.94 Enrollment Fee</p>
                        </div>
                        
                        <div className="space-y-3 text-left my-6">
                          <div className="flex items-center gap-3">
                            <Check size={14} className="text-burnished-gold shrink-0 glow-burnished" />
                            <p className="text-[9px] font-bold uppercase tracking-wide">{opt.terms}</p>
                          </div>
                        </div>

                        <a 
                          href={opt.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="block w-full text-center py-3 bg-accent-red text-white text-[9px] uppercase tracking-[0.3em] font-black hover:bg-white hover:text-secondary-bg transition-all duration-500 shadow-lg mt-auto"
                        >
                          SELECT PLAN
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/rates" className="inline-flex items-center gap-4 text-accent-red font-black uppercase tracking-widest text-micro hover:gap-6 transition-all duration-500">
              View All Rates & Family Discounts <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      <SocialSection />

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
