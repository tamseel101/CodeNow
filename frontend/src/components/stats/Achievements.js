import React from "react";
// import LeetQuestion from "./leet_question/LeetQuestion";
import {useQuery} from 'react-query';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
// import  as All from '../../imgs';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function Achievements (props) {

    // const {data: problems, status} = useQuery('prequiz', async () => {
    //     const {data: problems} = await axios.get('http://localhost:8000/problems/recommended/');
    //     return problems['results']
    // });


    return (
        <Card className="mt-4 QuestionBackground" style={{height: '10rem', width: '67rem'}}>
            <Card.Body>
                <Row className="d-flex ">
                    <Col sm={10}>
                        <Card.Title className="text-light fw-bold"><h2>{props.name}</h2></Card.Title>
                        <Card.Text className="DescText">{props.desc}</Card.Text>
                    </Col>
                    <Col sm={2}>
                        {/* <img src={props.img}/> */}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Achievements;
