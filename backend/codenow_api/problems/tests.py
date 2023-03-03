import requests
from django_restframework.tests import TestCase

from .models import PrequizProblem

"""
class PrequizProblemsViewTest(TestCase):
    ""
    Unit Tests for Prequiz Problems
    ""

    def test_update_perceived_difficulty(self):
        PrequizProblem.objects.create(question_id=1050,
                                      difficulty_level="easy",
                                      leetcode_url="test",
                                      perceived_difficulty=None)
        url = "http://127.0.0.1:8000/problems/prequiz_problems/"

        data = {
            "question_id": 1050,
            "perceived_difficulty": "hard"
        }
        req_get = requests.get(url)
        self.assertEqual(req_get.status_code, 200)
        print(PrequizProblem.objects.all())
        req_post = requests.post(url, data)
        self.assertEqual(req_post.status_code, 200)
        problem = PrequizProblem.objects.get(question_id=1050)
        self.assertEqual(problem.perceived_difficulty, "hard")


        data = {
            "question_id": 1050,
            "perceived_difficulty": "hard"
        }
        req_get = requests.get(url)
        self.assertEqual(req_get.status_code, 200)
        print(PrequizProblem.objects.all())
        req_post = requests.post(url, data)
        self.assertEqual(req_post.status_code, 200)
        problem = PrequizProblem.objects.get(question_id=1050)
        self.assertEqual(problem.perceived_difficulty, "hard")
"""