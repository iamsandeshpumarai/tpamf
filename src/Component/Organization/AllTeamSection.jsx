import React from 'react';
import { Phone, Mail, User } from 'lucide-react';

const AllTeamSection = () => {
  // Your provided data
  const TeamData = {
    bot: {
      title: "संरक्षक - Board of Trustees",
      data: [
        { id: 1, name: "Mr. Arbinda Rimal", image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708494792images.jpg", phone: "014512357", email: "tpamf93@gmail.com" },
        { id: 2, name: "Mr. Nilambar Acharya", image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708494682Nilamber-Acharya.jpg", phone: "9841072322", email: "nilacharya@gmail.com" },
        { id: 3, name: "Dr. Meena Acharya", image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708494452download%20(1).jpg", phone: "9841655208", email: "macharya41@yahoo.com" },
      ]
    },
    cb: {
      title: "कार्यसमिति - Current Board (2078-2082)",
      data: [
        { id: 1, name: "Mr Sushil Pyakurel", image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495153Mr%20Sushil%20Pyakurel.jpg", phone: "9851068081", email: "sushil.pyakurel@gmail.com" },
        { id: 2, name: "Ms Shanta Manabi", image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495286Shanta%20manabi%20photo.jpg", phone: "9851200115", email: "tpamf93@gmail.com" },
        { id: 3, name: "Dr kundan Aryal", image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495359Dr%20kundan%20Aryal.jpg", phone: "9851000811", email: "kalamchi@gmail.com" },
        { id: 4, name: "Mr Yagya Raj Thapa", image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495445CROPPED-DV_Photo_Yagya.jpg", phone: "9851010587", email: "yagyathapa@gmail.com" },
        { id: 5, name: "Mr Netra Bhadur Thapa", image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495676netra%20bahadur.jpg", phone: "9851083541", email: "napthapa@gmail.com" },
        { id: 6, name: "Dr. Shova Pokhrel", image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495851shova.jpg", phone: "9841662778", email: "shobhapokharel21@gmail.com" },
        { id: 7, name: "Mr. Baburam Acharya", image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495925baburam%20Acharya.jpg", phone: "9851027283", email: "acharya.baburam@gmail.com" },
        { id: 8, name: "Ms Shanti Basnet Adhikari", image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708495987Shanti%20Adhikari%20-%20Photo.jpg", phone: "9851063596", email: "shantiadk@gmail.com" },
        { id: 9, name: "Mr Basudev Dahal", image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708496095Basudev%20Dahal.jpg", phone: "9843212336", email: "bdahal@gmail.com" },
        { id: 10, name: "Mr. Baijanath Chaudhary", image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708496749Screenshot_20211112-152044_Facebook%20(1).jpg", phone: "9857080000", email: "" },
        { id: 11, name: "Mr Birbhadra Acharya", image: "http://tp-acharya.terracecafe.com.np/upload/images/teams/1708496846Birbhadra%20Acharya.jpg", phone: "9843328628", email: "birbhadra011@gmail.com" },
        { id: 12, name: "Govinda Prasad Dulal", image: "https://tp-acharya.terracecafe.com.np/upload/images/teams/1708496961govinda.jpg", phone: "9851009048", email: "govindadulal1977@gmail.com" },
      ]
    }
  };

  const formerChairpersons = [
    { name: "Mr. Arbinda Rimal", tenure: "2071-2078", role: "Immediate Past Chairperson" },
    { name: "Prof. Som Prasad Gauchan", tenure: "2067-2071", role: "Chairperson" },
    { name: "Mr. Damannath Dhungana", tenure: "2066-2067", role: "Chairperson" },
    { name: "Mr. Ram Hari Sharma", tenure: "2050-2066", role: "Founder Chairperson" },
    { name: "Mr. Ram Hari Sharma", tenure: "2049-2050", role: "Ad-Hoc Chairperson" },
  ];

  const AdvisoryPanelMember = [
    { name: "Ms. Binda Panday", contact: "9851125599", email: "binda.pandey@gmail.com" },
    { name: "Dr. Usha Jha", contact: "9851051582", email: "" },
    { name: "Mr. Sujit Mainali", contact: "9851125599", email: "sujitmainali@gmail.com" },
    { name: "Mr. Tika Dhakal", contact: "9851176813", email: "tikadhakal31@gmail.com" },
    { name: "Mr. Keshab Sthapit", contact: "9851038092", email: "" },
    { name: "Mr. Angira Acharya", contact: "9841695673", email: "angira_acharya@yahoo.com" },
    { name: "Mr. Shaligram Sharma", contact: "9855058458", email: "sschitwan@gmail.com" },
    { name: "Mr. Yaknarayan Poudel", contact: "9855082097", email: "enpaudyal@gmail.com" },
  ];

  // Helper Card Component
  const TeamCard = ({ member }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
      <div className="h-64 overflow-hidden bg-gray-200">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-[#0B0C26] mb-3">{member.name}</h3>
        <div className="flex flex-col gap-2 items-center text-sm">
          <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-blue-600 hover:underline">
            <Phone size={16} /> {member.phone}
          </a>
          {member.email ? (
            <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-blue-600 hover:underline">
              <Mail size={16} /> {member.email}
            </a>
          ) : (
            <span className="flex items-center gap-2 text-gray-400 italic">
              <Mail size={16} /> Email not available
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f8f9fa] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Board of Trustees */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 border-b-2 border-yellow-500 inline-block pb-2 mx-auto w-full">
            {TeamData.bot.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {TeamData.bot.data.map(member => <TeamCard key={member.id} member={member} />)}
          </div>
        </section>

        {/* Current Board */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 border-b-2 border-yellow-500 inline-block pb-2 mx-auto w-full">
            {TeamData.cb.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {TeamData.cb.data.map(member => <TeamCard key={member.id} member={member} />)}
          </div>
        </section>

        {/* Former Chairpersons Table */}
        <section className="bg-white p-8 rounded-2xl shadow-md overflow-x-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#0B0C26]">पूर्व अध्यक्षहरू (Former Chairpersons)</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0B0C26] text-white">
                <th className="p-4 rounded-tl-lg">Name</th>
                <th className="p-4">Role</th>
                <th className="p-4 rounded-tr-lg text-right">Tenure</th>
              </tr>
            </thead>
            <tbody>
              {formerChairpersons.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-semibold">{item.name}</td>
                  <td className="p-4 text-gray-600">{item.role}</td>
                  <td className="p-4 text-right text-gray-500">{item.tenure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Advisory Panel Member Table */}
        <section className="bg-white p-8 rounded-2xl shadow-md overflow-x-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#0B0C26]">सल्लाहकार समिति (Advisory Panel)</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-yellow-600 text-white">
                <th className="p-4 rounded-tl-lg">Name</th>
                <th className="p-4">Contact</th>
                <th className="p-4 rounded-tr-lg">Email</th>
              </tr>
            </thead>
            <tbody>
              {AdvisoryPanelMember.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-semibold">{item.name}</td>
                  <td className="p-4">
                    <a href={`tel:${item.contact}`} className="flex items-center gap-2 hover:text-blue-600">
                      <Phone size={14} /> {item.contact}
                    </a>
                  </td>
                  <td className="p-4">
                    {item.email ? (
                      <a href={`mailto:${item.email}`} className="flex items-center gap-2 hover:text-blue-600">
                        <Mail size={14} /> {item.email}
                      </a>
                    ) : <span className="text-gray-400 italic">N/A</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

      </div>
    </div>
  );
};

export default AllTeamSection;