import React, { Component } from "react"
import { Container, Card, Row, Col, ListGroup } from "react-bootstrap"

export default class Block extends Component {
    render() {
        return ( <Container>
            <Row>
                <Col md="9">
                <Card className="m-3">
                    <img width={150}
                    height={150}
                    className="mr-3"
                    alt="hello"
                    src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png"
                    />
                    <Card.Body>
                        <h5>Blog post</h5>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Modi eligendi animi porro fugiatLorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Modi eligendi animi porro fugiat
                        </p>
                    </Card.Body>

                     </Card>
                </Col>
                <Col md="3">
                <h5 className="text-center mt-5">Catigories</h5>
                <Card>

                    <ListGroup variant="flush">
                        <ListGroup.Item>HTML/CSS</ListGroup.Item>
                        <ListGroup.Item>JAVASCRIPT</ListGroup.Item>
                        <ListGroup.Item>PYTHON</ListGroup.Item>
                        <ListGroup.Item>JAVA</ListGroup.Item>
                        <ListGroup.Item>C++</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className="mt-3" bg="light">
                <Card.Body>
                    <Card.Title>
                        Side widget
                        </Card.Title>
                    <Card.Text>
                    Modi eligendi animi porro fugiatLorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Modi eligendi animi porro fugiat
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>)}
    }