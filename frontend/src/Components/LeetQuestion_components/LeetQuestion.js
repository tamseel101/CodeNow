import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LeetQuestion.css';
import { useNavigate } from "react-router-dom";


function LeetQuestion(props) {
  const navigate = useNavigate();
  return (
    <Card className="mt-4 py-3 QuestionBackground">
        <Card.Body>
            <Row className="d-flex align-items-center">
                <Col sm={7}>
                    <Card.Title className="QuestionText"><h2>{props.name}</h2></Card.Title>
                    <Card.Text className="DescText">{props.desc}</Card.Text>
                </Col>
                <Col sm={5}>
                <a target="_blank"
                  href={props.url}><Button
                    className= "QuestionButton"
                    variant="primary"
                    onClick={navigate('/Attempt', {state:{problem_id: props.problem_id, user_id:1}})}>Code Next</Button>
                    </a></Col>
            </Row>
        </Card.Body>
    </Card>
  );
}

export default LeetQuestion;