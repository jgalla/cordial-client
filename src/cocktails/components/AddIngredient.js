import React, { Component, Fragment } from 'react'
// import Button from 'react-bootstrap/Button'

import { addIngredient } from '../api'
import messages from '../messages'

class AddIngredient extends Component {
  constructor () {
    super()

    this.state = {
      ingredient: null
    }
  }

  handleChange = event => {
    event.preventDefault()

    const updatedField = { [event.target.name]: event.target.value }
    this.setState(updatedField)
  }

  handleSubmit = event => {
    event.preventDefault()
    event.target.reset()
    const { alert, user } = this.props
    const data = {
      ingredient: {
        ingredient_name: this.state.ingredient,
        checked_status: false
      }
    }

    addIngredient(data, user)
      .then(this.props.handleUpdate)
      .then(() => alert(messages.addIngredientSuccess, 'success'))
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
            placeholder="Add Ingredient"
            name="ingredient"
            onChange={handleChange}
            value={null}
          />
          <button type="submit" >Submit</button>
        </form>
      </Fragment>
    )
  }
}

export default AddIngredient
