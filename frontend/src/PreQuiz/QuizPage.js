import React from "react";
import Container from 'react-bootstrap/Container';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from "../Components/NavBar_components/NavBar"
// import QuizQuestion from "./QuizQuestion"
import GetPreProbs from '../GetPreProbs'

const queryClient = new QueryClient();

/* eslint-disable no-unused-vars */

export const QuizPage = (props) => {
  return (
        <div>
          <NavBar/>
          <Container className="pt-5 pb-5">
          <h1 className="display-1">Welcome to the Pre-Quiz! </h1>
          <h3>We will determine what problems to assign to you using this quiz</h3>
          <p>Click on start to start a problem.
            Please answer these questions to the best of your ability.</p>
            <QueryClientProvider client={ queryClient }>
              <GetPreProbs />
            </QueryClientProvider>
            {/* <QuizQuestion name="Problem 1" desc="Problem Description"/>
            <QuizQuestion name="Problem 3" desc="Problem Description"/>
            <QuizQuestion name="Problem 3" desc="Problem Description"/> */}
          </Container>
        </div>
        
  );
}

export default QuizPage;
/* eslint-enable no-unused-vars */