import presentDrinks from './src/presentDrinks.js';
import getElement from './src/getElement.js';
import './src/searchForm.js';
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

const mode = localStorage.getItem('mode');

window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(URL);
  if (mode === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }
});

const modeToggle = getElement('.mode-toggle');

modeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  if (document.documentElement.classList.contains('dark-mode')) {
    modeToggle.textContent = 'light mode';
    localStorage.setItem('mode', 'dark');
  } else {
    modeToggle.textContent = 'dark mode';
    localStorage.setItem('mode', 'light');
  }
});
