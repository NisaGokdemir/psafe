'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaPhone, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaInfoCircle, FaCogs, FaProductHunt, FaPuzzlePiece, FaQuestionCircle, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import ikon1 from '../../../public/images/ikon1.png';
import ikon2 from '../../../public/images/ikon2.png';

import './navbar.css';

export default function StickyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

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
      className={`fixed top-0 left-0 w-full z-10 bg-white transition-all duration-700 ${
        !scrolled ? 'border-b-[1px] border-gray-500' : ''
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <nav aria-label="Global" className="mx-auto flex max-w-9xl items-center justify-between py-2 px-8 lg:px-8">
        <div className="flex lg:flex-1 justify-start fade-in">
          <RouterLink to="/" className="p-1.5">
            <span className="sr-only">Your Company</span>
            <img src={scrolled || hover ? ikon2 : ikon1} alt="Logo" className="h-14 w-auto" />
          </RouterLink>
        </div>
        <div className="flex lg:hidden justify-end fade-in">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800 transition duration-700`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-8 w-8" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-10 fade-in">
          {isHome ? (
            <>
              <ScrollLink to="about" smooth duration={500} className="text-base font-semibold text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer">
                HAKKIMIZDA
              </ScrollLink>
              <ScrollLink to="features" smooth duration={500} className="text-base font-semibold text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer">
                HİZMETLER
              </ScrollLink>
              <ScrollLink to="services" smooth duration={500} className="text-base font-semibold text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer">
                ÜRÜNLER
              </ScrollLink>
              <ScrollLink to="faq" smooth duration={500} className="text-base font-semibold text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer">
                SSS
              </ScrollLink>
              <ScrollLink to="contact" smooth duration={500} className="text-base font-semibold text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer">
                İLETİŞİM
              </ScrollLink>
              <RouterLink to="/kvkk" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer">
                KVKK
              </RouterLink>
            </>
          ) : (
            <>
              <RouterLink to="/" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer">
                ANA SAYFA
              </RouterLink>
              <RouterLink to="/kvkk" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer">
                KVKK
              </RouterLink>
            </>
          )}
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-100" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition duration-700">
          <div className="flex items-center justify-between">
            <RouterLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img src={ikon1} alt="Logo" className="h-14 w-auto" />
            </RouterLink>
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
                {isHome ? (
                  <>
                    <ScrollLink to="about" smooth duration={500} onClick={() => setMobileMenuOpen(false)} className="flex items-center w-full rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 transition duration-300 cursor-pointer">
                      <FaInfoCircle className="mr-2" /> Hakkımızda
                    </ScrollLink>
                    <ScrollLink to="features" smooth duration={500} onClick={() => setMobileMenuOpen(false)} className="flex items-center w-full rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 transition duration-300 cursor-pointer">
                      <FaCogs className="mr-2" /> Hizmetler
                    </ScrollLink>
                    <ScrollLink to="services" smooth duration={500} onClick={() => setMobileMenuOpen(false)} className="flex items-center w-full rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 transition duration-300 cursor-pointer">
                      <FaProductHunt className="mr-2" /> Ürünler
                    </ScrollLink>
                    <ScrollLink to="faq" smooth duration={500} onClick={() => setMobileMenuOpen(false)} className="flex items-center w-full rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 transition duration-300 cursor-pointer">
                      <FaQuestionCircle className="mr-2" /> SSS
                    </ScrollLink>
                    <ScrollLink to="contact" smooth duration={500} onClick={() => setMobileMenuOpen(false)} className="flex items-center w-full rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 transition duration-300 cursor-pointer">
                      <FaEnvelope className="mr-2" /> İletişim
                    </ScrollLink>
                  </>
                ) : (
                  <>
                    <RouterLink to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center w-full rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 transition duration-300 cursor-pointer">
                      ANA SAYFA
                    </RouterLink>
                    <RouterLink to="/kvkk" onClick={() => setMobileMenuOpen(false)} className="flex items-center w-full rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 transition duration-300 cursor-pointer">
                      KVKK
                    </RouterLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
