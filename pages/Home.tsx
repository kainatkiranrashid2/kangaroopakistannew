
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTESTS } from '../constants';
import { ContestType } from '../types';
import AnnouncementModal from '../components/AnnouncementModal';

const Home: React.FC = () => {
  const [showAnnouncements, setShowAnnouncements] = useState(false);

  useEffect(() => {
    // Show modal on first load after a short delay for impact
    const timer = setTimeout(() => setShowAnnouncements(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: 'Countries', value: '120+' },
    { label: 'Participants', value: '500,000+' },
    { label: 'Schools', value: '5,000+' },
    { label: 'Awards Given', value: '10,000+' },
  ];

  return (
    <div className="overflow-hidden">
      {showAnnouncements && <AnnouncementModal onClose={() => setShowAnnouncements(false)} />}

      {/* Persistent Quick Announcement Strip */}
      <div className="bg-indigo-900 text-white py-3 relative z-40">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block">
            <span className="mx-8 font-medium text-sm">🔥 <b>IKMC 2026:</b> Registrations Now Open</span>
            <span className="mx-8 font-medium text-sm">📅 <b>IKMC registrations Deadline:</b> Feb 6, 2026</span>
            <span className="mx-8 font-medium text-sm">🏆 <b>Results:</b> IKSC 2025 Results are Out!</span>
            <span className="mx-8 font-medium text-sm">⚖️ <b>Legal:</b> IP Tribunal Lahore Official Notice</span>
            {/* Duplicate for seamless marquee */}
            <span className="mx-8 font-medium text-sm">🔥 <b>IKMC 2026:</b> Registrations Now Open</span>
            <span className="mx-8 font-medium text-sm">📅 <b>IKMC Registration Deadline:</b> Feb 6, 2026</span>
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-32 lg:pt-12 lg:pb-32 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-indigo-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 right-1/3 w-5 h-5 bg-cyan-400 rounded-full animate-bounce opacity-30" style={{animationDelay: '1.5s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <button 
              onClick={() => setShowAnnouncements(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-indigo-700 rounded-full font-bold text-xs mb-6 shadow-sm border border-indigo-100 hover:bg-indigo-50 transition-all animate-pulse hover:scale-105"
            >
              <span className="w-2 h-2 bg-indigo-600 rounded-full animate-ping"></span>
             CLICK TO VIEW LATEST ANNOUNCEMENTS
            </button>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in-up">
              World's Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 animate-gradient-x">Prestigious</span> Educational Contests
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Empowering school children across Pakistan to explore their natural talents and compete on the global stage in Math, Science, and Linguistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a
                href="https://enrollments.kangaroopakistan.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 shadow-xl hover:shadow-indigo-200 transition-all hover:-translate-y-2 hover:scale-105 transform"
              >
                Register Now
              </a>
              <Link
                to="/about"
                className="px-10 py-4 bg-white text-gray-700 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all hover:-translate-y-1 hover:scale-105 transform"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute top-1/2 -left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Featured Contests */}
      <section className="py-24 bg-white relative -mt-20 z-10 rounded-t-[60px] lg:rounded-t-[100px] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">International Contests</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Select a contest to view details, curriculum, and sample papers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(CONTESTS).map((contest, index) => (
              <div
                key={contest.id}
                className="group p-8 bg-white rounded-[40px] border-2 border-gray-50 hover:border-indigo-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-4 relative overflow-hidden animate-fade-in-up transform hover:scale-105"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${contest.bgGradient} opacity-5 group-hover:scale-150 group-hover:opacity-10 transition-all duration-700 rounded-bl-full`}></div>
                
                <div className="mb-6 relative h-20 w-20 flex items-center justify-center">
                  <div className={`absolute inset-0 bg-${contest.color} opacity-10 rounded-2xl rotate-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}></div>
                  <img 
                    src={contest.logoUrl} 
                    alt={contest.name} 
                    className="h-16 w-16 object-contain relative z-10 group-hover:scale-125 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{contest.name}</h3>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">{contest.fullName}</h4>
                <p className="text-gray-600 mb-8 line-clamp-3 group-hover:text-gray-700 transition-colors">
                  {contest.description}
                </p>
                
                <Link
                  to={`/contest/${contest.id}`}
                  className={`inline-flex items-center font-bold text-lg ${contest.id === ContestType.IKMC ? 'text-blue-600 hover:text-blue-700' : contest.id === ContestType.IKSC ? 'text-orange-600 hover:text-orange-700' : 'text-green-600 hover:text-green-700'} hover:underline transition-all group-hover:translate-x-2`}
                >
                  Learn More <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full animate-spin-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white/10 rounded-full animate-spin-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2 animate-fade-in-up group" style={{animationDelay: `${idx * 0.2}s`}}>
                <div className="text-5xl lg:text-6xl font-black group-hover:scale-110 transition-transform duration-300 animate-count-up">{stat.value}</div>
                <div className="text-indigo-100 font-medium tracking-wide uppercase text-sm group-hover:text-white transition-colors">{stat.label}</div>
                <div className="w-8 h-1 bg-white/30 mx-auto rounded-full group-hover:bg-white/60 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contest Calendars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contest Calendars</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Stay updated with important dates for all our international contests.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(CONTESTS).map((contest, index) => (
              <div
                key={contest.id}
                className={`group p-8 bg-gradient-to-br ${contest.bgGradient} text-white rounded-[40px] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-4 relative overflow-hidden animate-fade-in-up transform hover:scale-105`}
                style={{animationDelay: `${index * 0.3}s`}}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
                
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                    <img 
                      src={contest.logoUrl} 
                      alt={contest.name} 
                      className="h-10 w-10 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold group-hover:scale-105 transition-transform origin-left">{contest.name}</h3>
                    <p className="text-white/80 text-sm font-medium">{contest.fullName}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.1s'}}>
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-lg group-hover:rotate-12 transition-transform">📅</div>
                    <div>
                      <p className="text-white/80 font-bold uppercase tracking-wider text-xs">Registration</p>
                      <p className="font-bold text-sm">{contest.detailedData?.dates.registration || 'TBA'}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.2s'}}>
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-lg group-hover:rotate-12 transition-transform">🏁</div>
                    <div>
                      <p className="text-white/80 font-bold uppercase tracking-wider text-xs">Contest Day</p>
                      <p className="font-bold text-sm">{contest.detailedData?.dates.contest || 'TBA'}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: '0.3s'}}>
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-lg group-hover:rotate-12 transition-transform">🏆</div>
                    <div>
                      <p className="text-white/80 font-bold uppercase tracking-wider text-xs">Results</p>
                      <p className="font-bold text-sm">{contest.detailedData?.dates.results || 'TBA'}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <Link
                    to={`/contest/${contest.id}`}
                    className="inline-flex items-center gap-2 text-white font-bold hover:text-white/80 transition-all group-hover:translate-x-2"
                  >
                    View Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden border border-gray-100 animate-fade-in-up group hover:shadow-2xl transition-all duration-500">
            <div className="md:max-w-xl relative z-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 group-hover:text-indigo-600 transition-colors">Ready to showcase your talent?</h2>
              <p className="text-lg text-gray-600 mb-8 group-hover:text-gray-700 transition-colors">
                Join thousands of students across Pakistan in the journey of discovery and excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all hover:-translate-y-1 hover:scale-105 transform">About Us</Link>
                <a href="https://enrollments.kangaroopakistan.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all hover:-translate-y-1 hover:scale-105 transform">Register Now</a>
                <Link to="/contact" className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all hover:-translate-y-1 hover:scale-105 transform">Get in Touch</Link>
              </div>
            </div>
            <div className="hidden lg:block relative z-10">
               <div className="w-64 h-64 bg-indigo-600 rounded-3xl rotate-12 flex items-center justify-center text-white text-9xl font-bold shadow-2xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-700 animate-float">
                 !
               </div>
            </div>
            
            {/* Animated background elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-indigo-100 rounded-full opacity-50 animate-bounce"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-100 rounded-full opacity-30 animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
