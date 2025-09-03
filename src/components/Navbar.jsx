import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-slate-900">Sindangpano</h1>
        <ul className="flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-slate-800">Beranda</Link></li>
          <li><Link to="/products" className="hover:text-slate-800">Produk</Link></li>
          <li><Link to="/profile" className="hover:text-slate-800">Profil</Link></li>
        </ul>
      </div>
    </nav>
  );
}
