import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import axios from "axios"
// import { QueryClient } from 'react-query';
// import GetPreProbs from '../GetPreProbs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './quizpage.css'
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClipboardCheck} from '@fortawesome/free-solid-svg-icons';

export const QuizPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [sliderValues, setSliderValues] = useState([2, 2, 2, 2, 2]);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [modalText, setModalText] = useState('');
    const navigate = useNavigate();

    const [isStarted, setIsStarted] = useState(false);

    const handleStart = () => {
        setIsStarted(true);
    };
    const handleSaveAndContinue = () => {
        if (currentQuestion < 5) {
            setCurrentQuestion(currentQuestion + 1);
        } else if (currentQuestion === 5) {
            setCurrentQuestion(6);
        } else {
            setShowModal(true);
            setSubmitted(true);
            setModalText("Thank you!");
        }
    };

    const submitQuiz = () => {
        setShowModal(false)
        axios.put('http://localhost:8000/confidence/skill_assessment/', {
            "user": '',
            "arrays": sliderValues[0] * 20, //// multiply these
            "linked_lists": sliderValues[1] * 20,
            "stack": sliderValues[2] * 20,
            "heaps": sliderValues[3] * 20,
            "trees": sliderValues[4] * 20
        })
            .then(function (response) {
                console.log(response);
                console.log("testing")
                if (response.data['error']) {
                    alert(response.data['error'])
                } else {
                    navigate("/")
                }
            })
            .catch(function (error) {
                console.log(error.response.data)
                alert(error.response.data)
            });
    }

    const handleBackToQuestion = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSliderChange = (index, value) => {
        const newSliderValues = [...sliderValues];
        newSliderValues[index] = value;
        setSliderValues(newSliderValues);
    };


    const renderModalTitle = () => {
        switch (currentQuestion) {
            case 1:
                return 'Question 1';
            case 2:
                return 'Question 2';
            case 3:
                return 'Question 3';
            case 4:
                return 'Question 4';
            case 5:
                return 'Question 5';
            default:
                return '';
            case 6:
                return 'Assessment complete!';
        }
    };

    const renderModalBody = () => {
        if (submitted) {
            return (
                <div>
                    <p>{modalText}</p>
                </div>
            );
        }
        switch (currentQuestion) {
            case 1:
                return (
                    <>
                        <p>How experienced are you with Arrays?</p>
                        <div className="slider-container">
                            <span className="slider-label">Not experienced </span>
                            <input type="range" min="0" max="4" value={sliderValues[0]} className="slider"
                                   id={"stack-knowledge-slider-" + currentQuestion}
                                   onChange={(event) => handleSliderChange(0, parseInt(event.target.value))}/>
                            <span className="slider-label"> Very experienced</span>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <p>How experienced are you with Linked Lists?</p>
                        <div className="slider-container1">
                            <span className="slider-label">Not experienced </span>
                            <input type="range" min="0" max="4" value={sliderValues[1]} className="slider"
                                   id={"stack-knowledge-slider-" + currentQuestion}
                                   onChange={(event) => handleSliderChange(1, parseInt(event.target.value))}/>
                            <span className="slider-label"> Very experienced</span>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <p>How experienced are you with Stacks?</p>
                        <div className="slider-container2">
                            <span className="slider-label">Not experienced </span>
                            <input type="range" min="0" max="4" value={sliderValues[2]} className="slider"
                                   id={"stack-knowledge-slider-" + currentQuestion}
                                   onChange={(event) => handleSliderChange(2, parseInt(event.target.value))}/>
                            <span className="slider-label"> Very experienced</span>
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <p>How experienced are you with Heaps?</p>
                        <div className="slider-container3">
                            <span className="slider-label">Not experienced </span>
                            <input type="range" min="0" max="4" value={sliderValues[3]} className="slider"
                                   id={"stack-knowledge-slider-" + currentQuestion}
                                   onChange={(event) => handleSliderChange(3, parseInt(event.target.value))}/>
                            <span className="slider-label"> Very experienced</span>
                        </div>
                    </>
                );
            case 5:
                return (
                    <>
                        <p>How experienced are you with Trees?</p>
                        <div className="slider-container4">
                            <span className="slider-label">Not experienced </span>
                            <input type="range" min="0" max="4" value={sliderValues[4]} className="slider"
                                   id={"stack-knowledge-slider-" + currentQuestion}
                                   onChange={(event) => handleSliderChange(4, parseInt(event.target.value))}/>
                            <span className="slider-label"> Very experienced</span>
                        </div>
                    </>
                );
            case 6:
                return (
                    <>
                        <p>You have completed the quiz!</p>
                        <Button onClick={() => submitQuiz()}>Close</Button>
                    </>
                );


            default:
                return '';
        }
    };


    return (
        <>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <FontAwesomeIcon icon={faClipboardCheck} size="10x"/>
            </div>
            <br></br>
            <Container className="d-flex justify-content-center align-items-center flex-column pt-5 pb-5"
                       style={{backgroundColor: '#F5F5F5', padding: '50px'}}>
                <h1 className="display-1 text-center mb-4">Welcome to the Pre-Assessment! </h1>
                <h3 className="text-center mb-4">We will use this assessment to identify which problems to assign to
                    you!</h3>
                {/* <Button variant="primary" onClick={handleStart}>Start</Button> */}
                {!isStarted && (
                    <div className="start-button-container"
                         style={{display: "grid", justifyContent: "center", alignItems: "center"}}>
                        <p className="text-center mb-4">To begin the assessment, simply click on the Start button.
                            Please answer these questions to the best of your ability.</p>
                        <Button
                            variant="primary"
                            onClick={() => {
                                handleStart();
                                setShowModal(true);
                            }}
                            className={submitted ? "hidden" : ""}
                        >
                            Start Assessment
                        </Button>
                    </div>

                )}

                {/* <QueryClientProvider client={ queryClient }>
          <GetPreProbs />
        </QueryClientProvider> */}
            </Container>

            <Modal show={showModal} onHide={() => {
            }} centered className="fade">
                <Modal.Header closeButton={!currentQuestion === 1}>
                    <Modal.Title>{renderModalTitle()}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {renderModalBody()}
                </Modal.Body>
                <Modal.Footer>
                    {currentQuestion > 1 && currentQuestion !== 6 && (
                        <Button variant="secondary" onClick={handleBackToQuestion}>Back to
                            Question {currentQuestion - 1}</Button>
                    )}
                    {currentQuestion < 5 ? (
                        <Button variant="primary" onClick={handleSaveAndContinue}>Save and Continue</Button>
                    ) : (
                        currentQuestion === 6 ? null :
                            <Button variant="primary" onClick={() => handleSaveAndContinue(false)}>Submit</Button>
                    )}


                </Modal.Footer>
            </Modal>
            <style type="text/css">
                {`
          .modal-backdrop.show {
            opacity: 1 !important;
          }
        `}
            </style>
        </>
    );
};

export default QuizPage;
