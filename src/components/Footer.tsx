
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">Mukundh Dubasi</span>
            </div>
            <p className="text-gray-400 text-sm">
              Passionate full-stack developer building impactful web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About Me
              </a>
              <a href="/projects" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Projects
              </a>
              <a href="/skills" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Skills
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Mukundh Dubasi. All rights reserved. Built with React & TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
