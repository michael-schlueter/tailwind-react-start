import './App.css';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Dropdown } from './components/Dropdown';
import { Home } from './pages/index';
import { About } from './pages/about';
import { Menu } from './pages/menu';
import { Footer } from './components/Footer';
import { Contact } from './pages/contact'

function App() {
  return (
    <>
      <Navbar />
      <Dropdown />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
