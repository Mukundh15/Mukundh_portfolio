
import { ExternalLink, Github, Code, Database, Brain, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "StayEasy",
      description: "A full-stack rental listing platform where users can view and post property listings. Built with modern web technologies and featuring user authentication, property management, and responsive design.",
      longDescription: "StayEasy is a comprehensive rental platform that connects property owners with potential tenants. The application features user registration and authentication, property listing creation with image uploads, advanced search and filtering capabilities, and a responsive design that works seamlessly across all devices.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Multer"],
      category: "Full-Stack Web Application",
      liveUrl: "https://stayeasy-vjvt.onrender.com/listings",
      githubUrl: "#",
      icon: Code,
      color: "from-blue-500 to-purple-600",
      features: [
        "User authentication and authorization",
        "Property listing creation and management",
        "Image upload and storage",
        "Advanced search and filtering",
        "Responsive design",
        "RESTful API architecture"
      ]
    },
    {
      id: 2,
      title: "Parijana - AI Humanoid",
      description: "An AI-based humanoid agent designed to assist users in navigating the insurance claim process. Features automated form filling using OCR, feedback system, and comprehensive admin dashboard.",
      longDescription: "Parijana is an innovative AI solution for the insurance industry, designed to streamline the claims process through intelligent automation. The system uses OCR technology to extract information from documents, provides an intuitive chat interface for user guidance, and includes a comprehensive admin panel for managing claims and user interactions.",
      tech: ["AI/ML", "OCR", "MongoDB", "Express.js", "React.js", "Node.js", "Python"],
      category: "AI-Powered Application",
      liveUrl: "#",
      githubUrl: "https://github.com/Mukundh15/PARIJANA_",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      features: [
        "AI-powered chat interface",
        "OCR document processing",
        "Automated form filling",
        "User feedback and contact system",
        "Admin dashboard for claim management",
        "MongoDB integration for data storage",
        "Real-time claim status tracking"
      ]
    },
    {
      id: 3,
      title: "LFPortal - Lost & Found System",
      description: "A MERN-based application for reporting lost and found items, featuring secure sessions, image uploads to Cloudinary, and feedback forms.",
      longDescription: "LFPortal is a web-based platform designed for reporting and finding lost items in colleges or local communities. It supports user authentication, secure session handling, image upload via Cloudinary, and feedback/contact forms. The portal allows users to submit detailed lost/found reports with images and manage them through a user-friendly interface.",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Cloudinary",
        "Multer",
        "MUI",
        "express-session",
        "bcrypt"
      ],
      category: "Full-Stack Web Application",
      liveUrl: "#",
      githubUrl: "https://github.com/Mukundh15/LFPortal",
      icon: Search,
      color: "from-yellow-500 to-orange-600",
      features: [
        "Session-based user authentication",
        "Lost & found item reporting with image upload",
        "Cloudinary integration for media storage",
        "Contact and feedback support system",
        "Responsive UI built with MUI",
        "Secure backend using express-session and bcrypt"
      ]
    }
  ];

  const upcomingProjects = [
    {
      title: "Portfolio Website v2",
      description: "Enhanced portfolio with blog functionality and dark mode",
      tech: ["Next.js", "TypeScript", "Sanity CMS"],
      status: "Planning"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment integration",
      tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
      status: "Planning"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, 
            AI integration, and modern web technologies
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {projects.map((project, index) => (
            <Card key={project.id} className={`overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:flex">
                <div className={`lg:w-1/3 h-64 lg:h-auto bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <project.icon className="h-20 w-20 text-white" />
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h2>
                      <p className="text-gray-600 mb-4">{project.longDescription}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4 pt-4">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <Button asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <Button variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Upcoming Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingProjects.map((project) => (
              <Card key={project.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge 
                      variant={project.status === "Planning" ? "secondary" : "default"}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-16 animate-fade-in">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used Across Projects</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-2">
                    <Database className="h-8 w-8 text-green-600 mx-auto" />
                    <div className="font-semibold text-sm">Database</div>
                    <div className="text-xs text-gray-600">MongoDB</div>
                  </div>
                  <div className="space-y-2">
                    <Code className="h-8 w-8 text-blue-600 mx-auto" />
                    <div className="font-semibold text-sm">Backend</div>
                    <div className="text-xs text-gray-600">Node.js & Express</div>
                  </div>
                  <div className="space-y-2">
                    <Code className="h-8 w-8 text-purple-600 mx-auto" />
                    <div className="font-semibold text-sm">Frontend</div>
                    <div className="text-xs text-gray-600">React.js</div>
                  </div>
                  <div className="space-y-2">
                    <Brain className="h-8 w-8 text-pink-600 mx-auto" />
                    <div className="font-semibold text-sm">AI/ML</div>
                    <div className="text-xs text-gray-600">OCR & Automation</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
