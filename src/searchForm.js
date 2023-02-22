import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

const form = get('.search-form');
const input = get('[name="drink"]');

form.addEventListener('keyup', function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) {
    presentDrinks(`${URL}`);
  }
  presentDrinks(`${baseURL}${value}`);
});
