import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';
import getElement from './src/getElement.js';

const presentDrink = async () => {
  const id = localStorage.getItem('drink');
  if (!id) {
    window.location.replace('index.html');
  } else {
    const drink = await fetchDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displayDrink(drink);
  }
};

const mode = localStorage.getItem('mode');

window.addEventListener('DOMContentLoaded', () => {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }
  presentDrink();
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
