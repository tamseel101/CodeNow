import random

from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers as core_serializers
from django.http import HttpResponse, JsonResponse
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK
#from .serializers import PrequizProblemSerializer, AttemptsSerializer, PrequizProblemsSerializer
#from .models import Categories, Attempts
from .models import PrequizProblem

"""
class CategoryView(APIView):
    permission_classes = [AllowAny]

    @csrf_exempt
    def get(self, request):
        ""
        API endpoint that returns all category data
        ""
        data = core_serializers. \
            serialize("json", Categories.objects.all(),
                      fields=('name', 'description'))
        return HttpResponse(data, content_type='application/json')


class AttemptView(APIView):
    queryset = Attempts.objects.all()
    serializer_class = AttemptsSerializer

    permission_classes = [AllowAny]

    @csrf_exempt
    def get(self, request):
        ""
        API endpoint that will retrieve attempt data.
        ""
        attempts = Attempts.objects.all()
        count = len(attempts)
        attempts_list = list(attempts.values())
        response = {
            'count': count,
            'problems': attempts_list
        }
        return Response(response)

    @csrf_exempt
    def post(self, request):
        ""
        API endpoint that will add an attempt to the attempt table.
        ""
        user_id = request.data.get("user_id")
        problem_id = request.data.get("problem_id")
        perceived_difficulty = request.data.get("perceived_difficulty")
        time = request.data.get("time")
        completed = request.data.get("completed")
        if None in (user_id, problem_id, perceived_difficulty,
                    time, completed):
            return Response({'error': 'Please provide all '
                                      'necessary data'},
                            status=HTTP_400_BAD_REQUEST)
        attempt = Attempts(user_id=user_id,
                           problem_id=problem_id,
                           category_id=0,
                           perceived_difficulty=perceived_difficulty,
                           time=time, completed=completed)
        attempt.save()
        return Response(status=HTTP_200_OK)


class ProblemsView(APIView):
    queryset = Problem.objects.all()
    serializer_class = PrequizProblemSerializer

    @csrf_exempt
    def get(self, request):
        ""
        API endpoint that returns all category data
        ""
        problems = Problem.objects.all()
        count = len(problems)
        problems_list = list(problems.values())
        response = {
            'count': count,
            'problems': problems_list[0:5]
        }
        return Response(response)

    @csrf_exempt
    def post(self, request):
        ""
        API endpoint that will add an question to the Problem table.
        ""
        problem_name = request.data.get("problem_name")
        topic = request.data.get("topic")
        difficulty_level = request.data.get("difficulty_level")
        leetcode_url = request.data.get("leetcode_url")
        if None in (problem_name, topic,
                    difficulty_level, leetcode_url):
            return Response({'error': 'Please provide '
                                      'all necessary data'},
                            status=HTTP_400_BAD_REQUEST)

        problem = Problem(problem_name=problem_name,
                          topic=topic,
                          difficulty_level=difficulty_level,
                          leetcode_url=leetcode_url)
        problem.save()
        return Response(status=HTTP_200_OK)
"""


class AddProblemView(APIView):
    """
    Add Problem View
    """

    """
    @csrf_exempt
    def get(self, request):
        ""
        API endpoint that returns pre quiz problems
        ""
        # checking for the parameters from the URL
        problems = PrequizProblems.objects.all()
        count = len(problems)
        problems_list = list(problems.values())
        response = {
            'count': count,
            'problems': problems_list[:]
        }
        return Response(response)
    """

    @csrf_exempt
    def post(self, request):
        """
        API endpoint that will add a question to the prequiz table.
        """
        question_id = request.data.get("question_id")
        problem_name = request.data.get("problem_name")
        difficulty_level = request.data.get("difficulty_level")
        leetcode_url = request.data.get("leetcode_url")
        if None in (question_id, problem_name, difficulty_level, leetcode_url):
            return Response({'error': 'Please provide all necessary data'}, status=HTTP_400_BAD_REQUEST)

        prequiz_problem = PrequizProblem(question_id=question_id, difficulty_level=difficulty_level,
                                         problem_name=problem_name, leetcode_url=leetcode_url)
        prequiz_problem.save()
        return Response(status=200)


class PrequizProblemsView(APIView):
    """
    Prequiz Problems Endpoint
    """

    @csrf_exempt
    def get(self, request):
        easy_problems = PrequizProblem.objects.order_by('?').filter(difficulty_level='easy')[:3]
        easy_problems_json = [{'question_id': p.question_id, 'problem_name': p.problem_name,
                               'difficulty_level': p.difficulty_level,
                               'leetcode_url': p.leetcode_url} for p in easy_problems]
        return Response({'problems': easy_problems_json})

    @csrf_exempt
    def post(self, request):
        problem_id = request.data.get('question_id')
        perceived_difficulty = request.data.get('perceived_difficulty')
        completion_time = request.data.get('completion_time')
        problem = PrequizProblem.objects.get(question_id=problem_id)
        problem.perceived_difficulty = perceived_difficulty
        problem.completion_time = completion_time
        problem.save()
        return HttpResponse(status=200)
