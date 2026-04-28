import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("icw_cookies_accepted");
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("icw_cookies_accepted", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#4a1818] text-[#ede4cf] px-6 py-3 flex items-center justify-between gap-4">
      <p className="text-[13px]">
        We use cookies to remember your preferences and personalize your experience.
      </p>
      <div className="flex items-center gap-6 flex-shrink-0">
        <a href="#" className="text-[13px] underline hover:opacity-80">Learn More</a>
        <button
          onClick={accept}
          className="text-[13px] hover:opacity-80 transition-opacity"
        >
          Accept
        </button>
        <button onClick={accept} className="hover:opacity-80">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
