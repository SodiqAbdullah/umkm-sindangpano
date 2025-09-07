
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; // Impor client

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
      if (error) console.error(error);
      else setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center py-12 text-gray-700">Produk tidak ditemukan</div>;
  }

  // Buat tautan WhatsApp dengan nomor dari product.contact
  const whatsappLink = `https://wa.me/${product.contact.replace('+', '')}`; // Hapus '+' karena wa.me tidak membutuhkannya

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
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Hubungi untuk Pesan
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;