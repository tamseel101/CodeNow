# Sprint 1 Planning Meeting

### Meeting

Sprint 1 planning was done over 2 meetings. The first meeting occurred on January 31st, 2023. The second occurred the following day, February 1st, 2023. 

### Sprint Goal

Satisfy the following user stories:

- As Suzie, Eren, or Ariel, I want to have an account so that I can save my current progress to continue practicing in the future.
- As Ariel, Suzie, or Eren, I want to see a list of suggested Leetcode questions.
- As Ariel, Suzie, or Eren, I want to be able to click on a Leetcode question on my dashboard and be taken to the question
- As Ariel, Suzie, or Eren, I want the ability to cancel a problem attempt without completing it in case I am unable to complete it due to an unforeseen situation
- As Eren or Suzie, I want to be able to track my progress on Leetcode problems using metrics like completion time, difficulty level, and score.
- As Eren, Suzie or Ariel, I want to learn more about the product through a visually appealing landing page

### Spikes

During this sprint we encountered 3 major spikes

- Learning React and other new technologies. This was a major blocker, since we had to spend time experiencing a learning curve before any meaningful progress was made on the assigned task
- We had trouble deciding how to split the user stories and underestimated the amount of work associated with some stories. Additionally, we did not have a clear idea on how to set up or organize the Trello board
- Sometimes coordination between all members was difficult, as everyone has different schedules and there could be delays if we are waiting for an answer or approval of a pull request.

### Capacity

| Name | Capacity (Hours / Day) |
| --- | --- |
| Abdullah | 3 |
| Amelia | 2 |
| Kyle | 2 |
| Melissa | 2.5 |
| Mohammad-Ali | 1.5 |
| Sana | 3 |
| Tamseel | 2.5 |

### Participants

Abdullah, Amelia, Kyle, Melissa, Mohammad-Ali, Sana, Tamseel

### Task Breakdown

Please refer to Trello on which team member was assigned this task

**User Account**

Implement user registration endpoint [Kyle]

Implement user login endpoint [Abdullah]

Create frontend for register page and login page [Sana]

Connect the login and register with backend [Abdullah]

**Landing Page**

Create a base landing page [Amelia]

Create a navigation bar [Melissa]

Fix bugs on landing page to help user experience [Amelia]

**Dashboard**

Create a card for each leetcode problem [Melissa]

Create a dashboard page [Melissa]

Connect the UI of the dashboard page to the database in the backend containing the problems. [Abdullah]

**Problems**

Create a data model for the problem categories in Django [Mohammad]

Implement Leetcode problem model in Django [Tamseel]

Create the user interface for tracking the leetcode problem [Sana]

Send the key metrics tot he backend endpoint [Abdullah]

************************Landing Page************************

Create appealing widgets on the landing page that advertise our service

Ensure that our key features are being advertised on our landing page

Ensure that our landing page works well on both mobile and desktop screen sizes

### User Story Decisions

After discussion, it was decided to change some of the user stories and combine some some of the targeted user stories.

1. As Suzie, Eren, or Ariel, I want to have an account so that I can save my current progress to continue practicing in the future.
2. As Ariel, Suzie, or Eren, I want to be able to click on a Leetcode question on my dashboard and be taken to the question
    1. As Ariel, Suzie, or Eren, I want to see a list of suggested Leetcode questions.
3. As Eren or Suzie, I want to be able to track my progress on Leetcode problems using metrics like completion time, difficulty level, and score.
    1. As Ariel, Suzie, or Eren, I want the ability to cancel a problem attempt without completing it in case I am unable to complete it due to an unforeseen situation

The Landing Page user story was changed into a major task, since the only task associated witht he landing page was the page itself

1. As Eren, Suzie or Ariel, I want to learn more about the product through a visually appealing landing page 
