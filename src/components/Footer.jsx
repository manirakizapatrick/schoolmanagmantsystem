import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Footer links organized by category
  const footerLinks = [
    {
      category: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Schools", path: "/schools" },
        { name: "Contact", path: "/contact" },
      ]
    },
    {
      category: "Resources",
      links: [
        { name: "Student Portal", path: "/student-portal" },
        { name: "Faculty Access", path: "/faculty" },
        { name: "Parent Dashboard", path: "/parents" },
        { name: "Academic Calendar", path: "/calendar" },
      ]
    },
    {
      category: "Information",
      links: [
        { name: "FAQ", path: "/faq" },
        { name: "Admissions", path: "/admissions" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
      ]
    }
  ];

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">School Management System</h3>
            <p className="text-gray-300 mb-4">
              Empowering education through innovative management solutions. Join us in building the future of learning.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.category}>
              <h3 className="text-lg font-semibold mb-4">{section.category}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact information */}
        <div className="border-t border-gray-700 pt-8 my-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Mail className="mr-2 text-gray-400" size={18} />
              <a href="mailto:info@schoolmanagementsystem.com" className="text-gray-300 hover:text-white">
                info@schoolmanagementsystem.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 text-gray-400" size={18} />
              <a href="tel:+11234567890" className="text-gray-300 hover:text-white">
                +1 (123) 456-7890
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 text-gray-400" size={18} />
              <span className="text-gray-300">
                123 Education St, Learning City
              </span>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} School Management System. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart size={14} className="mx-1 text-red-500" /> by Your Company
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;