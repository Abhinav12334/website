
import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white-900 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="public\logo.png"
                alt="Aptivora Logo"
                className="h-400 w-auto"
              />
              <span className="text-2xl font-bold text-gray-900"></span>
            </Link>
                     
            <p className="mt-4 text-gray-400 text-sm">Empowering Innovation with Intelligent Solutions.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
  <Link to="/privacy" className="text-gray-400 hover:text-black transition-colors">
    Privacy Policy
  </Link>
</li>

              <li><a href="#" className="text-gray-400 hover:text-black transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-semibold tracking-wider uppercase">Connect</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-black"><Twitter /></a>
              <a
  href="https://www.linkedin.com/company/aptivora-global-solutions/posts/?feedView=all"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-black"
>
  <Linkedin />
</a>
              <a href="#" className="text-gray-400 hover:text-black"><Github /></a>
            </div>
          </div>
        </div>
        
        
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Aptivora Inc. All rights reserved. Powered by Aptivora Global Solution </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
