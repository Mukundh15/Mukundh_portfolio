import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Skills = () => {
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Frontend Development</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>HTML, CSS, JavaScript</li>
              <li>Bootstrap</li>
              <li>React.js with Vite</li>
              <li>React Router</li>
              <li>Tailwind CSS</li>
              <li>MUI (Material-UI)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Backend Development</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Node.js, Express.js</li>
              <li>MongoDB, Mongoose</li>
              <li>Session Authentication</li>
              <li>RESTful API Development</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Other Tools & Services</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Git, GitHub</li>
              <li>Cloudinary, Multer</li>
              <li>VS Code</li>
              <li>Postman</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
