import React from 'react';
import Table from 'react-bootstrap/Table';

function AttemptsTable({ attempts }) {
  if (attempts.count === 0) {
    return <p>You have never attempted this problem. 😮</p>;
  }

  return (
    <Table striped bordered hover responsive className="attempts-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Perceived Difficulty</th>
          <th>Time Taken</th>
          <th>Date Time</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {attempts.results.map((attempt, index) => (
          <tr key={attempt.id}>
            <td>{index + 1}</td>
            <td>{attempt.perceived_difficulty}</td>
            <td>{attempt.time_taken} minutes</td>
            <td>{new Date(attempt.date_time).toLocaleString()}</td>
            <td>{attempt.completed ? '✅' : '❌'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default AttemptsTable;
