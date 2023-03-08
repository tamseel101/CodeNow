# from random import random

# from rest_framework.views import APIView
# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.response import Response
# from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK
# from django.core import serializers as core_serializers
#from .serializers import UserProblemsSerializer
#from .models import problems, PrequizProblem
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