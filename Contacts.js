import React, { Component } from "react"
import { Container, Form, Button} from "react-bootstrap"


export default class Contacts extends Component {
    render() {
        return ( <Container style={{width:'500px'}}>
<h1 className="text-center">Contact us</h1>
<Form>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
        <Form.Text>
            We'll never share your email with anyone else
        </Form.Text>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
        <Form.Label>Example Textarea</Form.Label>
        <Form.Control as="textarea" rows="3"/>
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox" className="mt-2">
        <Form.Check type="checkbox" label="Check me out"/>
    </Form.Group>
    <Button variant="primary" type="submit" className="mt-2">Submit</Button>
</Form>
        </Container>)
        }
    }