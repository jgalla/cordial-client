import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'

const DeleteIngredient = ({ handleDelete, id }) => (
  <Fragment>
    <Button onClick={handleDelete} id={id} variant="outline-dark" size="sm">X</Button>
  </Fragment>
)
export default DeleteIngredient
