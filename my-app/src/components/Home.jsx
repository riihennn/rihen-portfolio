import React from 'react';

export default function HomePage() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      


      {/* 🔥 Updated container spacing (left & right gap perfect) */}
      <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-24 xl:px-24 pt-40 pb-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-neutral-500 tracking-[0.3em] text-sm uppercase">
                MERN Stack Developer
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-100 leading-tight">
                Crafting
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-100 leading-tight italic">
                Modern
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-100 leading-tight">
                Web Apps
              </h1>
            </div>

            <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
              Building full-stack applications with MongoDB, Express, React, and Node.js.
              Transforming ideas into scalable, high-performance web solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-neutral-100 text-black font-semibold rounded hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105">
                VIEW PROJECTS
              </button>
              <button className="px-8 py-4 bg-transparent text-neutral-200 font-semibold rounded border-2 border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-300">
                GET IN TOUCH
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="flex justify-center lg:justify-end mb-8">
              <div className="text-right">
                <div className="w-48 h-48 rounded-full bg-neutral-800/40 backdrop-blur-md flex items-center justify-center border border-neutral-700/50 mb-4 mx-auto lg:mx-0">
                  <span className="text-neutral-100 font-bold text-6xl"></span>
                </div>
                <div className="space-y-1">
                  <h2 className="text-neutral-100 font-bold text-3xl tracking-wider">RIHEN KRISHNA</h2>
                  <h2 className="text-neutral-400 font-bold text-2xl tracking-wider">Developer</h2>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700/50 rounded-lg p-6 hover:bg-neutral-800/50 transition-all duration-300">
                <h3 className="text-5xl font-bold text-neutral-100 mb-2">50+</h3>
                <p className="text-neutral-400">Projects Completed</p>
              </div>

              <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700/50 rounded-lg p-6 hover:bg-neutral-800/50 transition-all duration-300">
                <h3 className="text-5xl font-bold text-neutral-100 mb-2">5+</h3>
                <p className="text-neutral-400">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <p className="text-neutral-600 text-xs tracking-widest">SCROLL</p>
          <div className="w-px h-12 bg-gradient-to-b from-neutral-600 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
