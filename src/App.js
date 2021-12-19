import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Dropdown } from './components/Dropdown';
import { Home } from './pages/index';
import { About } from './pages/about';
import { Menu } from './pages/menu';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Dropdown />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
