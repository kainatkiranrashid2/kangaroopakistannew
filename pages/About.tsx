import React, { useState, useEffect, useRef } from "react";
import { TEAM } from "../constants";

const About: React.FC = () => {
  const [activeCert, setActiveCert] = useState<string | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all elements with data-animate attribute
    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroElements = document.querySelectorAll('.parallax-element');
      heroElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(scrolled * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isVisible = (id: string) => visibleElements.has(id);

  const stats = [
    { label: "Global Years", value: "30+" },
    { label: "Countries", value: "120+" },
    { label: "Students", value: "6M+" },
    { label: "Awards", value: "50K+" },
  ];

  const pillars = [
    {
      id: "aims",
      title: "Aims & Objectives",
      tagline: "Fostering a culture of critical thinking.",
      description: `Innovative Learning and Inventive Learning bring together the expertise of education professionals worldwide with the goal of fostering a culture of critical thinking, clear reasoning, and effective communication skills. Our primary mission is contributing to the educational advancement of Pakistani schools.`,
      points: [
        "Early international recognition for school children.",
        "Platform to demonstrate talent on the global stage.",
        "Instilling confidence in mathematical comprehension.",
      ],
      color: "bg-blue-50",
      accent: "text-blue-600",
      icon: "🎯",
    },
    {
      id: "spirit",
      title: "The Spirit of Our Contests",
      tagline: "Learning without constraints.",
      description: `The Kangaroo Contest is not just an exam; it is the unique lesson of the year. We seek to provide students with an opportunity to showcase the exceptional capabilities of their minds when free from the pressure of traditional memorized knowledge.`,
      points: [
        "Expanding horizons beyond textbooks.",
        "Promoting unconstrained logical thinking.",
        "A stress-free environment for natural talent.",
      ],
      color: "bg-orange-50",
      accent: "text-orange-600",
      icon: "✨",
    },
    {
      id: "value",
      title: "Academic Value",
      tagline: "Backed by world-class institutions.",
      description: `Our contests boast contributions from leading education experts from over 120 countries. The academic depth is supported by dozens of National Mathematical Societies and research institutions worldwide, including the UK Math Trust.`,
      points: [
        "Content created by PhD experts globally.",
        "Endorsed by International Mathematics Olympiads.",
        "Standardized pedagogy used in top-tier school systems.",
      ],
      color: "bg-emerald-50",
      accent: "text-emerald-600",
      icon: "🎓",
    },
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* 1. Hero Section: The Big Picture */}
      <section className="relative pt-16 pb-16 lg:pt-20 lg:pb-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-500/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span 
            data-animate
            id="hero-badge"
            className={`inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold tracking-widest uppercase mb-6 transition-all duration-700 ${
              isVisible('hero-badge') ? 'animate-bounce-in' : 'opacity-0 translate-y-4'
            }`}
          >
            ESTABLISHED IN PAKISTAN SINCE 2005
          </span>
          <h1 
            data-animate
            id="hero-title"
            className={`text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight transition-all duration-1000 ${
              isVisible('hero-title') ? 'animate-fade-in-up animate-delay-200' : 'opacity-0 translate-y-8'
            }`}
          >
            Nurturing <span className="text-indigo-400">Global Thinkers</span>{" "}
            <br />
            in Every Classroom.
          </h1>
          <p 
            data-animate
            id="hero-description"
            className={`text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 ${
              isVisible('hero-description') ? 'animate-fade-in-up animate-delay-500' : 'opacity-0 translate-y-8'
            }`}
          >
            Kangaroo Pakistan (Innovative Learning) is the sole representative
            of Kangourou Sans Frontières, dedicated to bringing world-class
            educational opportunities to the youth of Pakistan.
          </p>

          <div 
            data-animate
            id="hero-stats"
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8 border-t border-white/10 transition-all duration-1000 ${
              isVisible('hero-stats') ? 'animate-slide-up animate-delay-700' : 'opacity-0 translate-y-8'
            }`}
          >
            {stats.map((stat, i) => (
              <div key={i} className={`text-center animate-count-up animate-delay-${(i + 1) * 200}`}>
                <div className="text-3xl lg:text-4xl font-black text-white mb-1 animate-pulse-glow">
                  {stat.value}
                </div>
                <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl animate-float parallax-element" data-speed="0.3"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float animate-delay-1000 parallax-element" data-speed="0.5"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse animate-delay-500 parallax-element" data-speed="0.2"></div>
      </section>

      {/* 2. Pillars Section: Interactive Content */}
      <section className="py-32 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-animate
            id="pillars-container"
            className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
              isVisible('pillars-container') ? 'animate-fade-in-up' : 'opacity-0 translate-y-12'
            }`}
          >
            {pillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`group p-10 rounded-[45px] ${pillar.color} border border-transparent hover:border-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in animate-delay-${(index + 1) * 200}`}
                style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm group-hover:scale-110 group-hover:animate-bounce-in transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p
                  className={`font-bold text-sm ${pillar.accent} mb-6 uppercase tracking-wider`}>
                  {pillar.tagline}
                </p>
                <p className="text-gray-600 mb-8 text-md leading-relaxed">
                  {pillar.description}
                </p>
                <ul className="space-y-3">
                  {pillar.points.map((point, pi) => (
                    <li
                      key={pi}
                      className={`flex items-start gap-3 text-sm font-semibold text-gray-500 animate-fade-in-left animate-delay-${(pi + 1) * 100}`}
                      style={{ animationDelay: `${(index * 0.2) + (pi * 0.1) + 0.5}s` }}
                    >
                      <span className={`${pillar.accent} mt-0.5 animate-bounce-in`}>•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep Dive Section: History & Academic Value */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div 
              data-animate
              id="history-content"
              className={`lg:w-1/2 transition-all duration-1000 ${
                isVisible('history-content') ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-6 animate-bounce-in">
                OUR STORY
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                From a Small Idea <br />
                to a <span className="text-indigo-600">Global Movement.</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="animate-fade-in-up animate-delay-300">
                  In the early 80's, Peter O'Holloran invented a new kind of
                  game in Australian schools that allowed thousands of students
                  to participate simultaneously. This success inspired French
                  educators André Deledicq and Jean Pierre Boudine to launch
                  "Kangaroo" in 1991 in France.
                </p>
                <p className="animate-fade-in-up animate-delay-500">
                  Today, <strong>Kangourou Sans Frontières (KSF)</strong> is a
                  global powerhouse of educational innovation. Pakistan joined
                  this initiative in 2005, and since then, we have empowered
                  millions of students across the country to demonstrate that
                  their abilities are unmatched at the international level.
                </p>
              </div>
              <div className="mt-10 flex gap-6 animate-slide-up animate-delay-700">
                <div className="flex flex-col animate-count-up animate-delay-1000">
                  <span className="text-3xl font-black text-indigo-600 animate-pulse-glow">
                    6M+
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase">
                    Annual Participants
                  </span>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="flex flex-col animate-count-up animate-delay-1000">
                  <span className="text-3xl font-black text-indigo-600 animate-pulse-glow">
                    120+
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase">
                    Member Countries
                  </span>
                </div>
              </div>
            </div>
            <div 
              data-animate
              id="history-image"
              className={`lg:w-1/2 relative transition-all duration-1000 ${
                isVisible('history-image') ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="aspect-[4/5] bg-white rounded-[60px] p-4 shadow-2xl relative z-10 overflow-hidden hover:scale-105 transition-transform duration-700 animate-float">
                <img
                  src="https://picsum.photos/seed/kangaroo-history/800/1000"
                  alt="Contest history"
                  className="w-full h-full object-cover rounded-[50px] grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative blob */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            data-animate
            id="team-title"
            className={`text-4xl font-black text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible('team-title') ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Visionary Team
          </h2>
          <p 
            data-animate
            id="team-description"
            className={`text-gray-500 max-w-2xl mx-auto mb-20 text-lg transition-all duration-1000 ${
              isVisible('team-description') ? 'animate-fade-in-up animate-delay-200' : 'opacity-0 translate-y-8'
            }`}
          >
            Meet the dedicated professionals working tirelessly to ensure
            Pakistani students stay connected with global educational standards.
          </p>

          <div 
            data-animate
            id="team-grid"
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0 items-center justify-center transition-all duration-1000 ${
              isVisible('team-grid') ? 'animate-scale-in animate-delay-500' : 'opacity-0 scale-95'
            }`}
          >
            {TEAM.map((member, index) => (
              <div 
                key={member.name} 
                className={`group animate-bounce-in animate-delay-${(index + 1) * 300}`}
                style={{ animationDelay: `${(index + 1) * 0.3}s` }}
              >
                <div className="mb-6 relative mx-auto w-full aspect-square max-w-[200px] rounded-[40px] overflow-hidden shadow-xl group-hover:shadow-indigo-200 group-hover:-translate-y-2 transition-all duration-500 hover:animate-pulse-glow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Certificates Wall */}
      <section 
        data-animate
        id="certificates-section"
        className={`py-16 bg-indigo-900 text-white rounded-[60px] lg:rounded-[100px] mx-4 lg:mx-8 mb-8 relative overflow-hidden transition-all duration-1000 ${
          isVisible('certificates-section') ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/3 text-center lg:text-left animate-fade-in-left animate-delay-300">
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                Global <br />
                Credentials.
              </h2>
              <p className="text-indigo-100/70 mb-10 leading-relaxed animate-fade-in-up animate-delay-500">
                We are proud to hold official memberships with international
                educational associations, ensuring our processes meet global
                benchmarks.
              </p>
              <div className="flex flex-col gap-4">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm animate-slide-up animate-delay-700 hover:animate-pulse-glow transition-all duration-300">
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
                    AFFILIATION 01
                  </p>
                  <p className="font-bold">Kangourou Sans Frontières (KSF)</p>
                </div>
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm animate-slide-up animate-delay-1000 hover:animate-pulse-glow transition-all duration-300">
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
                    AFFILIATION 02
                  </p>
                  <p className="font-bold">Editura SIGMA</p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-right animate-delay-500">
              <div
                onClick={() => setActiveCert("membership1")}
                className="cursor-pointer group relative rounded-[45px] overflow-hidden shadow-2xl bg-white p-4 hover:scale-[1.02] transition-all animate-bounce-in animate-delay-700 hover:animate-pulse-glow"
              >
                <div className="aspect-[3/4] rounded-[35px] overflow-hidden relative">
                  <img
                    src="/membership.png"
                    alt="KSF Membership Certificate"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold text-sm px-6 py-2 border-2 border-white rounded-full animate-bounce-in">
                      Expand Certificate
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setActiveCert("membership2")}
                className="cursor-pointer group relative rounded-[45px] overflow-hidden shadow-2xl bg-white p-4 hover:scale-[1.02] transition-all animate-bounce-in animate-delay-1000 hover:animate-pulse-glow"
              >
                <div className="aspect-[3/4] rounded-[35px] overflow-hidden relative">
                  <img
                    src="/membership2.png"
                    alt="International Linguistic Association Certificate"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold text-sm px-6 py-2 border-2 border-white rounded-full animate-bounce-in">
                      Expand Certificate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 animate-fade-in duration-300"
          onClick={() => setActiveCert(null)}>
          <div
            className="max-w-4xl w-full h-full bg-white rounded-[50px] overflow-hidden relative shadow-2xl flex flex-col animate-scale-in"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full text-2xl font-bold transition-all z-20 hover:animate-bounce-in">
              ×
            </button>
            <div className="flex-1 overflow-y-auto p-10 bg-gray-100 flex items-center justify-center">
              <img
                src={
                  activeCert === "membership1"
                    ? "/membership.png"
                    : "/membership2.png"
                }
                alt={
                  activeCert === "membership1"
                    ? "KSF Membership Certificate"
                    : "International Linguistic Association Certificate"
                }
                className="max-w-full max-h-full object-contain shadow-lg animate-fade-in-up"
              />
            </div>
            <div className="p-10 border-t bg-white flex flex-col md:flex-row justify-between items-center gap-6 animate-slide-up">
              <div className="text-center md:text-left">
                <h4 className="font-black text-2xl text-gray-900">
                  {activeCert === "membership1"
                    ? "Official KSF Membership"
                    : "International Linguistic Association"}
                </h4>
                <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-1">
                  Verified Credential for Kangaroo Pakistan
                </p>
              </div>
              <a
                href={
                  activeCert === "membership1"
                    ? "https://drive.google.com/file/d/1UdOgo-LJSE8--nF979tTWa24zedhcTiL/view"
                    : "https://drive.google.com/file/d/1eX6CA-9TBotAv80bhJmpEXgt_TqkzatW/view"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all hover:animate-pulse-glow">
                View Full Resolution
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
