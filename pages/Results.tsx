
import React, { useState, useMemo } from 'react';
import { MOCK_RESULTS, CONTESTS } from '../constants';
import { ContestType } from '../types';

const Results: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filterContest, setFilterContest] = useState<string>('All');
  const [filterYear, setFilterYear] = useState<string>('All');

  const filteredResults = useMemo(() => {
    return MOCK_RESULTS.filter(res => {
      const matchesSearch = res.name.toLowerCase().includes(search.toLowerCase()) || 
                           res.rollNumber.toLowerCase().includes(search.toLowerCase());
      const matchesContest = filterContest === 'All' || res.contest === filterContest;
      const matchesYear = filterYear === 'All' || res.year.toString() === filterYear;
      return matchesSearch && matchesContest && matchesYear;
    });
  }, [search, filterContest, filterYear]);

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contest Results</h1>
          <p className="text-xl text-gray-600">Search for your performance and download certificates.</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-8 rounded-[30px] shadow-lg mb-12 flex flex-col lg:flex-row gap-6 items-end">
          <div className="flex-1 w-full">
            <label className="block text-sm font-bold text-gray-700 mb-2">Search Name or Roll Number</label>
            <input
              type="text"
              placeholder="e.g. Ahmed Khan or 2024-IKMC-..."
              className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="w-full lg:w-48">
            <label className="block text-sm font-bold text-gray-700 mb-2">Contest</label>
            <select
              className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none"
              value={filterContest}
              onChange={(e) => setFilterContest(e.target.value)}
            >
              <option value="All">All Contests</option>
              <option value={ContestType.IKMC}>IKMC (Math)</option>
              <option value={ContestType.IKSC}>IKSC (Science)</option>
              <option value={ContestType.IKLC}>IKLC (Linguistics)</option>
            </select>
          </div>
          <div className="w-full lg:w-48">
            <label className="block text-sm font-bold text-gray-700 mb-2">Year</label>
            <select
              className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none"
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
            >
              <option value="All">All Years</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-gray-100">
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead>
                 <tr className="bg-gray-50 border-b border-gray-100">
                   <th className="px-8 py-6 font-bold text-gray-700 uppercase text-xs tracking-wider">Candidate Name</th>
                   <th className="px-8 py-6 font-bold text-gray-700 uppercase text-xs tracking-wider">Roll Number</th>
                   <th className="px-8 py-6 font-bold text-gray-700 uppercase text-xs tracking-wider">Contest</th>
                   <th className="px-8 py-6 font-bold text-gray-700 uppercase text-xs tracking-wider">Year</th>
                   <th className="px-8 py-6 font-bold text-gray-700 uppercase text-xs tracking-wider">Category</th>
                   <th className="px-8 py-6 font-bold text-gray-700 uppercase text-xs tracking-wider">Award</th>
                   <th className="px-8 py-6 font-bold text-gray-700 uppercase text-xs tracking-wider">Action</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                 {filteredResults.length > 0 ? (
                   filteredResults.map((res) => (
                     <tr key={res.id} className="hover:bg-indigo-50/30 transition-colors">
                       <td className="px-8 py-6 font-bold text-gray-900">{res.name}</td>
                       <td className="px-8 py-6 text-gray-600 font-mono text-sm">{res.rollNumber}</td>
                       <td className="px-8 py-6">
                         <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-${CONTESTS[res.contest].color}`}>
                           {res.contest}
                         </span>
                       </td>
                       <td className="px-8 py-6 text-gray-600">{res.year}</td>
                       <td className="px-8 py-6 text-gray-600">{res.category}</td>
                       <td className="px-8 py-6">
                         <span className="font-bold text-indigo-600">{res.award}</span>
                       </td>
                       <td className="px-8 py-6">
                         <button className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">View Certificate</button>
                       </td>
                     </tr>
                   ))
                 ) : (
                   <tr>
                     <td colSpan={7} className="px-8 py-20 text-center text-gray-400">
                       <div className="text-5xl mb-4">🔍</div>
                       <p className="text-lg">No results found for your search criteria.</p>
                     </td>
                   </tr>
                 )}
               </tbody>
             </table>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
