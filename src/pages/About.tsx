
import { GraduationCap, Target, Heart, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know me better - my journey, aspirations, and what drives me as a developer
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Image & Quick Info */}
          <div className="lg:col-span-1 space-y-6 animate-scale-in">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-700 rounded-2xl mx-auto flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src="mukundh.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-2xl" 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Code2 className="h-8 w-8 text-white" />
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-gray-900">Mukundh Dubasi</h3>
                  <p className="text-gray-600">Full-Stack Developer</p>
                  <p className="text-sm text-gray-500">CSE Student</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Detailed Info */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hello! I'm Mukundh</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  I'm currently pursuing a <strong>B.Tech in Computer Science and Engineering (CSE)</strong>, 
                  and I'm deeply passionate about <strong>full-stack development</strong>. My journey in 
                  technology has been driven by curiosity and a desire to create meaningful solutions 
                  that make a difference.
                </p>
                <p>
                  My goal is to become a skilled <strong>software engineer</strong> who builds impactful, 
                  scalable web applications using cutting-edge technologies. I believe in writing clean, 
                  maintainable code and following best practices in software development.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or working on personal projects that challenge me to grow as a developer.
                </p>
              </div>
            </div>

            {/* Values Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Currently pursuing B.Tech in Computer Science & Engineering, 
                    constantly learning and applying new concepts.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Target className="h-5 w-5 text-purple-600 mr-2" />
                    Goal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    To become a skilled software engineer building impactful, 
                    scalable applications that solve real-world problems.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Heart className="h-5 w-5 text-red-600 mr-2" />
                    Passion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Full-stack development, creating user-friendly interfaces, 
                    and building robust backend systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Code2 className="h-5 w-5 text-green-600 mr-2" />
                    Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Writing clean, maintainable code while following best practices 
                    and staying updated with latest technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">My Journey</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-gray-900">Started B.Tech in CSE</h3>
                <p className="text-gray-600 text-sm">
                  Began my formal journey in computer science, learning programming fundamentals 
                  and software development principles.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-4 h-4 bg-purple-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-gray-900">Discovered Full-Stack Development</h3>
                <p className="text-gray-600 text-sm">
                  Found my passion in building complete web applications, from frontend interfaces 
                  to backend APIs and databases.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-4 h-4 bg-green-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-gray-900">Built Real-World Projects</h3>
                <p className="text-gray-600 text-sm">
                  Created projects like StayEasy and Parijana, applying MERN stack technologies 
                  to solve practical problems.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-4 h-4 bg-orange-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-gray-900">Continuous Learning</h3>
                <p className="text-gray-600 text-sm">
                  Currently expanding my skills in modern web technologies, AI integration, 
                  and software engineering best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
