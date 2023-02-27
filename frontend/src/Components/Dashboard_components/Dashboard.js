import React from "react";
import Container from 'react-bootstrap/Container';
import LeetQuestion from "../LeetQuestion_components/LeetQuestion";
import Problems from "../../Problems";
import { QueryClient, QueryClientProvider } from 'react-query';
import LogoutButton from "../logoutButton";

const queryClient = new QueryClient();


export const Dashboard = (props) => {
  return (
        <Container className="pt-5 pb-5">
          <h1 className="display-1">Hello! </h1>
          <h3>Here are your problems for today</h3>
          <p>Click on start to start a problem.
            Then come back to this page track progress.</p>
            <QueryClientProvider client={ queryClient }>
              <Problems />
            </QueryClientProvider>
        </Container>
  );
}

export default Dashboard;