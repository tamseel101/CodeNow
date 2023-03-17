import React from "react";
import LeetQuestion from "./Components/LeetQuestion_components/LeetQuestion";
import { useQuery } from 'react-query';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const Problems = () => {

    const { data:problems, status } = useQuery('prequiz', async () => {
        const { data:problems } = await axios.get('http://localhost:8000/problems/recommended/');
        return problems['results']
      });


  return (
    <div>
    {status === 'loading' && <div>Loading...</div>}
    {status === 'error' && <div>Error</div>}
    {status === 'success' && (
        <ul>
            {problems.map(problem => (
                <LeetQuestion
                  name={problem.name}
                  url={problem.leetcode_url}
                  desc={problem.difficulty}
                  problem_id={problem.id}
                  key={problem.id}
                />
            ))}
        </ul>
    )}
</div>
  );
}

export default Problems;
