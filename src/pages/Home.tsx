
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Mukundh Dubasi
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A passionate <strong>Full-Stack Developer</strong> pursuing B.Tech in Computer Science & Engineering.
                  I build impactful, scalable web applications using modern technologies.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>

              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 p-2">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 p-2">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 p-2">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br rounded-full mx-auto opacity-20 absolute inset-0 animate-pulse"></div>
                <div className="w-72 h-72 bg-gradient-to-br rounded-full mx-auto relative z-10 flex items-center justify-center overflow-hidden">
                  <img 
                    src="mukundh.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                <div className="text-gray-600">Projects Built</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-600">Technologies</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">CSE</div>
                <div className="text-gray-600">B.Tech Student</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
                <div className="text-gray-600">Learning</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">StayEasy</h3>
                <p className="text-gray-600 mb-4">
                  A full-stack rental listing platform where users can view and post property listings.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">MongoDB</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Express.js</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">EJS</span>
                </div>
                <Button variant="outline" size="sm">
                  View Project
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Parijana - AI Humanoid</h3>
                <p className="text-gray-600 mb-4">
                  An AI-based humanoid agent for insurance claims with OCR, automated form filling, and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">AI/ML</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">OCR</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">MongoDB</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">Full Stack</span>
                </div>
                <Button variant="outline" size="sm">
                  View Project
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
