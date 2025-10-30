
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Bot } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
  <img
    src="/logo.png"
    alt="Aptivora Logo"
    className="h-20 w-auto"
  />
  <span className="text-2xl font-bold text-gray-900"></span>
</Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `text-gray-600 hover:text-primary transition-colors duration-300 font-medium ${isActive ? 'text-primary' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full opacity-0'}`}>
        <div className="flex flex-col items-center space-y-4 p-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `text-lg w-full text-center py-2 rounded-md hover:bg-secondary ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
