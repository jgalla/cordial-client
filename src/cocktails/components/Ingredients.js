import React, { Component, Fragment } from 'react'

import DeleteIngredient from './DeleteIngredient'
import AddIngredient from './AddIngredient'
import UpdateIngredient from './UpdateIngredient'
import { deleteIngredient } from '../api'

class Ingredients extends Component {
  handleDelete = event => {
    const id = event.target.id
    deleteIngredient(id, this.props.user)
      .then(this.props.handleUpdate)
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    const { handleDelete } = this
    const { alert, handleChange, handleUpdate, ingredients, user } = this.props

    return (
      <Fragment>
        <AddIngredient alert={alert} handleUpdate={handleUpdate} user={user}/>
        {ingredients.map((ingredient, i) => (
          <Fragment key={ingredient.id}>
            {ingredient.id < 13
              ? (null)
              : (<DeleteIngredient handleDelete={handleDelete} id={ingredient.id}/>)}
            <label>
              <input
                type='checkbox'
                name={ingredient.ingredient_name}
                index={i}
                checked={ingredient.checked_status}
                onChange={handleChange} />
              {' '}{ingredient.ingredient_name}
            </label>
            {ingredient.id < 13
              ? (null)
              : (<UpdateIngredient onChange={handleChange} handleUpdate={handleUpdate} ingredient={ingredient} user={user}/>)}
            <br />
          </Fragment>
        ))}
      </Fragment>
    )
  }
}

export default Ingredients
