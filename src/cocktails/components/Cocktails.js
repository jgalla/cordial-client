import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Ingredients from './Ingredients'
// import UserIngredients from './UserIngredients'
// import Button from 'react-bootstrap/Button'

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
    const ingredient = event.target.getAttribute('name')
    const newSelectedIngredients = this.state.selectedIngredients.slice()
    const arrIndex = newSelectedIngredients.indexOf(ingredient)

    checked ? newSelectedIngredients.push(ingredient)
      : newSelectedIngredients.splice(arrIndex, 1)

    this.setState(
      { ingredients: newIngredients, selectedIngredients: newSelectedIngredients
      })
  }

  render () {
    const { cocktails, ingredients } = this.state
    const { handleChange } = this
    // const { user } = this.props

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
            <CardColumns>
              {Object.keys(cocktails).map((key, i) => {
                if (this.state.selectedIngredients.filter(x => Object.keys(cocktails[key].ingredients).includes(x)).length === Object.keys(cocktails[key].ingredients).length) {
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
            </CardColumns>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Cocktails
