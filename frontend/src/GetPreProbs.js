import React from "react";
import QuizQuestion from './PreQuiz/QuizQuestion'
import { useQuery } from 'react-query';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const GetPreProbs = () => {

    const { data:problems, status } = useQuery('prequiz', async () => {
        const { data:problems } = await axios.get('http://localhost:8000/problems/prequiz_problems/');
        console.log(problems['prequiz'])
        return problems['prequiz']
      });


  return (
    <div>
    {status === 'loading' && <div>Loading...</div>}
    {status === 'error' && <div>Error</div>}
    {status === 'success' && (
        <ul>
            {problems.map(problem => (
                <QuizQuestion
                  name={problem.problem_name}
                  url={problem.leetcode_url}
                  desc={problem.difficulty_level}
                  problem_id={problem.id}
                  key={problem.id}
                />
            ))}
        </ul>
    )}
</div>
  );
}

export default GetPreProbs;