/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        'xs': '20px',
        'sm': '24px',
        'base': '32px',
        'lg': '40px',
        'xl': '48px',
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'bold': 700
      },
      colors: {
        buttonWhite: '#FFFFFF',
        hoverButton: '#F3F5FF',
        clickedButton: '#E7EAFF',
        ligthPurple: '#ECEEFB',
        purpleText: '#4835BD',
        buttonText: '#4263F1',
        line: '#4B4B4B',
        footer: '#9A94FF',
        error: '#DC143CCC',
      },
      backgroundImage: {
        'desired-job': 'linear-gradient(90deg, #448FD9 3.21%, #A270C0 38.63%, #D76573 65.59%, #F0944C 96.17%)',
        'desired-job-level': 'linear-gradient(90deg, #448FD9 34.66%, #A270C0 43.87%, #D76573 50.88%, #F0944C 58.84%)',
        'hours-per-week': 'linear-gradient(90deg, #448FD9 31.7%, #A270C0 40.99%, #D76573 48.06%, #F0944C 56.09%)',
        'budget': 'linear-gradient(90deg, #448FD9 41.48%, #A270C0 49.6%, #D76573 55.79%, #F0944C 62.8%)',
        'desired-skills': 'linear-gradient(90deg, #448FD9 35.63%, #A270C0 38.63%, #D76573 40.91%, #F0944C 43.49%)',
        'learning-style': 'linear-gradient(90deg, #448FD9 53.03%, #A270C0 61.48%, #D76573 67.92%, #F0944C 75.23%)',
        'timeframe': 'linear-gradient(90deg, #448FD9 58.7%, #A270C0 65.66%, #D76573 70.96%, #F0944C 76.97%)',
        'current-knowledge': 'linear-gradient(89.96deg, #448FD9 65.12%, #A270C0 74.22%, #D76573 81.15%, #F0944C 89.01%)',
        'loading-screen-quote': 'linear-gradient(89.96deg, #448FD9 1%, #A270C0 38.71%, #D76573 67.41%, #F0944C 99.97%)',
        'landing-page': 'linear-gradient(90deg, #448FD9 0%, #A270C0 38.1%, #D76573 67.1%, #F0944C 100%)',
        'landing-page-reverse': 'linear-gradient(90deg, #F0944C 0%, #D76573 32.9%, #A270C0 61.9%, #448FD9 100%)',
        'logo': 'linear-gradient(90deg, #6146FF 0%, #9FA4FF 196.6%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      addUtilities({
        '.gradient-text': {
          backgroundClip: 'text',
          textFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      });
    },
  ],
}