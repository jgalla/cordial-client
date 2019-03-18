import React, { Component, Fragment } from 'react'
// import Button from 'react-bootstrap/Button'

import { addIngredient } from '../api'

class AddIngredient extends Component {
  constructor () {
    super()

    this.state = {
      ingredient: null
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    this.setState(updatedField)
  }

  handleSubmit = event => {
    event.preventDefault()
    // const { ingredient } = this.state
    const { user } = this.props
    const data = {
      ingredient: {
        ingredient_name: this.state.ingredient,
        checked_status: false
      }
    }
    console.log('ing', this.state.ingredient)

    addIngredient(data, user)
      .then(response => console.log(response))
      .then(this.props.handleUpdate)
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { ingredient } = this.state
    // const { handleChange, ingredients } = this.props
    return (
      <Fragment>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            placeholder="Ingredient"
            name="ingredient"
            onChange={handleChange}
            value={ingredient}
          />
          <button type="submit" >Submit</button>
        </form>
      </Fragment>
    )
  }
}
export default AddIngredient
