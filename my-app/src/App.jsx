import LenisSmoothScroll from "./components/LenisScroll"
import Navbar from './components/Navbar'
import HomePage from './components/Home'
import AboutSection from './components/About'
import ExperienceSection from './components/Experience'
import Footer from './components/Footer'
import ContactSection from './components/Contact'
import ProjectsSection from './components/Project'


function App() {
  return (
    <div className="bg-gradient-to-br from-black via-neutral-900 to-neutral-950">
      {/* Global gradient orbs - Smaller size */}
      <div className="fixed top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-white/5 via-neutral-400/3 to-transparent rounded-full blur-3xl"></div>
      <div className="fixed bottom-0 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-neutral-300/5 via-white/3 to-transparent rounded-full blur-3xl"></div>
      
      {/* Global background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.03) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      
      {/* Your sections WITHOUT backgrounds */}
      <LenisSmoothScroll>
      <Navbar />
      <HomePage />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      </LenisSmoothScroll>

    </div>
  );
}

export default App

