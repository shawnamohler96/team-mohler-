import { motion } from 'motion/react';
import { Check, ArrowRight, Info, Users, Star, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

export default function Rates() {
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
    <div className="bg-primary-bg pt-32 min-h-screen">
      <SEO 
        title="Membership Rates & Pricing | Team Mohler MMA Grapevine" 
        description="View our membership rates for BJJ, Boxing, Muay Thai, and MMA in Grapevine, TX. We offer unlimited class memberships, individual programs, and family discounts." 
      />
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-ink/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-micro text-accent-red mb-6 block uppercase font-bold tracking-[0.4em]">Team Mohler MMA Membership Pricing</span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display text-ink leading-none mb-12 uppercase tracking-tighter">
              MEMBERSHIP <span className="text-accent-red italic">RATES</span>
            </h1>
            <p className="text-xl md:text-2xl text-ink/60 font-light max-w-3xl mx-auto leading-tight uppercase tracking-widest">
              Invest in your health and well-being with a Mohler MMA membership. Our memberships provide access to world-class instruction, a supportive community, and a variety of programs.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-16">
              <Link to="/contact" className="bg-accent-red text-white px-12 py-6 text-micro uppercase tracking-widest font-black hover:bg-white hover:text-ink transition-all duration-500 shadow-xl">
                Book a FREE Trial
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership Plans Overview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Renew Membership Section */}
          <div className="mb-24 max-w-5xl mx-auto">
            <div className="bg-ink text-white p-8 md:p-10 text-center relative overflow-hidden border border-burnished-gold/30 group">
              <div className="absolute inset-0 bg-accent-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-display uppercase mb-4">Existing Members : <span className="text-accent-red italic">Renew Membership</span></h3>
                <p className="text-sm text-white/60 uppercase tracking-widest mb-8 max-w-xl mx-auto font-light">Maintain your current enrollment and training schedule.</p>
                <a 
                  href="https://www.mymemberaccount.com/member-enrollment/60486/member" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-accent-red text-white px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white hover:text-ink transition-all duration-500 shadow-xl"
                >
                  [ RENEW MEMBERSHIP ]
                </a>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-[0.03] text-[10vw] font-display uppercase pointer-events-none select-none">RENEW</div>
            </div>
          </div>

          {/* Membership Plans List */}
          <div className="flex flex-col gap-16 mb-32 max-w-7xl mx-auto px-4 lg:px-0">
            {/* Unlimited Plan */}
            <div className="bg-ink text-white shadow-2xl relative group overflow-hidden flex flex-col lg:flex-row border border-burnished-gold/20 hover:border-burnished-gold/40 transition-colors duration-700">
              {/* Header - Left Side */}
              <div className="p-10 lg:w-1/4 relative z-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-accent-red/60 bg-ink/50">
                <div className="absolute left-0 top-10 bottom-10 w-2 bg-accent-red"></div>
                <h2 className="text-3xl font-display uppercase leading-tight mb-4 pl-8 text-white">
                  {unlimitedPlan.name}
                </h2>
                <p className="text-burnished font-black uppercase tracking-[0.4em] text-xs italic pl-8">
                  {unlimitedPlan.category}
                </p>
                <div className="absolute -bottom-6 -right-6 opacity-[0.03] text-8xl font-display uppercase pointer-events-none select-none">UNLIMITED</div>
              </div>

              {/* Body - Right Side */}
              <div className="p-10 flex-grow relative z-10">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                  <Star size={120} className="text-burnished-gold" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                  {unlimitedPlan.options.map((opt, i) => (
                    <div key={i} className={`flex flex-col ${i !== unlimitedPlan.options.length - 1 ? 'border-b border-white/20 pb-12 md:pb-0 md:border-b-0 md:border-r border-white/20 md:pr-12' : ''}`}>
                      <div className="text-left">
                        <h4 className="text-[10px] font-bold text-burnished-gold uppercase tracking-[0.2em] mb-4">{opt.label}</h4>
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-display leading-none">${opt.price}</span>
                          <span className="text-xs text-burnished-gold font-black uppercase tracking-widest">/ {opt.period}</span>
                        </div>
                        <p className="text-[10px] text-white/90 font-bold uppercase tracking-[0.2em] mt-3">+$49.94 Enrollment Fee</p>
                      </div>
                      
                      <div className="space-y-4 text-left my-8">
                        <div className="flex items-center gap-3">
                          <Check size={16} className="text-burnished-gold shrink-0" />
                          <p className="text-[10px] font-bold uppercase tracking-wide">{opt.terms}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check size={16} className="text-burnished-gold shrink-0" />
                          <p className="text-[10px] font-bold uppercase tracking-wide">Unlimited Access to All Arts</p>
                        </div>
                      </div>

                      {opt.link ? (
                        <a 
                          href={opt.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="block w-full text-center py-4 bg-accent-red text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white hover:text-secondary-bg transition-all duration-500 shadow-lg mt-auto"
                        >
                          SELECT PLAN
                        </a>
                      ) : (
                        <Link to="/contact" className="block w-full text-center py-4 bg-accent-red text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white hover:text-secondary-bg transition-all duration-500 shadow-lg mt-auto">
                          SELECT PLAN
                        </Link>
                      )}
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
                <div className="p-10 lg:w-1/4 relative z-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-accent-red/60 bg-ink/50">
                  <div className="absolute left-0 top-10 bottom-10 w-2 bg-accent-red"></div>
                  <h2 className="text-3xl font-display uppercase leading-tight mb-4 pl-8 text-white">
                    {plan.name}
                  </h2>
                  {plan.subLabel && (
                    <p className="text-burnished font-black uppercase tracking-[0.4em] text-xs italic pl-8">
                      {plan.subLabel}
                    </p>
                  )}
                  <div className="absolute -bottom-6 -right-6 opacity-[0.03] text-8xl font-display uppercase pointer-events-none select-none">{plan.short}</div>
                </div>

                {/* Body - Right Side */}
                <div className="p-10 flex-grow relative z-10">
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                    <Star size={120} className="text-burnished-gold" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                    {plan.options.map((opt, i) => (
                      <div key={i} className={`flex flex-col ${i !== plan.options.length - 1 ? 'border-b border-white/20 pb-12 md:pb-0 md:border-b-0 md:border-r border-white/20 md:pr-12' : ''}`}>
                        <div className="text-left">
                          <h4 className="text-[10px] font-bold text-burnished-gold uppercase tracking-[0.2em] mb-4">{opt.label}</h4>
                          <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-display leading-none">${opt.price}</span>
                            <span className="text-xs text-burnished-gold font-black uppercase tracking-widest">/ {opt.period}</span>
                          </div>
                          <p className="text-[10px] text-white/90 font-bold uppercase tracking-[0.2em] mt-3">+$49.94 Enrollment Fee</p>
                        </div>
                        
                        <div className="space-y-4 text-left my-8">
                          <div className="flex items-center gap-3">
                            <Check size={16} className="text-burnished-gold shrink-0" />
                            <p className="text-[10px] font-bold uppercase tracking-wide">{opt.terms}</p>
                          </div>
                        </div>

                          {opt.link ? (
                            <a 
                              href={opt.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="block w-full text-center py-4 bg-accent-red text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white hover:text-secondary-bg transition-all duration-500 shadow-lg mt-auto"
                            >
                              SELECT PLAN
                            </a>
                          ) : (
                            <Link to="/contact" className="block w-full text-center py-4 bg-accent-red text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white hover:text-secondary-bg transition-all duration-500 shadow-lg mt-auto">
                              SELECT PLAN
                            </Link>
                          )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Pricing */}
      <section className="py-32 px-6 bg-secondary-bg text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-micro text-burnished-gold mb-6 block uppercase font-bold tracking-[0.4em]">Special Pricing</span>
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-display leading-[0.8] uppercase mb-12 tracking-tighter">
                FAMILY & <br />
                <span className="text-burnished-gold italic">PRIVATE</span> LESSONS
              </h2>
              <p className="text-xl text-white/70 font-light mb-12 leading-relaxed">
                Contact us or talk to us at the front desk to learn more about family member discounts and private lessons!
              </p>
              <div className="p-8 border-l-4 border-burnished-gold bg-white/5 backdrop-blur-sm">
                <h4 className="text-burnished-gold font-black uppercase tracking-widest text-sm mb-4">Family Member Discounts</h4>
                <p className="text-sm text-white/60 leading-relaxed uppercase tracking-wide">
                  Ask About Our Special Pricing for families who reside in the same household. All family members must be on the same membership together, with the same billing address & payment info. No additional discounts may be applied.
                </p>
              </div>
              <Link to="/contact" className="inline-block mt-12 bg-burnished-gold text-secondary-bg px-16 py-6 text-micro uppercase tracking-widest font-black hover:bg-white transition-all duration-500">
                Contact Us
              </Link>
            </div>
            <div className="space-y-12">
              <div className="bg-white/5 p-12 border border-burnished-gold/20 relative">
                <div className="relative z-10">
                  <h3 className="text-3xl font-display uppercase mb-8 text-burnished-gold">Private Lessons</h3>
                <div className="space-y-6 text-white/70 font-light leading-relaxed">
                  <p>
                    While Mohler MMA is known for the quality of our group classes, some students prefer one-on-one private lessons. Private lessons enable the instructors to teach the technique in a manner that will optimize learning and take advantage of a student's strengths (size, speed, etc.).
                  </p>
                  <p>
                    While anyone can mimic a particular technique in the way it is demonstrated, many techniques still require some modification to fit the abilities and body type of the student.
                  </p>
                  <p className="text-white font-medium italic">
                    Private lessons give the student the opportunity to work a technique in different ways to find the “detail” of the technique that works best for them. – so that you can maximize your proficiency based on your age, weight, height, athletic ability, and natural inclinations.
                  </p>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                  <Star className="text-burnished-gold" size={24} />
                  <p className="text-xs font-black uppercase tracking-widest text-burnished-gold">
                    Private Lessons Available for Purchase, Please inquire with the front desk for pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <CTASection image={`/adult-private-lesson.jpeg`} />
    </div>
  );
}
