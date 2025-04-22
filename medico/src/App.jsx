import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Developer from './pages/Developer';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer /> */}
    </div>
  );
}

export default App;
