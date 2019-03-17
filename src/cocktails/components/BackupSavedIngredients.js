import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Ingredients from './Ingredients'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { getIngredients } from '../api'
// import messages from '../messages'

class SavedIngredients extends Component {
  constructor () {
    super()

    this.state = {
      ingredients: '',
      selectedIngredients: ''
    }
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

  componentDidMount () {
    // const { alert, history, user } = this.props

    // getSavedIngredients(user)
    //   .then(() => history.push('/'))
    //   .catch(error => {
    //     console.error(error)
    //     this.setState({ oldPassword: '', newPassword: '' })
    //     alert(messages.changePasswordFailure, 'danger')
    //   })
    getIngredients()
      .then(response => this.setState({ ingredients: response.data.ingredients }))
      .then((response) => console.log(response))
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    const { ingredients } = this.state
    const { handleChange } = this

    if (!ingredients) {
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
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(SavedIngredients)
