import React, { Fragment } from 'react'
import Form from 'react-bootstrap/Form'

// import { Link } from 'react-router-dom'
// import { getIngredients } from '../api'

// class Ingredients extends Component {
//   constructor () {
//     super()
//
//     this.state = {}
//   }
//
//   render () {
//     const { ingredients } = this.props
//
//     if (!ingredients) {
//       return <p>loading...</p>
//     }
//
//     return (
//       <Fragment>
//         <h3>Ingredients: </h3>
//         <ul>
//           <li>li test</li>
//         </ul>
//       </Fragment>
//     )
//   }
// }
const Ingredients = ({ ingredients }) => (
  <Fragment>
    <Form>
      {ingredients.map(ingredient => (
        <Form.Check
          key={ingredient.id}
          id={ingredient.id}
          type='checkbox'
          label={ingredient.ingredient_name}
        />
      ))}
    </Form>
  </Fragment>
)
// <h3>Ingredients: </h3>
// <ul>
//   <li>{ingredients[0].ingredient_name}</li>
// </ul>
export default Ingredients
