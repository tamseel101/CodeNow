import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Col, Row} from 'react-bootstrap';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import useToken from '../hooks/useToken';
import { Link } from "react-router-dom";


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


function Attempt() {
    const location = useLocation();

    const {token} = useToken()
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;

    // states
    const [message, setMessage] = useState("");

    // form validation state
    const [completedValidation, setCompletedValidation] = useState(null);
    const [timeTakenValidation, setTimeTakenValidation] = useState(null);
    const [difficultyValidation, setDifficultyValidation] = useState(null);


    // Completion
    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = event => {
        setSelectedOption(event.target.value);
    };

    // Time taken
    const [timeTaken, setTimeTaken] = useState(null)

    const handleTimeTakenChange = (e) => {
        setTimeTaken(e.target.value)
    }

    // Difficulty
    const [difficulty, setDifficulty] = useState(null)

    const handleDifficultyChange = (e) => {

        const diff = e.target.value;
        let difficulty = "EASY"

        if (diff <= 2) {
            difficulty = "EASY"
        } else if (diff <= 4) {
            difficulty = "MEDIUM"
        } else {
            difficulty = "HARD"
        }

        setDifficulty(difficulty)
    }

    const sendAttempt = () => {
        // Validation
        let hasError = false;
        if (selectedOption === "") {
          setCompletedValidation(false);
          hasError = true;
        } else {
          setCompletedValidation(true);
        }

        if (!timeTaken || isNaN(timeTaken)) {
          setTimeTakenValidation(false);
          hasError = true;
        } else {
          setTimeTakenValidation(true);
        }

        if (!difficulty) {
          setDifficultyValidation(false);
          hasError = true;
        } else {
          setDifficultyValidation(true);
        }

        if (hasError) {
          return;
        }

        // Send a request to the backend
        const url = "http://localhost:8000/problems/" + location.state.problem_id + "/attempts/";
        axios.post(url, {
          "perceived_difficulty": difficulty,
          "time_taken": parseInt(timeTaken),
          "completed": selectedOption
        })
        .then(function (response) {
          if (response.data['error']) {
            console.log(response.data['error'])
          } else {
            if (response.data['error']) {
              setMessage(response.data['error']);
            } else {
              setMessage(
                <>
                  Good job! Your attempt was successfully tracked 🙌. Would you like to{" "}
                  <Link to="/"><span className='fw text-primary'>go back and try more problems</span></Link>?
                </>
              );
            }
          }
        })
        .catch(function (error) {
          alert(error);
        });
      };




    return (

        <div>

            <div className="container mt-4">

                <section className='Question'>
                    <h1 className='fw-bold'>Are you done?</h1>

                    {message && <div className='alert alert-success'>{message}</div>}

                    <p>
                        If you have successfully attempted the given problem,
                        It is now time to go over a few questions to track your progress!
                    </p>
                </section>

                <div className='form'>

                    <div className="mb-3">
                        <Form.Label>Did you manage to complete this question?</Form.Label>

                        <Form.Select
                        value={selectedOption}
                        onChange={handleChange}
                        isInvalid={completedValidation === false}
                        required>
                        <option value="">Select</option>
                        <option value="True">Yes</option>
                        <option value="False">No</option>
                      </Form.Select>

                      {completedValidation === false && (
                        <Form.Control.Feedback type="invalid">
                          Please select an option
                        </Form.Control.Feedback>
                      )}

                    </div>


                    <div className='mb-3'>
                        <Form.Label>How long did you take to complete the question? (Minutes)</Form.Label>
                        <Form.Control
                            type="numeric"
                            placeholder="10"
                            onChange={handleTimeTakenChange}
                            isInvalid={timeTakenValidation === false}
                            required
                            />

                            {timeTakenValidation === false && (
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid time
                            </Form.Control.Feedback>
                            )}
                    </div>


                    <div className="mb-3">
                        <Form.Label>How dificult was this question for you?</Form.Label>
                        <Row>
                            <Col>Easy</Col>
                            <Col sm={10}>


                                <Form.Range
                                min="1"
                                max="5"
                                onChange={handleDifficultyChange}
                                isInvalid={difficultyValidation === false}
                                required
                                />


                            </Col>
                            <Col>Hard</Col>

                            {difficultyValidation === false && (
                                <p className="text-danger">
                                Please select a difficulty level
                                </p>
                                )}
                        </Row>


                    </div>

                    <div className="mb-3">
                        <a className="nav-link active" aria-current="page">
                            <button className="btn btn-primary mb-4" onClick={sendAttempt}>Done</button>
                        </a>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Attempt;
