// npm install react-bootstrap bootstrap + import added to App.js
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Box.css";
import React from "react";
import { Link } from "react-router-dom";

export const Landing = (props) => {
    const cardInfo = [
        {title: "Tailored Plan", text: 
            <ul>
                <li>Assessment to dictate concepts you need a better understanding.</li>
                <li>Personalized road map following the assessment.</li>
                <li>No need to wonder where to start.</li>
            </ul>
        },
        {title: "Distributed Practice", text:
            <ul>
                <li>Precision practice of selected questions.</li>
                <li>Distributed learning strategy to enhance your understanding of the concepts.</li>
                <li>Better Retention.</li>
            </ul>
        }, 
        {title: "Track Your Progress", text:
            <ul>
                <li>Manage and track your progress as you use our platform.</li>
                <li>See a visualization of your progress.</li>
                <li>Record key metrics like time taken and perceived difficulty.</li>
            </ul>
        },
    ];

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index} className="box">
                <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                    {card.text}
                </Card.Text>
                </Card.Body>
            </Card>
        );
    };

    return(


    <div className="grid d-flex align-items-center">
            <h1 style={{textAlign: "center"}}>CODE NEXT</h1>
            <h3 style={{textAlign: "center"}}>EVERYTHING YOU NEED TO EXCEL IN YOUR NEXT SOFTWARE INTERVIEW
                IS NOW MADE AVAILABLE THROUGH CODE-NEXT.
            </h3>

        {cardInfo.map(renderCard)}

        <Link to="/register" className="mx-auto">
            <Button variant="info" className="mx-auto" onClick={"http://localhost:3000/signup"}>
                <p>Register Now!</p>
            </Button>
        </Link>
        
        <Link to="/login" className="mx-auto">
            <Button variant="info" className="mx-auto">
                <p>Already Have an account? Sign in!</p>
            </Button>
        </Link>


    </div>


    )
}