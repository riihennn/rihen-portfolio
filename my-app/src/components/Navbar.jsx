import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#project' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={'fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent'}
    >

  <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-24 xl:px-24 py-3">
        <div
          className={'relative flex items-center justify-between bg-neutral-800/40 backdrop-blur-md rounded-full px-6 py-3 border border-neutral-700/50 transition-all duration-500 overflow-hidden' }
        >
          {/* Shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-white/25 to-black/0 animate-full-shine"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-neutral-100/15 to-black/0 animate-full-shine-delayed"></div>

          {/* LOGO */}
          <div className="flex items-center space-x-3 animate-fade-in">


            <div className="flex flex-col">
              <span className="text-neutral-100 font-bold text-sm tracking-wider">
                    RIHEN KRISHNA
              </span>
              <span className="text-neutral-400 font-semibold text-xs tracking-wider">
                MERN DEVELOPER
              </span>
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="hidden md:flex items-center space-x-1 bg-neutral-900/50 rounded-full px-2 py-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setActiveIndex(index)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                  activeIndex === index
                    ? 'text-neutral-100 bg-neutral-700/50'
                    : 'text-neutral-400 hover:text-neutral-100'
                }`}
              >
                {item.name}

                {activeIndex === index && (
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                  </div>
                )}

                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* MOBILE MENU */}
          <button className="md:hidden text-neutral-100 p-2 hover:bg-neutral-700/50 rounded-full transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes full-shine {
          0% {
            transform: translateX(-100%) skewX(-25deg);
          }
          100% {
            transform: translateX(200%) skewX(-25deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-shine {
          animation: shine 3s infinite;
        }
        .animate-full-shine {
          animation: full-shine 4s infinite;
          width: 100%;
        }
        .animate-full-shine-delayed {
          animation: full-shine 4s infinite 0.5s;
          width: 80%;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </nav>
  );
}
