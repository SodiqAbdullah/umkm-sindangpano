// src/pages/Products.jsx (Revisi untuk klik masuk ke detail)
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Keripik Emping', description: 'Keripik renyah dari bahan lokal.', price: 'Rp 20.000 / kg', image: 'https://source.unsplash.com/random/400x300/?chips' },
  { id: 2, name: 'Roti Bakar', description: 'Roti segar untuk pedagang.', price: 'Rp 15.000 / lusin', image: 'https://source.unsplash.com/random/400x300/?bread' },
  { id: 3, name: 'Opak', description: 'Camilan tradisional dari singkong.', price: 'Rp 10.000 / bungkus', image: 'https://source.unsplash.com/random/400x300/?snack' },
  { id: 4, name: 'Keripik Pisang', description: 'Crispy dan manis.', price: 'Rp 18.000 / kg', image: 'https://source.unsplash.com/random/400x300/?banana-chips' },
  { id: 5, name: 'Dodol', description: 'Dodol autentik dari gula aren.', price: 'Rp 25.000 / kg', image: 'https://source.unsplash.com/random/400x300/?dodol' },
];

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Daftar Produk - UMKM Desa Sindangpano</title>
        <meta name="description" content="Daftar produk UMKM Desa Sindangpano, Kecamatan Rajagaluh, Kabupaten Majalengka termasuk Keripik, Roti, Opak, dan lainnya." />
      </Helmet>
      <div className="bg-gray-100 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Daftar Produk</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-blue-600 font-bold">{product.price}</p>
            </Link>
          ))}
        </div>
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-700 mb-4">Belum ada UMKM yang terdaftar</p>
            <a href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Daftar UMKM Sekarang</a>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;