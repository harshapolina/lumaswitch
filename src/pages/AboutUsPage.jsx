import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  return (
    <div className="icw-bg min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-[1200px] mx-auto px-6 py-24">
        <h1 className="font-serif-icw text-5xl md:text-7xl icw-text mb-12 text-center">About LumaSwitch</h1>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="icw-text text-lg mb-6 opacity-80 leading-relaxed">
              Founded on the principle of bringing warmth and clarity to everyday spaces, LumaSwitch crafts premium lighting fixtures that balance sculptural beauty with practical function.
            </p>
            <p className="icw-text text-lg mb-6 opacity-80 leading-relaxed">
              Our studio works closely with master ceramicists, glassblowers, and metalworkers to create objects that endure. Every piece is assembled by hand with meticulous attention to detail.
            </p>
            <p className="icw-text text-lg opacity-80 leading-relaxed">
              We believe lighting is more than just illumination—it is the atmosphere of your home, the mood of your evening, and the quiet center of your space.
            </p>
          </div>
          <div className="w-full aspect-square bg-[#4a1818]/10 flex items-center justify-center p-8">
            <img 
              src="https://www.incommonwith.com/cdn/shop/files/InCommonWith_SagaPendantDuo_Black_MaisonLouisCarre_12.jpg?v=1764876225&width=1160" 
              alt="About Studio" 
              className="w-full h-full object-cover shadow-xl"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
