import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonField = (props) =>
    <Button variant='outline-dark' size='sm' onClick={()=>props.onClick()}>
        {props.name}
    </Button>

export default ButtonField