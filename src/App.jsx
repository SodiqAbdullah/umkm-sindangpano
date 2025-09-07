import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import Products from './pages/Products';
import Profile from './pages/Profile';
import ProductDetail from './pages/ProductDetail'; 
import ScrollToTop from './components/ScrollToTop';
import Contact from "./pages/Contact"; // Impor halaman Contact


function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <ScrollToTop /> {/* Tambahkan ScrollToTop di sini */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          {/* Tambahkan route lain jika diperlukan */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;