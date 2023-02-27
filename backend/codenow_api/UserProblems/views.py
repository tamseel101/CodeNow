from sqlite3 import Date
from django.shortcuts import render
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers as core_serializers
from django.http import HttpResponse
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK


from .serializers import PrequizProblemsSerializer, UserProblemsSerializer
from .models import UserProblems, PrequizProblems

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


class UserProblemsView(APIView):
    queryset = UserProblems.objects.all()
    serializer_class = UserProblemsSerializer

    @csrf_exempt
    def get(self, request):
        """
        API endpoint that returns user problems
        """
        # checking for the parameters from the URL
        problems = UserProblems.objects.all()
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
        API endpoint that will add a question to the UserProblems table.
        """
        question_id = request.data.get("question_id")
        user_duration = request.data.get("user_duration")
        difficulty = request.data.get("difficulty")
        completion_time = request.data.get("completion_time")
        if None in (question_id, user_duration, difficulty, completion_time):
            return Response({'error': 'Please provide all necessary data'}, status=HTTP_400_BAD_REQUEST)


        a= UserProblems(question_id=question_id,user_duration=user_duration,difficulty=difficulty,completion_time=completion_time)
        a.save()
        return Response(status=HTTP_200_OK)