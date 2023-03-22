import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from './pfp.jpg';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

/* eslint-disable no-unused-vars */
//let username = JSON.parse(sessionStorage.getItem("username"))


export const Profile = () => {

    return (
        <div>
            <Container className="pt-3 pb-5">
                <h1>User Profile</h1>
                
                <Card.Body className="text-center">
                    <Image src={Img} thumbnail width="300" />
                </Card.Body>              
                 
                <Card className="mb-4 mb-lg-0 mt-3">
                    <Card.Body>
                        <Row>
                        <Col sm="5">
                            <Card.Text>Name</Card.Text>
                        </Col>
                        <Col sm="7">
                            <Card.Text className="text-muted">John Smith</Card.Text>
                        </Col>
                        </Row>
                        <hr />
                        <Row>
                        <Col sm="5">
                            <Card.Text>Email</Card.Text>
                        </Col>
                        <Col sm="7">
                            <Card.Text className="text-muted">example@example.com</Card.Text>
                        </Col>
                        </Row>
                        <hr />
                        <Row>
                        <Col sm="5">
                            <Card.Text>Username</Card.Text>
                        </Col>
                        <Col sm="7">
                            <Card.Text className="text-muted">Username</Card.Text>
                        </Col>
                        </Row>
                        
                    </Card.Body>
                </Card>
                <br/>
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Edit Profile</Accordion.Header>
                        <Accordion.Body>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter new email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter new password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword2">
                            <Form.Label>Retype Password</Form.Label>
                            <Form.Control type="password" placeholder="Retype new password" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>rofile Picture</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                        </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <br/>
                <br/>
                <h1>Stats Per Question Type</h1>             
                 
                <Card className="mb-4 mb-lg-0 mt-3">
                    <Card.Body>
                        <Row>
                        <Col sm="5">
                            <Card.Text>Arrays</Card.Text>
                        </Col>
                        <Col sm="7">
                            <Card.Text className="text-muted">Very Expereinced</Card.Text>
                        </Col>
                        </Row>
                        <hr />
                        <Row>
                        <Col sm="5">
                            <Card.Text>Linked Lists</Card.Text>
                        </Col>
                        <Col sm="7">
                            <Card.Text className="text-muted">Very Expereinced</Card.Text>
                        </Col>
                        </Row>
                        <hr />
                        <Row>
                        <Col sm="5">
                            <Card.Text>Stacks</Card.Text>
                        </Col>
                        <Col sm="7">
                            <Card.Text className="text-muted">Very Expereinced</Card.Text>
                        </Col>
                        </Row>
                        <hr />
                        <Row>
                        <Col sm="5">
                            <Card.Text>Heaps</Card.Text>
                        </Col>
                        <Col sm="7">
                            <Card.Text className="text-muted">Very Expereinced</Card.Text>
                        </Col>
                        </Row>
                        <hr />
                        <Row>
                        <Col sm="5">
                            <Card.Text>Trees</Card.Text>
                        </Col>
                        <Col sm="7">
                            <Card.Text className="text-muted">Very Expereinced</Card.Text>
                        </Col>
                        </Row>
                        
                    </Card.Body>
                </Card>
          
            </Container>
        </div>

    );
}

export default Profile;
/* eslint-enable no-unused-vars */