import React from 'react'
import { Col, Row, Badge, Button } from 'react-bootstrap'

const getTags = (files) => {
    let tags = []
    let filenames = Object.keys(files)
    filenames.forEach(file => {
        let fileDetails = files[file]
        switch (fileDetails.type) {
            case 'application/x-ruby':
                tags.push('ruby')
                break;
            case 'application/x-python':
                tags.push('python')
                break;
            case 'text/plain':
                tags.push('text')
                break;
            case 'application/javascript':
                tags.push('javascript')
                break;
            default:
                tags.push('others')
        }
    })
    return tags
}

const GistItems = (props) => {
    return (
        <div style={{ border: '1px solid #333', padding: '20px', margin: '20px' }}>
            <Row className={'rowItem'}>
                <Col md={2}>
                    <label>Id:</label>
                </Col>
                <Col md={10}>
                    <b>{props.id}</b>
                </Col>
            </Row>
            <Row className={'rowItem'}>
                <Col md={2}>
                    <label>Description:</label>
                </Col>
                <Col md={10}>{props.description}</Col>
            </Row>
            <Row className={'rowItem'}>
            <Col md={2}>Created at </Col>
                <Col md={10}>{props.created_at}</Col>
            </Row>
            <Row className={'rowItem'}>
            <Col md={2}>Updated at </Col>
                <Col md={10}>{props.updated_at}</Col>
            </Row>
            <Row className={'rowItem'}>
                <Col md={2}>
                    <label>Tags</label>
                </Col>
                <Col md={10}>
                    {getTags(props.files).map((tag, index) =>
                        <span key={index}><Badge variant="secondary" >{tag}</Badge>&nbsp;</span>
                    )}
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Button variant='primary' size='sm' style={{float:"right"}} onClick={() => { props.onClick(props) }} title='Click to see more details of the gist'> show fork details</Button>
                </Col>
            </Row>
        </div>
    )
}

export default GistItems