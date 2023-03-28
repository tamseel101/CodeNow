// spotlight card for putting certain stats front and center (ie highest skill, maybe total time spent coding, average time coding, etc)
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from "react-router-dom";

function Spotlight(props) {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate('/behavior', {
    //         state: {
    //             problem_id: props.problem_id,
    //             user_id: 1,
    //             behavior_name: props.name,
    //             behavior_ques: props.desc
    //         }
    //     }); //CHANGE THIS
    // };

    return (
        <Col>
            <Card style={{height: '20rem', width: '20rem'}} className="mt-4 QuestionBackground">
                <Card.Body className="align-items-center">
                    <Row style={{height: '4rem'}} className="text-center mb-5">

                        <Card.Title className="text-light fw-bold"><h2>{props.name}</h2></Card.Title>
                    </Row>
                    <Row style={{height: '7rem'}} className="text-center ">

                        <Card.Text style={{color: 'white'}} className="text-center">
                            {props.desc}
                        </Card.Text>
                    </Row>


                </Card.Body>


            </Card>
        </Col>

    );
}

export default Spotlight;