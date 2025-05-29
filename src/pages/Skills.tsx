
import { Code, Database, Globe, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Material-UI", level: 80 },
        { name: "TailwindCSS", level: 90 },
      ]
    },
    {
      title: "Backend Development",
      icon: Code,
      color: "text-green-600",
      bgColor: "bg-green-50",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "RESTful APIs", level: 80 },
        { name: "Authentication", level: 75 },
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "Mongoose", level: 75 },
        { name: "Database Design", level: 70 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 80 },
        { name: "npm/yarn", level: 80 },
      ]
    }
  ];

  const techStack = [
    "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3",
    "Material-UI", "TailwindCSS", "Git", "GitHub", "VS Code", "Postman", "MERN Stack"
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's an overview of the technologies and tools I work with to build amazing web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl">
                  <div className={`p-3 rounded-lg ${category.bgColor} mr-4`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                          category.title === "Frontend Development" ? "bg-blue-600" :
                          category.title === "Backend Development" ? "bg-green-600" :
                          category.title === "Database & Storage" ? "bg-purple-600" :
                          "bg-orange-600"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Overview */}
        <div className="animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technology Stack</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {techStack.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Goals */}
        <div className="mt-16 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Currently Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-blue-600 text-3xl mb-3">🚀</div>
                <h3 className="font-semibold mb-2">Advanced React</h3>
                <p className="text-gray-600 text-sm">
                  Exploring React hooks, context, and performance optimization techniques
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-purple-600 text-3xl mb-3">🤖</div>
                <h3 className="font-semibold mb-2">AI Integration</h3>
                <p className="text-gray-600 text-sm">
                  Learning to integrate AI and machine learning into web applications
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-green-600 text-3xl mb-3">☁️</div>
                <h3 className="font-semibold mb-2">Cloud Technologies</h3>
                <p className="text-gray-600 text-sm">
                  Exploring deployment strategies and cloud platforms for scalable applications
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
