import { MapPin, Mail, Phone, Globe, Github, Linkedin } from "lucide-react";
import RunningLine from "./RunningLine";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
         <RunningLine/>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* About Content */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Hello! I'm Su Sandar Kyaw</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              A passionate Frontend Developer from Myanmar, currently in my final year of B.Sc (Hons) Computing at the University of Greenwich. I specialize in creating modern, responsive web applications using React.js, Next.js, and cutting-edge technologies.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              With hands-on experience as a Frontend Developer Intern at MMS Connection, I've worked on real-world projects including admin dashboards, e-tutoring systems, and e-commerce applications. I'm passionate about clean code, user experience, and continuous learning.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              <a 
                href="https://github.com/SuSandarKyaw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl border border-gray-600 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300 font-medium">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/su-sandar-kyaw-0770102ab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl border border-gray-600 hover:border-blue-400 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 font-medium">LinkedIn</span>
              </a>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Hlaing, Yangon</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">loeysu123@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">+959 963991184</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">English, Burmese, Chinese</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;