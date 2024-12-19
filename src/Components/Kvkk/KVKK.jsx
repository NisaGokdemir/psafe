import React from 'react';
import Footer from '../Footer/Footer.jsx';

const KVKKPage = () => {
  return (
    <div className="container-wrapper mt-[80px]">
      <section>
        {/* Title Container */}
        <div className="flex h-auto w-full flex-col items-center justify-center bg-[#0A1128] py-6 md:h-64">
          <div className="flex flex-col items-center gap-y-4 py-5">
            <h1 className="text-4xl font-bold text-white md:text-6xl">HİZMET ŞARTLARI</h1>
            <p className="text-sm text-white sm:text-base">Son Güncelleme: 17 Ekim 2022</p>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center justify-center px-5 md:px-10">
          <div className="container mx-auto w-full max-w-5xl py-12 md:py-16 lg:py-20">
            {/* Content */}
            <div className="flex flex-col items-center gap-y-14">
              <p className="max-w-3xl text-center text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>

              <div className="flex min-w-full flex-col gap-y-10">
                <div className="flex min-w-full py-4 border-b border-gray-300">
                  <h6 className="text-base font-bold">GENEL ŞARTLAR VE KOŞULLAR</h6>
                </div>

                <div className="flex flex-col gap-y-10">
                  {[
                    {
                      title: 'HİZMETLER',
                      content:
                        'PionSafe, grafik tasarım, web tasarımı, markalaşma, illüstrasyon ve kullanıcı arayüzü tasarımı dahil ancak bunlarla sınırlı olmamak üzere kapsamlı bir tasarım hizmetleri yelpazesi sunar. Şirket, üzerinde anlaşmaya varılan hizmetleri, profesyonellik, yaratıcılık ve teknik uzmanlık ile endüstri standartlarına, tasarım ilkelerine ve en iyi uygulamalara uyarak sağlayacaktır. Her projenin özel detayları, teslimatları, zaman çizelgeleri ve fiyatları, Şirket ve Müşteri tarafından karşılıklı olarak üzerinde anlaşmaya varılan ayrı bir anlaşmada veya teklif belgesinde belirtilecektir.',
                    },
                    {
                      title: 'MÜŞTERİ SORUMLULUKLARI',
                      content:
                        'Müşteri, projenin başarılı bir şekilde tamamlanması için gerekli olan doğru ve zamanında bilgi, materyal ve geri bildirimleri sağlamayı kabul eder. Müşteri, projede kullanılmak üzere Şirkete sağlanan materyaller için gerekli izinleri, lisansları veya telif haklarını almaktan sorumludur. Bu materyaller arasında logolar, görüntüler, metinler ve diğer her türlü fikri mülkiyet yer alabilir. Müşteri, gerekli materyallerin veya geri bildirimlerin sağlanmasındaki gecikmelerin veya eksikliklerin proje zaman çizelgelerini, teslimatları ve projenin genel başarısını etkileyebileceğini kabul eder.',
                    },
                    {
                      title: 'FİKRİ MÜLKİYET',
                      content:
                        'Şirket tarafından oluşturulan nihai teslimatlardaki tüm fikri mülkiyet hakları, telif hakları ve ticari markalar dahil ancak bunlarla sınırlı olmamak üzere, tam ödeme alındıktan sonra Müşteriye devredilecektir, aksi yazılı olarak kararlaştırılmadıkça. Müşteri, projede kullanılmak üzere Şirkete sağlanan materyallerin üçüncü şahısların fikri mülkiyet haklarını ihlal etmediğini garanti eder.',
                    },
                    // Diğer maddeleri eklemeye devam edin
                  ].map(({ title, content }, index) => (
                    <div key={index} className="flex flex-col items-start gap-y-3">
                      <p className="text-sm font-bold">{title}</p>
                      <p className="text-sm">{content}</p>
                    </div>
                  ))}
                </div>

                <div className="min-h-[1px] min-w-full bg-gray-300"></div>
                <p className="text-sm">
                  PionSafe tarafından sağlanan herhangi bir tasarım hizmetine, iletişim kanalına veya materyale, grafik tasarım, web tasarımı, markalaşma, illüstrasyon ve kullanıcı arayüzü tasarımı da dahil olmak üzere, web sitemiz, e-posta, telefon veya herhangi bir diğer araç üzerinden erişerek, tarayarak veya kullanarak, burada yer alan hizmet şartlarını, ek anlaşmaları, politikaları, kılavuzları veya burada atıfta bulunulan ve/veya bu belgelere entegre edilen değişiklikleri dikkatlice okuyup anladığınızı ve bunlara yasal olarak bağlı kalmayı açıkça kabul ettiğinizi belirtirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default KVKKPage;
