import React from "react";
import Container from 'react-bootstrap/Container';
// import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from "../Components/NavBar_components/NavBar"
import BehavioralQuestion from './BehavioralQuestion';

// const queryClient = new QueryClient();

/* eslint-disable no-unused-vars */

export const BehavioralPage = (props) => {
  return (
        <div>
          <NavBar/>
          <Container className="pt-5 pb-5">
          <h1 className="display-1">Welcome to Behavioral Questions! </h1>
          <h3>Here you will be given common behavioral questions asked during interviews. </h3>
          <p>These are slightly different from questions on your dashboard.
            To answer these questions, think of your past experiences and what you have learned.</p>
          <p>Remember to use the STAR method</p>
            <BehavioralQuestion name="Tight Deadline" desc="How do you accomplish tasks when under a tight deadline? Give me an example."/>
            <BehavioralQuestion name="Long Term Project Management" desc="Describe a long-term project you managed. How did you make sure everything was running smoothly?"/>
            <BehavioralQuestion name="Overwhelming Responsibilities" desc="Sometimes, it’s almost impossible to get everything done on your to-do list. What do you do when your list of responsibilities becomes overwhelming?"/>
            <BehavioralQuestion name="Personal Goals" desc="Tell me about a time you set a personal goal for yourself. How did you ensure you would meet your objectives and what steps did you take?"/>
          </Container>

          
        </div>
        
        
  );
}

export default BehavioralPage;
/* eslint-enable no-unused-vars */