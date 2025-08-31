import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const products = [
  { id: 1, name: 'Keripik Emping', description: 'Keripik renyah dari bahan lokal berkualitas tinggi, cocok untuk camilan sehat sehari-hari.', price: 'Rp 20.000 / kg', image: 'https://source.unsplash.com/random/400x300/?chips', details: 'Diproduksi dengan metode tradisional, bebas pengawet, dan tersedia dalam kemasan 500g atau 1kg.' },
  { id: 2, name: 'Roti Bakar', description: 'Roti segar untuk pedagang, empuk dan tahan lama.', price: 'Rp 15.000 / lusin', image: 'https://source.unsplash.com/random/400x300/?bread', details: 'Bahan premium, ideal untuk roti bakar pinggir jalan, dengan varian plain dan isi.' },
  { id: 3, name: 'Opak', description: 'Camilan tradisional dari singkong pilihan.', price: 'Rp 10.000 / bungkus', image: 'https://source.unsplash.com/random/400x300/?snack', details: 'Gurih dan renyah, dibuat tanpa minyak berlebih, kemasan higienis.' },
  { id: 4, name: 'Keripik Pisang', description: 'Crispy dan manis, favorit keluarga.', price: 'Rp 18.000 / kg', image: 'https://source.unsplash.com/random/400x300/?banana-chips', details: 'Pisang segar dari kebun lokal, rasa original atau varian rasa seperti cokelat.' },
  { id: 5, name: 'Dodol', description: 'Dodol autentik dari gula aren asli.', price: 'Rp 25.000 / kg', image: 'https://source.unsplash.com/random/400x300/?dodol', details: 'Legit dan harum, proses pembuatan manual, tahan hingga 1 bulan.' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-12 text-gray-700">Produk tidak ditemukan</div>;
  }

  return (
    <>
      <Helmet>
        <title>{product.name} - UMKM Desa Sindangpano</title>
        <meta name="description" content={`Detail produk ${product.name} dari UMKM Desa Sindangpano, Kecamatan Rajagaluh, Kabupaten Majalengka.`} />
      </Helmet>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-blue-600 font-bold text-xl mb-4">{product.price}</p>
          <p className="text-gray-700 mb-6">{product.details}</p>
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Hubungi untuk Pesan</a>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;