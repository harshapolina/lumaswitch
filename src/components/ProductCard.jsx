import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product, lightOn, viewSize = "M" }) => {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useAppContext();

  return (
    <Link
      to={`/product/${product.id}`}
      className="group cursor-pointer flex flex-col h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full overflow-hidden bg-[#e6dcc4] aspect-square">
        {/* OFF image - base layer */}
        <img
          src={product.images.off}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
          style={{
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.4s ease-in-out",
          }}
          loading="lazy"
        />

        {/* Lifestyle image - shows on hover */}
        <img
          src={product.images.lifestyle}
          alt={`${product.name} lifestyle`}
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s ease-in-out",
            zIndex: 2,
          }}
          loading="lazy"
        />

        {/* ON image - slow warm-up like a real incandescent bulb */}
        <img
          src={product.images.on}
          alt={`${product.name} on`}
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
          style={{
            opacity: lightOn && !hovered ? 1 : 0,
            // Slow fade-in (warm-up), faster fade-out (cool-down)
            transition: lightOn
              ? "opacity 1.6s cubic-bezier(0.45, 0.05, 0.55, 0.95)"
              : "opacity 0.7s ease-out",
            zIndex: 1,
          }}
          loading="lazy"
        />

        {/* Soft warm glow overlay - intensifies slowly */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 200, 120, 0.18) 0%, rgba(255, 180, 100, 0.06) 40%, transparent 75%)",
            opacity: lightOn && !hovered ? 1 : 0,
            transition: lightOn
              ? "opacity 1.8s cubic-bezier(0.4, 0, 0.6, 1)"
              : "opacity 0.6s ease-out",
            zIndex: 3,
          }}
        />
      </div>

      <div className="mt-3 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-baseline gap-2 flex-wrap">
            <h3 className={`icw-text ${viewSize === "L" ? "text-[15px]" : "text-[13px]"} leading-tight`}>
              {product.name}
            </h3>
            {product.isNew && (
              <span
                className="text-[11px] icw-text-blue italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                New!
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#4a181810]">
          <p className={`icw-text font-medium ${viewSize === "L" ? "text-[14px]" : "text-[12px]"}`}>
            {product.price}
          </p>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1);
            }}
            className="text-[10px] md:text-[11px] uppercase tracking-widest bg-[#4a1818] text-[#ede4cf] px-3 py-1.5 hover:bg-black transition-colors rounded-sm opacity-0 group-hover:opacity-100 focus:opacity-100 transform translate-y-1 group-hover:translate-y-0 duration-300"
          >
            Add
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
