import  { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    title: "Dağıtım politikanız nedir?",
    content: "Bizim dağıtım politikamız hızlı ve güvenilirdir. Müşterilerimize en kısa sürede ürünleri ulaştırmak için çalışıyoruz.",
  },
  {
    title: "Nasıl katkıda bulunabilirim?",
    content: "Katkıda bulunmak için web sitemizdeki gönüllü veya bağış seçeneklerinden birini seçebilirsiniz. Ayrıca, topluluğumuzu büyütmek için sosyal medyada paylaşım yapabilirsiniz.",
  },
  {
    title: "Başka hangi temalarınız var?",
    content: "Farklı endüstriler ve kullanıcı ihtiyaçlarına uygun çeşitli temalar sunuyoruz. Detaylı bilgi için web sitemizi ziyaret edebilirsiniz.",
  },
  {
    title: "Ürünlerinizi nasıl iade edebilirim?",
    content: "Ürünleri iade etmek için lütfen müşteri hizmetleri ile iletişime geçin. Size en kısa sürede yardımcı olacağız.",
  },
  {
    title: "Ürünleriniz garantili mi?",
    content: "Evet, tüm ürünlerimiz belirli bir süre için garantilidir. Garanti koşulları hakkında detaylı bilgi için web sitemizi ziyaret edebilirsiniz.",
  }
];

const SectionObserver = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {children}
    </section>
  );
};

const FaQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div id='faq' className="container-wrapper">
      <SectionObserver>
        <section className="py-12 relative pt-[120px] transition-opacity duration-500">
          <div className="container mx-auto px-3 md:px-4 lg:px-4">
            <div className="flex flex-col lg:flex-row lg:space-x-12 transform transition-transform duration-500">
              <div className="lg:w-1/2 w-full text-center lg:text-left mx-auto">
                <div className="mb-8 md:mb-12 lg:mb-16 mx-auto">
                  <h2 className="text-3xl text-[#006D77] font-bold font-manrope leading-normal">
                    Genel Sorular
                  </h2>
                  <div className="mt-4 mx-auto">
                    <p className="text-gray-700 text-base font-normal leading-relaxed">
                      Başarı hikayemiz gibi, biz de her soruyu yanıtlamak için buradayız. Herhangi bir sorunuz varsa, bizimle iletişime geçebilirsiniz.
                    </p>
                  </div>
                </div>
                <div className="mb-6 w-full bg-gray-100 p-10 rounded-md text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-start">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Placeholder"
                      className="h-12 w-12 object-cover rounded-full"
                    />
                    <div className="flex flex-col gap-1.5">
                      <h5 className="text-lg font-bold text-gray-900 leading-normal">Hala Sorularınız Var Mı?</h5>
                      <p className="text-gray-600 text-sm font-normal leading-relaxed">
                        Aradığınız cevabı bulamıyor musunuz? Lütfen destek ekibimize danışın.
                      </p>
                    </div>
                  </div>
                  <div className="my-6 h-[0.5px] w-full bg-gray-300"></div>
                  <a
                    href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                    className="inline-block rounded-lg bg-[#006D77] hover:bg-[#00585C] px-6 py-3 font-semibold text-white transition-all duration-500 ease-in-out"
                  >
                    İletişime Geçin
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                {faqs.map((faq, index) => (
                  <div key={index} className={`mb-3 w-full bg-gray-100 p-5 rounded-md transition-all duration-500 transform ${openFAQ === index ? 'translate-y-0' : ''}`}>
                    <div className="flex cursor-pointer items-start justify-between" onClick={() => toggleFAQ(index)}>
                      <p className="text-lg font-bold text-gray-900 leading-normal">{faq.title}</p>
                      <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                        <div className={`absolute h-5 w-0.5 bg-gray-900 transition-transform duration-300 ${openFAQ === index ? "rotate-90" : ""}`}></div>
                        <div className="h-0.5 w-5 bg-gray-900"></div>
                      </div>
                    </div>
                    <div className={`mt-2 overflow-hidden transition-[max-height] duration-500 ease-in-out ${openFAQ === index ? "max-h-40" : "max-h-0"}`}>
                      <p className="text-sm text-gray-500 font-normal leading-relaxed">{faq.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionObserver>
    </div>
  );
}

export default FaQ;
