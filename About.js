import React, { Component } from "react"
import { Container, Tab, Row, Col, Nav,NavLink } from 'react-bootstrap';

export default class About extends Component {
    render(){
        return(
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column mt-2">
                    <Nav.Item>
                        <NavLink eventKey="first">Design</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink eventKey="second">Team</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink eventKey="third">Programming</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink eventKey="fouth">Frameworks</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink eventKey="fifth">Libraries</NavLink>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content className="mt-3">
                    <Tab.Pane eventKey="first">
                        <img src="https://s3-alpha.figma.com/hub/file/5400506981/19d6893b-c08a-4498-8689-a64cc0b95b23-cover.png"
                        className="d-block w-100"
                        alt="this"/>
                        <p><span>Design</span> plays big role in creating magnificent product.
                            It does not matter what is this.
                            Nowadays progress is underway in order to be in pace we should be creative. </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    <img src="https://productiveshop.com/wp-content/uploads/2022/09/Export-to-HTML-in-Figma-1024x556.png"
                    className="d-block w-100"
                    alt="that"/>
                        <p><span className="paragr">We</span> all know that one is not effective rather group of people.
                             Most descisions successfully solved in team because many people will definitely and quickly find rational solution. 
                               </p>
                    </Tab.Pane> 
                    <Tab.Pane eventKey="third">
                    <img src="https://s3-alpha.figma.com/hub/file/1411389972/90a52ded-a491-4304-be03-a458ce8853fa-cover.png"
                    className="d-bloc w-100"
                    alt="pictur"/>
                        <p><span style={ { color:'green'}}>In</span> century of information technology and technological  progress, programming languages are  developing non-stop.
                            In our time, many fields require profesionals in IT in that all industries computarize.
                            However this branch is highly paid still we can see lack of staff  </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fouth">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTneeSoJWHWoBtzqGjFRTlQsoXwYewBk3TfuA&s"
                    className="d-block w-100"
                    alt="ok"/>
                        <p><span style={{color:'yellow'}}>Many </span >companies are  developing frameworks.There are some of them angular, vue and react. 
                            React is the most popular.It is getting popular because of simplicity and fast working platform.
                            React was made up and developed by Facebook.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                    <img src="https://www.csschopper.com/blog/wp-content/uploads/2021/03/Figma-to-Code-The-Complete-Guide-from-Design-to-Code.jpg"
                    className="d-block w-100 h-70"
                    alt="good"/>
                        <p><span style={{color:'orange'}}>Books</span> and literatures are not always  available besides electronic books from internet. Contemporary world needs resource to supply IT with necessary
                            books </p>
                    </Tab.Pane>

                </Tab.Content>
                </Col>
            
            </Row>
            </Tab.Container>  
        </Container>
        )
    }
}