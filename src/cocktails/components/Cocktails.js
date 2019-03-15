import React, { Component, Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
// import { Link } from 'react-router-dom'
import { getCocktails } from '../api'

class Cocktails extends Component {
  constructor () {
    super()

    this.state = {
      cocktails: null
    }
  }

  componentDidMount () {
    getCocktails()
      // .then(response => this.setState({ cocktail_ingredients: response.data.cocktail_ingredients }))
      .then(response => {
        const responseData = response.data.cocktail_ingredients
        // const cocktailData = {}
        responseData.map(item => {
          // cocktailData[name] = item
          this.setState({ cocktails: {
            ...this.state.cocktails,
            [item.cocktail.name]: {
              'id': item.id,
              'instructions': item.cocktail.instructions,
              'ingredients': {
                [item.ingredient.ingredient_name]: item.qty
              }
            }
          } })
        })
        // this.setState({ cocktail_ingredients: cocktailData })
      })
      .then(response => console.log(response.data))
      // .then(() => alert(messages.signInSuccess, 'success'))
      // .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
      })
  }
  // <ul>
  //   {cocktails.map(cocktail => (
  //     <li key={cocktail.id}>
  //       <h3>Name: {cocktail.name}</h3>
  //       <li>Instructions: {cocktail.instructions}</li>
  //       <li>Ingredients:</li>
  //       <ul>
  //         {cocktail.ingredients.map(ingredient => (
  //           <li key={ingredient.id}>{ingredient.ingredient_name}</li>
  //         ))}
  //       </ul>
  //     </li>
  //   ))}
  // </ul>

  render () {
    const { cocktails } = this.state

    if (!cocktails) {
      return <p>loading...</p>
    }

    return (
      <Fragment>
        <CardDeck>
          {Object.keys(cocktails).map((key, i) => (
            <Card key={i}>
              <Card.Title>{Object.keys(cocktails)[i]}</Card.Title>
              <Card.Text>
                <ul>
                  <li>{Object.keys(cocktails[key].ingredients)[0]}: {Object.values(cocktails[key].ingredients)[0]}</li>
                </ul>
                {cocktails[key].instructions}
              </Card.Text>
            </Card>
          ))}
        </CardDeck>
      </Fragment>
    )
  }
}

// <CardDeck>
//   {Object.keys(this.state.cocktails).map((key, i) => (
//     <Card key={i}>
//     </Card>
//   ))}
// </CardDeck>

export default Cocktails
