/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'logo-cloud': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 4rem))' }, // Logoların tamamen kaymasını sağlıyor
        },
      },
      animation: {
        'logo-cloud': 'logo-cloud 30s linear infinite', // 30 saniyelik bir animasyon süresi, sürekli (infinite) olacak şekilde
      },
    },
  },
  plugins: [],
};
