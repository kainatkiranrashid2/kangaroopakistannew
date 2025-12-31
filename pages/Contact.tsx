import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-20">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold ">Office Information</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our main office in Lahore coordinates all regional activities
                and global communications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-gray-50 rounded-[30px] border border-gray-100">
                <div className="text-3xl mb-4">📍</div>
                <h4 className="font-bold text-xl mb-2">Visit Us</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  1st Floor, Plaza 114, Main Boulevard, Phase 06, DHA Lahore.
                  54792
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-[30px] border border-gray-100">
                <div className="text-3xl mb-4">📞</div>
                <h4 className="font-bold text-xl mb-2">Call Us</h4>
                <p className="text-gray-500 text-sm">
                  Landline: +92 42 37180505
                  <br />
                  Mobile: +92 321 8403033
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-[30px] border border-gray-100">
                <div className="text-3xl mb-4">✉️</div>
                <h4 className="font-bold text-xl mb-2">Email Us</h4>
                <p className="text-gray-500 text-sm">
                  info@kangaroopakistan.org
                  
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-[30px] border border-gray-100">
                <div className="text-3xl mb-4">🕒</div>
                <h4 className="font-bold text-xl mb-2">Working Hours</h4>
                <p className="text-gray-500 text-sm">
                  Mon - Sat: 09:00 - 17:00
                  <br />
                  Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
