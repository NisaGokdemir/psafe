import { useState, useRef, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import './hero.css';  // CSS dosyasını import etme
import videoSource from '../../../src/images/xx.mp4'
import slide1 from '../../../src/images/slide1.jpg'
import slide2 from '../../../src/images/slide2.jpg'
import slide3 from '../../../src/images/slide3.jpg'
import slide4 from '../../../src/images/slide4.jpg'
import slide5 from '../../../src/images/slide5.jpg'
import slide6 from '../../../src/images/slide6.jpg'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Sosyal medya ikonları
import { TfiMouse } from 'react-icons/tfi'; // Yeni kaydırma ikonu
import { IoMdInformationCircleOutline } from 'react-icons/io'; // Yeni iletişim ikonu

const slides = [
  {
    type: 'video',
    src: videoSource,
    title: 'Video Slide Başlığı',
    subtitle: 'Bu, video slide\'ın alt metnidir.',
  },
  {
    type: 'image',
    src: slide1,
    title: 'Slide 1 Başlığı',
    subtitle: 'Bu, slide 1\'in alt metnidir.',
  },
  {
    type: 'image',
    src: slide2,
    title: 'Slide 2 Başlığı',
    subtitle: 'Bu, slide 2\'nin alt metnidir.',
  },
  {
    type: 'image',
    src: slide3,
    title: 'Slide 3 Başlığı',
    subtitle: 'Bu, slide 3\'ün alt metnidir.',
  },
  {
    type: 'image',
    src: slide4,
    title: 'Slide 4 Başlığı',
    subtitle: 'Bu, slide 4\'ün alt metnidir.',
  },
  {
    type: 'image',
    src: slide5,
    title: 'Slide 5 Başlığı',
    subtitle: 'Bu, slide 5\'in alt metnidir.',
  },
  {
    type: 'image',
    src: slide6,
    title: 'Slide 6 Başlığı',
    subtitle: 'Bu, slide 6\'nın alt metnidir.',
  },
];

const Hero = () => {
  const splideRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.go(index);
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    // Tüm fade-in sınıfına sahip elementlerin animasyonlarını eşzamanlı başlatmak için
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      element.style.animationDelay = '0s';
    });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Splide
        ref={splideRef}
        options={{
          type: 'loop',
          autoplay: true,
          pauseOnHover: true,
          cover: true,
          pagination: false,
          arrows: false,
          interval: 3000,
        }}
        onMoved={(splide, newIndex) => {
          setCurrentSlide(newIndex);
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="relative w-full h-screen flex flex-col justify-between">
              <div className="relative w-full h-full">
                {slide.type === 'video' ? (
                  <video autoPlay loop muted className="w-full h-full object-cover">
                    <source src={slide.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={slide.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-end justify-center p-4 md:p-8">
                  <div className="max-w-xl text-right mb-6 md:mb-12 mr-4 md:mr-8 hidden md:block">
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-6 fade-in">{slide.title}</h2>
                    <p className="text-white text-lg md:text-2xl mb-4 md:mb-8 fade-in">{slide.subtitle}</p>
                    <div className="flex justify-end space-x-2 md:space-x-3 mb-2 md:mb-4 fade-in">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleSlideChange(index)}
                          className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 ${currentSlide === index ? 'bg-white border-white' : 'border-white/50'}`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 w-full flex justify-between items-center p-4 md:p-8 bg-transparent fade-in">
                <a
                  href="https://wa.me/905555555555"
                  className="text-white text-sm border border-gray-500 rounded-lg p-2 flex items-center hover:bg-white hover:text-black transition duration-300"
                >
                  <IoMdInformationCircleOutline className="mr-2 text-xl md:text-2xl" />
                  <span >Bizimle İletişime Geçin</span>
                </a>
                <div className="flex items-center text-gray-300">
                  <TfiMouse className="w-4 h-4 md:w-6 md:h-6 animate-bounce slow-bounce" />
                  <span className="text-xs md:text-lg ml-1 md:ml-2 animate-bounce slow-bounce">Kaydır</span>
                </div>
                <div className="flex space-x-2 md:space-x-4">
                  <a href="https://facebook.com" className="text-white text-sm md:text-lg border border-gray-500 rounded-lg p-2 md:p-3 hover:bg-white hover:text-black transition duration-300">
                    <FaFacebook />
                  </a>
                  <a href="https://twitter.com" className="text-white text-sm md:text-lg border border-gray-500 rounded-lg p-2 md:p-3 hover:bg-white hover:text-black transition duration-300">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="text-white text-sm md:text-lg border border-gray-500 rounded-lg p-2 md:p-3 hover:bg-white hover:text-black transition duration-300">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="text-white text-sm md:text-lg border border-gray-500 rounded-lg p-2 md:p-3 hover:bg-white hover:text-black transition duration-300">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Hero;
