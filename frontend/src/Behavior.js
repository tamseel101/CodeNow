import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
// import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


/* eslint-disable no-unused-vars */
function Behavior({route, navigation}) {
  const location = useLocation();

    const[active, setActive] = useState("SecondCard")
    const [showButton, setShowButton] = useState(false);

    // // Completion
    // const [selectedOption, setSelectedOption] = useState('');
    // const handleChange = event => {
    //     setSelectedOption(event.target.value);
    //   };

    // // Time taken
    // const [timeTaken, setTimeTaken] = useState(null)

    // const handleTimeTakenChange = (e) => {
    //     setTimeTaken(e.target.value)
    // }

    // // Difficulty
    // const [difficulty, setDifficulty] = useState(3)

    // const handleDifficultyChange = (e) => {
    //     setDifficulty(e.target.value)
    // }

    // possibly implement in next sprint or second part
    // const sendAttempt = () => {

    //     // Send a request to the backend. Not yet since this is just 'reflecting' on question for now
    //     axios.post('http://localhost:8000/problems/attempts', {
    //         "user_id":sessionStorage.getItem('user_id'),
    //         "problem_id":location.state.problem_id,
    //         "perceived_difficulty": difficulty,
    //         "time":timeTaken,
    //         "completed": selectedOption
    //       })
    //       .then(function (response) {
    //         if (response.data['error']) {
    //           alert(response.data['error'])
    //         } else {
    //           console.log(response.data)
    //           alert("Thank you! Your response was tracked.")
    //         }
    //       })
    //       .catch(function (error) {
    //         alert(error);
    //       });

    // }
  return (

      <div>

        <div className="container mt-4">

          <section className='Question'>
            <h1 className="display-1">{location.state.behavior_name}</h1>
            <h3> {location.state.behavior_ques} </h3>
            <p>Note that these textfields are here for you to get your thoughts down, but our site will not record your responses!</p>
            <p>This is for you to reflect and organize your thoughts for the real interview!</p>
          </section>

          <div className='form'>

            <div className="mb-3">
              <Form.Label><h6>Situation</h6></Form.Label>
              <Form.Control as="textarea" rows={3}/>
            </div>

            <div className="mb-3">
              <Form.Label><h6>Task</h6></Form.Label>
              <Form.Control as="textarea" rows={3}/>
            </div>

            <div className="mb-3">
              <Form.Label><h6>Action</h6></Form.Label>
              <Form.Control as="textarea" rows={3}/>
            </div>

            <div className="mb-3">
              <Form.Label><h6>Result</h6></Form.Label>
              <Form.Control as="textarea" rows={3}/>
            </div>
          </div>

          <div className="mb-3">
          <a className="nav-link active" aria-current="page" href="/behavioral"><button className="btn btn-primary mb-4">Done</button></a>
          </div>

        </div>

      </div>
  )
}

export default Behavior;
/* eslint-enable no-unused-vars */
