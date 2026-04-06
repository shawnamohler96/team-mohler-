import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronDown, Facebook, Instagram, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'What we offer', 
    subLinks: [
      { name: 'Little Lions Jiu-Jitsu (age 4-6)', path: '/little-lions', category: 'Kids Classes' },
      { name: 'KIDS Jiu-Jitsu (age 7-12)', path: '/kids-jiu-jitsu', category: 'Kids Classes' },
      { name: 'Teen Jiu-Jitsu (age 13+)', path: '/teen-jiu-jitsu', category: 'Teen Classes' },
      { name: 'Teen Boxing & Kickboxing (age 13+)', path: '/teen-boxing', category: 'Teen Classes' },
      { name: 'Kids Private Lessons', path: '/kids-private-lessons', category: 'Kids Classes' },
      { name: 'Brazilian Jiu-Jitsu', path: '/bjj', category: 'Adult Classes' },
      { name: 'Boxing', path: '/boxing', category: 'Adult Classes' },
      { name: 'Muay Thai Kickboxing', path: '/muay-thai-boxing', category: 'Adult Classes' },
      { name: 'MMA', path: '/mma', category: 'Adult Classes' },
      { name: 'Wrestling', path: '/wrestling', category: 'Adult Classes' },
      { name: 'Adult Private Lessons', path: '/adult-private-lessons', category: 'Adult Classes' },
    ]
  },
  { 
    name: 'Schedule', 
    subLinks: [
      { name: 'Adult Schedule', path: '/schedule-adult' },
      { name: 'Kids & Teen Schedule', path: '/schedule-kids' },
    ]
  },
  { 
    name: 'About Us', 
    subLinks: [
      { name: 'Who We Are', path: '/about' },
      { name: 'FAQ', path: '/faq' },
    ]
  },
  { name: 'Rates', path: '/rates' },
  { name: 'Online Training', path: '/online-training' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSectionExpanded, setMobileSectionExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.nav-dropdown-container')) {
        setActiveDropdown(null);
        setActiveSection(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setActiveSection(null);
    setMobileExpanded(null);
    setMobileSectionExpanded(null);
    setIsOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const isNavScrolled = true;

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-[9999] bg-white h-24 shadow-2xl border-b-2 border-accent-red/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        <Link to="/" className="flex items-center space-x-4 group h-full">
          <img 
            src="/mohler logo white copy.jpeg" 
            alt="Mohler MMA Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-xl font-display uppercase leading-none text-ink">Team Mohler</span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-burnished-gold font-bold">Premier Martial Arts Academy</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 h-full">
          {navLinks.map((link) => {
            const isClickMenu = ['What we offer', 'Schedule', 'About Us'].includes(link.name);
            return (
              <div 
                key={link.name} 
                className={`relative h-full flex items-center nav-dropdown-container ${
                  !isClickMenu ? 'group' : ''
                }`}
              >
                {link.subLinks ? (
                  <button
                    onClick={() => {
                      if (isClickMenu) {
                        setActiveDropdown(activeDropdown === link.name ? null : link.name);
                      }
                    }}
                    className={`flex items-center space-x-1 text-[9px] xl:text-[10px] uppercase tracking-[0.15em] xl:tracking-[0.2em] font-bold transition-all hover:text-accent-red h-full cursor-pointer ${
                      isClickMenu && activeDropdown === link.name 
                        ? 'text-accent-red' 
                        : 'text-ink'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown 
                      size={12} 
                      className={`transition-transform duration-300 ${
                        isClickMenu
                          ? (activeDropdown === link.name ? 'rotate-180' : '')
                          : 'group-hover:rotate-180'
                      }`} 
                    />
                  </button>
                ) : (
                  <Link
                    to={link.path!}
                    className="text-[9px] xl:text-[10px] uppercase tracking-[0.15em] xl:tracking-[0.2em] font-bold transition-all hover:text-accent-red relative h-full flex items-center text-ink"
                  >
                    {link.name}
                    <span className={`absolute bottom-4 left-0 h-px bg-accent-red transition-all duration-500 ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                )}

                {/* Dropdown Container */}
                {link.subLinks && (
                  <div className={`absolute top-full left-0 pt-0 transition-all duration-300 z-50 ${
                    isClickMenu
                      ? (activeDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2')
                      : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                  }`}>
                    {/* Invisible bridge to prevent hover loss for non-click menus */}
                    {!isClickMenu && (
                      <div className="h-4 w-full"></div>
                    )}
                    
                    <div className="bg-white shadow-2xl luxury-border overflow-hidden min-w-[280px]">
                      <div className="py-4">
                        {link.name === 'What we offer' ? (
                          <>
                            <div className="border-b border-gray-100 last:border-0">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveSection(activeSection === 'Kids Classes' ? null : 'Kids Classes');
                                }}
                                className="w-full flex items-center justify-between px-8 py-4 hover:bg-gray-50 transition-colors group/section"
                              >
                                <span className="text-[9px] xl:text-[10px] uppercase tracking-[0.15em] xl:tracking-[0.2em] font-bold text-ink group-hover/section:text-accent-red transition-colors">Kids Classes</span>
                                <ChevronDown 
                                  size={18} 
                                  className={`text-accent-red transition-transform duration-300 ${activeSection === 'Kids Classes' ? 'rotate-180' : ''}`} 
                                />
                              </button>
                              <AnimatePresence>
                                {activeSection === 'Kids Classes' && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden bg-gray-50/30"
                                  >
                                    {link.subLinks.filter(s => (s as any).category === 'Kids Classes').map(sub => (
                                      <Link
                                        key={sub.name}
                                        to={sub.path!}
                                        onClick={() => setActiveDropdown(null)}
                                        className={`block px-12 py-3 text-[9px] xl:text-[10px] uppercase tracking-[0.15em] xl:tracking-[0.2em] font-bold hover:text-accent-red transition-colors ${
                                          location.pathname === sub.path ? 'text-accent-red' : 'text-ink'
                                        }`}
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                            <div className="border-b border-gray-100 last:border-0">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveSection(activeSection === 'Teen Classes' ? null : 'Teen Classes');
                                }}
                                className="w-full flex items-center justify-between px-8 py-4 hover:bg-gray-50 transition-colors group/section"
                              >
                                <span className="text-[9px] xl:text-[10px] uppercase tracking-[0.15em] xl:tracking-[0.2em] font-bold text-ink group-hover/section:text-accent-red transition-colors">Teen Classes</span>
                                <ChevronDown 
                                  size={18} 
                                  className={`text-accent-red transition-transform duration-300 ${activeSection === 'Teen Classes' ? 'rotate-180' : ''}`} 
                                />
                              </button>
                              <AnimatePresence>
                                {activeSection === 'Teen Classes' && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden bg-gray-50/30"
                                  >
                                    {link.subLinks.filter(s => (s as any).category === 'Teen Classes').map(sub => (
                                      <Link
                                        key={sub.name}
                                        to={sub.path!}
                                        onClick={() => setActiveDropdown(null)}
                                        className={`block px-12 py-3 text-[9px] xl:text-[10px] uppercase tracking-[0.15em] xl:tracking-[0.2em] font-bold hover:text-accent-red transition-colors ${
                                          location.pathname === sub.path ? 'text-accent-red' : 'text-ink'
                                        }`}
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                            <div className="border-b border-gray-100 last:border-0">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveSection(activeSection === 'Adult Classes' ? null : 'Adult Classes');
                                }}
                                className="w-full flex items-center justify-between px-8 py-4 hover:bg-gray-50 transition-colors group/section"
                              >
                                <span className="text-[9px] xl:text-[10px] uppercase tracking-[0.15em] xl:tracking-[0.2em] font-bold text-ink group-hover/section:text-accent-red transition-colors">Adult Classes</span>
                                <ChevronDown 
                                  size={18} 
                                  className={`text-accent-red transition-transform duration-300 ${activeSection === 'Adult Classes' ? 'rotate-180' : ''}`} 
                                />
                              </button>
                              <AnimatePresence>
                                {activeSection === 'Adult Classes' && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden bg-gray-50/30"
                                  >
                                    {link.subLinks.filter(s => (s as any).category === 'Adult Classes').map(sub => (
                                      <Link
                                        key={sub.name}
                                        to={sub.path!}
                                        onClick={() => setActiveDropdown(null)}
                                        className={`block px-12 py-3 text-[9px] xl:text-[10px] uppercase tracking-[0.15em] xl:tracking-[0.2em] font-bold hover:text-accent-red transition-colors ${
                                          location.pathname === sub.path ? 'text-accent-red' : 'text-ink'
                                        }`}
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </>
                        ) : (
                          link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path!}
                              onClick={() => setActiveDropdown(null)}
                              className={`block px-8 py-3 text-[9px] xl:text-[10px] uppercase tracking-[0.15em] xl:tracking-[0.2em] font-bold hover:text-accent-red transition-colors ${
                                location.pathname === sub.path ? 'text-accent-red' : 'text-ink'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className="h-full flex items-center">
            <Link
              to="/contact"
              className="text-[9px] xl:text-[10px] uppercase tracking-[0.2em] xl:tracking-[0.3em] font-black px-6 xl:px-8 py-4 transition-all duration-500 bg-accent-red text-white border-2 border-burnished-gold shadow-[0_10px_30px_rgba(155,27,48,0.3)] whitespace-nowrap hover:bg-white hover:text-accent-red hover:border-accent-red"
            >
              Book a FREE Trial
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden flex items-center space-x-3 group p-2"
          aria-label="Toggle menu"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-ink group-hover:text-accent-red transition-colors">Menu</span>
          <div className="flex flex-col space-y-1.5">
            <span className={`h-0.5 w-6 bg-ink transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-4 bg-ink transition-all duration-500 ml-auto ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-ink transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-micro text-burnished-gold">Menu</span>
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col space-y-8 overflow-y-auto max-h-[70vh] pr-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col space-y-2">
                  {link.subLinks ? (
                    <>
                      <button 
                        onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        <span className={`text-2xl font-display uppercase tracking-tighter transition-colors ${mobileExpanded === link.name ? 'text-accent-red' : 'text-ink'}`}>
                          {link.name}
                        </span>
                        <ChevronDown 
                          size={20} 
                          className={`text-accent-red transition-transform duration-500 ${mobileExpanded === link.name ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      <motion.div 
                        initial={false}
                        animate={{ 
                          height: mobileExpanded === link.name ? 'auto' : 0,
                          opacity: mobileExpanded === link.name ? 1 : 0
                        }}
                        className="overflow-hidden flex flex-col space-y-6 pl-6 border-l-2 border-accent-red/20"
                      >
                        <div className="py-4 flex flex-col space-y-8">
                          {link.name === 'What we offer' ? (
                            <>
                              <div className="flex flex-col space-y-4">
                                <button 
                                  onClick={() => setMobileSectionExpanded(mobileSectionExpanded === 'Kids Classes' ? null : 'Kids Classes')}
                                  className="flex items-center justify-between w-full text-left"
                                >
                                  <span className={`text-2xl font-display uppercase tracking-tighter transition-colors ${mobileSectionExpanded === 'Kids Classes' ? 'text-accent-red' : 'text-ink'}`}>
                                    Kids Classes
                                  </span>
                                  <ChevronDown 
                                    size={20} 
                                    className={`text-accent-red transition-transform duration-500 ${mobileSectionExpanded === 'Kids Classes' ? 'rotate-180' : ''}`} 
                                  />
                                </button>
                                
                                <motion.div 
                                  initial={false}
                                  animate={{ 
                                    height: mobileSectionExpanded === 'Kids Classes' ? 'auto' : 0,
                                    opacity: mobileSectionExpanded === 'Kids Classes' ? 1 : 0
                                  }}
                                  className="overflow-hidden flex flex-col space-y-4 pl-4 border-l border-accent-red/10"
                                >
                                  {link.subLinks.filter(s => (s as any).category === 'Kids Classes').map(sub => (
                                    <Link
                                      key={sub.name}
                                      to={sub.path!}
                                      className="text-2xl font-display uppercase tracking-tighter text-ink/60 hover:text-accent-red transition-colors pl-4"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              </div>
                              <div className="flex flex-col space-y-4">
                                <button 
                                  onClick={() => setMobileSectionExpanded(mobileSectionExpanded === 'Teen Classes' ? null : 'Teen Classes')}
                                  className="flex items-center justify-between w-full text-left"
                                >
                                  <span className={`text-2xl font-display uppercase tracking-tighter transition-colors ${mobileSectionExpanded === 'Teen Classes' ? 'text-accent-red' : 'text-ink'}`}>
                                    Teen Classes
                                  </span>
                                  <ChevronDown 
                                    size={20} 
                                    className={`text-accent-red transition-transform duration-500 ${mobileSectionExpanded === 'Teen Classes' ? 'rotate-180' : ''}`} 
                                  />
                                </button>
                                
                                <motion.div 
                                  initial={false}
                                  animate={{ 
                                    height: mobileSectionExpanded === 'Teen Classes' ? 'auto' : 0,
                                    opacity: mobileSectionExpanded === 'Teen Classes' ? 1 : 0
                                  }}
                                  className="overflow-hidden flex flex-col space-y-4 pl-4 border-l border-accent-red/10"
                                >
                                  {link.subLinks.filter(s => (s as any).category === 'Teen Classes').map(sub => (
                                    <Link
                                      key={sub.name}
                                      to={sub.path!}
                                      className="text-2xl font-display uppercase tracking-tighter text-ink/60 hover:text-accent-red transition-colors pl-4"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              </div>
                              <div className="flex flex-col space-y-4">
                                <button 
                                  onClick={() => setMobileSectionExpanded(mobileSectionExpanded === 'Adult Classes' ? null : 'Adult Classes')}
                                  className="flex items-center justify-between w-full text-left"
                                >
                                  <span className={`text-2xl font-display uppercase tracking-tighter transition-colors ${mobileSectionExpanded === 'Adult Classes' ? 'text-accent-red' : 'text-ink'}`}>
                                    Adult Classes
                                  </span>
                                  <ChevronDown 
                                    size={20} 
                                    className={`text-accent-red transition-transform duration-500 ${mobileSectionExpanded === 'Adult Classes' ? 'rotate-180' : ''}`} 
                                  />
                                </button>
                                
                                <motion.div 
                                  initial={false}
                                  animate={{ 
                                    height: mobileSectionExpanded === 'Adult Classes' ? 'auto' : 0,
                                    opacity: mobileSectionExpanded === 'Adult Classes' ? 1 : 0
                                  }}
                                  className="overflow-hidden flex flex-col space-y-4 pl-4 border-l border-accent-red/10"
                                >
                                  {link.subLinks.filter(s => (s as any).category === 'Adult Classes').map(sub => (
                                    <Link
                                      key={sub.name}
                                      to={sub.path!}
                                      className="text-2xl font-display uppercase tracking-tighter text-ink/60 hover:text-accent-red transition-colors pl-4"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              </div>
                            </>
                          ) : (
                            link.subLinks.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path!}
                                className="text-2xl font-display uppercase tracking-tighter text-ink/60 hover:text-accent-red transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))
                          )}
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    <Link
                      to={link.path!}
                      className="text-2xl font-display uppercase tracking-tighter text-ink hover:text-accent-red transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-auto pt-12 border-t border-ink/10">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-accent-red text-white py-6 text-micro font-black uppercase tracking-[0.3em] border-2 border-burnished-gold shadow-xl transition-all duration-500 hover:bg-white hover:text-accent-red"
              >
                Book a FREE Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary-bg text-white pt-20 pb-10 border-t-2 border-accent-red/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <img 
              src="/mohler logo white copy.jpeg" 
              alt="Team Mohler MMA Logo" 
              className="h-16 w-auto mb-6 grayscale brightness-200"
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-200 leading-relaxed mb-6">
              Texas' Longest-Standing and Most Notable Jiu-Jitsu Gym. Experience 30+ years of world-class lineage.
            </p>
            <h4 className="text-burnished-gold font-bold uppercase tracking-widest mb-4 text-xs">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/allen.mohler" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent-red rounded-full flex items-center justify-center hover:bg-white hover:text-accent-red transition-all duration-300 shadow-lg">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/mohlermma/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent-red rounded-full flex items-center justify-center hover:bg-white hover:text-accent-red transition-all duration-300 shadow-lg">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-burnished-gold font-bold uppercase tracking-widest mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-accent-red shrink-0" size={20} />
                <p className="text-gray-200">201 N. Starnes St., Ste. A,<br />Grapevine, TX 76051</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-accent-red shrink-0" size={20} />
                <a href="tel:2147380640" className="text-gray-200 hover:text-accent-red transition-colors">
                  (214) 738-0640
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-burnished-gold font-bold uppercase tracking-widest mb-6">Location</h4>
            <div className="rounded-lg overflow-hidden border-2 border-accent-red/20 h-48 transition-all duration-700 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.347859034581!2d-97.07915352430213!3d32.941824175545285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2b0633d6a0b5%3A0xc9655c2d8b2c8f02!2sMohler%20MMA%20-%20Brazilian%20Jiu%20Jitsu%20%26%20Boxing%20-%20Martial%20Arts%20Fitness%20-%20Grapevine%20%2F%20Southlake%20%2F%20Coppell!5e0!3m2!1sen!2sus!4v1774897678880!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
            <h4 className="text-burnished-gold font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.subLinks ? (
                    <div className="flex flex-col space-y-2">
                      <span className="text-white text-xs uppercase tracking-widest font-bold">{link.name}</span>
                      {link.name === 'What we offer' ? (
                        <div className="flex flex-col space-y-4 pl-4">
                          <div className="flex flex-col space-y-2">
                            <span className="text-white text-lg font-display uppercase tracking-tight">Kids Classes</span>
                            {link.subLinks.filter(s => (s as any).category === 'Kids Classes').map(sub => (
                              <Link key={sub.name} to={sub.path!} className="text-gray-300 hover:text-accent-red transition-colors text-xs uppercase tracking-widest pl-2">
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                          <div className="flex flex-col space-y-2">
                            <span className="text-white text-lg font-display uppercase tracking-tight">Teen Classes</span>
                            {link.subLinks.filter(s => (s as any).category === 'Teen Classes').map(sub => (
                              <Link key={sub.name} to={sub.path!} className="text-gray-300 hover:text-accent-red transition-colors text-xs uppercase tracking-widest pl-2">
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                          <div className="flex flex-col space-y-2">
                            <span className="text-white text-lg font-display uppercase tracking-tight">Adult Classes</span>
                            {link.subLinks.filter(s => (s as any).category === 'Adult Classes').map(sub => (
                              <Link key={sub.name} to={sub.path!} className="text-gray-300 hover:text-accent-red transition-colors text-xs uppercase tracking-widest pl-2">
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        link.subLinks.map(sub => (
                          <Link key={sub.name} to={sub.path!} className="text-gray-300 hover:text-accent-red transition-colors text-xs uppercase tracking-widest pl-4">
                            {sub.name}
                          </Link>
                        ))
                      )}
                    </div>
                  ) : (
                    <Link to={link.path!} className="text-gray-300 hover:text-accent-red transition-colors text-sm uppercase tracking-widest">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-accent-red/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Team Mohler MMA. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Train with Champions. Transform Your Life.</p>
        </div>
      </div>
    </footer>
  );
}
