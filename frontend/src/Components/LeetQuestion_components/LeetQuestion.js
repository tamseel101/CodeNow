import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LeetQuestion.css';

function LeetQuestion(props) {
  return (
    <Card className="mt-4 py-3 QuestionBackground">
        <Card.Body>
            <Row className="d-flex align-items-center">
                <Col sm={7}>
                    <Card.Title className="QuestionText"><h2>{props.name}</h2></Card.Title>
                    <Card.Text className="DescText">{props.desc}</Card.Text>
                </Col>
                <Col sm={5}><Button className= "QuestionButton" variant="primary">Code Next</Button></Col>
            </Row>
        </Card.Body>
    </Card>
  );
}

export default LeetQuestion;