# sprint3.md

### Meeting

Sprint 2 planning was done after the sprint 2 retrospective meeting, which occurred on March 7, 2023

### Participants

 Abdullah, Amelia, Kyle, Melissa, Mohammad-Ali, Sana, Tamseel

### Sprint Goal

We want to adjust the existing site to better reflect the original goal, in addition to adding another planned key features to our site, behavioral questions.

The following are our improvements to our site:

- Improving UI and design of our website
- Improving backend models to better fit the needs of the current site and the planned tasks in the future

The following are our planned core features: 

- Adjusting the pre-assessment to assess the current skills on the user so they get a better understanding of their weaknesses
- A separate tab that contains behavioral questions for the user, to better prepare for behavioral questions in interviews
- Implementing a recommendation algorithm to provide the frontend with questions relevant to the user based on user performance

We want to satisfy the following user stories:

- As Suzie or Eren, I want to practice behavioural questions so that I do well in both the programming and the behaviour aspect of interviews. ([https://trello.com/c/spChsayT](https://trello.com/c/spChsayT))
- As Ariel, I want to be able to showcase and guide CodeNext regarding my strengths and weaknesses through an easy to follow MCQ styled assessment upon sign-up. ([https://trello.com/c/byS1Goop](https://trello.com/c/byS1Goop))
- As Ariel, Suzie, or Eren, I want to practice Leetcode questions with the topics I am weak in, so that I can be confident and prepared for them during technical interviews. ([https://trello.com/c/bEinOVGc](https://trello.com/c/bEinOVGc))

### User Story Decisions

It was decided to revisit and improve the pre-assessment format to force the user to complete it upon registering, in addition to changing the format of it from Leetcode questions to multiple choice questions regarding the User’s familiarity with the concept.

### Task breakdown

Behavioral Question User Story

- Create page containing behavioral question cards
- Create cards for each behavioral question
- Connecting the frontend to the backend
- Creating endpoints to provide frontend with questions
- Modifying current problem script to populate backend with

Pre-assessment Improvement User Story

- Build confidence model and initialize it for the user upon sign up
- Build an endpoint to receive the skill assessment result from the frontend
- Create page containing the pre-assessment questions
- Connecting the frontend to the backend

Leetcode Problem Recommender User Story

- Implement the suggestion algorithm
- `POST /problems/id/attempt` should update the user's confidence based on their result on the attempt

### Spikes

During this sprint we anticipate the following spikes

- Merging issues. With more features being added simultaneously, we predict that there will be issues regarding merging of branches and user stories.
- Refactoring issues and conflicts. With more features, there will be new additions to backend models or existing frontend features. These additions might impact existing dependencies, which will cause bugs or problems.

### Team Capacity

| Name | Story Points |
| --- | --- |
| Abdullah | 4 |
| Amelia | 4 |
| Kyle | 2 |
| Melissa | 3 |
| Mohammad-Ali | 2 |
| Sana | 3 |
| Tamseel | 2 |

### Meeting Summary

- Priorities of user stories were re-assessed by all members and discussed
- Members self-assigned documentation duties based off of the required documents of s3
- User stories, re-evaluating project priorities and features where chosen to be the focus of this sprint.
- The focus of the backend group will be to handle adjusting existing models to account for the topic of questions, and a confidence score. Both of these will be used in the algorithm to recommend questions to users. These include
    - Editing models to include a topic, and confidence score
    - Creating a recommendation algorithm
    - Creating a model to handle behavioral questions
    - Creating a model to handle the new pre-assessment question responses
    - Creating a script to populate the database with behavioral questions
- The focus of the frontend group will amend the current frontend, and to work on the frontend components associated with the chosen user stories. These include
    - Create UI for the improved pre-assessment
    - Create UI for the behavioral questions
    - Edit UI if there are any bugs caused by adding new features