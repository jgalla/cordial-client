import apiUrl from '../apiConfig'
import axios from 'axios'

export const getCocktails = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/cocktail_ingredients'
  })
}

export const getIngredients = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/ingredients'
  })
}
