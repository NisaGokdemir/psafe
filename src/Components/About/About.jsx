import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import './about.css';

const About = () => {
  const [isVisible, setIsVisible] = useState({
    section: false,
    counters: [false, false, false, false]
  });
  const aboutRef = useRef(null);
  const counterRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, section: true }));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
  }, []);

  useEffect(() => {
    const counterObservers = counterRefs.map((ref, index) => new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => {
              const newCounters = [...prev.counters];
              newCounters[index] = true;
              return { ...prev, counters: newCounters };
            });
            counterObservers[index].disconnect();
          }
        });
      },
      { threshold: 0.1 }
    ));

    counterRefs.forEach((ref, index) => {
      if (ref.current) {
        counterObservers[index].observe(ref.current);
      }
    });

    return () => {
      counterObservers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <>
      <div id='about' className="container-wrapper">
        <section className={`py-12 relative bg-gray-50 pt-[100px] ${isVisible.section ? 'show' : ''}`}>
          <div className="container mx-auto px-3 md:px-4 lg:px-4" ref={aboutRef}>
            <div className="w-full justify-start items-center xl:gap-6 gap-4 grid lg:grid-cols-2 grid-cols-1">
              <div className={`w-full flex-col justify-center lg:items-start items-center gap-4 flex about-item fade-in-up ${isVisible.section ? 'show' : ''}`}>
                <div className="w-full flex-col justify-center items-start gap-4 flex">
                  <div className="flex-col justify-start lg:items-start items-center gap-2 flex">
                    <h6 className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed fade-in-up-heading">Hakkımızda</h6>
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-2 flex fade-in-up-description">
                      <h2 className="text-[#006D77] text-3xl font-bold font-manrope leading-normal lg:text-start text-center">
                        Başarı Hikayemizin Masalı
                      </h2>
                      <p className="text-gray-700 text-base font-normal leading-relaxed lg:text-start text-center">
                        Başarı hikayemiz, takım çalışması ve azmin bir göstergesidir. Birlikte zorlukları aştık, zaferleri kutladık ve ilerleme ve başarı hikayesi yarattık.
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-center items-start gap-3 flex">
                    <div className="w-full justify-start items-center gap-4 grid md:grid-cols-2 grid-cols-1">
                      <div className="w-full h-full p-3 rounded-xl border border-gray-200 hover:border-orange-600 transition-all duration-700 ease-in-out hover:shadow-lg flex-col justify-start items-start gap-2 flex" ref={counterRefs[0]}>
                        <h4 className="text-gray-900 text-xl font-bold font-manrope leading-8">
                          {isVisible.counters[0] && <CountUp start={0} end={33} suffix="+" duration={3} />} Yıl
                        </h4>
                        <p className="text-gray-600 text-base font-normal leading-relaxed">Dijital Peyzajları Etkiliyoruz</p>
                      </div>
                      <div className="w-full h-full p-3 rounded-xl border border-gray-200 hover:border-orange-600 transition-all duration-700 ease-in-out hover:shadow-lg flex-col justify-start items-start gap-2 flex" ref={counterRefs[1]}>
                        <h4 className="text-gray-900 text-xl font-bold font-manrope leading-8">
                          {isVisible.counters[1] && <CountUp start={0} end={125} suffix="+" duration={3} />} Proje
                        </h4>
                        <p className="text-gray-600 text-base font-normal leading-relaxed">Başarı ile Mükemmellik</p>
                      </div>
                    </div>
                    <div className="w-full h-full justify-start items-center gap-4 grid md:grid-cols-2 grid-cols-1">
                      <div className="w-full p-3 rounded-xl border border-gray-200 hover:border-orange-600 transition-all duration-700 ease-in-out hover:shadow-lg flex-col justify-start items-start gap-2 flex" ref={counterRefs[2]}>
                        <h4 className="text-gray-900 text-xl font-bold font-manrope leading-8">
                          {isVisible.counters[2] && <CountUp start={0} end={26} suffix="+" duration={3} />} Ödül
                        </h4>
                        <p className="text-gray-600 text-base font-normal leading-relaxed">İnovasyona Adanmışlık</p>
                      </div>
                      <div className="w-full h-full p-3 rounded-xl border border-gray-200 hover:border-orange-600 transition-all duration-700 ease-in-out hover:shadow-lg flex-col justify-start items-start gap-2 flex" ref={counterRefs[3]}>
                        <h4 className="text-gray-900 text-xl font-bold font-manrope leading-8">
                          {isVisible.counters[3] && <CountUp start={0} end={99} prefix="%" duration={3} />} Mutlu Müşteri
                        </h4>
                        <p className="text-gray-600 text-base font-normal leading-relaxed">Müşteri Memnuniyeti</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="sm:w-fit w-full group px-3 py-2 bg-[#006D77] hover:bg-[#00585C] text-white rounded-lg shadow-lg transition-all duration-500 ease-in-out justify-center items-center flex">
                  <span className="px-1 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-500 ease-in-out">Devamını Oku</span>
                  <svg className="group-hover:translate-x-0.5 transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18" fill="none">
                    <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className={`w-full lg:justify-start justify-center items-start flex about-item fade-in-up ${isVisible.section ? 'show' : ''}`}>
                <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                  <img className="sm:mt-3 sm:ml-3 w-full sm:h-72 md:h-80 lg:h-96 xl:h-[30rem] rounded-3xl object-cover" src="/images/about.png" alt="Hakkımızda görseli" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
