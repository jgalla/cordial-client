import React, { Component, Fragment } from 'react'
// import Button from 'react-bootstrap/Button'

import DeleteIngredient from './DeleteIngredient'
// import { deleteIngredients } from '../api'

class Ingredients extends Component {
  // constructor (props) {
  //   super(props)
  // }

  handleClick = event => {
    console.log(event.target.id)
  }

  render () {
    const { handleClick } = this
    const { handleChange, ingredients } = this.props
    return (
      <Fragment>
        <form>
          {ingredients.map((ingredient, i) => (
            <Fragment key={ingredient.id}>
              <DeleteIngredient handleClick={handleClick} id={ingredient.id}/>
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
        </form>
      </Fragment>
    )
  }
}
export default Ingredients
