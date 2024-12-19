import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="container-wrapper">
      <section className="py-12 relative bg-gray-50 pt-[100px] pb-[120px]">
        <div className="container mx-auto px-5 md:px-6 lg:px-8 grid md:grid-cols-2 gap-20 items-center relative overflow-hidden p-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-7xl bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-blue-400 before:h-full max-md:before:hidden">
          <div>
            <h2 className="text-3xl text-[#006D77] font-bold font-manrope leading-normal">İletişime Geçin</h2>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Belirli bir sorunuz mu var veya yeni fırsatları mı keşfetmek istiyorsunuz? Deneyimli ekibimiz sizinle iletişime geçmeye hazır.
            </p>

            <form>
              <div className="space-y-4 mt-8">
                <input
                  type="text"
                  placeholder="Ad Soyad"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
                <textarea
                  placeholder="Mesajınızı Yazın"
                  className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none h-40"
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
          <div className="z-0 relative h-full max-md:min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1285.647358544096!2d32.637548742179355!3d39.96817997187928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d337461f5ba583%3A0x69028e28b9dbac17!2sAltay%2C%20Migros%20Eryaman%2C%2006820%20Etimesgut%2FAnkara!5e0!3m2!1str!2str!4v1734604502896!5m2!1str!2str"
              className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
