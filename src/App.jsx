import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import Products from './pages/Products';
import Profile from './pages/Profile';
import ProductDetail from './pages/ProductDetail'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/profile" element={<Profile />} />
          {/* Tambahkan route lain jika diperlukan */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;