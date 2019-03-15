import React, { Fragment } from 'react'

const Ingredients = ({ handleChange, ingredients }) => (
  <Fragment>
    <form>
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
    </form>
  </Fragment>
)
export default Ingredients
