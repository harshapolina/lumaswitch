import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, X, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { products } from "../mock";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount, setCartOpen, lightOn, setLightOn } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 350);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isShop = location.pathname === "/shop" || location.pathname === "/collections/all-lighting";
  const isProduct = location.pathname.startsWith("/product");
  const showHeaderLightToggle = (isShop && scrolled) || isProduct;

  const searchResults = searchQuery.trim() === "" 
    ? [] 
    : products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <>
      <header className="w-full icw-bg border-b border-[#4a181820] sticky top-0 z-50">
        <div className="px-6 md:px-10 py-5 flex items-center justify-between">
          
          {/* Left Side: Logo + Nav */}
          <div className="flex items-center gap-12">
            {/* Text Logo */}
            <Link to="/" className="font-serif-icw text-[22px] md:text-[28px] icw-text tracking-tight leading-none">
              LumaSwitch
            </Link>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/shop" className="text-[13px] font-medium icw-text hover:opacity-70 transition-opacity">Products</Link>
              <Link to="/light-reading" className="text-[13px] font-medium icw-text hover:opacity-70 transition-opacity">Light Reading</Link>
              <Link to="/about" className="text-[13px] font-medium icw-text hover:opacity-70 transition-opacity">About Us</Link>
              <Link to="/support" className="text-[13px] font-medium icw-text hover:opacity-70 transition-opacity">Support</Link>
            </nav>
          </div>

          {/* Right side: Icons */}
          <div className="flex items-center gap-6">
            {showHeaderLightToggle && (
               <div className="hidden md:flex items-center gap-3 text-[13px] icw-text bg-[#4a1818]/5 px-3 py-1.5 rounded-full mr-4 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
                <span className="font-serif-icw text-[14px] italic">Global Lighting:</span>
                <button
                  aria-label="Toggle lights"
                  onClick={() => setLightOn(!lightOn)}
                  className={`light-toggle-track scale-90 origin-left ${lightOn ? "on" : ""}`}
                >
                  <span className="light-toggle-knob" />
                </button>
              </div>
            )}

            <button onClick={() => setCartOpen(true)} className="hidden md:flex items-center gap-1.5 icw-text hover:opacity-70 transition-opacity relative">
              <ShoppingBag size={18} />
              {cartCount > 0 && <span className="text-[11px] font-medium absolute -top-2 -right-3 bg-[#4a1818] text-[#ede4cf] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>}
            </button>
            <button onClick={() => setSearchOpen(true)} className="hidden md:block icw-text hover:opacity-70 transition-opacity">
              <Search size={18} />
            </button>

            <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={20} className="icw-text" /> : <Menu size={20} className="icw-text" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#4a181820] px-6 py-4 space-y-4">
            <Link to="/shop" onClick={() => setMobileOpen(false)} className="block text-[15px] font-medium icw-text">Products</Link>
            <Link to="/light-reading" onClick={() => setMobileOpen(false)} className="block text-[15px] font-medium icw-text">Light Reading</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-[15px] font-medium icw-text">About Us</Link>
            <Link to="/support" onClick={() => setMobileOpen(false)} className="block text-[15px] font-medium icw-text">Support</Link>
            <div className="flex items-center gap-6 pt-4 border-t border-[#4a181810]">
              <button onClick={() => { setCartOpen(true); setMobileOpen(false); }} className="relative">
                <ShoppingBag size={20} className="icw-text" />
                {cartCount > 0 && <span className="absolute -top-2 -right-3 bg-[#4a1818] text-[#ede4cf] text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>}
              </button>
              <button onClick={() => { setSearchOpen(true); setMobileOpen(false); }}>
                <Search size={20} className="icw-text" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Full Screen Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-[#ede4cf]/95 backdrop-blur-md flex flex-col items-center pt-24 md:pt-32 px-6 animate-in fade-in duration-300">
          <button 
            onClick={() => {setSearchOpen(false); setSearchQuery("");}} 
            className="absolute top-8 right-8 md:top-12 md:right-12 icw-text hover:opacity-50 transition-opacity"
          >
            <X size={40} strokeWidth={1} />
          </button>
          
          <div className="w-full max-w-4xl">
            <div className="flex items-center border-b-2 border-[#4a1818]/30 pb-4">
              <Search size={32} className="text-[#4a1818] mr-4 opacity-50" />
              <input 
                autoFocus
                type="text"
                placeholder="Search LumaSwitch..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-4xl md:text-6xl font-serif-icw text-[#4a1818] placeholder:text-[#4a1818]/30 focus:outline-none"
              />
            </div>

            {searchQuery && (
              <div className="mt-12 animate-in slide-in-from-bottom-4 duration-500">
                <p className="text-[12px] md:text-[13px] uppercase tracking-widest text-[#4a1818]/50 mb-8 font-medium">
                  Results ({searchResults.length})
                </p>
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-h-[60vh] overflow-y-auto pr-4 pb-12 custom-scrollbar">
                    {searchResults.map(p => (
                      <Link 
                        key={p.id} 
                        to={`/product/${p.id}`} 
                        onClick={() => {setSearchOpen(false); setSearchQuery("");}}
                        className="flex items-center gap-6 group hover:bg-[#4a1818]/5 p-4 -ml-4 rounded-2xl transition-all duration-300"
                      >
                        <div className="w-20 h-20 md:w-28 md:h-28 bg-[#e6dcc4] rounded-lg overflow-hidden shrink-0 shadow-sm">
                          <img src={p.images.off} alt={p.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out" />
                        </div>
                        <div>
                          <h3 className="font-serif-icw text-2xl md:text-3xl text-[#4a1818] mb-1 group-hover:text-[#4a1818]/70 transition-colors">{p.name}</h3>
                          <p className="text-[#4a1818]/60 text-sm md:text-base font-medium">{p.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-2xl text-[#4a1818]/50 italic font-serif-icw mt-10 text-center">
                    No products found matching "{searchQuery}"
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
