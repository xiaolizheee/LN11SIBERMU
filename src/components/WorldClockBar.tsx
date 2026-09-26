import React, { useState, useEffect } from 'react';
import { TIMEZONE_CLOCKS } from '../data/content';
import { Clock, Globe } from 'lucide-react';
import { Language } from '../types';

interface WorldClockBarProps {
  lang: Language;
}

export const WorldClockBar: React.FC<WorldClockBarProps> = ({ lang }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCityTime = (timezone: string) => {
    try {
      return new Intl.DateTimeFormat('en-GB', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
    } catch {
      return '--:--:--';
    }
  };

  return (
    <div className="w-full bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-md py-1.5 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 text-amber-400 font-medium shrink-0">
          <Globe className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '24s' }} />
          <span className="hidden sm:inline">
            {lang === 'id' ? 'Zona Waktu Mahasiswa PJJ Global' : 'Global Student Timezones'}
          </span>
          <span className="sm:hidden">Global PJJ Time</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 divide-x divide-slate-800 shrink-0">
          {TIMEZONE_CLOCKS.map((clock) => (
            <div key={clock.city} className="flex items-center gap-1.5 pl-3 first:pl-0">
              <span className="text-sm">{clock.flag}</span>
              <span className="text-slate-400 font-medium">{clock.city}</span>
              <span className="font-mono font-medium text-slate-200 tabular-nums">
                {formatCityTime(clock.timezone)}
              </span>
              <span className="text-[10px] text-slate-500 hidden md:inline">({clock.abbr})</span>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-slate-400 shrink-0">
          <Clock className="w-3.5 h-3.5 text-slate-500" />
          <span>{lang === 'id' ? 'Jadwal Kuliah Berbasis WIB' : 'Lectures in WIB (UTC+7)'}</span>
        </div>
      </div>
    </div>
  );
};
