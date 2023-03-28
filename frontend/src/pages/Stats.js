import React from "react";
import Container from 'react-bootstrap/Container';
import Spotlight from "../components/stats/Spotlight";
import Progress from "../components/stats/Progress";
import Achievements from "../components/stats/Achievements";
import {Col, Row} from 'react-bootstrap';
// import * as All from '../imgs';

// import {QueryClient, QueryClientProvider} from 'react-query';

// const queryClient = new QueryClient();

/* eslint-disable no-unused-vars */
//let username = JSON.parse(sessionStorage.getItem("username"))


export const Stats = () => {

    return (
        <div>
            <Container className="pt-5 pb-5"> {/* cards for highest skill, total time coding, average time coding, etc */}
                <h1 className="display-1">Statistics</h1>
                <h3>This page contains your statistics, progress in each skill, and achievements.</h3>
                <div className="row mt-1 mb-1">
                    {/* <Col sm={10}> */}
                        <Row style={{height: '25rem'}} className="text-center mb-5">
                            <Col sm={4}>
                                <Spotlight
                                    name={"Highest Skill"}
                                    desc={"Your highest skill is: "} // get highest skill from a user query
                                />
                            </Col>
                            <Col sm={4}>
                                <Spotlight
                                    name={"Total Time Coding"}
                                    desc={"Your total time spent coding is: "} // get time spent from an attempt query
                                />
                            </Col>
                            <Col sm={4}>
                                <Spotlight
                                    name={"Average Time Coding"}
                                    desc={"Your average time spent coding a problem is: "} // find problems attempted
                                />
                            </Col>
                        </Row>
                    {/* </Col> */}
                </div>
                <div className="row mt-1 mb-1">
                <h3>Skill Progress</h3>
                <div className="row mt-1">
                    {/* <Col sm={10}> */}
                        <Row style={{height: '65rem'}} className="text-center">
                            <Progress
                                name={"Skill 1"}
                            />
                            <Progress
                                name={"Skill 2"}
                            />
                            <Progress
                                name={"Skill 3"}
                            />
                            <Progress
                                name={"Skill 4"}
                            />
                            <Progress
                                name={"Skill 5"}
                            />
                        </Row>
                    {/* </Col> */}
                </div>
                </div>
                <div className="row mt-1 mb-1">
                <h3>Achievements</h3>
                <div className="row mt-1">
                    {/* <Col sm={10}> */}
                        <Row style={{height: '20rem'}} className="mb-5">
                            <Achievements
                                name={"First!"}
                                desc={"Sign up for CodeNext"} // get highest skill from a user query
                                // img={"one.png"}
                            />
                            <Achievements
                                name={"Powerhouse"}
                                desc={"Spend 1000 minutes coding"} // get time spent from an attempt query
                                // img={"powerhouse.jpg"}
                            />
                            <Achievements
                                name={"Overdrive!"}
                                desc={"Complete all skills to 100%"} // find problems attempted
                                // img={"flame.png"}
                            />
                        </Row>
                    {/* </Col> */}
                </div>
                </div>
            </Container>
        </div>

    );
}

export default Stats;
/* eslint-enable no-unused-vars */