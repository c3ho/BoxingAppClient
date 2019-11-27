import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class UserForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <Container>
            <Row>
              <Col md={{ span: 3, offset: 3 }}>
            <Form>
  <Form.Group controlId="formFirstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" required placeholder="Enter First Name" />
  </Form.Group>
  <Form.Group controlId="formLastName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" required placeholder="Enter First Name" />
  </Form.Group>
  <Form.Group controlId="formTerm">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option defaultValue>Months</option>
        <option>1 Month</option>
        <option>3 Months</option>
        <option>6 Months</option>
        <option>12 Months</option>
      </Form.Control>
    </Form.Group>
    <Form.Row>
      <Button variant="primary" type="submit">Submit</Button>
      <Button variant="danger" type="clear">Clear</Button>
    </Form.Row>
</Form>
</Col>
</Row>
</Container>
        )
    }
}

export default UserForm;