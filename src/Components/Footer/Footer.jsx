import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutgoingMail, MdOutlinePhoneInTalk } from 'react-icons/md';
import { PiWhatsappLogoDuotone } from 'react-icons/pi';

import ikon1 from '../../../public/images/ikon1.png';


const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#213555] to-[#0a1433] text-gray-300">
      <footer>
        <div className="flex-col lg:flex px-5 py-10 md:px-8 md:py-14">
          {/* ÜST KONTEYNER */}
          <div className="lg:flex lg:flex-row lg:justify-between">
            {/* LOGO DIV */}
            <div>
              {/* LOGO */}
              <img src={ikon1} alt="" className="h-10 object-contain" />

              <p className="font-inter mt-4 max-w-80 text-lg font-normal text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut al
              </p>
              {/* SOSYAL MEDYA İKONLARI */}
              <div className="mb-8 mt-6 flex flex-row">
                <a
                  href=""
                  className="mr-4 p-3 border border-gray-600 rounded-lg text-gray-300 transition hover:text-[#1877F2] hover:bg-transparent hover:border-[#1877F2]"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a
                  href=""
                  className="mx-4 p-3 border border-gray-600 rounded-lg text-gray-300 transition hover:text-[#E4405F] hover:bg-transparent hover:border-[#E4405F]"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href=""
                  className="mx-4 p-3 border border-gray-600 rounded-lg text-gray-300 transition hover:text-[#1DA1F2] hover:bg-transparent hover:border-[#1DA1F2]"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a
                  href=""
                  className="mx-4 p-3 border border-gray-600 rounded-lg text-gray-300 transition hover:text-[#0077b5] hover:bg-transparent hover:border-[#0077b5]"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            {/* ALT LİNKLER */}
            <div className="flex grow flex-row flex-wrap lg:mx-10 lg:flex-nowrap lg:justify-center">
              {/* LİNK BLOĞU */}
              <div className="my-5 mr-8 flex max-w-52 grow basis-24 flex-col space-y-5 lg:mx-10 lg:mt-0">
                <h2 className="font-inter font-semibold text-lg text-gray-200">
                  ÇÖZÜM
                </h2>
                <a
                  href=""
                  className="font-inter font-normal text-base text-gray-100 hover:text-gray-400 transition"
                >
                  Pazarlama
                </a>
                <a
                  href=""
                  className="font-inter font-normal text-base text-gray-100 hover:text-gray-400 transition"
                >
                  Analiz
                </a>
                <a
                  href=""
                  className="font-inter font-normal text-base text-gray-100 hover:text-gray-400 transition"
                >
                  Ticaret
                </a>
                <a
                  href=""
                  className="font-inter font-normal text-base text-gray-100 hover:text-gray-400 transition"
                >
                  İçgörüler
                </a>
              </div>
              {/* LİNK BLOĞU */}
              <div className="my-5 mr-8 flex max-w-52 grow basis-24 flex-col space-y-5 lg:mx-10 lg:mt-0">
                <h2 className="font-inter font-semibold text-lg text-gray-200">
                  DESTEK
                </h2>
                <a
                  href=""
                  className="font-inter font-normal text-base text-gray-100 hover:text-gray-400 transition"
                >
                  Fiyatlandırma
                </a>
                <a
                  href=""
                  className="font-inter font-normal text-base text-gray-100 hover:text-gray-400 transition"
                >
                  Dökümanlar
                </a>
                <a
                  href=""
                  className="font-inter font-normal text-base text-gray-100 hover:text-gray-400 transition"
                >
                  Kılavuzlar
                </a>
                <a
                  href=""
                  className="font-inter font-normal text-base text-gray-100 hover:text-gray-400 transition"
                >
                  API Durumu
                </a>
              </div>
              {/* LİNK BLOĞU */}
              <div className="my-5 mr-8 flex max-w-52 grow basis-24 flex-col space-y-5 lg:mx-10 lg:mt-0">
                <h2 className="font-inter font-semibold text-lg text-gray-200">
                  ŞİRKET
                </h2>
                <a
                  href=""
                  className="font-inter font-normal text-base text-gray-100 hover:text-gray-400 transition"
                >
                  Hakkımızda
                </a>
                <a
                  href=""
                  className="font-inter font-normal text-base text-gray-100 hover:text-gray-400 transition"
                >
                  Blog
                </a>
                <a
                  href=""
                  className="font-inter font-normal text-base text-gray-100 hover:text-gray-400 transition"
                >
                  İş İlanları
                </a>
                <a
                  href=""
                  className="font-inter font-normal text-base text-gray-100 hover:text-gray-400 transition"
                >
                  Basın
                </a>
                <a
                  href=""
                  className="font-inter font-normal text-base text-gray-100 hover:text-gray-400 transition"
                >
                  Ortaklar
                </a>
              </div>
            </div>
            {/* KONUM & DESTEK */}
            <div className="mt-10 flex flex-col lg:mt-0 space-y-6">
              {/* KONUM */}
              <div className="flex flex-row items-center max-w-72">
                <IoLocationOutline className="h-8 w-8" />
                <p className="font-inter ml-4 text-lg text-gray-200">
                Eryaman, Samsun 19 Mayıs Cd. No: 5, 06824 Etimesgut/Ankara
                </p>
              </div>
              {/* MAIL */}
              <div className="flex flex-row items-center max-w-72">
                <MdOutgoingMail className="h-6 w-6" />
                <a
                  href="mailto:support@example.co"
                  className="font-inter ml-4 text-lg text-gray-200"
                >
                  support@example.co
                </a>
              </div>
              {/* TELEFON */}
              <div className="flex flex-row items-center max-w-72">
                <MdOutlinePhoneInTalk className="h-6 w-6" />
                <p className="font-inter ml-4 text-lg text-gray-200">
                  +90 312 123 45 67
                </p>
              </div>
              {/* WHATSAPP */}
              <a
                href="https://wa.me/903121234567"
                className="flex flex-row items-center max-w-72 animate-bounce"
              >
                <PiWhatsappLogoDuotone className="h-6 w-6 text-green-500" />
                <span className="font-inter ml-4 text-lg text-green-500">WhatsApp ile İletişime Geçin</span>
              </a>
            </div>
          </div>
          {/* AYIRICI */}
          <div className="mx-auto my-8 w-full border border-gray-600 lg:my-14"></div>
          {/* TELİF HAKKI METNİ */}
          <div>
            <p className="font-inter text-center text-base text-gray-200 lg:mt-0">
              &copy; 2025 [Şirket İsmi]. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
