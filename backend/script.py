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

for problem in problems:
    response = requests.post('http://localhost:8000/problems/add_problems/', data=problem)
    if response.status_code == 200:
        print(f"{problem['problem_name']} submitted successfully")
    else:
        print(f"Error submitting {problem['problem_name']}: {response.status_code}")
