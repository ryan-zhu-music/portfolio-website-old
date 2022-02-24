import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Music from "./components/Music";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Statistics from "./components/Statistics";

const App = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/music" element={<Music />}></Route>
        {/*<Route path="/portfolio" element={<Portfolio />}></Route>*/}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/musescore-statistics" element={<Statistics />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;