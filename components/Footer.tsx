import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
                K
              </div>
              <span className="font-bold text-xl">Kangaroo Pakistan</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Nurturing the next generation of global thinkers through
              world-class educational contests.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contests</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  to="/contest/IKMC"
                  className="hover:text-indigo-400 transition-colors">
                  Mathematics (IKMC)
                </Link>
              </li>
              <li>
                <Link
                  to="/contest/IKSC"
                  className="hover:text-indigo-400 transition-colors">
                  Science (IKSC)
                </Link>
              </li>
              <li>
                <Link
                  to="/contest/IKLC"
                  className="hover:text-indigo-400 transition-colors">
                  Linguistics (IKLC)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/participation"
                  className="hover:text-indigo-400 transition-colors">
                  How to Participate
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-indigo-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-indigo-400 transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3 items-start">
                <span className="text-indigo-400">📍</span>
                <span>
                  1st Floor, Plaza 114, Main Boulevard, Phase 06, DHA Lahore.
                  54792
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-indigo-400">📞</span>
                <span>+92 42 37180505</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-indigo-400">✉️</span>
                <span>info@kangaroopakistan.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kangaroo Pakistan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors">
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
