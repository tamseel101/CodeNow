import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from "../Components/NavBar_components/NavBar";
import GetPreProbs from '../GetPreProbs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './prequiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';


const queryClient = new QueryClient();

export const QuizPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [sliderValues, setSliderValues] = useState([2, 2, 2, 2, 2]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [modalText, setModalText] = useState('');


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
      setModalText("WOOHOO thanks");
    }
  };
  

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
        return 'WOOHOO! >.<';
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
            <p>How well do you know Arrays?</p>
            <div className="slider-container">
              <span className="slider-label">No experience </span>
              <input type="range" min="0" max="4" value={sliderValues[0]} className="slider" id={"stack-knowledge-slider-" + currentQuestion} onChange={(event) => handleSliderChange(0, parseInt(event.target.value))} />
              <span className="slider-label"> Experienced</span>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <p>How well do you know Linked Lists?</p>
            <div className="slider-container1">
              <span className="slider-label">No experience </span>
              <input type="range" min="0" max="4" value={sliderValues[1]} className="slider" id={"stack-knowledge-slider-" + currentQuestion} onChange={(event) => handleSliderChange(1, parseInt(event.target.value))} />
              <span className="slider-label"> Experienced</span>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <p>How well do you know Stacks?</p>
            <div className="slider-container2">
              <span className="slider-label">No experience </span>
              <input type="range" min="0" max="4" value={sliderValues[2]} className="slider" id={"stack-knowledge-slider-" + currentQuestion} onChange={(event) => handleSliderChange(2, parseInt(event.target.value))} />
              <span className="slider-label"> Experienced</span>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <p>How well do you know Priority Queues?</p>
            <div className="slider-container3">
              <span className="slider-label">No experience </span>
              <input type="range" min="0" max="4" value={sliderValues[3]} className="slider" id={"stack-knowledge-slider-" + currentQuestion} onChange={(event) => handleSliderChange(3, parseInt(event.target.value))} />
              <span className="slider-label"> Experienced</span>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <p>How well do you know Trees?</p>
            <div className="slider-container4">
              <span className="slider-label">No experience </span>
              <input type="range" min="0" max="4" value={sliderValues[4]} className="slider" id={"stack-knowledge-slider-" + currentQuestion} onChange={(event) => handleSliderChange(4, parseInt(event.target.value))} />
              <span className="slider-label"> Experienced</span>
            </div>
          </>
        );
      case 6:
          return (
            <>
              <p>You have completed the quiz!</p>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </>
          );
        
     
      default:
        return '';
    }
  };
  

  return (
    <>
    
      <NavBar/>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <FontAwesomeIcon icon={faClipboardCheck} size="10x" />
      </div>
      <br></br>
      <Container className="d-flex justify-content-center align-items-center flex-column pt-5 pb-5" style={{ backgroundColor: '#F5F5F5', padding: '50px' }}>
        <h1 className="display-1 text-center mb-4">Welcome to the Pre-Quiz! </h1>
        <h3 className="text-center mb-4">We will use this quiz to identify which problems to assign to you!</h3>
        {/* <Button variant="primary" onClick={handleStart}>Start</Button> */}
        {!isStarted && (
        <div className="start-button-container" style={{display: "grid", justifyContent: "center", alignItems: "center"}}>
          <p className="text-center mb-4">To begin the quiz, simply click on the Start button. Please answer these questions to the best of your ability.</p>
          <Button
            variant="primary"
            onClick={() => {
              handleStart();
              setShowModal(true);
            }}
            className={submitted ? "hidden" : ""}
          >
            Start Prequiz
          </Button>
      </div>
      
      )}
       
        <QueryClientProvider client={ queryClient }>
          <GetPreProbs />
        </QueryClientProvider>
      </Container>
    
      <Modal show={showModal} onHide={() => {}} centered className="fade">
        <Modal.Header closeButton={!currentQuestion === 1}>
          <Modal.Title>{renderModalTitle()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {renderModalBody()}
        </Modal.Body>
        <Modal.Footer>
        {currentQuestion > 1 && currentQuestion !== 6 && (
          <Button variant="secondary" onClick={handleBackToQuestion}>Back to Question {currentQuestion - 1}</Button>
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
