import React from 'react'
import {ProgressBar} from 'react-bootstrap'

const Spinner = () => {
    return (
        <div>
            Loading...<br/>
            <ProgressBar animated now={45} />
        </div>
    )
}
export default Spinner