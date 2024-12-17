import React, { useEffect, useRef, useState } from 'react';
import { FaSearch, FaCommentDots, FaBullhorn } from 'react-icons/fa';

const Feature = () => {
  const [isVisible, setIsVisible] = useState({
    section1: false,
    section2: [false, false, false]
  });

  const section1Ref = useRef(null);
  const section2Refs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, section1: true }));
          } else {
            setIsVisible(prev => ({ ...prev, section1: false }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section1Ref.current) {
      observer1.observe(section1Ref.current);
    }

    const observer2 = section2Refs.map((ref, index) => new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => {
              const newSection2 = [...prev.section2];
              newSection2[index] = true;
              return { ...prev, section2: newSection2 };
            });
          } else {
            setIsVisible(prev => {
              const newSection2 = [...prev.section2];
              newSection2[index] = false;
              return { ...prev, section2: newSection2 };
            });
          }
        });
      },
      { threshold: 0.1 }
    ));

    section2Refs.forEach((ref, index) => {
      if (ref.current) {
        observer2[index].observe(ref.current);
      }
    });

    return () => {
      observer2.forEach(observer => observer.disconnect());
    };
  }, []);

  const features = [
    {
      icon: <FaSearch size={40} className="text-black" />,
      title: 'SEO Hizmetleri',
      description: 'Arama motorlarında görünürlüğünüzü artırın ve organik trafik kazanın.'
    },
    {
      icon: <FaCommentDots size={40} className="text-black" />,
      title: 'Sosyal İçerik',
      description: 'Sosyal medyada etkileşiminizi artıracak içerikler üretin.'
    },
    {
      icon: <FaBullhorn size={40} className="text-black" />,
      title: 'Yaratıcı Reklamlar',
      description: 'Hedef kitlenize uygun yaratıcı reklam çözümleri geliştirin.'
    }
  ];

  return (
    <div id='features' className="container-wrapper">
      <section className="py-12 relative pt-[100px]">
        <div className="container mx-auto px-3 md:px-4 lg:px-4">
          <div ref={section1Ref} className={`w-full justify-start items-center gap-6 flex-col flex transition-opacity duration-500 ${isVisible.section1 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex-col justify-center items-center gap-3 flex">
              <h6 className={`text-gray-600 text-xs sm:text-base md:text-md lg:text-lg font-normal leading-relaxed transition transform duration-500 ${isVisible.section1 ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>HİZMETLERİMİZ</h6>
              <h2 className={`text-[#006D77] text-3xl font-bold font-manrope leading-normal lg:text-center text-center transition transform duration-500 ${isVisible.section1 ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                Sunduğumuz Çözümler
              </h2>
              <p className={`text-gray-700 text-base font-normal pb-10 md:pb-12 lg:pb-18 leading-relaxed lg:text-center text-center transition transform duration-500 ${isVisible.section1 ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                İşletmeniz için zamandan tasarruf edin ve etkili reklam çözümleri üretin.
              </p>
            </div>
          </div>

          <div className="w-full justify-start items-center gap-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={section2Refs[index]}
                className={`w-full p-6 rounded-xl border border-gray-200 hover:border-orange-600 hover:shadow-lg transition-all duration-700 ease-in-out flex-col justify-start items-center gap-4 flex transform transition ${isVisible.section2[index] ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {feature.icon}
                <h3 className="text-gray-900 text-xl font-bold font-manrope leading-8">{feature.title}</h3>
                <p className="text-gray-600 text-base font-normal leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
