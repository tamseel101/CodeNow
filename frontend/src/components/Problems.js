import React, { useState, useEffect } from "react";
import LeetQuestion from "./leet_question/LeetQuestion";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export const Problems = () => {
  const [problems, setProblems] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const { data: problemsData } = await axios.get(
          "http://localhost:8000/problems/recommended/"
        );
        setProblems(problemsData["results"]);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    };

    fetchProblems();
  }, []);

  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error</div>}
      {status === "success" && (
        <ul>
          {problems.map((problem) => (
            <LeetQuestion
              name={problem.name}
              url={problem.leetcode_url}
              desc={problem.difficulty}
              problem_id={problem.id}
              key={problem.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Problems;
