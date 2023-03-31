# sprint4.md

### Meeting

Sprint 4 planning was done after the sprint 3 retrospective meeting, which occurred on March 21, 2023

### Participants

 Abdullah, Amelia, Kyle, Melissa, Mohammad-Ali, Sana, Tamseel

### Sprint Goal

We want to refactor the existing code, in addition to adding another planned key features to our site, such as mock interviews, user profile customization and notifications for spaced repetition.

The following are our improvements to our site:

- Refactoring code

The following are our planned core features: 

- A statistics page for users to see an in depth overview of where they are at
- A history page for users to see what questions they have done
- A mock interview page, which will be composed of a combination of Leetcode questions and behavioural questions. This is to simulate a real interview, which has a combination of both question types.
- A user profile customization page. This will allow the user to change their email, username and password associated with their account.

We want to satisfy the following user stories:

- As an Eren or Suzie, I would like to view statistics that highlight my strengths and weaknesses in a fun and engaging way ([https://trello.com/c/g0Xh7gda](https://trello.com/c/g0Xh7gda)**)**
- As Eren or Suzie, I would like to have access to a record of the problems I have previously attempted and the corresponding details regarding the attempt ([https://trello.com/c/dvbPwq9m](https://trello.com/c/dvbPwq9m))
- As Eren, Suzie, or Ariel, I want to have mock interviews that put pressure on me so that I can be comfortable during the actual interview. ([https://trello.com/c/IC13DOP5](https://trello.com/c/IC13DOP5))
- As Eren, Suzie, or Ariel, I want the ability to customize my profile by adding a profile picture, name, and other personal details so that I can have a personal touch in my experience. ([https://trello.com/c/Zh699qEj](https://trello.com/c/Zh699qEj))

We also want to fully complete the following stories, which were partially completed indirectly in previous sprints. Note that these will not be our main features, but more to clean up the product backlog, as it is incorrect to say that these user stories are not started.

- As Suzie or Eren, I want a platform that learns as I do questions and find my areas of improvement in my technical interview skills, so I can efficiently focus my practice on relevant questions. ([https://trello.com/c/mWCMWLut](https://trello.com/c/mWCMWLut))
- As Eren or Suzie, I want the platform to provide me with a step-by-step progression of Leetcode questions based on my current skill level, starting with easier questions and gradually increasing in difficulty so that I can build my technical skills at a comfortable pace. ([https://trello.com/c/TiEElKeZ](https://trello.com/c/TiEElKeZ))
- As Ariel, Suzie, or Eren, I want the ability to cancel a problem attempt without completing it in case I am unable to complete it due to an unforeseen situation ([https://trello.com/c/8b2AQQxk](https://trello.com/c/8b2AQQxk))

### User Story Decisions

It was decided to clean up some of the product backlog by addressing some of the stories that were partially completed in previous sprints. For example, with the addition of the problem recommender from sprint 3, the story of wanting to have questions suggested to the user based on difficulty was indirectly complete. The 3 user stories in a state of partial completion are outlined above.

### Task breakdown

User History Story

- Create endpoint to provide account history
- Create frontend to display history
- Connect frontend to backend

User Statistics Story

- Create endpoint to provide account statistics
- Create frontend to display statistics
- Connect frontend to backend

Mock Interview User Story

- Create mock interview page
- Create component to begin mock interview, while also selecting a difficulty
- Create component to provide the user with a mix Leetcode and behavioral questions to simulate an interview

Edit Profile User Story

- Create frontend for the user to input the information they want changed (such as username, email, password)
- Create endpoint to accept user input to modify
- Connect the frontend and the backend

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

- Priorities of user stories were re-assessed by all members and discussed. Some user stories were dropped due to time
- User stories, product backlog cleanup, and polishing current features where chosen to be the focus of this sprint.
- The focus of the backend group will be to create endpoints to send the frontend infomration regarding account history, statistics and other account information
    - Create endpoints to send account history and statistics infomration
    - Modifying the views to account for editing for a user profile
- The focus of the frontend group will be to work on the frontend components associated with the chosen user stories. These include
    - Create UI for the mock interviews
    - Create UI for the profile editing
    - Create UI for statistics and history display
