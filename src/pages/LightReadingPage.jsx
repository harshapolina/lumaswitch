import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LightReadingPage = () => {
  const articles = [
    {
      title: "The Art of Dimming: Finding the Right Ambience",
      category: "Design Guide",
      image: "https://www.incommonwith.com/cdn/shop/files/InCommonWith_Strata_Milan_WilliamJessLaird_16_a1f553d8-4fc6-42f2-9d08-03d4b6248da7.jpg?v=1746561265&width=1160"
    },
    {
      title: "Meet the Maker: Hand-blown Glass in Brooklyn",
      category: "Studio Stories",
      image: "https://www.incommonwith.com/cdn/shop/files/InCommonWith_MushroomSurfaceMount_Brass_MaisonLouisCarre_06.jpg?v=1760547926&width=1160"
    },
    {
      title: "Integrating Pendants in Modern Kitchens",
      category: "Inspiration",
      image: "https://www.incommonwith.com/cdn/shop/files/InCommonWith_BrassArundelOrbPendant_PatinaBrassPatinaBrass_PuckTableLamp_OxideRed_MaisonLouisCarre_01_1_9bcb3e98-4c4b-4425-a13f-4c2b2581fd08.jpg?v=1774978084&width=1160"
    }
  ];

  return (
    <div className="icw-bg min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-[1400px] mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="font-serif-icw text-5xl md:text-7xl icw-text mb-4">Light Reading</h1>
          <p className="icw-text text-lg opacity-70">Journal, stories, and lighting guides from the LumaSwitch team.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {articles.map((article, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#e6dcc4] mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[12px] uppercase tracking-widest font-medium icw-text opacity-50 mb-2">
                {article.category}
              </p>
              <h2 className="font-serif-icw text-2xl icw-text leading-snug group-hover:opacity-70 transition-opacity">
                {article.title}
              </h2>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LightReadingPage;
