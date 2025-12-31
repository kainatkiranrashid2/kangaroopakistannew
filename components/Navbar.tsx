import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CONTESTS } from "../constants";
import { ContestType } from "../types";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const subLinks = [
    { name: "General Information", path: "" },
    { name: "Forms", path: "/forms" },
    { name: "Past Papers", path: "/past-papers" },
    { name: "Results", path: "/results" },
    { name: "Answer Sheets", path: "/answer-sheets" },
    { name: "FAQs", path: "/faqs" },
    { name: "History", path: "/history" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
  ];

  const contests = [ContestType.IKMC, ContestType.IKSC, ContestType.IKLC];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
      ref={dropdownRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
              K
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight hidden sm:block">
              Kangaroo <span className="text-indigo-600">Pakistan</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-gray-600 hover:text-indigo-600 font-semibold transition-all ${
                  location.pathname === link.path
                    ? "text-indigo-600 bg-indigo-50/50"
                    : ""
                }`}>
                {link.name}
              </Link>
            ))}

            {/* Contest Dropdowns */}
            {contests.map((type) => (
              <div key={type} className="relative group">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === type ? null : type)
                  }
                  onMouseEnter={() => setActiveDropdown(type)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg font-bold transition-all ${
                    activeDropdown === type || location.pathname.includes(type)
                      ? "text-indigo-600 bg-indigo-50/50"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}>
                  {type}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === type ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === type && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                    <div className="px-4 py-2 mb-2 border-b border-gray-50">
                      <div className="flex items-center gap-2">
                        <img
                          src={CONTESTS[type].logoUrl}
                          alt=""
                          className="w-6 h-6 object-contain"
                        />
                        <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
                          {CONTESTS[type].fullName}
                        </span>
                      </div>
                    </div>
                    {subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={`/contest/${type}${sub.path}`}
                        className="flex items-center gap-3 px-5 py-3 text-sm font-semibold text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg text-gray-600 hover:text-indigo-600 font-semibold transition-all ${
                location.pathname === "/contact"
                  ? "text-indigo-600 bg-indigo-50/50"
                  : ""
              }`}>
              Contact
            </Link>

            <div className="pl-4">
              <a
                href="https://enrollments.kangaroopakistan.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md hover:shadow-indigo-200 hover:-translate-y-0.5">
                Register Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-xl transition-colors">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-80px)] overflow-y-auto py-4 px-4 space-y-1 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-4 py-3 rounded-xl text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-bold transition-all">
              {link.name}
            </Link>
          ))}

          {contests.map((type) => (
            <div key={type} className="space-y-1">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === type ? null : type)
                }
                className="w-full flex justify-between items-center px-4 py-3 rounded-xl text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-bold transition-all">
                {type}
                <svg
                  className={`w-5 h-5 transition-transform ${
                    activeDropdown === type ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === type && (
                <div className="pl-6 space-y-1 bg-gray-50 rounded-2xl py-2 mb-2 animate-in slide-in-from-left-2 duration-200">
                  {subLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      to={`/contest/${type}${sub.path}`}
                      className="block px-4 py-3 text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/contact"
            className="block px-4 py-3 rounded-xl text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-bold transition-all">
            Contact
          </Link>

          <div className="pt-4">
            <a
              href="https://enrollments.kangaroopakistan.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-indigo-600 text-white px-6 py-4 rounded-2xl font-bold shadow-lg">
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
