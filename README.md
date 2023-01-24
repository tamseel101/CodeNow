# Semtrack

Managing coursework and achieving academic goals can be challenging for students, especially with a heavy workload and tight deadlines. Students often try to use a combination of a to-do list and calendar apps to organize their semester. However, these tools fail to provide a complete picture of their workload. As a student, wouldn't it be nice if you already knew which weeks are going to be really busy for you?

Semtrack aims to improve workload management for students by providing a graph of the student's workload throughout the semester, allowing them to identify heavy workload weeks and make informed decisions and plans. Additionally, students can track their progress on assignments, monitor their grades, and receive intelligent reminders of upcoming deadlines.

## Installation

First, you need to clone this repository and `cd` into it

```bash
git clone https://github.com/CSC301H5/finalprojectw23-jason-s-juniors.git
cd finalprojectw23-jason-s-juniors
```

Below are the steps needed to set up the backend.
### Backend Setup
Before continuing, make sure you have `pip` or `pip3` installed

First, `cd` into the `backend`.
```bash
cd backend
```
Now, we will install `pipenv` which is going to manage our python packages for us.

```bash
pip3 install pipenv
```

Next, let's create the virtual environment and install all of the dependencies.

```bash
pipenv shell
pipenv install
```

That should install everything for you. Let's verify that everything works by running our Django server.

```bash
python3 manage.py runserver
```

That's it!

### Frontend

Before continuing, make sure you have `npm` installed.

Simply `cd` into `frontend`:
```bash
cd frontend
```

And run the following command:

```bash
npm install
```

That's it! You can verify that your client is working by running

```bash
npm start
```

## Usage

### Backend
Make sure that you activate your `pipenv` if it is not activated. To do this, you can `cd` into `backend` and run the following command:

```
pipenv shell
```

Then, you can run the Django server using the following command:
```
python3 manage.py runserver
```

### Frontend
`cd` into `frontend` and run the following command:

```
npm start
```

## Contributing
<!-- Should I add commands? -->
#### Gitflow
We utilize the [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) workflow. We have two primary branches, `dev` and `main`.

### `dev`

The `dev` branch contains our development code.

If you want to contribute to our project, you need to create your feature branch from the `dev` branch.

Once you are done making changes, please submit a pull request.

Your pull request must be reviewed by at least two people to be merged into the `dev` branch.

#### Naming Convention for feature branches
Please ensure that your branch name directly follows the name of the feature. For example, if you are working on adding a calendar into the app, your branch name would be `calendar`.

### `main`
The `main` branch contains our official release.

<!-- Should I mention that the dev branch will be merged? -->
Merges to this branch will be made through a pull request at the end of every sprint. The pull request must be thoroughly reviewed and requires the approval of at least 4 members of the team.

### Ticketing System
We will be using Github Issues to track our issues.