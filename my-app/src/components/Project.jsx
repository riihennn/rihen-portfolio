import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Folder, Code2, Globe } from 'lucide-react';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with payment integration, user authentication, and admin dashboard.',
      category: 'Full Stack',
      technologies: ['React', 'Node.js'],
      image: '🛒',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Weather forecasting application with location-based data, interactive charts, and weather alerts.',
      category: 'Frontend',
      technologies: ['React', 'API Integration', 'Chart.js'],
      image: '🌤️',
      liveLink: '#',
      githubLink: '#'
    },

    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations, responsive design, and contact form integration.',
      category: 'Frontend',
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      image: '💼',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities.',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      image: '💬',
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const filters = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="project"
      ref={sectionRef}
       className="min-h-screen relative overflow-hidden py-20"
    >

      <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-24 xl:px-24 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <p className="text-neutral-500 tracking-[0.3em] text-sm uppercase mb-6">— MY WORK —</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-100 leading-tight">
            Featured
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-100 leading-tight italic mt-2">
            Projects
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-neutral-100 text-black shadow-xl'
                  : 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 border border-neutral-700/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-neutral-800/30 backdrop-blur-md rounded-2xl border border-neutral-700/50 overflow-hidden hover:bg-neutral-800/50 hover:scale-105 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center overflow-hidden">
                <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveLink}
                    className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="View Live"
                  >
                    <Globe className="w-5 h-5 text-black" />
                  </a>
                  <a
                    href={project.githubLink}
                    className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="View Code"
                  >
                    <Github className="w-5 h-5 text-black" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-neutral-700/50 text-neutral-300 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                  <Folder className="w-5 h-5 text-neutral-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-100 mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-neutral-900/50 border border-neutral-700/50 rounded text-neutral-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="#"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-neutral-100 hover:bg-white text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}