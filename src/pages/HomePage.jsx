import React from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ExperienceSection from '../components/ExperienceSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-inter overflow-x-hidden font-poppins">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float [animation-delay:2s]"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float [animation-delay:4s]"></div>
        </div>
      </div>

      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer/>
    </div>
  )
}

export default HomePage