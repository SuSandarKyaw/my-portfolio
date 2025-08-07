import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "/images/profile.jpg";

const HeroSection=()=> {
  const roles = ["Frontend Developer", "React Developer", "Web Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentRoleIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="mb-8">
            {/* Profile Image and Name Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl">
                  <img 
                    src={profileImage} 
                    alt="Su Sandar Kyaw" 
                    className="w-full h-full object-cover object-center brightness-110 contrast-105"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Su Sandar Kyaw
                  </span>
                </h1>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-slate-300 mb-8 h-12 flex items-center justify-center">
              <span className="inline-block min-w-0">
                {displayedText}
                <span className="inline-block w-0.5 h-8 bg-cyan-400 ml-1 animate-pulse"></span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Final year B.Sc Computing student passionate about creating beautiful, responsive web applications with React.js, Next.js, and modern technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            <a 
              href="https://github.com/SuSandarKyaw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/su-sandar-kyaw-0770102ab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:loeysu123@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection