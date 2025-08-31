// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/src/assets/logo.png" alt="Logo UMKM Desa Sindangpano" className="h-8 w-8 object-contain" />
          <span className="text-xl font-bold">UMKM Desa Sindangpano</span>
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        <ul className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative bg-blue-700 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0 text-center md:space-x-6`}>
          <li><Link to="/" className="block py-2 hover:bg-blue-600 px-2 rounded">Beranda</Link></li>
          <li><Link to="/products" className="block py-2 hover:bg-blue-600 px-2 rounded">Produk</Link></li>
          <li><Link to="/profile" className="block py-2 hover:bg-blue-600 px-2 rounded">Profil</Link></li>
          <li><Link to="/about" className="block py-2 hover:bg-blue-600 px-2 rounded">Tentang Kami</Link></li>
          <li><Link to="/contact" className="block py-2 hover:bg-blue-600 px-2 rounded">Kontak</Link></li>
          <li><Link to="/gallery" className="block py-2 hover:bg-blue-600 px-2 rounded">Galeri</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;