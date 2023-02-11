import React from "react";
import Container from 'react-bootstrap/Container';
import LeetQuestion from "./Components/LeetQuestion_components/LeetQuestion";
import { useQuery } from 'react-query';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const Problems = (props) => {

    const { data:problems, status } = useQuery('problems', async () => {
        const { data:problems } = await axios.get('http://localhost:8000/problems/');
        console.log(problems['problems'])
        return problems['problems']
      });


  return (
    <div>
    {status === 'loading' && <div>Loading...</div>}
    {status === 'error' && <div>Error</div>}
    {status === 'success' && (
        <ul>
            {problems.map(problem => (
                <LeetQuestion
                  name={problem.problem_name}
                  url={problem.leetcode_url}
                  desc={problem.difficulty_level}
                  problem_id={problem.id}
                />
            ))}
        </ul>
    )}
</div>
  );
}

export default Problems;
