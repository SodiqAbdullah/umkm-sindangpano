// src/pages/Home.jsx
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Beranda - UMKM Desa Sindangpano</title>
        <meta
          name="description"
          content="Selamat datang di portal UMKM Desa Sindangpano, Kecamatan Rajagaluh, Kabupaten Majalengka, pusat informasi dan produk lokal berkualitas."
        />
      </Helmet>

      <section className="relative h-[calc(100vh-64px)] overflow-hidden pt-10">
        <div className="relative w-full max-w-screen-xl mx-auto h-full">
          <img
            src="src\assets\balai desa sindangpano.jpg"
            alt="Foto Desa Sindangpano"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-center items-center text-white text-center px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl mb-4 drop-shadow-lg animate-fade-in">
              Selamat Datang di Desa Sindangpano
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-6 drop-shadow animate-fade-in-delay">
              Jelajahi kekayaan UMKM lokal kami, dari olahan melinjo hingga buah segar, untuk mendukung ekonomi desa yang berkelanjutan.
            </p>
            <a
              href="/products"
              className="inline-block bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-600 transition-transform transform hover:scale-110 duration-300 shadow-lg"
            >
              Lihat Produk Kami
            </a>
          </div>
        </div>
      </section>



      {/* Tentang Kami */}
      <section className="container mx-auto py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-left mb-8 text-blue-900">Tentang Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-700 mb-4">
              Desa Sindangpano adalah komunitas yang kaya akan potensi lokal, terutama melalui UMKM yang menghasilkan produk unggulan seperti olahan melinjo, emping, dan buah duku. Kami berkomitmen untuk meningkatkan kesejahteraan masyarakat melalui inovasi dan kerja sama.
            </p>
            <a
              href="/about"
              className="inline-block bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src="/src/assets/papan nama sindangpano.jpg"
              alt="Desa Sindangpano"
              className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Highlight Produk */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Produk Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
            <img
              src="..\assets\emping melinjo pedas manis original 2.jpg"
              alt="Olahan Melinjo"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="font-semibold text-xl mb-2 text-blue-900">Olahan Melinjo</h3>
            <p className="text-gray-600">Camilan khas Sindangpano berbahan dasar melinjo.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
            <img
              src="/images/emping.jpg"
              alt="Emping"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="font-semibold text-xl mb-2 text-blue-900">Emping Sindangpano</h3>
            <p className="text-gray-600">Emping gurih renyah hasil inovasi masyarakat desa.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
            <img
              src="/images/duku.jpg"
              alt="Duku"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="font-semibold text-xl mb-2 text-blue-900">Duku / Kepundung</h3>
            <p className="text-gray-600">Buah lokal segar dengan cita rasa manis alami.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;