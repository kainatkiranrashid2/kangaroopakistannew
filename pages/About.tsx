import React, { useState } from "react";
import { TEAM } from "../constants";

const About: React.FC = () => {
  const [activeCert, setActiveCert] = useState<string | null>(null);

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
      <section className="relative pt-24 pb-32 lg:pt-40 lg:pb-48 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-500/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in">
            ESTABLISHED IN PAKISTAN SINCE 2005
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            Nurturing <span className="text-indigo-400">Global Thinkers</span>{" "}
            <br />
            in Every Classroom.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Kangaroo Pakistan (Innovative Learning) is the sole representative
            of Kangourou Sans Frontières, dedicated to bringing world-class
            educational opportunities to the youth of Pakistan.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8 border-t border-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-white mb-1">
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
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </section>

      {/* 2. Pillars Section: Interactive Content */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className={`group p-10 rounded-[45px] ${pillar.color} border border-transparent hover:border-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p
                  className={`font-bold text-sm ${pillar.accent} mb-6 uppercase tracking-wider`}>
                  {pillar.tagline}
                </p>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                  {pillar.description}
                </p>
                <ul className="space-y-3">
                  {pillar.points.map((point, pi) => (
                    <li
                      key={pi}
                      className="flex items-start gap-3 text-xs font-semibold text-gray-500">
                      <span className={`${pillar.accent} mt-0.5`}>•</span>
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
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-6">
                OUR STORY
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                From a Small Idea <br />
                to a <span className="text-indigo-600">Global Movement.</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  In the early 80's, Peter O'Holloran invented a new kind of
                  game in Australian schools that allowed thousands of students
                  to participate simultaneously. This success inspired French
                  educators André Deledicq and Jean Pierre Boudine to launch
                  "Kangaroo" in 1991 in France.
                </p>
                <p>
                  Today, <strong>Kangourou Sans Frontières (KSF)</strong> is a
                  global powerhouse of educational innovation. Pakistan joined
                  this initiative in 2005, and since then, we have empowered
                  millions of students across the country to demonstrate that
                  their abilities are unmatched at the international level.
                </p>
              </div>
              <div className="mt-10 flex gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-indigo-600">
                    6M+
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase">
                    Annual Participants
                  </span>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-indigo-600">
                    120+
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase">
                    Member Countries
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] bg-white rounded-[60px] p-4 shadow-2xl relative z-10 overflow-hidden">
                <img
                  src="https://picsum.photos/seed/kangaroo-history/800/1000"
                  alt="Contest history"
                  className="w-full h-full object-cover rounded-[50px] grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative blob */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Our Visionary Team
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-20 text-lg">
            Meet the dedicated professionals working tirelessly to ensure
            Pakistani students stay connected with global educational standards.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {TEAM.map((member) => (
              <div key={member.name} className="group">
                <div className="mb-6 relative mx-auto w-full aspect-square max-w-[200px] rounded-[40px] overflow-hidden shadow-xl group-hover:shadow-indigo-200 group-hover:-translate-y-2 transition-all duration-500">
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
      <section className="py-16 bg-indigo-900 text-white rounded-[60px] lg:rounded-[100px] mx-4 lg:mx-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                Global <br />
                Credentials.
              </h2>
              <p className="text-indigo-100/70 mb-10 leading-relaxed">
                We are proud to hold official memberships with international
                educational associations, ensuring our processes meet global
                benchmarks.
              </p>
              <div className="flex flex-col gap-4">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
                    AFFILIATION 01
                  </p>
                  <p className="font-bold">Kangourou Sans Frontières (KSF)</p>
                </div>
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
                    AFFILIATION 02
                  </p>
                  <p className="font-bold">
                    International Linguistic Association
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                onClick={() => setActiveCert("membership1")}
                className="cursor-pointer group relative rounded-[45px] overflow-hidden shadow-2xl bg-white p-4 hover:scale-[1.02] transition-all">
                <div className="aspect-[3/4] rounded-[35px] overflow-hidden relative">
                  <img
                    src="/membership.png"
                    alt="KSF Membership Certificate"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold text-sm px-6 py-2 border-2 border-white rounded-full">
                      Expand Certificate
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setActiveCert("membership2")}
                className="cursor-pointer group relative rounded-[45px] overflow-hidden shadow-2xl bg-white p-4 hover:scale-[1.02] transition-all">
                <div className="aspect-[3/4] rounded-[35px] overflow-hidden relative">
                  <img
                    src="/membership2.png"
                    alt="International Linguistic Association Certificate"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold text-sm px-6 py-2 border-2 border-white rounded-full">
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
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setActiveCert(null)}>
          <div
            className="max-w-4xl w-full h-full bg-white rounded-[50px] overflow-hidden relative shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full text-2xl font-bold transition-all z-20">
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
                className="max-w-full max-h-full object-contain shadow-lg"
              />
            </div>
            <div className="p-10 border-t bg-white flex flex-col md:flex-row justify-between items-center gap-6">
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
                className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all">
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
