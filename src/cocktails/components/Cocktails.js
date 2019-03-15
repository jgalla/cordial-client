import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Ingredients from './Ingredients'

import { getCocktails, getIngredients } from '../api'

class Cocktails extends Component {
  constructor () {
    super()

    this.state = {
      cocktails: null,
      ingredients: null,
      selectedIngredients: []
    }
  }

  componentDidMount () {
    getCocktails()
      .then(response => {
        const responseData = response.data.cocktail_ingredients
        const filteredData = {}
        responseData.map(item => {
          // const temp = {}
          if (!Object.keys(filteredData).includes(item.cocktail.name)) {
            filteredData[item.cocktail.name] = {
              id: item.cocktail.id,
              instructions: item.cocktail.instructions,
              ingredients: {
                [item.ingredient.ingredient_name]: item.qty
              }
            }
          } else if (Object.keys(filteredData).includes(item.cocktail.name)) {
            filteredData[item.cocktail.name].ingredients[item.ingredient.ingredient_name] = item.qty
          }
          // filteredData.push(temp)
        })
        responseData.map(item => {
          this.setState({ cocktails: filteredData })
        })
      })
      .catch(error => {
        console.error(error)
      })

    getIngredients()
      .then(response => this.setState({ ingredients: response.data.ingredients }))
      .catch(error => {
        console.error(error)
      })
  }
  handleChange = event => {
    const index = event.target.getAttribute('index')
    const newIngredients = this.state.ingredients.slice()
    newIngredients[index].checked_status = !newIngredients[index].checked_status

    const checked = event.target.checked
    console.log(checked)
    const ingredient = event.target.getAttribute('name')
    const newSelectedIngredients = this.state.selectedIngredients.slice()
    if (checked) {
      newSelectedIngredients.push(ingredient)
    } else {
      const arrIndex = newSelectedIngredients.indexOf(ingredient)
      newSelectedIngredients.splice(arrIndex, 1)
    }

    this.setState({ ingredients: newIngredients, selectedIngredients: newSelectedIngredients })
  }

  render () {
    const { cocktails, ingredients } = this.state
    const { handleChange } = this

    if (!cocktails) {
      return <p>loading...</p>
    }

    return (
      <Container>
        <Row>
          <Col sm={4}>
            <Ingredients
              ingredients={ingredients}
              handleChange={handleChange}
            />
          </Col>
          <Col sm={8}>
            <CardDeck>
              {Object.keys(cocktails).map((key, i) => {
                if (this.state.selectedIngredients.filter(x => Object.keys(cocktails[key].ingredients).includes(x)).length !== 0) {
                  return (
                    <Card key={i}>
                      <Card.Title>{Object.keys(cocktails)[i]}</Card.Title>
                      <Card.Text>
                        <ul>
                          {Object.entries(cocktails[key].ingredients).map((ingredient, x) => (
                            <li key={x}>{`${ingredient[0]}: ${ingredient[1]}`}</li>
                          ))}
                        </ul>
                        {cocktails[key].instructions}
                      </Card.Text>
                    </Card>
                  )
                }
              })}
            </CardDeck>
          </Col>
        </Row>
      </Container>
    )
  }
}
// <CardDeck>
//   {Object.keys(cocktails).map((key, i) => (
//     <Card key={i}>
//       <Card.Title>{Object.keys(cocktails)[i]}</Card.Title>
//       <Card.Text>
//         <ul>
//           {Object.entries(cocktails[key].ingredients).map((ingredient, x) => (
//             <li key={x}>{`${ingredient[0]}: ${ingredient[1]}`}</li>
//           ))}
//         </ul>
//         {cocktails[key].instructions}
//       </Card.Text>
//     </Card>
//   ))}
// </CardDeck>

export default Cocktails
