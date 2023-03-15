import requests

# List of prequiz
problems = [
    {
        "question_id": 136,
        "problem_name": "Single Number",
        "difficulty_level": "easy",
        "leetcode_url": "https://leetcode.com/problems/single-number/"
    },
    {
        "question_id": 1448,
        "problem_name": "Count Good Nodes in Binary Tree",
        "difficulty_level": "medium",
        "leetcode_url": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/"
    },
    {
        "question_id": 11,
        "problem_name": "Container With Most Water",
        "difficulty_level": "medium",
        "leetcode_url": "https://leetcode.com/problems/container-with-most-water/"
    },
    {
        "question_id": 268,
        "problem_name": "Missing Number",
        "difficulty_level": "easy",
        "leetcode_url": "https://leetcode.com/problems/missing-number/"
    },
    {
        "question_id": 695,
        "problem_name": "Max Area of Island",
        "difficulty_level": "medium",
        "leetcode_url": "https://leetcode.com/problems/max-area-of-island/"
    },
    {
        "question_id": 217,
        "problem_name": "Contains Duplicate",
        "difficulty_level": "easy",
        "leetcode_url": "https://leetcode.com/problems/contains-duplicate/"
    },
    {
        "question_id": 42,
        "problem_name": "Trapping Rain Water",
        "difficulty_level": "hard",
        "leetcode_url": "https://leetcode.com/problems/trapping-rain-water/"
    },
    {
        "question_id": 704,
        "problem_name": "Binary Search",
        "difficulty_level": "easy",
        "leetcode_url": "https://leetcode.com/problems/binary-search/"
    },
    {
        "question_id": 153,
        "problem_name": "Find Minimum in Rotated Sorted Array",
        "difficulty_level": "medium",
        "leetcode_url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
    },
    {
        "question_id": 1046,
        "problem_name": "Last Stone Weight",
        "difficulty_level": "easy",
        "leetcode_url": "https://leetcode.com/problems/last-stone-weight/"
    }
]

behavioral_questions = [
    {
        "name": "Recent Projects",
        "desc": "Tell me about the most recent project you worked on. What were your responsibilities?"
    },
    {
        "name": "Improving Design",
        "desc": "Describe a time you were able to improve upon the design that was originally suggested."
    },
    {
        "name": "Proud Projects",
        "desc": "Tell me about the project you are most proud of, and what your contribution was."
    },
    {
        "name": "Deployment",
        "desc": "Describe your production deployment process."
    },
    {
        "name": "Technical Knowledge",
        "desc": "Give an example of where you have applied your technical knowledge in a practical way."
    },
    {
        "name": "Managing Code",
        "desc": "How did you manage source code?"
    },
    {
        "name": "Quality Deliverables",
        "desc": "What did you do to ensure quality in your deliverables?"
    },
    {
        "name": "Going Above & Beyond",
        "desc": "When was the last time you downloaded a utility from the internet to make your work more productive, "
                "and what was it?"
    },
    {
        "name": "Development Tools",
        "desc": "What development tools have you used?"
    },
    {
        "name": "Programming Languages",
        "desc": "What languages have you programmed in?"
    },
    {
        "name": "Source Control",
        "desc": "What source control tools have you used?"
    },
]
"""
for problem in problems:
    response = requests.post('http://localhost:8000/problems/add_problems/', data=problem)
    if response.status_code == 200:
        print(f"{problem['problem_name']} submitted successfully")
    else:
        print(f"Error submitting {problem['problem_name']}: {response.status_code}")
"""
for behavioral_question in behavioral_questions:
    response = requests.post('http://localhost:8000/problems/behavioral_problems/', data=behavioral_question)
    if response.status_code == 200:
        print(f"{behavioral_question['name']} submitted successfully")
    else:
        print(f"Error submitting {behavioral_question['name']}: {response.status_code}")