import React from 'react'
import { Col, Row, Badge, Button } from 'react-bootstrap'

const getTags = (files) => {
    let tags = []
    let filenames = Object.keys(files)
    filenames.forEach(file => {
        let fileDetails = files[file]
        switch (fileDetails.type) {
            case 'application/x-ruby':
            if(tags.indexOf('ruby') ===-1 ) {tags.push('ruby')}
                break;
            case 'application/x-python':
            if(tags.indexOf('python')===-1 ){ tags.push('python') }
                break;
            case 'text/plain':
            if(tags.indexOf('text')===-1 ){ tags.push('text') }
                break;
            case 'application/javascript':
            if(tags.indexOf('javascript')===-1 ){tags.push('javascript')}
                break;
            default:
            if(tags.indexOf('others')===-1 ) {tags.push('others')}
        }
    })
    return tags
}

const getTagVariant = (tag) =>{
    switch(tag){
        case 'ruby': return 'danger'
        case 'python': return 'warning'
        case 'text': return 'primary'
        case 'javascript': return 'success'
        default: return 'secondary'
    }
}

const GistItems = (props) => {
    return (
        <div style={{ border: '1px solid #333', padding: '20px', margin: '20px', backgroundColor:'#fff', borderRadius:'10px' }}>
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
                        <span key={index}><Badge variant={getTagVariant(tag)} >{tag}</Badge>&nbsp;</span>
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