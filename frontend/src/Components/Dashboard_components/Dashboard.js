import React from "react";
import Container from 'react-bootstrap/Container';
import LeetQuestion from "../LeetQuestion_components/LeetQuestion";

export const Dashboard = (props) => {
  return (
        <Container className="pt-5 pb-5">
          <h1 className="display-1">Hi {props.name}</h1>
          <h3>Here are your problems for today</h3>
          <LeetQuestion name="Sample" desc="Sample Description"/>
          <LeetQuestion name="Sample" desc="Sample Description"/>
          <LeetQuestion name="Sample" desc="Sample Description"/>
          <LeetQuestion name="Sample" desc="Sample Description"/>
          <LeetQuestion name="Sample" desc="Sample Description"/>
          <LeetQuestion name="Sample" desc="Sample Description"/>
          <LeetQuestion name="Sample" desc="Sample Description"/>
        </Container>
  );
}

export default Dashboard;