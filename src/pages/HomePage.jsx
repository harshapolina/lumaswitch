import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="icw-bg min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden bg-[#1a1a1a]">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            transform: `translateY(${offset * 0.4}px)`,
          }}
        >
          <img 
            src="https://www.incommonwith.com/cdn/shop/files/InCommonWith_Strata_Milan_WilliamJessLaird_2.jpg?v=1746655191&width=2000" 
            alt="Hero Lifestyle" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/20">
          <h1 className="font-serif-icw text-5xl md:text-7xl lg:text-8xl text-[#ede4cf] mb-6 drop-shadow-lg tracking-wide">
            Illuminating Life.
          </h1>
          <p className="text-[#ede4cf] text-lg md:text-xl max-w-2xl font-light mb-10 drop-shadow-md">
            Discover our collection of premium, handcrafted lighting. Designed to transform spaces and elevate the everyday through material exploration and timeless aesthetics.
          </p>
          <Link 
            to="/shop" 
            className="px-8 py-4 bg-[#ede4cf] text-[#4a1818] font-serif-icw text-xl hover:bg-white transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif-icw text-4xl md:text-5xl icw-text mb-6">
              The LumaSwitch Standard.
            </h2>
            <p className="text-[15px] icw-text mb-6 leading-relaxed opacity-80">
              We believe that the best objects are created through collaboration. By working closely with a network of skilled artisans, we develop lighting that highlights the unique characteristics of natural materials like clay, glass, and brass.
            </p>
            <p className="text-[15px] icw-text mb-8 leading-relaxed opacity-80">
              Every fixture is assembled by hand in our Brooklyn studio, ensuring the highest level of detail and quality before it finds a home in your space.
            </p>
            <Link to="/about" className="text-[14px] icw-text underline hover:opacity-70 transition-opacity">
              Read Our Story
            </Link>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
            <img 
              src="https://www.incommonwith.com/cdn/shop/files/InCommonWith_CallaPendantSmall_FrontView_Off_Lilac_Amber_1_c021cd60-3989-444b-aae6-363376434731.jpg?v=1746452604&width=1160"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Highlight */}
      <section className="py-24 px-6 md:px-10 bg-[#4a1818] text-[#ede4cf]">
        <div className="max-w-[1600px] mx-auto text-center">
          <h2 className="font-serif-icw text-4xl md:text-6xl mb-8">
            Experience the Light
          </h2>
          <p className="text-[16px] max-w-2xl mx-auto mb-12 opacity-80 font-light">
            Our interactive shop allows you to see our fixtures exactly as they appear in your home. Toggle the lights on and off to experience the ambient warmth and precise illumination of each design.
          </p>
          <Link 
            to="/shop" 
            className="inline-block border border-[#ede4cf] px-8 py-3 text-[14px] hover:bg-[#ede4cf] hover:text-[#4a1818] transition-colors duration-300"
          >
            Explore the Interactive Catalog
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
