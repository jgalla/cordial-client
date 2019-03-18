import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'

const DeleteIngredient = ({ handleDelete, id, user, ingredient }) => (
  <Fragment>
    {user.id === ingredient.user_id
      ? <Button onClick={handleDelete} id={id} variant="outline-dark" size="sm">X</Button>
      : null}
  </Fragment>
)
export default DeleteIngredient
