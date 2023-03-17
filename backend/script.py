import requests

# List of problems to populate
problems = [
    # arrays
    {
        "name": "Single Number",
        "leetcode_url": "https://leetcode.com/problems/single-number/",
        "difficulty": "EASY",
        "categories": [{"name": "Arrays"}]
    },
    {
        "name": "Contains Duplicate",
        "leetcode_url": "https://leetcode.com/problems/contains-duplicate/",
        "difficulty": "EASY",
        "categories": [{"name": "Arrays"}]
    },
    {
        "name": "Container With Most Water",
        "leetcode_url": "https://leetcode.com/problems/container-with-most-water/",
        "difficulty": "MEDIUM",
        "categories": [{"name": "Arrays"}]
    },
    # trees
    {
        "name": "Invert Binary Tree",
        "leetcode_url": "https://leetcode.com/problems/invert-binary-tree/",
        "difficulty": "EASY",
        "categories": [
            {"name": "Trees"}]
    },
    {
        "name": "Maximum Depth of Binary Tree",
        "leetcode_url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "difficulty": "EASY",
        "categories": [{"name": "Trees"}]
    },
    {
        "name": "Diameter of Binary Tree",
        "leetcode_url": "https://leetcode.com/problems/diameter-of-binary-tree/",
        "difficulty": "EASY",
        "categories": [
            {"name": "Trees"}]
    },
    {
        "name": "Count Good Nodes in Binary Tree",
        "leetcode_url": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
        "difficulty": "MEDIUM",
        "categories": [{"name": "Trees"}]
    },

    # need more mediums here
    # heaps
    {
        "name": "Last Stone Weight",
        "leetcode_url": "https://leetcode.com/problems/last-stone-weight/",
        "difficulty": "EASY",
        "categories": [{"name": "Heaps"}]
    },
    {
        "name": "Kth Largest Element in a Stream",
        "leetcode_url": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
        "difficulty": "EASY",
        "categories": [{"name": "Heaps"}]
    },
    {
        "name": "Last Stone Weight",
        "leetcode_url": "https://leetcode.com/problems/last-stone-weight/",
        "difficulty": "EASY",
        "categories": [{"name": "Heaps"}]
    },
    {
        "name": "K Closest Points to Origin",
        "leetcode_url": "https://leetcode.com/problems/k-closest-points-to-origin/",
        "difficulty": "EASY",
        "categories": [{"name": "Heaps"}]
    },

    # linked lists
    {
        "name": "Merge Two Sorted Lists",
        "leetcode_url": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "difficulty": "EASY",
        "categories": [{"name": "Linked Lists"}]
    },
    {
        "name": "Reverse Linked Lists",
        "leetcode_url": "https://leetcode.com/problems/reverse-linked-list/",
        "difficulty": "EASY",
        "categories": [{"name": "Linked Lists"}]
    },
    {
        "name": "Reorder List",
        "leetcode_url": "https://leetcode.com/problems/reorder-list/",
        "difficulty": "MEDIUM",
        "categories": [{"name": "Linked Lists"}]
    },
    {
        "name": "Copy List with Random Pointer",
        "leetcode_url": "https://leetcode.com/problems/copy-list-with-random-pointer/",
        "difficulty": "MEDIUM",
        "categories": [{"name": "Linked Lists"}]
    }
]


for problem in problems:
    response = requests.post('http://localhost:8000/problems/', json=problem)
    if response.status_code == 201:
        print(f"{problem['name']} submitted successfully")
    else:
        print(f"Error submitting {problem['name']}: {response.status_code}")
        print(response.content)



######### Extra
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


#for behavioral_question in behavioral_questions:
    #response = requests.post('http://localhost:8000/problems/behavioral_problems/', data=behavioral_question)
    #if response.status_code == 200:
        #print(f"{behavioral_question['name']} submitted successfully")
    #else:
        #print(f"Error submitting {behavioral_question['name']}: {response.status_code}")