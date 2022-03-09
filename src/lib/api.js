import axios from 'axios'

const baseUrl = 'www.thecocktaildb.com/api/json/v1/1/';

export const getSearchByCocktailName = (cocktailName) => {
  return axios.get(`${baseUrl}/search.php?s=${cocktailName}`);
}
