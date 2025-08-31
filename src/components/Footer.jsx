import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">UMKM Desa Sindangpano, Kecamatan Rajagaluh, Kabupaten Majalengka</p>
        <ul className="flex justify-center space-x-6 mb-4">
          <li><Link to="/" className="hover:text-blue-300">Beranda</Link></li>
          <li><Link to="/products" className="hover:text-blue-300">Produk</Link></li>
          <li><Link to="/profile" className="hover:text-blue-300">Profil</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300">Kontak</Link></li>
        </ul>
        <p>&copy; 2025 UMKM Desa Sindangpano. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;