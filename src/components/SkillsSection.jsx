import { Code, Palette, Server } from "lucide-react";
import RunningLine from "./RunningLine";

const frontendSkills = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "JavaScript (ES6+)", level: 88 },
  { name: "HTML5 & CSS3", level: 92 }
];

const stylingSkills = [
  { name: "TailwindCSS", level: 90 },
  { name: "Zustand", level: 85 },
  { name: "Git & GitHub", level: 88 },
  { name: "Figma", level: 80 }
];

const backendSkills = [
  { name: "Node.js", level: 45 },
  { name: "PHP", level: 50 },
  { name: "Docker", level: 35 },
  { name: "Vercel", level: 85 }
];

const SkillBar = ({ skill, color }) => {
  const gradientColors = {
    cyan: 'from-cyan-400 to-blue-400',
    purple: 'from-purple-400 to-pink-400',
    green: 'from-green-400 to-emerald-400'
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{skill.name}</span>
        <span className={`text-${color}-400`}>{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className={`h-2 rounded-full bg-gradient-to-r ${gradientColors[color]} transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
         <RunningLine/>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-cyan-400 mr-4" />
              <h3 className="text-xl font-bold text-gray-200">Frontend</h3>
            </div>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} color="cyan" />
              ))}
            </div>
          </div>

          {/* Styling & Tools */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <Palette className="w-8 h-8 text-purple-400 mr-4" />
              <h3 className="text-xl font-bold text-gray-200">Styling & Tools</h3>
            </div>
            <div className="space-y-6">
              {stylingSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} color="purple" />
              ))}
            </div>
          </div>

          {/* Backend & Others */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <Server className="w-8 h-8 text-green-400 mr-4" />
              <h3 className="text-xl font-bold text-gray-200">Backend & Others</h3>
            </div>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} color="green" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;