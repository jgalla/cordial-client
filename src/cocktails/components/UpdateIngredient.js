import React, { Component, Fragment } from 'react'
// import Button from 'react-bootstrap/Button'

import { updateIngredient } from '../api'

class UpdateIngredient extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ingredient_name: props.ingredient.ingredient_name
    }
  }

  handleChange = event => {
    // const updatedField = { [event.target.name]: event.target.value }
    this.setState({ ingredient_name: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { handleUpdate, ingredient, user } = this.props
    const data = {
      ingredient: {
        ingredient_name: this.state.ingredient_name
      }
    }
    // console.log('ing', data)

    updateIngredient(ingredient.id, data, user)
      .then(response => console.log(response))
      .then(handleUpdate)
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    const { handleChange, handleSubmit } = this
    // const { ingredient_name } = this.state
    // const { handleUpdate } = this.props
    return (
      <Fragment>
        <form onSubmit={handleSubmit}>
          <input
            placeholder={this.state.ingredient_name}
            name="ingredient_name"
            onChange={handleChange}
            value={null}
          />
          <button type="submit" >Update</button>
        </form>
      </Fragment>
    )
  }
}
export default UpdateIngredient
