import React, { Component, Fragment } from 'react'

import { updateIngredient } from '../api'

class UpdateIngredient extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ingredient_name: props.ingredient.ingredient_name
    }
  }

  handleChange = event => {
    this.setState({ ingredient_name: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    event.target.reset()
    const { handleUpdate, ingredient, user } = this.props
    const data = {
      ingredient: {
        ingredient_name: this.state.ingredient_name
      }
    }

    updateIngredient(ingredient.id, data, user)
      .then(handleUpdate)
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    const { handleChange, handleSubmit } = this

    return (
      <Fragment>
        <form onSubmit={handleSubmit}>
          <input
            placeholder={this.state.ingredient_name}
            name="ingredient_name"
            onChange={handleChange}
            value={undefined}
          />
          <button type="submit" >Update</button>
        </form>
      </Fragment>
    )
  }
}
export default UpdateIngredient
