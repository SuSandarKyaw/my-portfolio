import { Briefcase, GraduationCap, Building } from "lucide-react";
import RunningLine from "./RunningLine";

const experiences = [
  {
    type: "work",
    position: "Frontend Developer Intern",
    company: "MMS Connection – Remote",
    duration: "May 2025 – Present",
    achievements: [
      "Developed real-world Admin Dashboard for travel business using Next.js",
      "Built responsive UI components using ShadCN/UI",
      "Implemented global state management with Zustand",
      "Integrated with Laravel RESTful API for real-time operations",
      "Practiced Agile methodologies in remote team environment"
    ],
    icon: Briefcase,
    color: "cyan"
  }
];

const education = [
  {
    type: "education",
    degree: "B.Sc (Hons) Computing",
    institution: "University of Greenwich",
    status: "Final Year Student",
    description: "Specializing in Computing and Information Systems at KMD Institute, Myanmar Campus. Focus on modern web development technologies and software engineering principles.",
    icon: GraduationCap,
    color: "purple"
  },
  {
    type: "education",
    degree: "B.C.Sc (Bachelor of Computer Science)",
    institution: "University of Computer Studies, Yangon",
    duration: "2017 – 2020 (Incomplete)",
    description: "Completed up to Third Year, gaining foundational knowledge in computer science principles and programming fundamentals.",
    icon: Building,
    color: "green"
  }
];

const TimelineItem = ({ item, isLeft }) => {
  const colorClasses = {
    cyan: {
      gradient: "from-cyan-400 to-blue-400",
      text: "text-cyan-400",
      shadow: "hover:shadow-cyan-500/20"
    },
    purple: {
      gradient: "from-purple-400 to-pink-400",
      text: "text-purple-400",
      shadow: "hover:shadow-purple-500/20"
    },
    green: {
      gradient: "from-green-400 to-emerald-400",
      text: "text-green-400",
      shadow: "hover:shadow-green-500/20"
    }
  };

  const colors = colorClasses[item.color] || colorClasses.cyan;
  const IconComponent = item.icon;

  return (
    <div className="relative flex md:items-center">
      {/* Mobile: Single column layout */}
      <div className="md:hidden w-full">
        <div className={`bg-gray-800/50 backdrop-blur-lg rounded-3xl p-6 shadow-2xl ${colors.shadow} transition-all duration-300 w-full mb-8`}>
          <div className="flex items-center mb-4">
            <div className={`w-10 h-10 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center mr-3`}>
              <IconComponent className="w-5 h-5 text-gray-900" />
            </div>
            <div>
              <h3 className={`text-lg font-bold ${colors.text}`}>
                {item.position || item.degree}
              </h3>
              <p className="text-sm text-gray-300">{item.company || item.institution}</p>
              <p className="text-xs text-gray-400">{item.duration || item.status}</p>
            </div>
          </div>
          {item.achievements ? (
            <ul className="space-y-1.5 text-sm text-gray-300">
              {item.achievements.map((achievement, achIndex) => (
                <li key={achIndex}>• {achievement}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-300">{item.description}</p>
          )}
        </div>
        {/* Timeline Dot for mobile */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-5 h-5 bg-gradient-to-r ${colors.gradient} rounded-full border-4 border-gray-900 z-10`}></div>
      </div>

      
      {isLeft ? (
        <div className="hidden md:flex flex-1 pr-8">
          <div className={`bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl ${colors.shadow} transition-all duration-300 ml-auto max-w-lg`}>
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center mr-4`}>
                <IconComponent className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${colors.text}`}>
                  {item.position || item.degree}
                </h3>
                <p className="text-gray-300">{item.company || item.institution}</p>
                <p className="text-sm text-gray-400">{item.duration || item.status}</p>
              </div>
            </div>
            {item.achievements ? (
              <ul className="space-y-2 text-gray-300">
                {item.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>• {achievement}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-300">{item.description}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="hidden md:flex flex-1 pr-8"></div>
      )}
      
      {/* Timeline Dot for desktop */}
      <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${colors.gradient} rounded-full border-4 border-gray-900 z-10`}></div>
      
      {!isLeft ? (
        <div className="hidden md:flex flex-1 pl-8">
          <div className={`bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl ${colors.shadow} transition-all duration-300 max-w-lg`}>
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center mr-4`}>
                <IconComponent className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${colors.text}`}>
                  {item.position || item.degree}
                </h3>
                <p className="text-gray-300">{item.company || item.institution}</p>
                <p className="text-sm text-gray-400">{item.duration || item.status}</p>
              </div>
            </div>
            {item.achievements ? (
              <ul className="space-y-2 text-gray-300">
                {item.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>• {achievement}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-300">{item.description}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="hidden md:flex flex-1 pl-8"></div>
      )}
    </div>
  );
};

const ExperienceSection = () => {
  const allItems = [...experiences, ...education];

  return (
    <section id="experience" className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <RunningLine/>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-12">
            {allItems.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                isLeft={index % 2 === 0} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;