import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "6285743114734"; // Ganti dengan nomor WhatsApp Anda
  const emailAddress = "sodiq.abdullah303@gmail.com"; // Ganti dengan alamat Gmail Anda

  return (
    <>
      <Helmet>
        <title>Hubungi Kami - UMKM Desa Sindangpano</title>
        <meta
          name="description"
          content="Hubungi kami melalui WhatsApp atau email untuk informasi lebih lanjut tentang UMKM Desa Sindangpano."
        />
      </Helmet>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut, silakan hubungi kami melalui WhatsApp atau email.
            </p>
            <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* WhatsApp */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300 text-center">
              <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">
                WhatsApp
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Klik tombol di bawah untuk menghubungi kami melalui WhatsApp.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                Hubungi via WhatsApp
              </a>
            </div>

            {/* Gmail */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300 text-center">
              <Mail className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">
                Gmail
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Klik tombol di bawah untuk mengirim email kepada kami.
              </p>
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;