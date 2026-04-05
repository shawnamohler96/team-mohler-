import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ScheduleItem {
  time: string;
  class: string;
  level: string;
  gold?: boolean;
}

interface DaySchedule {
  day: string;
  classes: ScheduleItem[];
}

interface PolicyItem {
  label: string;
  text: string;
}

interface Policy {
  title: string;
  items: PolicyItem[];
}

interface ScheduleSectionProps {
  schedule: DaySchedule[];
  policy?: Policy;
  title?: string;
  subtitle?: string;
  variant?: 'light' | 'dark';
}

export default function ScheduleSection({ schedule, policy, title = "Class", subtitle = "Schedule", variant = 'light' }: ScheduleSectionProps) {
  const isDark = variant === 'dark';

  return (
    <section id="schedule" className={`py-24 md:py-32 ${isDark ? 'bg-secondary-bg' : 'bg-primary-bg'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <span className="text-micro text-accent-red mb-6 block uppercase font-bold tracking-[0.5em]">Consistency is Key</span>
            <h2 className={`text-6xl md:text-8xl uppercase leading-[0.8] tracking-tighter ${isDark ? 'text-white' : 'text-ink'}`}>
              {title} <br />
              <span className="text-accent-red italic">{subtitle}</span>
            </h2>
          </div>
        </div>

        {/* Schedule Legend - Only show if gold items exist */}
        {schedule.some(day => day.classes.some(c => c.gold)) && (
          <div className={`mb-12 flex flex-wrap gap-8 items-center p-6 rounded-sm border max-w-fit ${isDark ? 'bg-white/5 border-white/10' : 'bg-ink/5 border-ink/10'}`}>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-burnished rounded-full shadow-[0_0_15px_rgba(184,134,11,0.4)] animate-pulse"></div>
              <span className="text-sm md:text-base uppercase tracking-[0.2em] font-black text-burnished-gold">Best for trial class</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-accent-red rounded-full shadow-[0_0_15px_rgba(255,0,0,0.4)]"></div>
              <span className={`text-sm md:text-base uppercase tracking-[0.2em] font-black ${isDark ? 'text-white' : 'text-ink'}`}>Trial Classes: Mon-Thur & Sat Only</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schedule.map((day, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative group overflow-hidden rounded-sm border-l-4 ${isDark ? 'bg-white border-accent-red' : 'bg-white border-secondary-bg'}`}
            >
              {/* Decorative Number */}
              <div className={`absolute -top-4 -right-4 text-9xl font-display uppercase transition-colors pointer-events-none select-none ${isDark ? 'text-secondary-bg/[0.03] group-hover:text-accent-red/5' : 'text-secondary-bg/[0.03] group-hover:text-accent-red/5'}`}>
                0{idx + 1}
              </div>
              
              <h3 className="text-2xl font-black mb-10 uppercase tracking-tighter text-ink border-b border-gray-100 pb-4">
                {day.day}
              </h3>
              
              <div className="space-y-8 relative z-10">
                {day.classes.map((item, cIdx) => (
                  <div key={cIdx} className={`group/item transition-all ${item.gold ? 'bg-burnished-gold/5 -mx-4 px-4 py-4 rounded-sm border-l-2 border-burnished-gold' : ''}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-xs font-black uppercase tracking-widest text-accent-red">{item.time}</p>
                      {item.gold && (
                        <span className="text-[8px] bg-burnished text-white px-2 py-0.5 font-black uppercase tracking-[0.2em] rounded-full shadow-sm">
                          GOLD
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-ink leading-tight mb-1 uppercase tracking-tight group-hover/item:text-accent-red transition-colors">
                      {item.class}
                    </h4>
                    <p className="text-xs text-gray-600 font-bold uppercase tracking-wide">
                      {item.level}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {policy && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-burnished-gold p-8 relative overflow-hidden flex flex-col justify-center rounded-sm shadow-[0_10px_30px_rgba(184,134,11,0.1)]"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-burnished"></div>
              <div className="relative z-10">
                <h4 className="text-burnished-gold uppercase tracking-[0.3em] text-[9px] font-black mb-2">{policy.title}</h4>
                <h3 className="text-xl font-black uppercase italic mb-4 tracking-tighter text-ink">The Mohler <span className="text-burnished-gold">Standard</span></h3>
                <div className="space-y-4">
                  {policy.items.map((item, iIdx) => (
                    <div key={iIdx}>
                      <span className="font-black uppercase text-[9px] tracking-widest block mb-1 text-ink">{item.label}:</span>
                      <p className="text-[11px] leading-relaxed text-ink/80 font-bold">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 text-6xl font-black text-ink/[0.02] italic select-none pointer-events-none">
                POLICY
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
