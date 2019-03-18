import apiUrl from '../apiConfig'
import axios from 'axios'

export const getCocktails = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/cocktail_ingredients'
  })
}

export const getIngredients = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/ingredients',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const addIngredient = (data, user) => {
  return axios({
    url: apiUrl + '/ingredients',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: data
  })
}

export const updateIngredient = (id, data, user) => {
  return axios({
    url: apiUrl + '/ingredients/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: data
  })
}

export const deleteIngredient = (id, user) => {
  return axios({
    url: apiUrl + '/ingredients/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
