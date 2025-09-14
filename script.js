const btn = document.getElementById('lang-btn');
const links = document.querySelectorAll('.menu a');
let currentLang = 'ru';

btn.addEventListener('click', () => {
  if (currentLang === 'ru') {
    currentLang = 'en';
    btn.textContent = 'RU'; // чтобы кнопка показывала, что можно вернуть
  } else {
    currentLang = 'ru';
    btn.textContent = 'EN';
  }

  links.forEach(link => {
    link.textContent = link.getAttribute(`data-${currentLang}`);
  });
});
