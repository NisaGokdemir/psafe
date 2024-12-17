'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaPhone, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaInfoCircle, FaCogs, FaProductHunt, FaPuzzlePiece, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

import ikon1 from '../../../public/images/ikon1.png';
import ikon2 from '../../../public/images/ikon2.png';

import './navbar.css';

export default function StickyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 ${!scrolled ? 'border-b-[1px] border-gray-500' : ''} ${
        scrolled || hover ? 'bg-white bg-opacity-50 backdrop-blur-md' : 'bg-transparent'
      } transition-all duration-700`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <nav aria-label="Global" className="mx-auto flex max-w-9xl items-center justify-between py-3 px-8 lg:px-8">
        <div className="flex lg:flex-1 justify-start fade-in">
          <a href="#" className="p-1.5">
            <span className="sr-only">Your Company</span>
            <img src={scrolled || hover ? ikon2 : ikon1} alt="Logo" className="h-10 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden justify-end fade-in">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              scrolled || hover ? 'text-gray-700' : 'text-white'
            } transition duration-700`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-8 w-8" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-14 fade-in"> 
          <Link to="about" smooth duration={500} className={`text-base font-semibold ${scrolled || hover ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-300'} transition duration-700 cursor-pointer`}>Hakkımızda</Link> 

          <Link to="features" smooth duration={500} className={`text-base font-semibold ${scrolled || hover ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-300'} transition duration-700 cursor-pointer`}>Hizmetler</Link> 

          <Link to="services" smooth duration={500} className={`text-base font-semibold ${scrolled || hover ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-300'} transition duration-700 cursor-pointer`}>Ürünler</Link> 
          
          <Link to="faq" smooth duration={500} className={`text-base font-semibold ${scrolled || hover ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-300'} transition duration-700 cursor-pointer`}>SSS</Link> 
          
          <Link to="contact" smooth duration={500} className={`text-base font-semibold ${scrolled || hover ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-300'} transition duration-700 cursor-pointer`}>İletişim</Link> </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-100" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition duration-700">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img src={ikon1} alt="Logo" className="h-10 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white transition duration-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-8 w-8" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 bg-gray-800 fade-in flex flex-col items-start">
              <Link to="about" smooth duration={500} onClick={() => setMobileMenuOpen(false)} className="flex items-center w-full rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 transition duration-700 cursor-pointer"> <FaInfoCircle className="mr-2 bg-blue-500 text-white rounded-full p-1" /> Hakkımızda </Link> 
              
              <Link to="features" smooth duration={500} onClick={() => setMobileMenuOpen(false)} className="flex items-center w-full rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 transition duration-700 cursor-pointer"> <FaCogs className="mr-2 bg-green-500 text-white rounded-full p-1" /> Hizmetler </Link> 
              
              <Link to="services" smooth duration={500} onClick={() => setMobileMenuOpen(false)} className="flex items-center w-full rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 transition duration-700 cursor-pointer"> <FaProductHunt className="mr-2 bg-red-500 text-white rounded-full p-1" /> Ürünler </Link> 
              
              <Link to="faq" smooth duration={500} onClick={() => setMobileMenuOpen(false)} className="flex items-center w-full rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 transition duration-700 cursor-pointer"> <FaQuestionCircle className="mr-2 bg-purple-500 text-white rounded-full p-1" /> SSS </Link> 
              
              <Link to="contact" smooth duration={500} onClick={() => setMobileMenuOpen(false)} className="flex items-center w-full rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 transition duration-700 cursor-pointer"> <FaEnvelope className="mr-2 bg-teal-500 text-white rounded-full p-1" /> İletişim </Link>
              </div>
              <div className="mt-6 fade-in flex flex-col items-start">
                <div className="w-full mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.2799318142006!2d32.62134677580455!3d39.979849171513216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d330cbac1d4193%3A0x51ef92290bd1e0cc!2s5M%20Migros!5e0!3m2!1str!2str!4v1734285516910!5m2!1str!2str"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                  <p className="text-white mt-2 bg-gray-700 p-2 rounded">Eryaman, Samsun 19 Mayıs Cd. No: 5, 06824 Etimesgut/Ankara</p>
                </div>
                {/* İletişim Bilgileri */}
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-white border border-gray-500 p-1 rounded-full" />
                    <a href="tel:+905555555555" className="text-white">+90 555 555 55 55</a>
                  </div>
                  <div className="flex items-center space-x-2 text-green-500 hover:text-green-700">
                    <FaWhatsapp size="1.5em" className="border border-green-500 p-1 rounded-full" />
                    <a href="https://wa.me/905555555555" className="text-white">WhatsApp</a>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center space-x-2">
                    <FaFacebook size="1.5em" className="text-blue-600 border border-blue-600 p-1 rounded-full" />
                    <FaTwitter size="1.5em" className="text-blue-400 border border-blue-400 p-1 rounded-full" />
                    <FaInstagram size="1.5em" className="text-pink-600 border border-pink-600 p-1 rounded-full" />
                    <FaLinkedin size="1.5em" className="text-blue-700 border border-blue-700 p-1 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
