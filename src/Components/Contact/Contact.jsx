import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Contact = () => {
  return (
    <div id='contact' className="container-wrapper">
      <section className="py-12 relative bg-gray-50 pt-[100px]">
        <div className="container mx-auto px-3 md:px-4 lg:px-4">
          <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-20">
            <div className="max-w-3xl text-center lg:text-left mx-auto md:mx-0">
              <h2 className="mb-3 text-1xl font-bold text-[#006D77] md:text-4xl lg:text-5xl">
                Birlikte heyecan verici bir şeyler inşa edelim!
              </h2>
              <p className="my-4 max-w-lg pb-4 text-base text-gray-700 sm:text-base md:mb-6 lg:mb-8 mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus.
              </p>
              <div className="mb-4 flex justify-center lg:justify-start items-center text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className="h-6 w-6" />
                ))}
              </div>
              <p className="mb-8 max-w-lg text-base text-gray-700 sm:text-base mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis.
              </p>
              <div className="flex justify-center lg:justify-start">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="mr-4 inline-block h-16 w-16 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h6 className="text-base font-bold">Laila Bahar</h6>
                  <p className="text-sm text-gray-500">Tasarımcı</p>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-xl bg-white p-8 text-center rounded-lg shadow-lg mt-8 lg:mt-0">
              <h3 className="text-2xl font-bold text-[#006D77] md:text-3xl">
                Ücretsiz teklif alın
              </h3>
              <p className="mx-auto mb-6 mt-4 max-w-lg text-base text-gray-700 lg:mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet luctus magna fringilla urna.
              </p>
              <form className="mx-auto mb-4 max-w-sm text-left" name="wf-form-password" method="get">
                <div>
                  <label htmlFor="name" className="mb-1 text-base font-medium text-gray-900">
                    Adınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mb-4 block h-10 w-full rounded-md border border-gray-300 px-3 text-base text-gray-900"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="mb-1 text-base font-medium text-gray-900">
                    Email Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mb-4 block h-10 w-full rounded-md border border-gray-300 px-3 text-base text-gray-900"
                  />
                </div>
                <div className="mb-5 md:mb-6 lg:mb-8">
                  <label htmlFor="project" className="mb-1 text-base font-medium text-gray-900">
                    Açıklama
                  </label>
                  <textarea
                    id="project"
                    className="mb-2.5 block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-block w-full rounded-md bg-[#006D77] px-6 py-3 text-center text-white font-semibold transition hover:bg-[#00585C]"
                >
                  Ücretsiz teklif alın
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
