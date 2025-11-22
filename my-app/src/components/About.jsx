import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen relative overflow-hidden py-20">
      <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-24 xl:px-24 pt-30 pb-20 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-neutral-500 tracking-[0.3em] text-sm uppercase mb-6">
            — ABOUT ME —
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-100 leading-tight">
            The Story Behind
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-100 leading-tight mt-2">
            My Development Journey
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">

          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-neutral-700 bg-neutral-800">
              <div className="aspect-[3/4] bg-neutral-800 flex items-center justify-center">
                <div className="text-center p-6">
                  <img className="rounded-3xl" src="./aboutrihen.jpeg" alt="" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quote */}
            <div className="flex items-start space-x-4">
              <div className="text-neutral-500 text-4xl font-serif leading-none">
                "
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-100 italic">
                Code That Speaks Volumes
              </h3>
            </div>

            {/* Description Paragraphs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.8,
                    ease: "easeOut",
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="space-y-6 text-neutral-300 text-lg leading-relaxed"
            >
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                I'm a passionate MERN stack developer with a love for building
                full-stack web applications that are fast, responsive, and scalable.
              </motion.p>

              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                I enjoy working across the stack—from designing sleek frontend interfaces 
                in React to developing secure backends with Node and Express.
              </motion.p>

              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                I'm constantly exploring new technologies to stay ahead in the fast-moving
                web development world.
              </motion.p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <button className="group relative px-8 py-4 bg-neutral-600 hover:bg-neutral-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
                <span className="relative z-10">VIEW MY WORK</span>
                <svg
                  className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
