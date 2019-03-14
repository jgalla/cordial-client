import React, { Component, Fragment } from 'react'
// import { Link } from 'react-router-dom'
import { getIngredients } from '../api'

class Ingredients extends Component {
  constructor () {
    super()

    this.state = {
      ingredients: null
    }
  }

  componentDidMount () {
    getIngredients()
      .then(response => this.setState({ ingredients: response.data.ingredients }))
      // .then(response => console.log(response.data))
      // .then(() => alert(messages.signInSuccess, 'success'))
      // .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    const { ingredients } = this.state

    if (!this.state.ingredients) {
      return <p>loading...</p>
    }

    return (
      <Fragment>
        <h3>Ingredients: </h3>
        <ul>
          {ingredients.map(cocktail => (
            <li key={cocktail.id}>
              <h3>Name: {cocktail.name}</h3>
              <li>Instructions: {cocktail.instructions}</li>
              <li>Ingredients:</li>
              <ul>
                {cocktail.ingredients.map(ingredient => (
                  <li key={ingredient.id}>{ingredient.ingredient_name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

export default Ingredients
