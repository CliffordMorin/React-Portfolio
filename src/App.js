import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Import Pages
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import MyWork from "./pages/MyWork";
import Nav from "./components/Nav";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer";
//Router
import { Routes, Route } from "react-router-dom";
//hashRouter conditional rendering
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<About />} />

          <Route path="/work" element={<MyWork />} />

          <Route path="/work/:id" element={<ProjectDetail />} />

          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
