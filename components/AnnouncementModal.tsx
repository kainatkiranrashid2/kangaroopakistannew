
import React from 'react';
import { Link } from 'react-router-dom';

interface AnnouncementModalProps {
  onClose: () => void;
}

const AnnouncementModal: React.FC<AnnouncementModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-indigo-600 p-8 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-2xl font-bold"
          >
            ×
          </button>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-3xl">📢</span>
            <h2 className="text-3xl font-bold tracking-tight">Official Announcements</h2>
          </div>
          <p className="text-indigo-100 opacity-80">Stay updated with the latest from Kangaroo Pakistan</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Item 1 */}
          <Link to="/participation" onClick={onClose} className="group flex items-start gap-4 p-5 rounded-2xl bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-all">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
              📐
            </div>
            <div>
              <h4 className="font-bold text-blue-900 text-lg mb-1">IKMC 2026 Registrations Open</h4>
              <p className="text-blue-700 text-sm leading-relaxed">The global mathematics challenge awaits. Secure your spot today for the 2026 session.</p>
              <span className="inline-block mt-2 font-bold text-sm text-blue-600 underline">CLICK HERE TO REGISTER →</span>
            </div>
          </Link>

          {/* Item 2 */}
          <Link to="/participation" onClick={onClose} className="group flex items-start gap-4 p-5 rounded-2xl bg-orange-50 border border-orange-100 hover:bg-orange-100 transition-all">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
              📅
            </div>
            <div>
              <h4 className="font-bold text-orange-900 text-lg mb-1">Registration Deadline</h4>
              <p className="text-orange-700 text-sm leading-relaxed">Don't miss out! The last date to submit entries is February 6, 2026.</p>
              <span className="inline-block mt-2 font-bold text-sm text-orange-600 underline">VIEW DETAILS →</span>
            </div>
          </Link>

          {/* Item 3 */}
          <Link to="/results" onClick={onClose} className="group flex items-start gap-4 p-5 rounded-2xl bg-green-50 border border-green-100 hover:bg-green-100 transition-all">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
              🔬
            </div>
            <div>
              <h4 className="font-bold text-green-900 text-lg mb-1">IKSC 2025 Results Announced</h4>
              <p className="text-green-700 text-sm leading-relaxed">Science contest results are now live in our searchable portal. Check your performance now.</p>
              <span className="inline-block mt-2 font-bold text-sm text-green-600 underline">SEARCH RESULTS →</span>
            </div>
          </Link>

          {/* Item 4 - Legal */}
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="flex items-center gap-3 mb-3 text-red-600">
              <span className="text-2xl">⚖️</span>
              <h4 className="font-bold text-gray-900">Legal Jurisdiction Notice</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The Honourable Intellectual Property Tribunal Lahore has ordered Awais Naeem to refrain from infringing our trademarks/tradenames.
            </p>
            <a 
              href="#" 
              target="_blank" 
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50 shadow-sm transition-all"
            >
              📄 VIEW COPY OF JURISDICTION
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-gray-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg"
          >
            I've Read These
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
