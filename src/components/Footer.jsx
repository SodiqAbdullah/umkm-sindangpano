import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-3 text-white">
                  UMKM Desa Sindangpano
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                  Memberdayakan ekonomi lokal melalui produk berkualitas dari masyarakat desa dengan semangat gotong royong dan kearifan lokal.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3 group">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-400 mt-1 group-hover:text-emerald-400 transition-colors" />
                  <p className="text-slate-300 text-sm">
                    Desa Sindangpano, Kec. Rajagaluh<br />
                    Kab. Majalengka, Jawa Barat
                  </p>
                </div>

                <div className="flex items-center space-x-3 group">
                  <FaEnvelope className="w-5 h-5 text-blue-400 group-hover:text-emerald-400 transition-colors" />
                  <a
                    href="mailto:info@umkmsindangpano.com"
                    className="text-slate-300 text-sm hover:text-white transition-colors"
                  >
                    info@umkmsindangpano.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 group">
                  <FaPhoneAlt className="w-5 h-5 text-blue-400 group-hover:text-emerald-400 transition-colors" />
                  <a
                    href="tel:+621234567890"
                    className="text-slate-300 text-sm hover:text-white transition-colors"
                  >
                    +62 123 456 7890
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Navigasi</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Produk Kami
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Hubungi Kami
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media & Newsletter */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Terhubung</h4>

              {/* Social Media */}
              <div className="mb-6">
                <p className="text-slate-300 text-sm mb-4">Ikuti media sosial kami:</p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-200 group"
                  >
                    <FaFacebookF className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="sr-only">Facebook</span>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 hover:scale-110 transition-all duration-200 group"
                  >
                    <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="sr-only">Instagram</span>
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-400 hover:scale-110 transition-all duration-200 group"
                  >
                    <FaTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <p className="text-slate-300 text-sm mb-3">Dapatkan update produk terbaru:</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-l-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-r-lg transition-colors text-sm font-medium">
                    Daftar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-6 pb-6 px-6">
          <div className="container mx-auto">
            <div className="flex justify-center items-center text-center">
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <span>&copy; {new Date().getFullYear()} UMKM Desa Sindangpano</span>
                <span>•</span>
                <span>Majalengka, Jawa Barat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
