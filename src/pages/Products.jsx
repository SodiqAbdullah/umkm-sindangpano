import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import melinjoImage from '../assets/Melinjo-.webp';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; // Impor client

const Products = () => {
  const [products, setProducts ] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('products').select('*');
      if (error) console.error(error);
      else setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Daftar Produk - UMKM Desa Sindangpano</title>
        <meta name="description" content="Daftar produk UMKM Desa Sindangpano, Kecamatan Rajagaluh, Kabupaten Majalengka termasuk Keripik, Roti, Opak, dan lainnya." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img
            src={melinjoImage}
            alt="Melinjo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Daftar Produk UMKM
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Jelajahi berbagai produk unggulan hasil karya masyarakat Desa Sindangpano.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                    {product.description}
                  </p>
                  <p className="text-blue-600 font-bold">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-700 mb-4">Belum ada UMKM yang terdaftar</p>
              <Link
                to="/register"
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                Daftar UMKM Sekarang
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;