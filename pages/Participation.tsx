
import React from 'react';

const Participation: React.FC = () => {
  const steps = [
    { title: 'School Registration', desc: 'Interested schools register their institution on our global portal.', icon: '🏫' },
    { title: 'Student Enrollment', desc: 'Students apply through their respective school coordinators.', icon: '✍️' },
    { title: 'Preparation', desc: 'Download sample papers and explore previous years questions.', icon: '📖' },
    { title: 'Compete', desc: 'Take the exam on the designated date under school supervision.', icon: '🏆' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">How to Participate</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Joining the Kangaroo global family is a straightforward process for schools and students.</p>
        </div>

        {/* Steps */}
        <div className="relative mb-32">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[30px] shadow-lg border border-gray-100 text-center flex flex-col items-center">
                 <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center text-3xl mb-6">{step.icon}</div>
                 <h3 className="text-xl font-bold mb-2">Step {idx + 1}</h3>
                 <h4 className="text-lg font-bold text-indigo-600 mb-4">{step.title}</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-white rounded-[40px] p-12 shadow-xl">
           <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
           <div className="space-y-8 max-w-3xl mx-auto">
             <div className="group">
               <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                 <span className="text-indigo-600">Q:</span> Who can participate?
               </h4>
               <p className="text-gray-600 pl-8 leading-relaxed">Students from Grade 1 through Grade 12 in any recognized educational institution in Pakistan can participate.</p>
             </div>
             <div className="group">
               <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                 <span className="text-indigo-600">Q:</span> Can individual students register directly?
               </h4>
               <p className="text-gray-600 pl-8 leading-relaxed">Currently, we prefer registrations through schools to ensure standardized supervision during the contest. Contact your school coordinator for details.</p>
             </div>
             <div className="group">
               <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                 <span className="text-indigo-600">Q:</span> What is the registration fee?
               </h4>
               <p className="text-gray-600 pl-8 leading-relaxed">Registration fees vary by contest and are typically used to cover international processing, local logistics, and awards. Please check with your school for current rates.</p>
             </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Participation;
