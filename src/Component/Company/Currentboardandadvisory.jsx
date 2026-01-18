import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, UserCircle, Award, Users, ShieldCheck } from 'lucide-react';

const BoardMembers = () => {
  const [activeTab, setActiveTab] = useState('board');

  const data = {
    trustees: [
      { name: "Mr. Arbinda Rimal", role: "Trustee", phone: "9841563163", email: "" },
      { name: "Mr. Nilambar Acharya", role: "Trustee", phone: "9841062325", email: "nilacharya@gmail.com" },
      { name: "Dr. Meena Acharya", role: "Trustee", phone: "9841655208", email: "macharya41@yahoo.com" },
    ],
    board: [
      { name: "Mr. Sushil Pyakurel", role: "Chairperson", phone: "9851068081", email: "sushil.pyakurel@gmail.com" },
      { name: "Ms. Shanta Manabi", role: "Co-Chairperson", phone: "9851200115", email: "" },
      { name: "Dr. Kundan Aryal", role: "General Secretary", phone: "9851000811", email: "kalamchi@gmail.com" },
      { name: "Mr. Ramji Prasad Upadhyay Pokhrel", role: "Treasurer", phone: "9841578235", email: "raprau@gmail.com" },
      { name: "Mr. Netra Bhadur Thapa", role: "Member", phone: "9851083541", email: "napthapa@gmail.com" },
      { name: "Dr. Shova Pokhrel", role: "Member", phone: "9841662778", email: "" },
      { name: "Mr. Baburam Acharya", role: "Member", phone: "9851027283", email: "acharya.baburam@gmail.com" },
      { name: "Ms. Shanti Basnet Adhikari", role: "Member", phone: "9851063596", email: "shantiadk@gmail.com" },
      { name: "Mr. Yagya Raj Thapa", role: "Member", phone: "9851010587", email: "yagyathapa@gmail.com" },
      { name: "Mr. Basudev Dahal", role: "Member", phone: "9843212336", email: "bdahal@gmail.com" },
      { name: "Mr. Baijanath Chaudhary", role: "Member", phone: "9857080000", email: "" },
      { name: "Mr. Birbhadra Acharya", role: "Member", phone: "9843328628", email: "birbhadra011@gmail.com" },
    ],
    advisory: [
      { name: "Ms. Binda Pandy", role: "Advisory Member", phone: "9851125599", email: "binda.pandey@gmail.com" },
      { name: "Dr. Usha Jha", role: "Advisory Member", phone: "9851051582", email: "" },
      { name: "Mr. Sujit Mainali", role: "Advisory Member", phone: "9841601630", email: "sujitmainali@gmail.com" },
      { name: "Mr. Tika Dhakal", role: "Advisory Member", phone: "9851176813", email: "tikadhakal31@gmail.com" },
      { name: "Mr. Keshab Sthapit", role: "Advisory Member", phone: "9851038092", email: "" },
      { name: "Mr. Angira Acharya", role: "Advisory Member", phone: "9841695673", email: "angira_acharya@yahoo.com" },
      { name: "Mr. Shaligram Sharma", role: "Advisory Member", phone: "9855058458", email: "sschitwan@gmail.com" },
      { name: "Mr. Yaknarayan Poudel", role: "Advisory Member", phone: "9855082097", email: "enpaudyal@gmail.com" },
    ]
  };

  const tabs = [
    { id: 'board', label: 'Current Board (2078-2081)', icon: Users },
    { id: 'trustees', label: 'Board of Trustees', icon: ShieldCheck },
    { id: 'advisory', label: 'Advisory Panel', icon: Award },
  ];

  return (
    <div className="bg-white py-16 px-6 lg:px-24">
      <div className="max-w-8xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Leadership & Governance</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            The Foundation is guided by a distinguished assembly of trustees, executive members, and advisors dedicated to democratic ideals.
          </p>
        </div>

        {/* Custom Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === tab.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Members Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
        >
          <AnimatePresence mode="wait">
            {data[activeTab].map((member, index) => (
              <motion.div
                key={`${activeTab}-${member.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="group relative p-6 bg-white border border-slate-100 rounded-3xl hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
                    <UserCircle size={32} className="text-slate-400 group-hover:text-blue-600" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1 bg-slate-100 text-slate-500 rounded-full">
                    {member.role}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>

                <div className="space-y-3 pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Phone size={14} className="text-blue-500" />
                    <a href={`tel:${member.phone}`} className="hover:underline">{member.phone}</a>
                  </div>
                  {member.email && (
                    <div className="flex items-center gap-3 text-sm text-slate-600 truncate">
                      <Mail size={14} className="text-blue-500" />
                      <a href={`mailto:${member.email}`} className="hover:underline truncate">{member.email}</a>
                    </div>
                  )}
                </div>

                {/* Subtle background decoration */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
              
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State / Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center text-slate-400 text-sm italic"
        >
          All members are equally responsible for the attainment of the goals of the Foundation.
        </motion.div>
      </div>
    </div>
  );
};

export default BoardMembers;