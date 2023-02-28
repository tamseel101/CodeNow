from random import random
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers as core_serializers
from django.http import HttpResponse
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK
from .serializers import ProblemSerializer, AttemptsSerializer, PrequizProblemsSerializer
from .models import Categories, Attempts
from .models import Problem
from .models import PrequizProblems

class CategoryView(APIView):
    permission_classes = [AllowAny]

    @csrf_exempt
    def get(self, request):
        """
        API endpoint that returns all category data
        """
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
        """
        API endpoint that will retrieve attempt data.
        """
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
        """
        API endpoint that will add an attempt to the attempt table.
        """
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
    serializer_class = ProblemSerializer

    @csrf_exempt
    def get(self, request):
        """
        API endpoint that returns all category data
        """
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
        """
        API endpoint that will add an question to the Problem table.
        """
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


class PrequizProblemsView(APIView):
    queryset = PrequizProblems.objects.all()
    serializer_class = PrequizProblemsSerializer

    @csrf_exempt
    def get(self, request):
        """
        API endpoint that returns pre quiz problems
        """
        # checking for the parameters from the URL
        problems = PrequizProblems.objects.all()
        count = len(problems)
        problems_list = list(problems.values())
        response = {
            'count': count,
            'problems': problems_list[:]
        }
        return Response(response)


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


        a= PrequizProblems(question_id=question_id,difficulty_level=difficulty_level,problem_name=problem_name,leetcode_url=leetcode_url)
        a.save()
        return Response(status=HTTP_200_OK)




"""
class PrequizProblemsView(APIView):
    query_set = Problem.objects.all()
    serializer_class = ProblemSerializer

    @csrf_exempt
    def get(self, request):
        easy_problems = Problem.objects.filter(difficulty_level='easy')
        if 4 <= easy_problems.count():
            easy_problems = random.sample(list(easy_problems), 4)
        else:
            easy_problems = list(easy_problems)

        serializer = core_serializers.serialize("json", easy_problems)
        return Response(serializer.data)
"""