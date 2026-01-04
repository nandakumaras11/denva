import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Treatments from './pages/Treatments';
import WhyUs from './pages/WhyUs';
import './App.css';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-[#1b0e12] font-display antialiased">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/why-us" element={<WhyUs />} />
        {/* Add other routes here as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
