import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const SupportPage = () => {
  return (
    <div className="icw-bg min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-[1000px] mx-auto px-6 py-24 w-full">
        <h1 className="font-serif-icw text-5xl md:text-7xl icw-text mb-16 text-center">How can we help?</h1>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif-icw icw-text mb-4 border-b border-[#4a181820] pb-2">Contact Us</h2>
              <ul className="space-y-4 icw-text opacity-80">
                <li className="flex items-center gap-4"><Mail size={18} /> support@lumaswitch.com</li>
                <li className="flex items-center gap-4"><Phone size={18} /> +1 (800) 555-0199</li>
                <li className="flex items-center gap-4"><MapPin size={18} /> 123 Maker St, Brooklyn, NY 11222</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif-icw icw-text mb-4 border-b border-[#4a181820] pb-2">FAQ</h2>
              <div className="space-y-6 icw-text">
                <div>
                  <h3 className="font-medium mb-1">What is your return policy?</h3>
                  <p className="opacity-70 text-sm">We accept returns within 30 days of delivery for all non-custom lighting fixtures. Items must be uninstalled and in original packaging.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Do you offer trade discounts?</h3>
                  <p className="opacity-70 text-sm">Yes, we offer an exclusive trade program for interior designers and architects. Please email us for an application.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">How long does shipping take?</h3>
                  <p className="opacity-70 text-sm">In-stock items ship within 2-4 business days. Custom or made-to-order fixtures typically have a lead time of 4-6 weeks.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#4a1818]/5 p-8 border border-[#4a181820]">
            <h2 className="text-2xl font-serif-icw icw-text mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm icw-text mb-1">Name</label>
                <input type="text" className="w-full bg-transparent border border-[#4a181840] p-2 icw-text outline-none focus:border-[#4a1818]" />
              </div>
              <div>
                <label className="block text-sm icw-text mb-1">Email</label>
                <input type="email" className="w-full bg-transparent border border-[#4a181840] p-2 icw-text outline-none focus:border-[#4a1818]" />
              </div>
              <div>
                <label className="block text-sm icw-text mb-1">Message</label>
                <textarea rows="5" className="w-full bg-transparent border border-[#4a181840] p-2 icw-text outline-none focus:border-[#4a1818]"></textarea>
              </div>
              <button className="bg-[#4a1818] text-[#ede4cf] px-6 py-3 text-sm font-medium hover:bg-black transition-colors w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SupportPage;
