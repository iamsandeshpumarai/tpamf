import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("तपाईंको सन्देश प्राप्त भयो! (Message Received)");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#193283] mb-4">सम्पर्क गर्नुहोस्</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            थप जानकारीको लागि वा हामीलाई केहि सुझाव दिनको लागि तलको फारम भर्नुहोस्।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Contact Info & Map */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Info Cards */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-[#193283]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">ठेगाना :</h4>
                  <p className="text-gray-600">कुपन्डोल, काठमाडौँ</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg text-green-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">सम्पर्क नम्बर :</h4>
                  <p className="text-gray-600">+९७७ ०१ ५४२२६७९</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg text-red-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">इमेल ठेगाना :</h4>
                  <p className="text-gray-600">tpamf93@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="h-64 lg:h-80 w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.96497746146!2d85.31215447608055!3d27.68748372635671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b4ad169ec1%3A0x69680373c52e6f47!2sKupondole%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">नाम (Name)</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#193283] focus:border-transparent outline-none transition-all"
                      placeholder="तपाईंको पुरा नाम..."
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">इमेल (Email)</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#193283] focus:border-transparent outline-none transition-all"
                      placeholder="तपाईंको इमेल..."
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">फोन नं (Phone No.)</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#193283] focus:border-transparent outline-none transition-all"
                    placeholder="सम्पर्क नम्बर..."
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">सन्देश (Message)</label>
                  <textarea 
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#193283] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="तपाईंको सन्देश यहाँ लेख्नुहोस्..."
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full md:w-max bg-[#193283] text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#132561] active:scale-95 transition-all shadow-lg"
                >
                  सन्देश पठाउनुहोस् <Send size={18} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;