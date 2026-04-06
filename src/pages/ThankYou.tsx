import { motion } from 'motion/react';
import { CheckCircle2, Clock, Shirt, Car, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

export default function ThankYou() {
  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24">
      <SEO 
        title="Thank You | Team Mohler MMA Grapevine" 
        description="Thank you for contacting Team Mohler MMA! We've received your request and a coach will be reaching out to you shortly to finalize your first visit." 
      />
      <div className="max-w-4xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-red/10 text-accent-red mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-7xl md:text-9xl font-display uppercase leading-tight mb-10">
            You’re on <br />
            <span className="text-accent-red">the list!</span>
          </h1>
          <p className="text-xl text-ink font-display uppercase tracking-widest mb-8">
            We’re excited to see you on the mats.
          </p>
          <p className="text-xl md:text-2xl text-accent-red font-medium max-w-2xl mx-auto leading-relaxed">
            A coach will be reaching out via text or call shortly to finalize your first visit.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="p-10 border border-ink/10 bg-white shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-display uppercase tracking-widest mb-10 border-b border-ink/10 pb-4">
              What to expect
            </h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 text-accent-red">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Arrival</h3>
                  <p className="text-sm text-ink/80 leading-relaxed">
                    Please arrive 10-15 minutes early. We want to give you a full tour of the academy and introduce you to your instructor.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 text-accent-red">
                  <Shirt size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-2">What to Wear</h3>
                  <p className="text-sm text-ink/80 leading-relaxed">
                    Comfortable athletic clothes (no zippers or pockets if possible).
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 text-accent-red">
                  <Car size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Parking</h3>
                  <p className="text-sm text-ink/80 leading-relaxed">
                    We have plenty of free parking on both sides of the building.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 text-accent-red">
                  <Heart size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-2">The Vibe</h3>
                  <p className="text-sm text-ink/80 leading-relaxed">
                    We were all beginners once. Leave the ego at the door—we’re here to help you succeed!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="p-8 bg-ink text-white">
              <h3 className="text-xl font-display uppercase mb-4">Need immediate help?</h3>
              <p className="text-white/80 text-sm mb-6">Give us a call or text if you have any questions before your visit.</p>
              <a href="tel:2147380640" className="text-2xl font-display text-accent-red hover:text-white transition-colors">
                (214) 738-0640
              </a>
            </div>
            
            <Link 
              to="/" 
              className="inline-block text-center border border-ink py-6 text-micro uppercase tracking-[0.3em] hover:bg-ink hover:text-white transition-all duration-500"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>

      <CTASection image={`${import.meta.env.BASE_URL}2_BJJ_students_grappling_comp_2.jpeg`} />
    </div>
  );
}
