import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const faqs = [
  {
    q: "Do I need experience to start martial arts classes?",
    a: "No experience is needed. Our beginner-friendly classes are designed to teach you everything from the ground up. Whether you're brand new or returning after time away, we’ll guide you every step of the way."
  },
  {
    q: "Who can learn Brazilian Jiu-Jitsu, MMA, Muay Thai, or Boxing?",
    a: "Anyone can learn and progress with consistent training. We work with men and women of all ages, experience levels, and fitness backgrounds. You don’t need to be in great shape to start—training will build that over time."
  },
  {
    q: "Do I need to be in good physical shape to begin training?",
    a: "Not at all. Our classes are designed to meet you where you are. You’ll build strength, conditioning, and confidence as you train—no matter your starting point."
  },
  {
    q: "Am I too old to start Brazilian Jiu-Jitsu?",
    a: "Not at all. Many of our students start in their 30s, 40s, and beyond. Brazilian Jiu-Jitsu is built on technique and leverage—not age or athleticism."
  },
  {
    q: "What should I expect in my first class?",
    a: "You’ll be welcomed by our team, introduced to basic techniques, and guided step-by-step through your first class. Our goal is to make sure you feel comfortable, supported, and confident from day one."
  },
  {
    q: "Are your classes beginner-friendly?",
    a: "Yes. We specialize in helping beginners get started in a structured, supportive environment while also providing advanced training for experienced students."
  },
  {
    q: "How often should I train each week?",
    a: "Most new students start with 2–3 classes per week. As you progress, you can train more frequently based on your goals and schedule."
  },
  {
    q: "How often can advanced students train?",
    a: "Advanced students can train as often as they like. We offer classes 7 days a week, along with private lessons for those looking to accelerate their progress."
  },
  {
    q: "What kind of equipment do I need to start?",
    a: (
      <div className="space-y-4">
        <p>You don’t need much to get started, and we’ll guide you through everything you need.</p>
        <ul className="list-none space-y-2">
          <li><strong>Brazilian Jiu-Jitsu:</strong> Gi (kimono), optional mouthpiece</li>
          <li><strong>Boxing:</strong> 16oz gloves, hand wraps, mouthpiece</li>
          <li><strong>MMA:</strong> MMA gloves, boxing gloves, hand wraps, mouthpiece</li>
          <li><strong>Muay Thai:</strong> Boxing gloves, hand wraps, shin guards, mouthpiece</li>
        </ul>
        <p>Athletic cups are recommended but not required.</p>
      </div>
    )
  },
  {
    q: "Can I train if I’m recovering from an injury?",
    a: "Yes, as long as your doctor has cleared you. We’ll help you train safely and adjust techniques around any limitations."
  },
  {
    q: "What is the belt system for Brazilian Jiu-Jitsu?",
    a: "Adult students follow the IBJJF belt system: White, Blue, Purple, Brown, and Black. Children’s rankings vary by age and experience."
  },
  {
    q: "Do you charge belt testing fees?",
    a: "We do not charge belt testing fees for adults."
  },
  {
    q: "Do you teach Gracie Jiu-Jitsu?",
    a: "Yes. All Brazilian Jiu-Jitsu comes from the same roots, including what many people refer to as “Gracie Jiu-Jitsu.” At Team Mohler, we teach authentic Brazilian Jiu-Jitsu with a strong foundation in fundamentals, technique, and real-world application."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-primary-bg pt-32">
      <SEO 
        title="Q&A With Professor Mohler | Real Answers From the Mats" 
        description="Get direct insight from over 30 years of experience in Brazilian Jiu-Jitsu and martial arts. Whether you're just getting started or looking to take your training further, these are the questions we hear most." 
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do I need experience to start martial arts classes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No experience is needed. Our beginner-friendly classes are designed to teach you everything from the ground up. Whether you're brand new or returning after time away, we’ll guide you every step of the way."
                }
              },
              {
                "@type": "Question",
                "name": "Who can learn Brazilian Jiu-Jitsu, MMA, Muay Thai, or Boxing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Anyone can learn and progress with consistent training. We work with men and women of all ages, experience levels, and fitness backgrounds. You don’t need to be in great shape to start—training will build that over time."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to be in good physical shape to begin training?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not at all. Our classes are designed to meet you where you are. You’ll build strength, conditioning, and confidence as you train—no matter your starting point."
                }
              },
              {
                "@type": "Question",
                "name": "Am I too old to start Brazilian Jiu-Jitsu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not at all. Many of our students start in their 30s, 40s, and beyond. Brazilian Jiu-Jitsu is built on technique and leverage—not age or athleticism."
                }
              },
              {
                "@type": "Question",
                "name": "What should I expect in my first class?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You’ll be welcomed by our team, introduced to basic techniques, and guided step-by-step through your first class. Our goal is to make sure you feel comfortable, supported, and confident from day one."
                }
              },
              {
                "@type": "Question",
                "name": "Are your classes beginner-friendly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We specialize in helping beginners get started in a structured, supportive environment while also providing advanced training for experienced students."
                }
              },
              {
                "@type": "Question",
                "name": "How often should I train each week?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most new students start with 2–3 classes per week. As you progress, you can train more frequently based on your goals and schedule."
                }
              },
              {
                "@type": "Question",
                "name": "What kind of equipment do I need to start?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You don’t need much to get started. Brazilian Jiu-Jitsu requires a gi, boxing requires gloves and wraps, MMA requires gloves and wraps, and Muay Thai requires gloves, wraps, and shin guards. Mouthpieces are recommended."
                }
              }
            ]
          })
        }}
      />
      {/* Hero Section - Split Layout with Image */}
      <section className="split-layout border-b border-ink/10 bg-secondary-bg/30">
        <div className="flex flex-col justify-center section-padding border-r border-ink/10 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-sm md:text-base font-display uppercase tracking-[0.2em] font-bold text-accent-red mb-6 block">Q&A With Professor Mohler</span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              Real Answers<br />
              <span className="text-accent-red">From the Mats</span>
            </h1>
            <p className="text-xl md:text-2xl text-ink/60 font-light mb-12 leading-relaxed max-w-2xl">
              Get direct insight from over 30 years of experience in Brazilian Jiu-Jitsu and martial arts. Whether you're just getting started or looking to take your training further, these are the questions we hear most.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-accent-red text-white text-micro font-black uppercase tracking-widest hover:bg-white hover:text-ink transition-colors"
            >
              Book a FREE Trial
            </motion.button>
          </motion.div>
        </div>
        
        <div className="relative h-[40vh] lg:h-auto overflow-hidden bg-secondary-bg">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            src={`/mohlerpic2.jpeg`} 
            alt="Professor Mohler Teaching" 
            className="w-full h-full object-cover brightness-50"
           
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-bg/20 to-transparent"></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-ink/10">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-10 flex justify-between items-start text-left group"
                >
                  <span className={`text-2xl md:text-3xl font-display uppercase tracking-tight leading-tight transition-colors pr-8 ${openIndex === index ? 'text-accent-red' : 'text-ink group-hover:text-accent-red'}`}>
                    {faq.q}
                  </span>
                  <div className={`mt-2 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? <Minus className="text-accent-red" size={24} /> : <Plus className="text-ink/30" size={24} />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? 'auto' : 0, 
                    opacity: openIndex === index ? 1 : 0,
                    marginBottom: openIndex === index ? 40 : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="text-lg md:text-xl text-ink/70 font-light leading-relaxed max-w-3xl">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection image={`/gym-tour-pic4.jpeg`} />
    </div>
  );
}
