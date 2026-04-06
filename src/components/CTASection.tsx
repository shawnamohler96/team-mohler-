import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  image?: string;
  title?: string;
  titleAccent?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  image = `/adult-private-lesson.jpeg`,
  title = "Stop Thinking.",
  titleAccent = "Start Training.",
  description = "Your first 2 classes are on us. No ego, no pressure—just world-class martial arts. Fill out the form below to claim your free trial.",
  buttonText = "BOOK A FREE TRIAL",
  buttonLink = "/contact"
}: CTASectionProps) {
  return (
    <section className="bg-white overflow-hidden border-y border-ink/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch min-h-[450px]">
        {/* Image Side - Full Visibility */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-gray-200">
          <img 
            src={image} 
            alt="Training at Mohler MMA"
            className="absolute inset-0 w-full h-full object-cover"
           
          />
        </div>

        {/* Content Side - Gold Shimmer Effect */}
        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-secondary-bg text-white relative overflow-hidden group border-l border-burnished-gold/20">
          {/* Hover Gold Overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-display uppercase leading-[0.85] mb-6 tracking-tighter">
              {title} <br />
              <span className="text-accent-red italic">{titleAccent}</span>
            </h2>
            <p className="text-white text-base md:text-lg font-normal leading-relaxed mb-10 max-w-lg">
              {description}
            </p>
            
            <Link
              to={buttonLink}
              className="group relative inline-flex items-center gap-6 bg-accent-red text-white px-12 py-6 text-micro uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-ink transition-all duration-500 shadow-xl shadow-black/20"
            >
              <span>{buttonText}</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform glow-burnished" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
