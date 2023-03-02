import { useState } from "react";
import axios from 'axios';
import React from 'react';
import Container from 'react-bootstrap/Container'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export const InfoForm = (props) => {
    const [difficulty, handleDifficulty] = useState('');
    const [completion, handleCompletion] = useState('');
    const [duration, handleDuration] = useState('');

    // TODO: Refactor
    // const handleChange = (event) =>{    
    //   this.setState({value: event.target.value});  
    // }
    const handleSubmit = () => {

        // Send a request to the backend
        axios.post('http://localhost:8000/home', {
            "difficulty": difficulty,
            "completion": completion,
            "duration": duration
          })
          .then(function (response) {
            if (response.data['error']) {
              alert(response.data['error'])
            } else {
              //props.setToken(response.data['token'], response.data['user_id'])
            }
          })
          .catch(function (error) {
            alert(error);
          });

    }
    
    return(
        <Container className="pt-5 pb-5">
            <h1>Post-Question Survey</h1>

            <h4>Welcome back from your question! Now, please answer these questions so we can better tailor your experience on the app.</h4>

            <form onSubmit={handleSubmit}>
                <label htmlFor="difficulty">How difficult was the question?  </label>
                <select value={difficulty} onChange={handleDifficulty}>
                  <option value="very-easy">Very easy</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                  <option value="very-hard">Very hard</option>
                </select>
                <br></br>
                <label htmlFor="completion">Did you complete the question?  </label>
                <select value={completion} onChange={handleCompletion}>
                  <option value="qcomplete">Yes</option>
                  <option value="qnotcomplete">No</option>
                </select>
                <br></br>
                <label htmlFor="duration">If you completed the question, how long did it take you?  </label>
                <input type="number" min='1'></input>
                <select value={duration} onChange={handleDuration}>
                  <option value="seconds">seconds</option>
                  <option value="minutes">minutes</option>
                  <option value="hours">hours</option>
                </select>
                <br></br>
                

                <button
                    id="login-button"
                    type="button"
                    onClick={handleSubmit}>Submit</button>
            </form>
        </Container>
    )
}