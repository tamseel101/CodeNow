import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BehavioralQuestion.css';
import { useNavigate } from "react-router-dom";

function BehavioralQuestion(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/behavior', { state: { problem_id: props.problem_id, user_id: 1, behavior_name: props.name, behavior_ques: props.desc }}); //CHANGE THIS
  };

  return (
    <Card className="mt-4 QuestionBackground">
        <Card.Body>
            <Row className="d-flex align-items-center">
                <Col sm={10}>
                    <Card.Title className="text-light fw-bold"><h2>{props.name}</h2></Card.Title>
                </Col>
                <Col sm={2}>
                
                  <Button
                    className= "QuestionButton"
                    onClick={handleClick}>
                    Start
                  </Button>
                </Col>
            </Row>
        </Card.Body>
    </Card>
  );
}

export default BehavioralQuestion;