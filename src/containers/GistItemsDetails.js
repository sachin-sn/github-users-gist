import React from 'react'
import { connect } from 'react-redux'
import { Col, Row, Badge } from 'react-bootstrap'

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
                    <b>{props.gist.id}</b>
                </Col>
            </Row>
            <Row className={'rowItem'}>
                <Col md={2}>
                    <label>Description:</label>
                </Col>
                <Col md={10}>{props.gist.description}</Col>
            </Row>
            <Row className={'rowItem'}>
                <Col md={2} >Created at </Col>
                <Col md={10}>{props.gist.created_at}</Col>
            </Row>
            <Row className={'rowItem'}>
                <Col md={2} >Updated at </Col>
                <Col md={10}>{props.gist.updated_at}</Col>
            </Row>
            <Row className={'rowItem'}>
                <Col md={2}>
                    <label>Tags</label>
                </Col>
                <Col md={10}>
                    {getTags(props.gist.files).map((tag, index) =>
                        <span key={index}><Badge variant="secondary" >{tag}</Badge>&nbsp;</span>
                    )}
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    {
                        props.fork.map((item, index) =>
                            <div key={index}>
                                <Row>
                                    <Col md={2}>
                                        UserName:
                                    </Col>
                                    <Col md={10}>
                                        {item.login}
                                    </Col>
                                </Row>
                            </div>
                        )
                    }
                </Col>
            </Row>
        </div>
    )
}
const getForkList = (forkList) => forkList.filter((fork, index) => index < 2)
const mapState = (state) => ({
    gist: state.selectedGist,
    fork: getForkList(state.forkList || [])
})
const mapDispatch = (dispatch) => {
    return {

    }
}
export default connect(mapState, mapDispatch)(GistItems)