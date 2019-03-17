import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'

const DeleteIngredient = ({ handleClick, id }) => (
  <Fragment>
    <Button onClick={handleClick} id={id} variant="outline-dark" size="sm">X</Button>
  </Fragment>
)
export default DeleteIngredient
