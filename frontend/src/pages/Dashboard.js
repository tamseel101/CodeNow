import axios from "axios";
import React from "react";
import Container from 'react-bootstrap/Container';
import Problems from "../components/Problems";
import useToken from "../hooks/useToken";

/* eslint-disable no-unused-vars */
//let username = JSON.parse(sessionStorage.getItem("username"))


export const Dashboard = () => {

    const {token} = useToken()
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;

    return (
        <div>
            <Container className="pt-5 pb-5">
                <h1 className="display-1">Hello!</h1>
                <h3>Here are your recommended problems for today.</h3>
                <p>Click on the Code Next button to start a problem.
                    Then come back to this page to track your progress.</p>
                    <Problems/>
            </Container>
        </div>

    );
}

export default Dashboard;
/* eslint-enable no-unused-vars */