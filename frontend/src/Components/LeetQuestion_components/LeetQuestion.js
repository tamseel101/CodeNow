import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LeetQuestion.css';
import { useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function LeetQuestion(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Attempt', { state: { problem_id: props.problem_id, user_id: 1 } });
  };

  return (
    <Card className="mt-4 QuestionBackground">
        <Card.Body>
            <Row className="d-flex align-items-center">
                <Col sm={10}>
                    <Card.Title className="QuestionText fw-bold"><h2>{props.name}</h2></Card.Title>
                    <Card.Text className="DescText">{props.desc}</Card.Text>
                </Col>
                <Col sm={2}>
                <a target="_blank" href={props.url} rel="noreferrer">
                  <Button
                    className= "QuestionButton"
                    onClick={handleClick}>
                    Code Next
                  </Button>
                </a>
                </Col>
            </Row>
        </Card.Body>
    </Card>
  );
}

export default LeetQuestion;