# Sprint 2 Planning Meeting

### Meeting

Sprint 2 planning was done after the sprint 1 retrospective meeting, which occurred on February 13th, 2023. 

### Sprint Goal

We want to imporve the existing site, in addition to adding other planned key features to our site while 

The following are our improvements to our site:

- Improving UI and design of our website
- Making the site more accessible via colour and font choice

The following are our planned core features: 

- An assessment quiz to assess the current skills on the user so they get a better understanding of their weaknesses
- A logout button to log users out
- An about page to display the purpose of our website, what is the forgetting curve and how we plan to combat it

In addition to this, we want to emphasize testing, so we decided to invest time into creating unit tests for endpoints.

We want to satisfy the following user stories:

- As Ariel, I want a pre-quiz at sign-up so CodeNow can assess their strengths and weaknesses. Through the result of this quiz, our platform can suggest relevant practice problems to them. ([https://trello.com/c/iwZJcLn5](https://trello.com/c/iwZJcLn5))
- As Eren, Ariel or Suzie, I want to be able to log out of my account on the app. ([https://trello.com/c/YigC9PYH](https://trello.com/c/YigC9PYH))
- As Eren, Ariel, or Suzie, I want to learn about the spaced repetition and forgetting curve techniques so that I can better understand how the platform is utilizing these methods to improve my interview preparation. ([https://trello.com/c/tuHULFYY](https://trello.com/c/tuHULFYY))

### Spikes

During this sprint we anticipate the following spikes

- Merging issues. With more features being added simultaneously, we predict that there will be issues regarding merging of branches and user stories.
- Pre presentation preparation will be a new practice that we have to put time aside for

### Capacity

Due to this sprint being over 3 weeks as opposed to the previous 2 weeks, the capacity is spread out over a longer period of time.

| Name | Capacity (Hours / Day) |
| --- | --- |
| Abdullah | 1 |
| Amelia | 1.5 |
| Kyle | 1.5 |
| Melissa | 1.5 |
| Mohammad-Ali | 1 |
| Sana | 1 |
| Tamseel | 1.5 |

### Participants

Amelia, Kyle, Melissa, Mohammad-Ali, Tamseel, Abdullah, Sana

### Task Breakdown

**User Assessment Quiz**

Implement endpoints and methods (POST, GET)

Create frontend for the Assessment Quiz

Create form to inform users about the quiz

Edit current frontend to incorporate this pre quiz

Create post quiz question form to get user feedback

Connect the Assessment Quiz with the backend

**Bug fixing and Testing**

Adjust current link from dashboard frontend to backend to use the suggested problems

Create unit tests for endpoints

Routing of pages

**Logout**

Adjust current link from dashboard frontend to backend to use the suggested problems

**Spaced Repetition Information**

Create a card on explaining the benefits of spaced repetition

**Modifying Current UI** 

Change current colour scheme and layout

### User Story Decisions

After discussion, it was decided to keep the following user stories as is

- As Ariel, I want a pre-quiz at sign-up so CodeNow can assess their strengths and weaknesses. Through the result of this quiz, our platform can suggest relevant practice problems to them.
- As Eren, Ariel, or Suzie, I want to learn about the spaced repetition and forgetting curve techniques so that I can better understand how the platform is utilizing these methods to improve my interview preparation.
- As Eren, Ariel or Suzie, I want to be able to log out of my account on the app.

Additionally, we decided to add a user story about wanting a well tested product.

- As Eren I want the product to be reliable and well-tested

### Meeting Summary

- Priorities of user stories were re-assessed by all members and discussed
- Members were assigned documentation duties based off of the new required documents of s2 (such as burnout and schedule). Additionally, the Trello was organized to fit s2
- User stories and re-evaluating project scope where chosen to be the focus of this sprint.
- The focus of the backend group will be to handle assigning the user Leetcode problems
    - Storing questions associated with the Assessment Quiz
    - Storing user responses about questions in the Assessment Quiz
    - Creating a script to populate the database with questions
- The focus of the frontend group will amend the current frontend, and to work on the frontend components associated with the chosen user stories. These include
    - Fixing the existing frontend UI based on TA feedback
    - Create UI for the Assessment Quiz and post question form
    - Provide the user information on what the forgetting curve is and how Code Now will combat this
