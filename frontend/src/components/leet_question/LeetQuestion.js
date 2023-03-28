import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LeetQuestion.css';
import {useNavigate} from "react-router-dom";

function LeetQuestion(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Attempt', {state: {problem_id: props.problem_id}});
    };

    const difficultyTagColor = () => {
        if (props.difficulty.toLowerCase() === "easy") {
          return "bg-success bg-gradient text-white";
        } else if (props.difficulty.toLowerCase() === "medium") {
          return "bg-warning bg-gradient";
        } else {
          return "bg-danger bg-gradient text-white";
        }
      };


    return (
        <Card className="mt-4 QuestionBackground">
            <Card.Body>
                <Row className="d-flex align-items-center">
                    <Col sm={10}>
                        <Card.Title className="text-light fw-bold mb-3"><h2>{props.name}</h2></Card.Title>
                        <span
                        className={`px-3 py-2 rounded-pill ${difficultyTagColor()}`}>
                        {props.difficulty}
                      </span>


                      {props.categories.map((category) => (
                        <span
                          key={category.id}
                          className="px-3 py-2 rounded-pill bg-secondary bg-gradient text-white ms-2"
                        >
                          {category.name}
                        </span>
                      ))}


                      <div className="mb-2"></div>
                    </Col>
                    <Col sm={2}>
                        <a target="_blank" href={props.url} rel="noreferrer">
                            <Button
                                className="QuestionButton"
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