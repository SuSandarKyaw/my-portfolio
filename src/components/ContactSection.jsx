import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import RunningLine from "./RunningLine";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <RunningLine/>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information - Left Side */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <a 
                    href="mailto:loeysu123@gmail.com" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    loeysu123@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Phone</p>
                  <a 
                    href="tel:+959963991184" 
                    className="text-green-400 hover:text-green-300 transition-colors duration-300"
                  >
                    +959 963991184
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Location</p>
                  <p className="text-purple-400">Hlaing, Yangon, Myanmar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links - Right Side */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Connect With Me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://github.com/SuSandarKyaw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-600 hover:border-cyan-400"
              >
                <Github className="w-6 h-6 text-cyan-400" />
                <span className="text-gray-300 font-medium">GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/su-sandar-kyaw-0770102ab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-600 hover:border-blue-400"
              >
                <Linkedin className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300 font-medium">LinkedIn</span>
              </a>
            </div>

            {/* Additional Contact Message */}
            <div className="mt-8 p-6 bg-gray-700/30 rounded-xl border border-gray-600">
              <h4 className="text-lg font-semibold mb-3 text-gray-200">How to Reach Me</h4>
              <p className="text-gray-300">
                Feel free to email me directly or connect with me on LinkedIn. I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;