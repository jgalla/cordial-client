import React, { Component, Fragment } from 'react'

class Ingredients extends Component {
  // handleDelete = event => {
  //   const id = event.target.id
  //   deleteIngredient(id, this.props.user)
  //     .then(this.props.handleUpdate)
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }

  render () {
    const { handleChange, ingredients } = this.props

    return (
      <Fragment>
        {ingredients.map((ingredient, i) => (
          <Fragment key={ingredient.id}>
            <label>
              <input
                type='checkbox'
                name={ingredient.ingredient_name}
                index={i}
                checked={ingredient.checked_status}
                onChange={handleChange} />
              {' '}{ingredient.ingredient_name}
            </label>
            <br />
          </Fragment>
        ))}
      </Fragment>
    )
  }
}

export default Ingredients
