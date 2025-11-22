import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Globe, GitBranch, Palette, Layers, Server, Terminal, Smartphone, Briefcase, Calendar } from 'lucide-react';

export default function SkillsExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const allSkills = [
    { name: 'Git', Icon: GitBranch, color: 'from-orange-500 to-red-600' },
    { name: 'React.js', Icon: Code2, color: 'from-cyan-400 to-blue-500' },
    { name: 'CSS3', Icon: Palette, color: 'from-blue-500 to-blue-700' },
    { name: 'JavaScript', Icon: Terminal, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Tailwind', Icon: Layers, color: 'from-cyan-400 to-blue-500' },
    { name: 'HTML5', Icon: Globe, color: 'from-orange-500 to-red-500' },
    { name: 'Node.js', Icon: Server, color: 'from-green-500 to-emerald-600' },
    { name: 'MongoDB', Icon: Database, color: 'from-green-600 to-green-700' },
    { name: 'Bootstrap', Icon: Smartphone, color: 'from-purple-500 to-purple-700' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden py-20"
      id="exper"
    >

      <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-24 xl:px-24 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
                    <p className="text-neutral-500 tracking-[0.3em] text-sm uppercase mb-6">— MY SKILLS —</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-100 leading-tight">
            Skills &
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-100 leading-tight italic mt-2">
            Experience
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className={`flex justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button
            onClick={() => setActiveTab('skills')}
            className={`flex items-center space-x-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'skills'
                ? 'bg-neutral-100 text-black shadow-xl'
                : 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 border border-neutral-700/50'
            }`}
          >
            <Code2 className="w-5 h-5" />
            <span>Skills</span>
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center space-x-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'experience'
                ? 'bg-neutral-100 text-black shadow-xl'
                : 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 border border-neutral-700/50'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span>Experience</span>
          </button>
        </div>

        {/* Skills Tab Content */}
        {activeTab === 'skills' && (
          <div className={`transition-all duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            {/* Skills Grid */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto mb-12">
              {allSkills.map((skill, index) => {
                const Icon = skill.Icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center gap-3 transition-all duration-500 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${skill.color} bg-opacity-20 backdrop-blur-md flex items-center justify-center border border-white/10 hover:scale-110 hover:shadow-2xl transition-all duration-300 group cursor-pointer`}>
                      <Icon className="w-14 h-14 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-neutral-300 text-sm font-medium text-center">{skill.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Skills Summary */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700/50 rounded-xl p-6 text-center hover:bg-neutral-800/40 hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-bold text-white mb-2">15+</div>
                <p className="text-neutral-400">Technologies</p>
              </div>
              <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700/50 rounded-xl p-6 text-center hover:bg-neutral-800/40 hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-bold text-white mb-2">50+</div>
                <p className="text-neutral-400">Projects Built</p>
              </div>
              <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700/50 rounded-xl p-6 text-center hover:bg-neutral-800/40 hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-bold text-white mb-2">3+</div>
                <p className="text-neutral-400">Years Learning</p>
              </div>
            </div>
          </div>
        )}

        {/* Experience Tab Content */}
        {activeTab === 'experience' && (
          <div className={`max-w-5xl mx-auto transition-all duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            {/* Experience Card */}
            <div className="bg-neutral-800/30 backdrop-blur-md rounded-2xl border border-neutral-700/50 p-8 md:p-12 hover:bg-neutral-800/40 hover:scale-[1.02] hover:shadow-2xl transition-all duration-500">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-neutral-700/50">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-3">
                    MERN Stack Developer Intern
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0 text-neutral-400">
                    <span className="flex items-center space-x-2">
                      <Briefcase className="w-5 h-5" />
                      <span className="font-semibold">Bridgeon Solutions</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <Globe className="w-5 h-5" />
                      <span>on-site</span>
                    </span>
                  </div>
                </div>
                <div className="bg-green-600/20 border border-green-600/40 px-5 py-2 rounded-full flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold text-sm flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>July 2025 – Present</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                Currently working as a Web Development Intern, gaining practical experience in front-end and back-end technologies. 
                Building responsive user interfaces and collaborating with the development team to support real-world projects and client requirements.
              </p>

              {/* Key Responsibilities */}
              <div className="mb-8">
                <h4 className="text-neutral-100 font-semibold text-xl mb-4 flex items-center space-x-2">
                  <span className="w-1 h-6 bg-neutral-500 rounded"></span>
                  <span>Key Responsibilities & Learning</span>
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3 text-neutral-300 transform transition-all duration-300 hover:translate-x-2">
                    <svg className="w-5 h-5 text-neutral-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Building responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript</span>
                  </li>
                  <li className="flex items-start space-x-3 text-neutral-300 transform transition-all duration-300 hover:translate-x-2">
                    <svg className="w-5 h-5 text-neutral-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Collaborating with the development team to support real-world projects and client requirements</span>
                  </li>
                  <li className="flex items-start space-x-3 text-neutral-300 transform transition-all duration-300 hover:translate-x-2">
                    <svg className="w-5 h-5 text-neutral-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Actively contributing to tasks involving code optimization, bug fixing, and deployment practices</span>
                  </li>
                  <li className="flex items-start space-x-3 text-neutral-300 transform transition-all duration-300 hover:translate-x-2">
                    <svg className="w-5 h-5 text-neutral-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Enhancing skills in teamwork, version control (Git), and industry-standard workflows</span>
                  </li>
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-neutral-100 font-semibold text-xl mb-4 flex items-center space-x-2">
                  <span className="w-1 h-6 bg-neutral-500 rounded"></span>
                  <span>Technologies & Tools</span>
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Node.js', 'MongoDB', 'Express', 'Git', 'Responsive Design'].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-neutral-700/50 border border-neutral-600/50 rounded-full text-neutral-200 text-sm font-medium hover:bg-neutral-700 hover:border-neutral-500 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700/50 rounded-xl p-6 hover:bg-neutral-800/40 hover:scale-105 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-700/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-neutral-100 font-semibold mb-2">Current Focus</h4>
                    <p className="text-neutral-400 text-sm">Mastering MERN stack and building scalable full-stack applications</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700/50 rounded-xl p-6 hover:bg-neutral-800/40 hover:scale-105 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-700/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-neutral-100 font-semibold mb-2">Learning Journey</h4>
                    <p className="text-neutral-400 text-sm">Continuously improving through hands-on projects and industry mentorship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}