
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CONTESTS } from '../constants';
import { ContestType } from '../types';

const ContestDetail: React.FC = () => {
  const { type, tab } = useParams<{ type: string; tab?: string }>();
  const contest = CONTESTS[type as ContestType] || CONTESTS[ContestType.IKMC];
  const data = contest.detailedData;

  const renderTabContent = () => {
    if (!data) {
      return (
        <div className="p-12 text-center bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-200">
          <p className="text-gray-500">Information for {contest.name} will be updated soon.</p>
        </div>
      );
    }

    switch (tab) {
      case 'history':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold">Contest History</h2>
            <div className="prose prose-lg max-w-none">
              <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-[40px] border border-gray-100 shadow-sm">
                <div className="space-y-6">
                  {data.history && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <span className="w-8 h-8 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">🏛️</span>
                        Origins & Development
                      </h3>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line bg-white p-6 rounded-2xl border border-gray-100">
                        {data.history}
                      </div>
                    </div>
                  )}
                  
                  {data.detailedHistory && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <span className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">📚</span>
                        Detailed Timeline
                      </h3>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line bg-white p-6 rounded-2xl border border-gray-100">
                        {data.detailedHistory}
                      </div>
                    </div>
                  )}

                  {data.inPakistan && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <span className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center text-green-600">🇵🇰</span>
                        {contest.name} in Pakistan
                      </h3>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line bg-white p-6 rounded-2xl border border-gray-100">
                        {data.inPakistan}
                      </div>
                    </div>
                  )}

                  {data.problemSelection && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <span className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">🎯</span>
                        Problem Selection Process
                      </h3>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line bg-white p-6 rounded-2xl border border-gray-100">
                        {data.problemSelection}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 'faqs':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {(data.faqs || []).map((faq, fidx) => (
                <div key={fidx} className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="text-indigo-600 font-black text-lg mt-0.5">Q{fidx + 1}.</span> 
                    <span className="flex-1">{faq.q}</span>
                  </h4>
                  <div className="pl-8">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
              {(!data.faqs || data.faqs.length === 0) && (
                <div className="text-center py-12">
                  <span className="text-6xl block mb-4">❓</span>
                  <p className="text-gray-400 italic">FAQs will be updated soon.</p>
                </div>
              )}
            </div>
          </div>
        );
      case 'forms':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold">Registration & Support Forms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(data.forms || []).map((form, idx) => (
                <div key={idx} className="p-8 bg-white border border-gray-100 rounded-[30px] shadow-sm hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:rotate-6 transition-transform">📄</div>
                  <h4 className="font-bold text-xl mb-2">{form.title}</h4>
                  <p className="text-gray-500 mb-6 text-sm leading-relaxed">{form.description}</p>
                  <div className="flex gap-3">
                    <a href={form.word} target="_blank" rel="noopener noreferrer" download className="flex-1 text-center bg-indigo-600 text-white py-2.5 rounded-xl font-bold text-xs hover:bg-indigo-700 transition-colors">MS WORD</a>
                    <a href={form.pdf} target="_blank" rel="noopener noreferrer" download className="flex-1 text-center bg-gray-900 text-white py-2.5 rounded-xl font-bold text-xs hover:bg-gray-800 transition-colors">PDF</a>
                  </div>
                </div>
              ))}
              {(data.forms || []).length === 0 && <p className="text-gray-400 italic">No forms currently available.</p>}
            </div>
          </div>
        );
      case 'past-papers':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <h2 className="text-3xl font-bold">Preparation Archive</h2>
             <p className="text-gray-600">Access our comprehensive archive of {contest.name} papers by year and category.</p>
             <div className="space-y-12">
               {Object.keys(data.pastPapers || {}).length > 0 ? Object.entries(data.pastPapers || {}).sort((a, b) => b[0].localeCompare(a[0])).map(([year, info]) => (
                 <div key={year} className="p-8 bg-gray-50 rounded-[40px] border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                       <h3 className="text-2xl font-black text-gray-900">{year} Session</h3>
                       <a href={info.answerKey} target="_blank" rel="noopener noreferrer" download className="text-sm font-bold text-indigo-600 underline hover:text-indigo-800 transition-colors">Answer Key</a>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {(info.links || []).map((link, idx) => (
                        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" download className="bg-white p-4 rounded-2xl border border-gray-100 text-center font-bold text-gray-700 hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm">
                          {link.label}
                        </a>
                      ))}
                    </div>
                 </div>
               )) : <p className="text-gray-400 italic py-10">Past papers archive is being updated.</p>}
             </div>
          </div>
        );
      case 'results':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold">Honour Rolls</h2>
            <div className="grid grid-cols-1 gap-8">
               {Object.entries(data.resultsByYear || {}).sort((a, b) => b[0].localeCompare(a[0])).map(([year, awards]) => (
                 <div key={year} className="p-10 bg-white border border-gray-100 rounded-[50px] shadow-sm">
                    <h3 className="text-2xl font-black mb-8 text-gray-900 flex items-center gap-2">
                       <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                       {year} Winners & Lists
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {(awards || []).map((award, aidx) => (
                         <a 
                          key={aidx} 
                          href={award.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          download 
                          className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl font-bold text-gray-700 hover:bg-white hover:border-indigo-200 hover:shadow-lg transition-all"
                         >
                            <span className="text-2xl">{award.icon || '📜'}</span> 
                            {award.label}
                         </a>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
          </div>
        );
      case 'answer-sheets':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold">Official Answer Sheets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {(data.answerSheets || []).map((sheet, idx) => (
                 <div key={idx} className={`p-10 ${idx % 2 === 0 ? 'bg-indigo-50 border-indigo-100' : 'bg-emerald-50 border-emerald-100'} rounded-[40px] border text-center`}>
                    <span className="text-5xl block mb-4">📄</span>
                    <h4 className="text-2xl font-bold mb-2">{sheet.label}</h4>
                    <p className="opacity-70 mb-8 text-sm leading-relaxed">Download and print for practice or use during the competition.</p>
                    <a 
                      href={sheet.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      download 
                      className={`inline-block ${idx % 2 === 0 ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white px-10 py-3 rounded-2xl font-bold shadow-xl transition-all`}
                    >
                      DOWNLOAD
                    </a>
                 </div>
               ))}
            </div>
          </div>
        );
      default: // General Information
        return (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               <div className="space-y-6">
                 <h2 className="text-3xl font-black text-gray-900">About the Contest</h2>
                 <p className="text-gray-600 leading-relaxed text-lg">{data.intro || contest.description}</p>
                 <div className="grid grid-cols-1 gap-4">
                   {(data.generalInfo || []).map((info, idx) => (
                     <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <span className="text-indigo-600 font-bold">{idx <= 8 ? `0${idx+1}` : idx+1}</span>
                        <p className="text-sm text-gray-700 font-medium">{info}</p>
                     </div>
                   ))}
                 </div>
               </div>
               <div className="space-y-6">
                 <h2 className="text-3xl font-black text-gray-900">Course Overview</h2>
                 <div className="p-8 bg-gray-900 rounded-[40px] text-white">
                    <ul className="space-y-5">
                      {(data.courseOverview || data.overview || []).map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                          <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
               </div>
            </div>

            {data.faqs && data.faqs.length > 0 && (
              <div className="pt-8">
                <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                   {data.faqs.map((faq, fidx) => (
                     <div key={fidx} className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                           <span className="text-indigo-600">Q.</span> {faq.q}
                        </h4>
                        <p className="text-gray-500 text-sm pl-6">{faq.a}</p>
                     </div>
                   ))}
                </div>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <section className={`py-16 bg-gradient-to-br ${contest.bgGradient} text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="text-center md:text-left flex-1">
              <div className="mb-10 w-32 h-32 md:w-48 md:h-48 bg-white rounded-[40px] p-6 shadow-2xl mx-auto md:mx-0 flex items-center justify-center animate-in zoom-in duration-700">
                <img src={contest.logoUrl} alt={contest.name} className="max-w-full max-h-full object-contain" />
              </div>
              <h1 className="text-6xl font-black mb-4 tracking-tight">{contest.name}</h1>
              <p className="text-2xl font-medium text-white/90 mb-8 max-w-xl">{contest.fullName}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href={data?.mainLinks.registration} target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">Enroll Now</a>
                <Link to="/about" className="bg-white/20 backdrop-blur-md border border-white/30 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all">About Kangaroo</Link>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-md">
               <div className="bg-white/10 backdrop-blur-xl rounded-[40px] p-8 border border-white/20 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="animate-pulse">🔔</span> 
                    Contest Calendar
                  </h3>
                  <div className="space-y-6 text-sm">
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">📅</div>
                      <div>
                        <p className="text-indigo-100 font-bold uppercase tracking-wider text-[10px]">Registration Deadline</p>
                        <p className="font-bold">{data?.dates.registration}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">🏁</div>
                      <div>
                        <p className="text-indigo-100 font-bold uppercase tracking-wider text-[10px]">Contest Day</p>
                        <p className="font-bold">{data?.dates.contest}</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              <h3 className="px-6 text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Contest Hub</h3>
              {[
                { name: 'General Information', id: undefined, icon: '💡' },
                { name: 'History', id: 'history', icon: '📜' },
                { name: 'Forms', id: 'forms', icon: '📝' },
                { name: 'Past Papers', id: 'past-papers', icon: '📚' },
                { name: 'Results', id: 'results', icon: '🏆' },
                { name: 'Answer Sheets', id: 'answer-sheets', icon: '✅' },
                { name: 'FAQs', id: 'faqs', icon: '❓' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={`/contest/${type}${item.id ? '/' + item.id : ''}`}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${
                    tab === item.id ? 'bg-indigo-600 text-white shadow-xl' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestDetail;
