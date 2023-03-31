import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Spotlight from "../components/stats/Spotlight";
import Progress from "../components/stats/Progress";
import Achievements from "../components/stats/Achievements";
import {Col, Row} from 'react-bootstrap';
import useToken from '../Hooks/useToken';
// import * as All from '../imgs';


/* eslint-disable no-unused-vars */
let username = JSON.parse(sessionStorage.getItem("username"))


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'



export const Stats = () => {
    const {token} = useToken()
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;

    const [s, setS] = useState([]);
    const [achievements, setAchievements] = useState([]);
    // const [getMaxSkill, getSkill] = useState("");
    // const [numMax, getNumMax] = useState(0);

    console.log(s)
    console.log(achievements)
  
    useEffect(() => {
        // this should be the url to get all confidences
        const fetchSkills = async () => {
            try {
              const {data: skillsData} = await axios.get(
                "http://localhost:8000/confidence/skill_assessment/"
              );
              console.log("data:")
              console.log(Object.entries(skillsData))
              setS(Object.entries(skillsData));
            } catch (error) {
                console.log(error)
            }
          };
      
        fetchSkills();
    }, []);

    useEffect(() => {
        // this should be the url to get all user achievements
        axios.get('http://localhost:8000/achievements/list-achievement/')
        .then(response => setAchievements(response.achievements))
        .catch(error => console.log(error));

        const fetchAchieve = async () => {
            try {
              const {data: achieveData} = await axios.get(
                "http://localhost:8000/achievements/list-achievement/"
              );
              console.log("data:")
              console.log(Object.entries(achieveData))
              setAchievements(Object.entries(achieveData));
            } catch (error) {
                console.log(error)
            }
          };
      
        fetchAchieve();
    }, []);

    function getMax(skills) {
        // this should be the url to get all user achievements
        var maxSkill = ['', 0];
        console.log(skills.length)
        for (var i = 0; i < skills.length; i++) {
            console.log(skills[i][1])
            if (maxSkill[1] < Number(skills[i][1])) {
                maxSkill = skills[i]
                console.log("i")
                console.log(skills[i])
            }
        }
        console.log("called")
        console.log(maxSkill)
        return maxSkill
    }

    function getCount(skills) {
        // this should be the url to get all user achievements
        var num = 0;
        for (var i = 0; i < skills.length; i++) {
            if (100 == skills[i][0]) { // count should be max possible of skill
                num += 1
            }
        }
        return num
    }

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
                                    stat={getMax(s)[0]} // fix this to say the name
                                />
                            </Col>
                            <Col sm={4}>
                                <Spotlight
                                    name={"Highest Proficiency"}
                                    desc={"The proficiency of your highest skill is: "} // get time spent from an attempt query
                                    stat={getMax(s)[1]}
                                />
                            </Col>
                            <Col sm={4}>
                                <Spotlight
                                    name={"Number of Skills Maxxed Out"}
                                    desc={"The number of skills you've maxxed out is: "} 
                                    stat={getCount(s)}
                                />
                            </Col>
                        </Row>
                </div>
                {/* <div>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error</div>}
      {status === "success" && (
        <ul>
          {problems.map((problem) => (
            <LeetQuestion
              name={problem.name}
              url={problem.leetcode_url}
              difficulty={problem.difficulty}
              problem_id={problem.id}
              key={problem.id}
              categories={problem.categories}
            />
          ))}
        </ul>
      )}
    </div> */}
                <div className="row mt-1 mb-1">
                <h3>Skill Progress</h3>
                <div className="row mt-1">
                        <ul>
                            {s.map((skill) => (
                                <Progress
                                    key={skill[0]}
                                    name={skill[0]}
                                    value={skill[1]}
                                />

                            ))}
                        </ul>
                </div>
                </div>
                <div className="row mt-1 mb-1">
                <h3>Achievements</h3>
                <div className="row mt-1">
                        <ul>
                            {achievements.map(achievement => (
                                <Achievements
                                    key={achievement.id}
                                    name={achievement.name}
                                    desc={achievement.desc}
                                    // img={achievement.image}
                                />

                            ))}
                        </ul>
                </div>
                </div>
            </Container>
        </div>

    );
}

export default Stats;
/* eslint-enable no-unused-vars */