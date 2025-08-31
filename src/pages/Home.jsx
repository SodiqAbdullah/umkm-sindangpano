// src/pages/Home.jsx
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Beranda - UMKM Desa Sindangpano</title>
        <meta name="description" content="Selamat datang di portal UMKM Desa Sindangpano, Kecamatan Rajagaluh, Kabupaten Majalengka, pusat informasi dan produk lokal berkualitas." />
      </Helmet>
      <section className="bg-gray-100 text-center py-12">
        <img src="src\assets\desa sindangpano.jpg" alt="Foto Desa Sindangpano" className="w-full h-64 object-cover rounded-lg mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Selamat Datang di Desa Sindangpano</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Desa Sindangpano, Kecamatan Rajagaluh, Kabupaten Majalengka, adalah pusat usaha mikro, kecil, dan menengah yang kaya akan produk lokal berkualitas. Temukan informasi dan dukung ekonomi desa kami!
        </p>
        <a href="/products" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Lihat Produk</a>
      </section>
    </>
  );
};

export default Home;