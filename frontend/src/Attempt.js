import React from 'react';
import { useState } from 'react';
import './Questions.css'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'



function Attempt({route, navigation}) {
  const location = useLocation();

    const[active, setActive] = useState("SecondCard")
    const [showButton, setShowButton] = useState(false);

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
    const [difficulty, setDifficulty] = useState(3)

    const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value)
    }

    const sendAttempt = () => {

        // Send a request to the backend
        axios.post('http://localhost:8000/problems/attempts', {
            "user_id":sessionStorage.getItem('user_id'),
            "problem_id":location.state.problem_id,
            "perceived_difficulty": difficulty,
            "time":timeTaken,
            "completed": selectedOption
          })
          .then(function (response) {
            if (response.data['error']) {
              alert(response.data['error'])
            } else {
              console.log(response.data)
              alert("Thank you! Your response was tracked.")
            }
          })
          .catch(function (error) {
            alert(error);
          });

    }
  return (
    <div id="home">
        <section>
            <div className='App'>
                <div lassName='cards'>
                    {active === "FirstCard" &&
                    <Card>
                        <section className='Main'>
                        <div>
                            <span className='home-page'></span>
                        </div>
                        <h1>Practice the Question!</h1>
                        <p>
                             Get ready to tackle some mind-bending questions and unleash your coding potential!
                             Before you start, here are a few things you should know:
                        </p>
                        <ul>
                            <li>Read the instructions and problem statement carefully for the question.</li>
                            <li>You can use any programming language you are comfortable with to solve the question.</li>
                            <li>There is no time limit, so take your time and think through your solution</li>
                            <li>Once you have completed a question, come back to this page and stop the timer! You will be promted with a few questions for us to track your progress!</li>
                        </ul>
                        </section>

                    </Card>}
                    {active === "SecondCard" &&
                    <Card>
                        <section className='Question'>
                            <h1>Are you done?</h1>
                            <p>
                                If you have successfully attempted the given problem,
                                It is now time to go over a few questions to track your progress!
                            </p>
                        </section>
                        <>

                                <div className='form'>
                                    <label className='Q1'>
                                    <Form.Label>Did you manage to complete this question?</Form.Label>

                                        <Form.Select value={selectedOption} onChange={handleChange} required>
                                        <option value="">Click to Select Yes or No</option>
                                        <option value="True">Yes</option>
                                        <option value="False">No</option>
                                      </Form.Select>

                                    </label>
                                    <br></br>
                                    <label className='Q2'>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>How long did you take to complete the question? (Minutes)</Form.Label>
                                        <Form.Control type="numeric" placeholder="10" required onChange={handleTimeTakenChange}/>
                                      </Form.Group>

                                    </label>
                                    <br></br>
                                    <label className='Q3'>
                                            <Form.Label>How dificult was this question for you?</Form.Label>
                                            <Row>
                                                <Col>Easy</Col>
                                                <Col  sm={8}><Form.Range min="1" max="5" required onChange={handleDifficultyChange}/></Col>
                                               <Col><span>Hard</span></Col>
                                            </Row>

                                    </label>
                                    <br></br>
                                    <button class="mb-4"
                                        onClick={sendAttempt}>Done</button>
                                </div>

                        </>
                    </Card>}
                    <nav>
                        {showButton && (
                            <a href="https://leetcode.com/problems/two-sum/" target="_blank" rel="noreferrer">
                            <button onClick={() => {
                              setActive("SecondCard");
                              setShowButton(false);
                            }}>
                              Start
                            </button>
                          </a>

                        )}
                    </nav>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Attempt;