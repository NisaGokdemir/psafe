import { useState, useEffect, useRef } from 'react';
import service1 from '../../../public/images/service1.jpg';
import service11 from '../../../public/images/service11.jpg';
import service12 from '../../../public/images/service12.jpg';
import service2 from '../../../public/images/service2.jpg';
import service21 from '../../../public/images/service21.jpg';
import service22 from '../../../public/images/service22.jpg';
import service3 from '../../../public/images/service3.jpg';
import service31 from '../../../public/images/service31.jpg';
import service32 from '../../../public/images/service32.jpg';
import service4 from '../../../public/images/service4.jpg';
import service41 from '../../../public/images/service41.jpg';
import service42 from '../../../public/images/service42.jpg';
import service5 from '../../../public/images/service5.jpg';
import service51 from '../../../public/images/service51.jpg';
import service52 from '../../../public/images/service52.jpg';
import service6 from '../../../public/images/service6.jpg';
import service61 from '../../../public/images/service61.jpg';
import service62 from '../../../public/images/service62.jpg';
import service7 from '../../../public/images/service7.jpg';
import service71 from '../../../public/images/service71.jpg';
import service72 from '../../../public/images/service72.jpg';
import service8 from '../../../public/images/service8.jpg';
import service81 from '../../../public/images/service81.jpg';
import service82 from '../../../public/images/service82.jpg';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import './service.css';

const services = [
  { title: 'Temizlik', image: service1, images: [service1, service11, service12], description: 'Temizlik hizmetleri.', details: 'Detaylı temizlik hizmetleri.', points: ['Temizlik malzemeleri', 'Ekipman kiralama'] },
  { title: 'Kişisel Koruyucu Ekipmanlar', image: service2, images: [service2, service21, service22], description: 'Kişisel koruyucu ekipmanlar.', details: 'Kaliteli kişisel koruyucu ekipmanlar.', points: ['Koruyucu kıyafet', 'Gözlük', 'Eldiven'] },
  { title: 'Tekstil', image: service3, images: [service3, service31, service32], description: 'Tekstil ürünleri.', details: 'Çeşitli tekstil ürünleri.', points: ['Pamuklu ürünler', 'Polyester ürünler', 'Karışım kumaşlar'] },
  { title: 'İş Sağlığı ve Güvenliği Hizmeti', image: service4, images: [service4, service41, service42], description: 'İş sağlığı ve güvenliği hizmeti.', details: 'Profesyonel iş sağlığı ve güvenliği hizmetleri.', points: ['Risk değerlendirmesi', 'Eğitim programları', 'İşyeri denetimleri'] },
  { title: 'Dijital Medya', image: service5, images: [service5, service51, service52], description: 'Dijital medya hizmetleri.', details: 'Dijital medya çözümleri.', points: ['Sosyal medya yönetimi', 'İçerik üretimi', 'Reklam kampanyaları'] },
  { title: 'Mobilya', image: service6, images: [service6, service61, service62], description: 'Mobilya ürünleri.', details: 'Modern ve şık mobilyalar.', points: ['Oturma grupları', 'Yatak odası takımları', 'Ofis mobilyaları'] },
  { title: 'Kırtasiye Ürünleri', image: service7, images: [service7, service71, service72], description: 'Kırtasiye ürünleri.', details: 'Geniş kırtasiye ürün yelpazesi.', points: ['Kalemler', 'Defterler', 'Büro malzemeleri'] },
  { title: 'Sağlık', image: service8, images: [service8, service81, service82], description: 'Sağlık hizmetleri.', details: 'Güvenilir sağlık hizmetleri.', points: ['Steteskop', 'Tansiyon aleti', 'Tıbbi malzemeler'] },
];

const ServiceItem = ({ service, onClick }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const itemsToObserve = document.querySelectorAll('.fade-in-up, .fade-in-up-heading, .fade-in-up-description');
    
    itemsToObserve.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      itemsToObserve.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div 
      ref={itemRef} 
      className="relative bg-cover bg-center flex items-center justify-center text-white cursor-pointer transform transition-transform duration-300 ease-in-out hover:z-0 group fade-in-up service-item w-full h-full sm:min-h-[100vh] md:min-h-[60vh] lg:min-h-[50vh]" // Güncellendi
      style={{ backgroundImage: `url(${service.image})` }} 
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>
      <div className="relative z-10 text-center group-hover:text-shadow-lg">
        <h3 className="text-xl font-bold group-hover:text-shadow-md">{service.title}</h3>
        <p className="group-hover:text-shadow-md">{service.description}</p>
        <button className="mt-2 px-4 py-2 border border-white text-white bg-transparent group-hover:bg-black transition-colors duration-500 ease-in-out rounded">İNCELE</button>
      </div>
    </div>
  );
};

const ServiceDetails = ({ service, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const toggleImageModal = (index) => {
    if (isImageEnlarged) {
      closeImageModal();
    } else {
      setSelectedImageIndex(index);
      setIsImageModalOpen(true);
    }
    setIsImageEnlarged(!isImageEnlarged);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setIsImageEnlarged(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-2xl space-y-4 relative overflow-y-auto text-lg" style={{ maxHeight: '90vh' }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <button 
            className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white text-xs px-2 py-1 rounded" 
            onClick={onClose}
          >
            Kapat
          </button>
        </div>
        <p className="text-base text-gray-700 mb-4">{service.details}</p>
        <Splide options={{ type: 'slide', height: '40vh', pagination: !isImageEnlarged, arrows: !isImageEnlarged }}>
          {service.images.map((image, index) => (
            <SplideSlide key={index}>
              <img 
                src={image} 
                alt={service.title} 
                className="h-full w-full object-cover cursor-pointer fade-in-up" 
                onClick={() => toggleImageModal(index)} 
              />
            </SplideSlide>
          ))}
        </Splide>
        <ul className="list-disc list-inside mt-4 text-base text-gray-700 columns-3">
          {service.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-col items-center space-y-2 mt-4">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-gray-700" />
            <a href="tel:+905555555555" className="text-xs text-gray-700">+90 555 555 55 55</a>
          </div>
          <div className="flex items-center space-x-2 text-green-500 hover:text-green-700">
            <FaWhatsapp size="1.5em" />
            <a href="https://wa.me/905555555555" className="text-xs">WhatsApp ile İletişime Geç</a>
          </div>
        </div>
      </div>

      {isImageModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-60">
          <div className="relative z-80 max-w-2xl">
            <button className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white text-xs px-2 py-1 rounded" onClick={closeImageModal}>
              Kapat
            </button>
            <img 
              src={service.images[selectedImageIndex]} 
              alt="Selected" 
              className="max-w-full max-h-full h-auto w-auto object-contain" 
              onClick={closeImageModal} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div id='services' className="services flex flex-col md:min-h-0 min-h-[100rem]">
      <p className="text-center mt-12 fade-in-up-heading text-gray-600 text-xs sm:text-base md:text-md lg:text-lg font-normal">ÜRÜNLERİMİZ</p>
      <h1 className=" text-3xl font-bold font-manrope leading-normal lg:text-center  text-center mt-4 mb-12 text-[#006D77] fade-in-up-description">
        Daha iyi hizmet, yüksek yaşam kalitesi
      </h1>
      <div className="services-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-full flex-1 md:flex-auto">
        {services.map(service => (
          <ServiceItem 
            key={service.title}
            service={service}
            onClick={() => setSelectedService(service)}
          />
        ))}
      </div>
      {selectedService && <ServiceDetails service={selectedService} onClose={() => setSelectedService(null)} />}
    </div>
  );
};

export default Services;
