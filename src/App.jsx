import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import IndexPage from "./pages/index";
import MusicPage from "./pages/music";
import PortfolioPage from "./pages/portfolio";
import ContactPage from "./pages/contact";

const App = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/music" element={<MusicPage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
