// this is to make a progress component with progress bars for each skill
// spotlight card for putting certain stats front and center (ie highest skill, maybe total time spent coding, average time coding, etc)
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function Progress(props) {

    return (
        <Col>
            <Card style={{height: '10rem', width: '67rem'}} className="mt-4 QuestionBackground">
                <Card.Body className="align-items-center">
                    <Row style={{height: '2rem'}} className=" mb-5">

                        <Card.Title className="text-light fw-bold"><h2>     {props.name}</h2></Card.Title>
                    </Row>
                    <Row style={{height: '1rem'}} className="align-items-center">

                        <ProgressBar style={{height: '200%', width: '100%'}} now={props.value} className="rounded-0"/> 
                        <br></br>
                    </Row>


                </Card.Body>


            </Card>
        </Col>

    );
}

export default Progress;