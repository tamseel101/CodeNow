// npm install react-bootstrap bootstrap + import added to App.js
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Box.css";
import React from "react";
import { Link } from "react-router-dom";

export const Landing = (props) => {
    const cardInfo = [
        {title: "Tailored Plan", text: 
            <ul style={{"font-size": "1rem", "line-height": "2rem"}} className="mx-auto">
                <li>Assessment to dictate concepts you need a better understanding.</li>
                <li>Personalized road map following the assessment.</li>
                <li>No need to wonder where to start.</li>
            </ul>
        },
        {title: "Distributed Practice", text:
            <ul style={{"font-size": "1rem", "line-height": "2rem"}} className="mx-auto">
                <li>Precision practice of selected questions.</li>
                <li>Distributed learning strategy to enhance your understanding of the concepts.</li>
                <li>Better Retention.</li>
            </ul>
        }, 
        {title: "Track Your Progress", text:
            <ul style={{"font-size": "1rem", "line-height": "2rem"}} className="mx-auto">
                <li>Manage and track your progress as you use our platform.</li>
                <li>See a visualization of your progress.</li>
                <li>Record key metrics like time taken and perceived difficulty.</li>
            </ul>
        },
    ];

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem', height: '20rem', margin: 'auto'}} key={index} className="box">
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text className="mx-auto">
                        {card.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    };

    return(


    <div className="grid d-flex align-items-center">
            <h1 style={{textAlign: "center", "font-size": '48px'}}>CODE NEXT</h1>
            <h3 style={{textAlign: "center"}}>EVERYTHING YOU NEED TO EXCEL IN YOUR NEXT SOFTWARE INTERVIEW
                IS NOW MADE AVAILABLE THROUGH CODE-NEXT.
            </h3>

        {cardInfo.map(renderCard)}

        
        <div className="mx-auto">
            <Link to="/register" style={{'padding-right': '8rem'}}>
                <Button variant="info" className="align-middle">Register Now!</Button>
            </Link>
            
            <Link to="/login">
                <Button variant="info" className="align-middle">Sign in!</Button>
            </Link>
        </div>


    </div>


    )
}

export default Landing;