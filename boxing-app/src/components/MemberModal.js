import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class MemberModal extends React.Component{
    constructor(props){
        super(props)

        this.state={
            show: false
        }
    }

    componentWillMount(){
        this.setState={
            show: true
        }
    }

    render(){
        return(
            <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={useState(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={useState(false)}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
        )
    }
}

export default MemberModal;