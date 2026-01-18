import React from 'react';

const WorkshopTable = () => {
  const workshopData = [
    { sn: 1, topic: "Nation and Nationality", date: "28 Jan 2001", chair: "Mr. Shree Bhadra Sharma", guest: "Hon. Surendra Prasad Chaudhary", presenters: ["Dr. Harka Gurung"], commentators: ["Mr. Jhalanath Khanal", "Mr. Dmannath Dhungana", "Dr. Ram Prakash Yadav", "Mr. Pradeep Baidhya"] },
    { sn: 2, topic: "Citizenship provision: Today’s and future structure", date: "18 Jan 2002", chair: "Mr. Ram Hari Sharma", guest: "—", presenters: ["Adv. Bishwakanta Mainali", "Ms. Chhatra Gurung"], commentators: ["Mr. Subash Chandra Newang", "Mr. Radhe Shyam Adhikari", "Mr. Kedar Nath Acharya"] },
    { sn: 3, topic: "Crisis in today’s Nationality and its solution", date: "19 May 2002", chair: "Mr. Ram Hari Sharma", guest: "—", presenters: ["—"], commentators: ["Mr. Dmannath Dhungana", "Mr. Arbinda Rimal", "Mr. Nilambar Acharya", "Ms. Sahana Pradhan", "Mr. Sashit Samsher Rana", "Mr. Balaram Raj Bhandari", "Dr. Mahershwor Sharma", "Dr. Jaya Raj Acharya", "D.P Adhikari", "Mr. Dhrubha Bhadur Pradhan", "Dr. Balmani Dahal", "Dr. Dwarikanath Dhungel"] },
    { sn: 4, topic: "Economic based of Social Democracy and Theoretical based of Gender-based Violence", date: "3 Dec 2011", chair: "Prof. Som Prasad Gauchan", guest: "Mr. Nilambar Acharya", presenters: ["Dr. Meena Acharya", "Ms. Madhuri Singh"], commentators: ["Dr. Meena Paudyal", "Mr. Bharat Pokharel"] },
    { sn: 5, topic: "Social Security in Social Democracy", date: "30 July 2012", chair: "—", guest: "—", presenters: ["Chandra Dev Bhatta", "Dr. Meena Poudel"], commentators: ["Mr. Bodha Raj Niraula", "Mr. Upendra Adhikari"] },
    { sn: 6, topic: "Interface between Civil Society and Political parties in Nepal", date: "2 Dec 2013", chair: "Prof. Som Prasad Gauchan", guest: "Mr. Nilambar Acharya", presenters: ["Mr. Naresh Rimal", "Ms. Laxmi Karki"], commentators: ["Mr. Roshan Pokharel", "Mr. Sushil Pyakurel", "Mr. Dev Raj Dahal"] },
    { sn: 7, topic: "Today’s Political situation and its solution", date: "3 Dec 2014", chair: "Prof. Som Prasad Gauchan", guest: "Mr. Nilambar Acharya", presenters: ["Mr. Kiran Nepal"], commentators: ["Mr. Tanka Panta", "Mr. AJaya Bhadra Khanal"] },
    { sn: 8, topic: "Nepal where?", date: "3 Dec 2014", chair: "Mr. Arabinda Rimal", guest: "Mr. Nilambar Acharya", presenters: ["Prof. Lalbu Yadhav"], commentators: ["Dr. Chaitanya Subba"] },
    { sn: 9, topic: "Nationalism and national interest in the age of Globalisation", date: "7 Dec 2015", chair: "Mr. Arabinda Rimal", guest: "Hon. Mr. C.P Mainali", presenters: ["Dr. Swarnim Wagle"], commentators: ["Mr. Nilambar Acharya", "Mr. Deependra Chhetri", "Mr. Ganesh Shah", "Ms. Shanta Laxmi Shrestha", "Dr. Bishnu Hari Nepal"] },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-full mx-auto overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-gray-200">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 w-16">S.N.</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 min-w-[250px]">Topic of Workshop</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 min-w-[120px]">Date</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Chairperson / Chief Guest</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Presenters & Commentators</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {workshopData.map((item) => (
                <tr key={item.sn} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-6 py-6 align-top">
                    <span className="text-sm font-mono text-slate-400">{item.sn.toString().padStart(2, '0')}</span>
                  </td>
                  <td className="px-6 py-6 align-top">
                    <h4 className="text-base font-serif font-bold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors">
                      {item.topic}
                    </h4>
                  </td>
                  <td className="px-6 py-6 align-top">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                      {item.date}
                    </span>
                  </td>
                  <td className="px-6 py-6 align-top space-y-3">
                    {item.chair !== "—" && (
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Chaired by</p>
                        <p className="text-sm text-slate-700">{item.chair}</p>
                      </div>
                    )}
                    {item.guest !== "—" && (
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Chief Guest</p>
                        <p className="text-sm text-slate-700">{item.guest}</p>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-6 align-top">
                    <div className="grid grid-cols-1 gap-4">
                      {item.presenters[0] !== "—" && (
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold mb-1">Paper Presenters</p>
                          <div className="flex flex-wrap gap-1">
                            {item.presenters.map((p, i) => (
                              <span key={i} className="text-sm text-slate-800 font-semibold">{p}{i < item.presenters.length - 1 ? ',' : ''}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Commentators</p>
                        <div className="flex flex-wrap gap-x-2 gap-y-1">
                          {item.commentators.map((c, i) => (
                            <span key={i} className="text-xs text-slate-600 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkshopTable;