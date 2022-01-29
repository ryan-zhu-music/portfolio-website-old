import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Music from "./components/Music";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;