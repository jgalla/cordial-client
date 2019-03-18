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

// export const getSavedIngredients = user => {
//   return axios({
//     url: apiUrl + '/ingredient_users',
//     method: 'GET',
//     headers: {
//       'Authorization': `Token token=${user.token}`
//     }
//   })
// }

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

export const deleteIngredient = (id, user) => {
  return axios({
    url: apiUrl + '/ingredient_users/' + id,
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
