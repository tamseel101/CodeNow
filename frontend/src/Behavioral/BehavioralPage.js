import React from "react";
import Container from 'react-bootstrap/Container';
// import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from "../Components/NavBar_components/NavBar"

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
          </Container>
        </div>
        
  );
}

export default BehavioralPage;
/* eslint-enable no-unused-vars */