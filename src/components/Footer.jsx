import React, { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { Toaster } from "./ui/toaster";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Welcome to LumaSwitch!",
      description: "You've been added to our newsletter.",
    });
    setEmail("");
  };

  return (
    <footer className="icw-bg border-t border-[#4a181830] mt-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif-icw text-3xl md:text-4xl icw-text mb-3">Our Newsletter</h3>
            <p className="text-[14px] icw-text max-w-md">
              Sign up for our Newsletter to receive seasonal promotions and updates from our studio.
            </p>
          </div>
          <div>
            <form onSubmit={handleSignup} className="flex border-b border-[#4a1818] pb-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 bg-transparent outline-none icw-text placeholder:text-[#4a181870] text-[14px]"
              />
              <button type="submit" className="text-[14px] icw-text hover:opacity-60 transition-opacity">
                Sign Up →
              </button>
            </form>
            <p className="text-[12px] icw-text mt-3 max-w-md">
              By signing up you are agreeing to our <Link to="/support" className="underline hover:opacity-70 transition-opacity">Privacy Policy</Link>.
            </p>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-[#4a181830] flex flex-col md:flex-row justify-between gap-12 md:gap-8 text-[13px] icw-text">
          <div className="flex-1 md:max-w-xs">
            <h4 className="font-medium mb-5 uppercase tracking-widest text-[11px] opacity-60">Explore</h4>
            <ul className="space-y-3 opacity-90 flex flex-col font-serif-icw text-xl">
              <Link to="/shop" className="hover:opacity-60 hover:italic transition-all duration-300 inline-block w-fit">All Products</Link>
              <Link to="/light-reading" className="hover:opacity-60 hover:italic transition-all duration-300 inline-block w-fit">Light Reading</Link>
            </ul>
          </div>
          <div className="flex-1 md:max-w-xs">
            <h4 className="font-medium mb-5 uppercase tracking-widest text-[11px] opacity-60">Company</h4>
            <ul className="space-y-3 opacity-90 flex flex-col font-serif-icw text-xl">
              <Link to="/about" className="hover:opacity-60 hover:italic transition-all duration-300 inline-block w-fit">About Us</Link>
              <Link to="/support" className="hover:opacity-60 hover:italic transition-all duration-300 inline-block w-fit">Support & FAQ</Link>
            </ul>
          </div>
          <div className="flex-1 md:max-w-xs">
            <h4 className="font-medium mb-5 uppercase tracking-widest text-[11px] opacity-60">Follow</h4>
            <ul className="space-y-3 opacity-90 flex flex-col font-serif-icw text-xl">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-60 hover:italic transition-all duration-300 inline-block w-fit">Instagram</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:opacity-60 hover:italic transition-all duration-300 inline-block w-fit">Pinterest</a>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-[12px] icw-text opacity-50 uppercase tracking-widest flex items-center justify-between">
          <span>© 2026 LumaSwitch</span>
          <span>Designed with  EDITCO</span>
        </div>
      </div>
      <Toaster />
    </footer>
  );
};

export default Footer;
