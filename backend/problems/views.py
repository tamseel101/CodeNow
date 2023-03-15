# from random import random

# from rest_framework.views import APIView
# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.response import Response
# from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK
# from django.core import serializers as core_serializers
# from .serializers import UserProblemsSerializer
# from .models import problems, PrequizProblem
# from ..prequiz.models import Problem
"""

class UserProblemsView(APIView):
    queryset = problems.objects.all()
    serializer_class = UserProblemsSerializer

    @csrf_exempt
    def get(self, request):
        ""
        API endpoint that returns user prequiz
        ""
        # checking for the parameters from the URL
        prequiz = problems.objects.all()
        count = len(prequiz)
        problems_list = list(prequiz.values())
        response = {
            'count': count,
            'prequiz': problems_list[:]
        }
        return Response(response)

    @csrf_exempt
    def post(self, request):
        ""
        API endpoint that will add a question to the problems table.
        ""
        question_id = request.data.get("question_id")
        user_duration = request.data.get("user_duration")
        difficulty = request.data.get("difficulty")
        completion_time = request.data.get("completion_time")
        if None in (question_id, user_duration, difficulty, completion_time):
            return Response({'error': 'Please provide all necessary data'}, status=HTTP_400_BAD_REQUEST)

        a = PrequizProblem(question_id=question_id, user_duration=user_duration, difficulty=difficulty,
                         completion_time=completion_time)
        a.save()
        return Response(status=HTTP_200_OK)
"""
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from problems.models import BehaviorProblem
from problems.serializers import BehavioralProblemsSerializer


class BehavioralProblemsView(APIView):
    """
    Retrieves behavioral problems
    """
    serializer_class = BehavioralProblemsSerializer

    def get(self, request, format=None):
        problems = BehaviorProblem.objects.order_by('?').values('id', 'name', 'desc')[:9]
        return Response({'problems': list(problems)})

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data.get("name")
            desc = serializer.validated_data.get("desc")
            behavioral_question = BehaviorProblem.objects.create(
                name=name,
                desc=desc
            )
            behavioral_question.save()
            return Response(status=status.HTTP_200_OK)
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )
