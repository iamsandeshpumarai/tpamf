import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for Mailchimp or API would go here
    console.log("Subscribing:", email);
    alert("Thank you for subscribing!");
    setEmail('');
  };

  return (
    <section className="py-12 bg-[#F5FAFF] font-['Poppins',_sans-serif]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {/* Matches col-md-6 col-sm-8 logic */}
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
            
            <form 
              onSubmit={handleSubmit}
              className="newsletter-form relative"
            >
              <div 
                className="relative flex flex-col sm:flex-row items-stretch bg-white border border-[#e5eef7] rounded-xl sm:rounded-full overflow-hidden transition-all duration-300 focus-within:border-[#273a83] focus-within:shadow-lg"
                id="subscribe-content"
              >
                {/* Icon and Input Wrapper */}
                <div className="flex items-center flex-grow px-5 py-3 sm:py-0">
                  <Mail className="text-[#273a83] shrink-0" size={20} strokeWidth={1.5} />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="तपाईंको इमेल राख्नुहोस्"
                    required
                    className="w-full py-3 px-4 bg-transparent text-[#212529] text-sm outline-none placeholder:text-[#8d9297]"
                  />
                </div>

                {/* Submit Button */}
                <input
                  type="submit"
                  value="SUBMIT"
                  className="bg-[#273a83] text-white font-bold text-xs tracking-widest px-10 py-4 sm:py-5 cursor-pointer transition-colors duration-300 hover:bg-[#0b0c26] uppercase sm:rounded-none"
                />
              </div>

              {/* Message Placeholder */}
              <div id="subscribe-msg" className="mt-3 text-center text-xs text-[#8d9297]"></div>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;