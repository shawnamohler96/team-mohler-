import { motion } from 'motion/react';
import { Play, CheckCircle2, Shield, Target, Users, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

export default function OnlineTraining() {
  return (
    <div className="bg-primary-bg pt-32 min-h-screen">
      <SEO 
        title="Online BJJ Training: White Belt to Blue Belt Blueprint™ | Team Mohler MMA" 
        description="Master the fundamentals of Brazilian Jiu-Jitsu from anywhere with our White Belt to Blue Belt Blueprint™. A structured, beginner-friendly online training system by Team Mohler MMA." 
      />
      {/* 🏆 HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 z-0">
          <img referrerPolicy="no-referrer" src={`/2-guys-grappling-closeup2.jpeg`} 
            alt="Jiu-Jitsu Grappling Close-up" 
            className="w-full h-full object-cover brightness-[0.5]"
           
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-accent-red font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Online Training Portal</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase leading-[0.9] text-white mb-8">
              White Belt to <br />
              <span className="text-accent-red">Blue Belt</span> <br />
              Blueprint™
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 leading-relaxed">
              Start Jiu-Jitsu the right way—with a beginner-friendly system built by a team that produces world champions.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <Link
                to="/contact"
                className="bg-accent-red text-white px-10 py-5 text-micro uppercase tracking-widest font-bold hover:bg-white hover:text-ink transition-all duration-500 shadow-xl"
              >
                Start Training Today
              </Link>
              <div className="flex items-center space-x-3 text-white/60">
                <Zap size={20} className="text-accent-red" />
                <span className="text-xs uppercase tracking-widest">No experience needed. Just a proven path.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 💥 SECTION 2: RELATABLE HOOK */}
      <section className="py-24 bg-white border-b border-ink/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display uppercase mb-12 leading-tight">
              Starting Jiu-Jitsu can feel <span className="text-accent-red">overwhelming.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                "What do you learn first?",
                "What actually matters?",
                "How do you know if you're progressing?"
              ].map((q, i) => (
                <div key={i} className="p-8 bg-gray-50 luxury-border italic text-lg text-ink/70">
                  "{q}"
                </div>
              ))}
            </div>
            <p className="text-2xl font-bold uppercase tracking-tight text-ink">
              That’s exactly why we built this.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🧠 SECTION 3: YOUR SOLUTION */}
      <section className="py-24 bg-secondary-bg text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-8 leading-[0.9]">
                The White Belt to <br />
                Blue Belt <span className="text-accent-red">Blueprint™</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                The White Belt to Blue Belt Blueprint™ gives you a clear, structured path from day one.
              </p>
              <p className="text-lg text-gray-400 mb-12">
                This is the exact system we use inside Team Mohler Jiu-Jitsu to develop our students—from complete beginners all the way to blue belt.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full border border-accent-red flex items-center justify-center text-accent-red">
                    <Shield size={20} />
                  </div>
                  <span className="text-xl uppercase tracking-tight font-bold">No guesswork.</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full border border-accent-red flex items-center justify-center text-accent-red">
                    <Target size={20} />
                  </div>
                  <span className="text-xl uppercase tracking-tight font-bold">No random techniques.</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full border border-accent-red flex items-center justify-center text-accent-red">
                    <Zap size={20} />
                  </div>
                  <span className="text-xl uppercase tracking-tight font-bold">Just step-by-step progress.</span>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-video bg-ink luxury-border overflow-hidden group cursor-pointer">
                <img referrerPolicy="no-referrer" src={`/main-pic-main-pic-mohler.jpeg`} 
                  alt="Blueprint System" 
                  className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent-red flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play fill="white" className="text-white ml-1" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🥋 SECTION 4: WHAT THEY GET */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display uppercase mb-6">Inside the <span className="text-accent-red">Program</span></h2>
            <p className="text-xl text-ink/60 uppercase tracking-widest">Everything you need to master the fundamentals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Step-by-step beginner curriculum",
              "Structured stripe progression system",
              "Real techniques that actually work",
              "Drill breakdowns + movement fundamentals",
              "Ongoing updates and new content",
              "Access to our private community"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start space-x-4 p-8 bg-gray-50 luxury-border"
              >
                <CheckCircle2 className="text-accent-red shrink-0" size={24} />
                <span className="text-lg font-bold uppercase tracking-tight text-ink">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 SECTION 5: YOUR DIFFERENCE */}
      <section className="py-24 bg-ink text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img referrerPolicy="no-referrer" src={`/mohler-teaching-jiu-jitsu-2.jpeg`} 
                alt="Professor Mohler Teaching Jiu-Jitsu" 
                className="w-full h-[600px] object-cover luxury-border grayscale"
               
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-8 leading-[0.9]">
                Beginner-Friendly. <br />
                <span className="text-accent-red">Competition Proven.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                We welcome complete beginners—but we train to a higher standard.
              </p>
              <p className="text-lg text-gray-400 mb-12">
                The same system used to build our in-house competitors is now available to you.
              </p>
              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent-red transition-colors">
                    <ArrowRight className="text-accent-red" size={24} />
                  </div>
                  <span className="text-xl uppercase tracking-tight font-bold">You don’t need experience to start.</span>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent-red transition-colors">
                    <ArrowRight className="text-accent-red" size={24} />
                  </div>
                  <span className="text-xl uppercase tracking-tight font-bold">You just need the right system.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 💬 SECTION 6: CONFIDENCE BUILDER */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display uppercase mb-12 leading-tight">
              If you’ve been thinking about starting Jiu-Jitsu, <span className="text-accent-red">this is your sign.</span>
            </h2>
            <p className="text-2xl text-ink/60 font-light mb-12">
              You don’t need to be in shape. You don’t need experience. You just need to start.
            </p>
            <p className="text-xl font-bold uppercase tracking-[0.2em] text-accent-red">
              We’ll guide you the rest of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 💰 SECTION 7: OFFER */}
      <section className="py-24 bg-gray-50 border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white luxury-border p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <Zap className="text-accent-red/20" size={120} />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-6">Train Anywhere. <span className="text-accent-red">Progress Everywhere.</span></h2>
              <p className="text-xl text-ink/60 mb-12 uppercase tracking-widest">Get full access to the complete blueprint</p>
              
              <div className="flex flex-col items-center mb-12">
                <div className="text-6xl md:text-8xl font-display text-ink mb-2">$29<span className="text-2xl text-ink/40">/month</span></div>
                <div className="w-24 h-1 bg-accent-red"></div>
              </div>

              <div className="max-w-md mx-auto space-y-4 mb-12 text-left">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent-red" size={20} />
                  <span className="text-sm uppercase tracking-widest font-bold">The White Belt to Blue Belt Blueprint™</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent-red" size={20} />
                  <span className="text-sm uppercase tracking-widest font-bold">Our full beginner curriculum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent-red" size={20} />
                  <span className="text-sm uppercase tracking-widest font-bold">Community support and coaching</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-block bg-ink text-white px-16 py-6 text-micro uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-ink transition-all duration-500 shadow-2xl"
              >
                Start Training Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection image={`/2-guys-grappling-closeup2.jpeg`} />
    </div>
  );
}
