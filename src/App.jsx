import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import CollectionsPage from "./pages/CollectionsPage";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import LightReadingPage from "./pages/LightReadingPage";
import SupportPage from "./pages/SupportPage";

import { AppProvider } from "./context/AppContext";
import CartDrawer from "./components/CartDrawer";
import ProductPage from "./pages/ProductPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<CollectionsPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/collections/all-lighting" element={<CollectionsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/light-reading" element={<LightReadingPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
          <CartDrawer />
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
