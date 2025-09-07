// src/pages/Home.jsx
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient"; // Impor Supabase client

import desaSindangpanoImg from '/src/assets/balai-desa-sindangpano.jpg';
import papanNama from '/src/assets/papan-nama-sindangpano.jpg';
import denah from '/src/assets/denah-sindangpano.jpg';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true }) // Tambahkan klausa order untuk mengurutkan berdasarkan id
        .limit(3); // Ambil hanya 3 produk pertama
      if (error) {
        console.error(error);
      } else {
        setFeaturedProducts(data);
      }
    }
    fetchFeaturedProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Beranda - UMKM Desa Sindangpano</title>
        <meta
          name="description"
          content="Selamat datang di portal UMKM Desa Sindangpano, Kecamatan Rajagaluh, Kabupaten Majalengka, pusat informasi dan produk lokal berkualitas."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={desaSindangpanoImg}
            alt="Foto Desa Sindangpano"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
            Selamat Datang di
            <span className="block text-yellow-400 mt-2">Desa Sindangpano</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-in-delay">
            Jelajahi kekayaan UMKM lokal kami, dari olahan melinjo hingga buah segar, 
            untuk mendukung ekonomi desa yang berkelanjutan.
          </p>
            <Link
                to="/products"
            className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base animate-fade-in-delay"
          >
            Lihat Produk Kami
          </Link>
        </div>
      </section>

      {/* Tentang Desa Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Tentang Desa Sindangpano
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Desa Sindangpano merupakan salah satu desa yang berada di wilayah Kecamatan Rajagaluh, 
                  Kabupaten Majalengka, Jawa Barat. Secara geografis, wilayah desa ini terdiri dari 
                  perbukitan, persawahan, perkebunan melinjo, serta tebing di sepanjang jalan yang 
                  telah diaspal pada tahun 2012.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm sm:text-base text-gray-600">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <span className="font-semibold text-blue-900">Luas Wilayah:</span>
                    <br />280,35 Ha
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <span className="font-semibold text-blue-900">Ketinggian:</span>
                    <br />500-600 m dpl
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={papanNama}
                alt="Papan Nama Desa Sindangpano"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>

          {/* Detailed Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Luas wilayah Desa Sindangpano mencapai 280,35 Ha. Jarak desa ini ke ibu kota provinsi 
              (Bandung) sekitar 113 km, ke ibu kota kabupaten (Majalengka) sekitar 13 km, dan ke 
              ibu kota kecamatan (Rajagaluh) sekitar 6 km. Topografi dan kontur tanah desa berupa 
              tanah pegunungan dan persawahan, dengan ketinggian 500–600 m dpl serta suhu rata-rata 20°C – 30°C.
            </p>
          </div>

          {/* Boundaries and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">
                Batas Wilayah
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { direction: 'Utara', village: 'Desa Sadomas' },
                  { direction: 'Selatan', village: 'Desa Payung' },
                  { direction: 'Timur', village: 'Desa Bataragung (Bantaragung)' },
                  { direction: 'Barat', village: 'Desa Teja' }
                ].map((boundary, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-16 sm:w-20 text-sm sm:text-base font-semibold text-blue-900">
                      {boundary.direction}:
                    </div>
                    <div className="text-sm sm:text-base text-gray-700">
                      {boundary.village}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={denah}
                alt="Denah Desa Sindangpano"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Produk Unggulan Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Produk Unggulan
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai produk berkualitas hasil karya masyarakat Desa Sindangpano
            </p>
            <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
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
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/products"
              className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            >
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;