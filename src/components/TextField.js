import React from 'react'
import { FormControl, FormGroup } from 'react-bootstrap'

const TextField = (props) => (
    <FormGroup>
        <FormControl 
        type={props.type}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        multiple={props.isMultiple}
        />
    </FormGroup>
)

export default TextField