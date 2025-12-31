import React from 'react';

interface AnnouncementModalProps {
  onClose: () => void;
}

const AnnouncementModal: React.FC<AnnouncementModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-indigo-600 p-4 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-lg font-bold"
          >
            ×
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">📢</span>
            <h2 className="text-lg font-bold">Announcements</h2>
          </div>
          <p className="text-indigo-100 opacity-80 text-xs">Latest updates from Kangaroo Pakistan</p>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3 max-h-[50vh] overflow-y-auto">
          {/* Item 1 */}
          <a 
            href="https://enrollments.kangaroopakistan.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={onClose} 
            className="group flex items-center gap-2 p-3 rounded-lg bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-all"
          >
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sm flex-shrink-0">
              📐
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-blue-900 text-sm">IKMC 2026 Registrations Open</h4>
              <span className="text-xs text-blue-600 underline">CLICK HERE TO REGISTER →</span>
            </div>
          </a>

          {/* Item 2 */}
          <a 
            href="https://enrollments.kangaroopakistan.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={onClose} 
            className="group flex items-center gap-2 p-3 rounded-lg bg-orange-50 border border-orange-100 hover:bg-orange-100 transition-all"
          >
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sm flex-shrink-0">
              📅
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-orange-900 text-sm">IKMC Registration Deadline - February 6, 2026</h4>
              <span className="text-xs text-orange-600 underline">CLICK HERE →</span>
            </div>
          </a>

          {/* Item 3 */}
          <a 
            href="#/contest/IKSC/results" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={onClose} 
            className="group flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-100 hover:bg-green-100 transition-all"
          >
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sm flex-shrink-0">
              🔬
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-green-900 text-sm">IKSC 2025 Results Announced</h4>
              <span className="text-xs text-green-600 underline">VIEW RESULTS →</span>
            </div>
          </a>

          {/* Item 4 - Legal */}
          <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm">⚖️</span>
              <h4 className="font-bold text-gray-900 text-sm">Legal Notice</h4>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mb-2">
              IP Tribunal Lahore ordered Awais Naeem to refrain from infringing our trademarks.
            </p>
            <a 
              href="/courtimage.jpg" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Court_Jurisdiction_Document.jpg"
              className="inline-flex items-center px-2 py-1 bg-white border border-gray-200 rounded text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all"
            >
              📄 VIEW JURISDICTION
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t bg-gray-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-1.5 bg-gray-900 text-white rounded font-bold hover:bg-gray-800 transition-all text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;