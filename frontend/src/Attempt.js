import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


/* eslint-disable no-unused-vars */
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

      <div>

        <div className="container mt-4">

          <section className='Question'>
            <h1 className='fw-bold'>Are you done?</h1>
            <p>
                If you have successfully attempted the given problem,
                It is now time to go over a few questions to track your progress!
            </p>
          </section>

          <div className='form'>

          <div className="mb-3">
            <Form.Label>Did you manage to complete this question?</Form.Label>

            <Form.Select value={selectedOption} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </Form.Select>
          </div>


          <div className='mb-3'>
            <Form.Label>How long did you take to complete the question? (Minutes)</Form.Label>
            <Form.Control type="numeric" placeholder="10" required onChange={handleTimeTakenChange}/>
          </div>


          <div className="mb-3">
            <Form.Label>How dificult was this question for you?</Form.Label>
            <Row>
                <Col>Easy</Col>
                <Col sm={10}><Form.Range min="1" max="5" required onChange={handleDifficultyChange}/></Col>
                <Col>Hard</Col>
            </Row>
          </div>

          <div className="mb-3">
          <a className="nav-link active" aria-current="page" href="/"><button className="btn btn-primary mb-4" onClick={sendAttempt}>Done</button></a>
          </div>

          </div>

        </div>

      </div>
  )
}

export default Attempt;
/* eslint-enable no-unused-vars */
