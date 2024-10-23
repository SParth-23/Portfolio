import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="overflow-x-hidden w-full bg-zinc-900 text-white scale-100">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Footer />
    </div>
  );
}

export default App;
