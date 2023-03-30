import React from "react";
import Container from 'react-bootstrap/Container';
import Spotlight from "../components/stats/Spotlight";
import Progress from "../components/stats/Progress";
import Achievements from "../components/stats/Achievements";
import {Col, Row} from 'react-bootstrap';
// import * as All from '../imgs';

import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

/* eslint-disable no-unused-vars */
let username = JSON.parse(sessionStorage.getItem("username"))

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export const Stats = () => {

    const [skills, setSkills] = useState([]);
    const [achievements, setAchievements] = useState([]);
  
    useEffect(() => {
        // this should be the url to get all confidences
        axios.get('http://localhost:8000/problems/behavioral_problems/')
        .then(response => setSkills(response.skills))
        .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        // this should be the url to get all user achievements
        axios.get('http://localhost:8000/problems/behavioral_problems/')
        .then(response => setAchievements(response.achievements))
        .catch(error => console.log(error));
    }, []);

    //   <button onClick={() => setCount(count + 1)}>Increment</button>

    return (
        <div>
            <Container className="pt-5 pb-5"> {/* cards for highest skill, total time coding, average time coding, etc */}
                <h1 className="display-1">Statistics</h1>
                <h3>This page contains your statistics, progress in each skill, and achievements.</h3>
                <div className="row mt-1 mb-1">
                        <Row style={{height: '25rem'}} className="text-center mb-5">
                            <Col sm={4}>
                                <Spotlight
                                    name={"Highest Skill"}
                                    desc={"Your highest skill is: "} // get highest skill from a user query
                                />
                            </Col>
                            <Col sm={4}>
                                <Spotlight
                                    name={"Highest Proficiency"}
                                    desc={"The proficiency of your highest skill is: "} // get time spent from an attempt query
                                />
                            </Col>
                            <Col sm={4}>
                                <Spotlight
                                    name={"Number of Skills Maxxed Out"}
                                    desc={"The number of skills you've maxxed out is: "} 
                                />
                            </Col>
                        </Row>
                </div>
                <div className="row mt-1 mb-1">
                <h3>Skill Progress</h3>
                <div className="row mt-1">
                        <Row style={{height: '65rem'}} className="text-center">
                            {skills.map(skill => (
                                <Progress
                                    name={skill.problem_category}
                                    value={skill.level}
                                />

                            ))}
                        </Row>
                </div>
                </div>
                <div className="row mt-1 mb-1">
                <h3>Achievements</h3>
                <div className="row mt-1">
                        <Row style={{height: '20rem'}} className="mb-5">
                            {achievements.map(achievement => (
                                <Achievements
                                    name={achievement.name}
                                    desc={achievement.desc}
                                    // img={achievement.image}
                                />

                            ))}
                        </Row>
                </div>
                </div>
            </Container>
        </div>

    );
}

export default Stats;
/* eslint-enable no-unused-vars */