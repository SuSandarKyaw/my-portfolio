import { ExternalLink, Github } from "lucide-react";
import niceFareDashboard from "/images/nicefare.png";
import voucher from "/images/voucher.png";
import smartUni from "/images/l.jpg";
import RunningLine from "./RunningLine";

const projects = [
  {
    title: "Nice Fare Travel – Admin Dashboard",
    description: "A comprehensive admin dashboard for a travel agency featuring sales data, expense tracking, customer management, and reminders with real-time API integration.",
    technologies: ["Next.js", "ShadCN/UI", "Zustand", "Laravel API"],
    image: niceFareDashboard,
    liveUrl: "https://nfc-dashboard.sankyitar.shop/",
    githubUrl: "https://github.com/heinhtetzan/nice-fare-dashboard",
    colors: {
      primary: "cyan",
      secondary: "blue",
      accent: "purple",
      tech: "green"
    }
  },
  {
    title: "E-Tutoring System",
    description: "A collaborative team project featuring tutor allocation, dashboards for different user roles, and interactive comment systems with comprehensive UI state management.",
    technologies: ["React.js", "TailwindCSS", "Flowbite", "C# .NET API"],
    image: smartUni,
    githubUrl: "https://github.com/ewsd-gp2/SmartUni.Frontend",
    colors: {
      primary: "purple",
      secondary: "pink",
      accent: "cyan",
      tech: "orange"
    }
  },
  {
    title: "Voucher Management App",
    description: "A responsive voucher and inventory management system with user authentication, CRUD operations, search functionality, and seamless Laravel API integration.",
    technologies: ["Next.js", "TailwindCSS", "Flowbite", "Laravel"],
    image: voucher,
    githubUrl: "https://github.com/SuSandarKyaw/voucher-app-next",
    colors: {
      primary: "green",
      secondary: "emerald",
      accent: "cyan",
      tech: "red"
    }
  }
];

const ProjectCard = ({ project }) => {
  const colorClasses = {
    cyan: {
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/20",
      gradient: "from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400",
      button: "border-cyan-400 text-cyan-400 hover:bg-cyan-400",
      shadow: "hover:shadow-cyan-500/20"
    },
    purple: {
      text: "text-purple-400",
      border: "border-purple-500/30",
      bg: "bg-purple-500/20",
      gradient: "from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400",
      button: "border-purple-400 text-purple-400 hover:bg-purple-400",
      shadow: "hover:shadow-purple-500/20"
    },
    green: {
      text: "text-green-400",
      border: "border-green-500/30",
      bg: "bg-green-500/20",
      gradient: "from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400",
      button: "border-green-400 text-green-400 hover:bg-green-400",
      shadow: "hover:shadow-green-500/20"
    },
    blue: {
      text: "text-blue-400",
      border: "border-blue-500/30",
      bg: "bg-blue-500/20"
    },
    pink: {
      text: "text-pink-400",
      border: "border-pink-500/30",
      bg: "bg-pink-500/20"
    },
    emerald: {
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/20"
    },
    orange: {
      text: "text-orange-400",
      border: "border-orange-500/30",
      bg: "bg-orange-500/20"
    },
    red: {
      text: "text-red-400",
      border: "border-red-500/30",
      bg: "bg-red-500/20"
    }
  };

  const getTechColor = (index) => {
    if (index === 0) return project.colors.primary;
    if (index === 1) return project.colors.secondary;
    if (index === 2) return project.colors.accent;
    return project.colors.tech;
  };

  return (
    <div className={`bg-gray-800/50 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden ${colorClasses[project.colors.primary].shadow} transition-all duration-500 hover:scale-[1.02] group`}>
      <img 
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
      />
      
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-3 ${colorClasses[project.colors.primary].text}`}>
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => {
            const color = getTechColor(index);
            return (
              <span 
                key={index} 
                className={`px-3 py-1 rounded-full text-sm font-medium border ${colorClasses[color].border} ${colorClasses[color].bg} ${colorClasses[color].text}`}
              >
                {tech}
              </span>
            );
          })}
        </div>

        <div className="flex gap-4">
          {project.liveUrl ? (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex-1 py-2 bg-gradient-to-r ${colorClasses[project.colors.primary].gradient} text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-center flex items-center justify-center`}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </a>
          ) : (
            <button className={`flex-1 py-2 bg-gradient-to-r ${colorClasses[project.colors.primary].gradient} text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105`}>
              <ExternalLink className="w-4 h-4 mr-2 inline" />
              View Project
            </button>
          )}
          {project.githubUrl ? (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-4 py-2 border rounded-lg transition-all duration-300 hover:text-gray-900 ${colorClasses[project.colors.primary].button} flex items-center justify-center`}
            >
              <Github className="w-4 h-4" />
            </a>
          ) : (
            <button className={`px-4 py-2 border rounded-lg transition-all duration-300 hover:text-gray-900 ${colorClasses[project.colors.primary].button}`}>
              <Github className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        <RunningLine/>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;