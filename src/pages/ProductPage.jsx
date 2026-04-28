import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../mock";
import { useAppContext } from "../context/AppContext";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart, lightOn, setLightOn } = useAppContext();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    const found = products.find(p => p.id === id);
    setProduct(found);
  }, [id]);

  if (!product) return <div className="icw-bg min-h-screen pt-24 text-center icw-text font-serif-icw text-2xl">Loading...</div>;

  let displayImage = product.images.lifestyle;
  if (lightOn) displayImage = product.images.on;

  return (
    <div className="icw-bg min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-[1600px] mx-auto w-full px-6 lg:px-10 py-12 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left: Sticky Image Gallery */}
        <div className="w-full lg:w-1/2">
          <div className="sticky top-32 flex flex-col gap-4">
            {/* Main Image */}
            <div className="w-full aspect-square bg-[#e6dcc4] relative">
              <img 
                src={product.images.off} 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-1000" 
                style={{ opacity: !lightOn ? 1 : 0 }}
                alt={product.name} 
              />
              <img 
                src={product.images.on} 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-1000" 
                style={{ opacity: lightOn ? 1 : 0 }}
                alt={product.name} 
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
               <div className="aspect-square bg-[#e6dcc4] cursor-pointer hover:opacity-80 transition-opacity">
                 <img src={product.images.off} className="w-full h-full object-cover mix-blend-multiply" />
               </div>
               <div className="aspect-square bg-[#e6dcc4] cursor-pointer hover:opacity-80 transition-opacity">
                 <img src={product.images.on} className="w-full h-full object-cover mix-blend-multiply" />
               </div>
               <div className="aspect-square bg-[#e6dcc4] cursor-pointer hover:opacity-80 transition-opacity">
                 <img src={product.images.lifestyle} className="w-full h-full object-cover mix-blend-multiply" />
               </div>
            </div>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="mb-10">
            <h1 className="font-serif-icw text-4xl lg:text-6xl icw-text mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-xl icw-text opacity-80 mb-6">{product.price}</p>
            
            <p className="icw-text opacity-70 leading-relaxed mb-10 max-w-lg">
              A carefully proportioned fixture that brings warmth to any space. Handcrafted using premium materials, offering a timeless aesthetic that matures beautifully with age.
            </p>

            <button 
              onClick={() => addToCart(product)}
              className="w-full md:w-auto px-12 py-4 bg-[#4a1818] text-[#ede4cf] uppercase tracking-widest text-sm font-medium hover:bg-black transition-colors"
            >
              Add to Cart
            </button>
          </div>

          <div className="border-t border-[#4a181820] pt-8 mt-auto">
            <h3 className="font-serif-icw text-2xl icw-text mb-4">Details</h3>
            <ul className="space-y-2 icw-text opacity-70 text-sm">
              <li><span className="font-medium mr-2">Category:</span> {product.category}</li>
              <li><span className="font-medium mr-2">Materials:</span> Brass, Hand-blown Glass</li>
              <li><span className="font-medium mr-2">Lead Time:</span> Quick Ship</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
