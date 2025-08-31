// src/pages/Profile.jsx
import { Helmet } from 'react-helmet-async';

const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Profil UMKM - Desa Sindangpano</title>
        <meta name="description" content="Profil UMKM Desa Sindangpano termasuk visi, misi, dan kontak." />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-center">Profil UMKM Desa Sindangpano</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Visi</h2>
        <p className="text-gray-700">Menjadi pusat UMKM terdepan di Indonesia yang mempromosikan produk lokal berkualitas dan berkelanjutan.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Misi</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Meningkatkan kualitas produk melalui inovasi dan teknologi.</li>
          <li>Memperluas pasar melalui pemasaran digital.</li>
          <li>Mendukung pemberdayaan masyarakat desa.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Kontak</h2>
        <p className="text-gray-700">Email: info@umkmsindangpano.com</p>
        <p className="text-gray-700">Telepon: +62 123 4567 890</p>
        <p className="text-gray-700">Alamat: Desa Sindangpano, Kecamatan Raja Galuh, Indonesia</p>
      </section>
    </>
  );
};

export default Profile;