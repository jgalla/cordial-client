import React, { Component, Fragment } from 'react'
import { saveIngredients, getSavedIngredients } from '../api'

import Button from 'react-bootstrap/Button'

class UserIngredients extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoadingGet: false,
      isLoadingSave: false,
      selectedIngredients: props.selectedIngredients
    }
  }

  handleLoad = () => {
    this.setState({ isLoadingGet: true }, () => {
      getSavedIngredients()
        .then(response => console.log(response))
        .then(() => {
          this.setState({ isLoadingGet: false })
        })
    })
  }

  handleSave = () => {
    const { user } = this.props
    console.log('user', user)
    this.setState({ isLoadingSave: true }, () => {
      saveIngredients(this.state.selectedIngredients, user)
        .then(user => console.log(user))
        .then(() => {
          this.setState({ isLoadingSave: false })
        })
    })
  }

  render () {
    const { isLoading } = this.state

    return (
      <Fragment>
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? this.handleLoad : null}
        >
          {isLoading ? 'Loading…' : 'Load Ingredients'}
        </Button>
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? this.handleSave : null}
        >
          {isLoading ? 'Loading…' : 'Save Ingredients'}
        </Button>
      </Fragment>
    )
  }
}

export default UserIngredients
