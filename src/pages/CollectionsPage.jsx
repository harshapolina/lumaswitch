import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import FilterPanel from "../components/FilterPanel";
import CookieBanner from "../components/CookieBanner";
import Footer from "../components/Footer";
import { products } from "../mock";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const CollectionsPage = () => {
  const { lightOn, setLightOn } = useAppContext();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Any Light");
  const [selectedFilters, setSelectedFilters] = useState({
    Materials: [],
    "Lead Time": [],
  });

  const [activeFinish, setActiveFinish] = useState("Any Finish");
  const [lightDropdownOpen, setLightDropdownOpen] = useState(false);
  const [finishDropdownOpen, setFinishDropdownOpen] = useState(false);

  const categories = ["Any Light", "Pendants", "Sconces", "Table Lamps", "Surface Mounts"];
  const finishes = ["Any Finish", "Brass", "Black", "Anthracite", "Chestnut", "Bone"];

  const filteredProducts = useMemo(() => {
    let list = products;
    
    // 1. Headline Filters
    if (activeCategory !== "Any Light") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (activeFinish !== "Any Finish") {
      list = list.filter((p) => 
        p.name.toLowerCase().includes(activeFinish.toLowerCase()) || 
        p.images.off.toLowerCase().includes(activeFinish.toLowerCase())
      );
    }

    // 2. Advanced Filters - Materials
    if (selectedFilters.Materials && selectedFilters.Materials.length > 0) {
      const materialKeywords = {
        "Metal": ["brass", "black", "anthracite", "chestnut", "aluminum"],
        "Ceramic": ["bone", "earth", "stone", "ceramic", "terracotta"],
        "Glass": ["glass", "opal", "clear", "globe"],
        "LDPE": ["ldpe", "poly"],
        "Handpainted Surface": ["handpainted", "artist", "painted"],
        "Wood": ["wood", "oak", "walnut", "timber"]
      };

      list = list.filter(p => {
        return selectedFilters.Materials.some(mat => {
          const keywords = materialKeywords[mat] || [mat.toLowerCase()];
          const searchableText = (p.name + " " + p.images.off).toLowerCase();
          return keywords.some(kw => searchableText.includes(kw));
        });
      });
    }

    // 3. Advanced Filters - Lead Time
    if (selectedFilters["Lead Time"] && selectedFilters["Lead Time"].length > 0) {
      list = list.filter(p => {
        // Mock logic: Treat 'Quick Ship' or 'In Stock' as checking p.isNew
        const needsQuickShip = selectedFilters["Lead Time"].includes("Quick Ship") || selectedFilters["Lead Time"].includes("In Stock, One-of-a-kind");
        if (needsQuickShip) return p.isNew;
        // For other lead times, we'll just show them randomly or assume they match 
        // since we don't have explicit lead times in the mock data.
        return true; 
      });
    }

    return list;
  }, [activeCategory, activeFinish, selectedFilters]);

  const totalFiltersSelected = Object.values(selectedFilters).reduce(
    (acc, arr) => acc + arr.length,
    0
  );

  const toggleFilter = (group, value) => {
    setSelectedFilters((prev) => {
      const current = prev[group] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [group]: updated };
    });
  };

  const clearAll = () => {
    setSelectedFilters({ Materials: [], "Lead Time": [] });
  };

  return (
    <div className="icw-bg min-h-screen">
      <Header />

      <main className="px-6 md:px-10 pt-16 pb-24 max-w-[1800px] mx-auto">
        
        {/* Header Row: Headline & Right Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 border-b border-[#4a181810] pb-10 relative">
          
          {/* Interactive Headline Section */}
          <div className="max-w-4xl pt-8 relative z-40">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif-icw icw-text font-medium tracking-tight leading-[1.2]">
              I'm looking for{" "}
              <div className="inline-relative relative inline-block">
                <button 
                  onClick={() => { setLightDropdownOpen(!lightDropdownOpen); setFinishDropdownOpen(false); }}
                  className="inline-flex items-baseline gap-2 text-[#4a1818]/50 hover:text-[#4a1818] transition-colors"
                >
                  {activeCategory} <ChevronDown className={`w-6 h-6 md:w-8 md:h-8 self-center opacity-70 transition-transform ${lightDropdownOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                </button>
                {lightDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-[#ede4cf] border border-[#4a181820] shadow-xl rounded-md py-2 text-2xl lg:text-3xl flex flex-col items-start z-50">
                    {categories.map(cat => (
                      <button 
                        key={cat}
                        onClick={() => { setActiveCategory(cat); setLightDropdownOpen(false); }}
                        className={`w-full text-left px-6 py-2 hover:bg-[#4a1818]/5 transition-colors ${activeCategory === cat ? 'text-[#4a1818]' : 'text-[#4a1818]/60'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <br />
              in{" "}
              <div className="inline-relative relative inline-block">
                <button 
                  onClick={() => { setFinishDropdownOpen(!finishDropdownOpen); setLightDropdownOpen(false); }}
                  className="inline-flex items-baseline gap-2 text-[#4a1818]/50 hover:text-[#4a1818] transition-colors"
                >
                  {activeFinish} <ChevronDown className={`w-6 h-6 md:w-8 md:h-8 self-center opacity-70 transition-transform ${finishDropdownOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                </button>
                {finishDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-[#ede4cf] border border-[#4a181820] shadow-xl rounded-md py-2 text-2xl lg:text-3xl flex flex-col items-start z-50">
                    {finishes.map(fin => (
                      <button 
                        key={fin}
                        onClick={() => { setActiveFinish(fin); setFinishDropdownOpen(false); }}
                        className={`w-full text-left px-6 py-2 hover:bg-[#4a1818]/5 transition-colors ${activeFinish === fin ? 'text-[#4a1818]' : 'text-[#4a1818]/60'}`}
                      >
                        {fin}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </h1>
          </div>

          {/* Right Controls: Big Toggle & Filters */}
          <div className="flex flex-col items-end gap-12 pt-8 mt-8 md:mt-0">
            
            {/* Aesthetic Oversized Toggle */}
            <div className="flex items-center gap-4 text-lg icw-text bg-gradient-to-b from-[#4a1818]/5 to-transparent px-6 py-3 rounded-full border border-[#4a1818]/10 shadow-[0_4px_20px_rgba(74,24,24,0.06)] hover:shadow-[0_6px_24px_rgba(74,24,24,0.08)] transition-all duration-500 group cursor-pointer" onClick={() => setLightOn(!lightOn)}>
              <span className="font-serif-icw text-2xl italic opacity-80 group-hover:opacity-100 transition-opacity">Global Lighting</span>
              <button
                aria-label="Toggle lights"
                className={`light-toggle-track-lg ${lightOn ? "on" : ""}`}
              >
                <span className="light-toggle-knob-lg" />
              </button>
            </div>

            <button
              onClick={() => setFilterOpen(true)}
              className="flex items-center gap-2 text-[12px] md:text-[13px] icw-text border border-[#4a1818] px-6 py-3 hover:bg-[#4a1818] hover:text-[#ede4cf] transition-all duration-300 rounded-sm uppercase tracking-widest font-medium"
            >
              Advanced Filters <SlidersHorizontal size={14} />
              {totalFiltersSelected > 0 && `(${totalFiltersSelected})`}
            </button>

          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center icw-text">
            <p className="font-serif-icw text-2xl">No products found</p>
            <p className="text-sm mt-2 opacity-70">Try clearing your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
            {filteredProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                lightOn={lightOn}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />

      <FilterPanel
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        selectedFilters={selectedFilters}
        onToggleFilter={toggleFilter}
        onClearAll={clearAll}
      />

      <CookieBanner />
    </div>
  );
};

export default CollectionsPage;
