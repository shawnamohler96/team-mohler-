import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Loader2, Phone, Mail, MapPin, Star, Shield, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Contact() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Program of Interest',
    schedule: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, name } = e.target;
    // For select, use name if id is not available
    const field = id || name;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        console.error('Failed to send message');
        alert('There was a problem sending your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary-bg pt-32 min-h-screen overflow-hidden relative">
      <SEO 
        title="Contact Us | Team Mohler MMA Grapevine" 
        description="Stop Thinking. Start Training. Claim your free trial today! Contact Team Mohler MMA in Grapevine, TX to book your trial or inquire about our BJJ, Boxing, Muay Thai, and MMA programs." 
      />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img 
          src={`/2-guys-grappling-closeup2.jpeg`} 
          alt="Background" 
          className="w-full h-full object-cover grayscale"
         
        />
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-red/5 -skew-x-12 translate-x-1/4 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 border border-ink/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <section className="px-8 md:px-20 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Left Side: Content & Info */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-micro text-burnished-gold mb-8 block uppercase tracking-[0.4em] font-bold">Your Journey Starts Here</span>
                <h1 className="text-6xl md:text-8xl mb-12 uppercase leading-[0.85] font-black tracking-tighter">
                  Stop Thinking.<br />
                  <span className="text-accent-red italic">Start Training.</span>
                </h1>
                
                <p className="text-xl text-ink/60 font-light mb-16 leading-relaxed max-w-md">
                  Your first 2 classes are on us! No ego, no pressure—just world-class martial arts. Take the first step toward a stronger, healthier you. Meet our expert coaches and get a personalized plan to build strength, skill, and confidence—both in the gym and in everyday life.
                </p>

                {/* Trust Signals */}
                <div className="mt-12 pt-12 border-t border-ink/10 grid grid-cols-2 gap-8">
                  <div className="flex items-center gap-4">
                    <Shield className="text-burnished-gold" size={24} />
                    <span className="text-[10px] uppercase font-black tracking-widest">30+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Star className="text-burnished-gold" size={24} />
                    <span className="text-[10px] uppercase font-black tracking-widest">Elite Lineage</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-12 md:p-16 border border-ink/5 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.08)] relative overflow-hidden group"
              >
                {/* Decorative Form Elements */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                  <Zap size={200} className="text-accent-red" />
                </div>

                <div className="relative z-10">
                  <h2 className="text-4xl font-display mb-12 uppercase tracking-tight">
                    BOOK YOUR <span className="text-accent-red italic">FREE TRIAL</span>
                  </h2>
                  
                  <form 
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10" 
                    onSubmit={handleSubmit}
                    name="contact"
                    data-netlify="true"
                  >
                    {/* Hidden input for Netlify Forms */}
                    <input type="hidden" name="form-name" value="contact" />
                    
                    <div className="relative">
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-ink/10 py-4 focus:border-accent-red outline-none transition-colors peer placeholder-transparent font-display uppercase tracking-widest text-sm" 
                        placeholder="Name"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label 
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-micro text-ink/60 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-display peer-placeholder-shown:tracking-widest peer-placeholder-shown:text-ink/40 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-micro peer-focus:text-burnished-gold"
                      >
                        Name *
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input 
                        type="email" 
                        className="w-full bg-transparent border-b border-ink/10 py-4 focus:border-accent-red outline-none transition-colors peer placeholder-transparent font-display uppercase tracking-widest text-sm" 
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label 
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-micro text-ink/60 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-display peer-placeholder-shown:tracking-widest peer-placeholder-shown:text-ink/40 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-micro peer-focus:text-burnished-gold"
                      >
                        Email *
                      </label>
                    </div>

                    <div className="relative">
                      <input 
                        type="tel" 
                        className="w-full bg-transparent border-b border-ink/10 py-4 focus:border-accent-red outline-none transition-all peer placeholder-transparent font-display uppercase tracking-widest text-sm" 
                        placeholder="Phone"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <label 
                        htmlFor="phone"
                        className="absolute left-0 -top-3.5 text-micro text-ink/60 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-display peer-placeholder-shown:tracking-widest peer-placeholder-shown:text-ink/40 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-micro peer-focus:text-burnished-gold"
                      >
                        Phone *
                      </label>
                    </div>

                    <div className="relative">
                      <select 
                        name="program"
                        className="w-full bg-transparent border-b border-ink/10 py-4 focus:border-accent-red outline-none transition-colors appearance-none font-display uppercase tracking-widest text-sm cursor-pointer"
                        value={formData.program}
                        onChange={handleChange}
                      >
                        <option disabled value="Program of Interest">Program of Interest</option>
                        <option value="Little Lions Jiu-Jitsu (ages 4-6)">Little Lions Jiu-Jitsu (ages 4-6)</option>
                        <option value="Kids Jiu-Jitsu (ages 7-12)">Kids Jiu-Jitsu (ages 7-12)</option>
                        <option value="Teen Jiu-Jitsu (ages 13+)">Teen Jiu-Jitsu (ages 13+)</option>
                        <option value="Adult Brazilian Jiu-Jitsu">Adult Brazilian Jiu-Jitsu</option>
                        <option value="Adult Boxing">Adult Boxing</option>
                        <option value="Adult Muay Thai Kickboxing">Adult Muay Thai Kickboxing</option>
                        <option value="Teen Boxing & Muay Thai Kickboxing (age 13+)">Teen Boxing & Muay Thai Kickboxing (age 13+)</option>
                        <option value="Adult MMA">Adult MMA</option>
                        <option value="Wrestling">Wrestling</option>
                        <option value="Private Lessons">Private Lessons</option>
                      </select>
                      <label className="absolute left-0 -top-3.5 text-micro text-burnished-gold">Program of Interest</label>
                      <ChevronDown className="absolute right-0 top-4 text-ink/20 pointer-events-none" size={16} />
                    </div>

                    <div className="relative md:col-span-2">
                      <textarea 
                        className="w-full bg-transparent border-b border-ink/10 py-4 h-24 focus:border-accent-red outline-none transition-all peer placeholder-transparent resize-none font-display uppercase tracking-widest text-sm" 
                        placeholder="Trial Schedule"
                        id="schedule"
                        name="schedule"
                        value={formData.schedule}
                        onChange={handleChange}
                      ></textarea>
                      <label 
                        htmlFor="schedule"
                        className="absolute left-0 -top-3.5 text-micro text-ink/80 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-display peer-placeholder-shown:tracking-widest peer-placeholder-shown:text-ink/60 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-micro peer-focus:text-burnished-gold"
                      >
                        Check out our schedule and let us know which date and class time works best for your free trial.
                      </label>
                    </div>

                    <div className="relative md:col-span-2">
                      <textarea 
                        className="w-full bg-transparent border-b border-ink/10 py-4 h-24 focus:border-accent-red outline-none transition-all peer placeholder-transparent resize-none font-display uppercase tracking-widest text-sm" 
                        placeholder="Message"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      <label 
                        htmlFor="message"
                        className="absolute left-0 -top-3.5 text-micro text-ink/80 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-display peer-placeholder-shown:tracking-widest peer-placeholder-shown:text-ink/60 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-micro peer-focus:text-burnished-gold"
                      >
                        Need something else? Leave us a message.
                      </label>
                    </div>

                    <div className="md:col-span-2 pt-6">
                      <button 
                        disabled={isSubmitting}
                        className="w-full bg-accent-red text-white py-8 text-micro hover:bg-white hover:text-ink transition-all duration-500 uppercase tracking-[0.3em] font-black flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-accent-red/20"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin" size={20} />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Book a FREE Trial</span>
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12"
              >
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center group-hover:border-accent-red transition-colors shrink-0">
                    <Phone className="text-accent-red" size={20} />
                  </div>
                  <div>
                    <h4 className="text-micro text-ink/40 uppercase mb-2">Call or Text</h4>
                    <a href="tel:2147380640" className="text-2xl font-display uppercase hover:text-accent-red transition-colors">(214) 738-0640</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center group-hover:border-accent-red transition-colors shrink-0">
                    <MapPin className="text-accent-red" size={20} />
                  </div>
                  <div>
                    <h4 className="text-micro text-ink/40 uppercase mb-2">Location</h4>
                    <p className="text-2xl font-display uppercase">201 N. Starnes St., Ste. A,<br />Grapevine, TX 76051</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
