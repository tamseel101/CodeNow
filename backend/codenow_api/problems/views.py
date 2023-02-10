from django.shortcuts import render
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers as core_serializers
from django.http import HttpResponse
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK
from .models import Categories, Attempts
# Create your views here.
class CategoryView(APIView):
    permission_classes = [AllowAny]

    @csrf_exempt
    def get(self, request):
        """
        API endpoint that returns all category data
        """
        #p = Categories(name="Dynamic Programing",description="an optimization strategy for brute force problems" )
        #p.save()
        data = core_serializers.serialize("json", Categories.objects.all(), fields=('name','description'))
        return HttpResponse(data, content_type='application/json')

class AttemptView(APIView):
    permission_classes = [AllowAny]
    @csrf_exempt
    def get(self, request):
        """
        API endpoint that will retrieve attempt data.
        """
        print(request)
        user_id = request.query_params.get("user_id")
        problem_id = request.query_params.get("problem_id")
        if user_id is None:
            return Response({'error': 'Please provide all necessary data'},
                            status=HTTP_400_BAD_REQUEST)
        if problem_id is None:
            data = core_serializers.serialize("json", Attempts.objects.filter(user_id=user_id))
            return HttpResponse(data, content_type='application/json')  
        data = core_serializers.serialize("json", Attempts.objects.filter(user_id=user_id,problem_id=problem_id))
        return HttpResponse(data, content_type='application/json')  

    @csrf_exempt
    def post(self, request):
        """
        API endpoint that will add an attempt to the attempt table.
        """
        user_id = request.data.get("user_id")
        problem_id = request.data.get("problem_id")
        category_id = request.data.get("category_id")
        date = request.data.get("date")
        perceived_difficulty = request.data.get("perceived_difficulty") # 1-100 scale
        time = request.data.get("time") # in minutes
        completed = request.data.get("completed") 
        if None in (user_id, problem_id, category_id, date, perceived_difficulty, time, completed):
            return Response({'error': 'Please provide all necessary data'},
                            status=HTTP_400_BAD_REQUEST)
        a= Attempts(user_id=user_id,problem_id=problem_id,category_id=category_id,date=date,perceived_difficulty=perceived_difficulty,time=time,completed=completed )
        a.save()
        return Response(status=HTTP_200_OK)


from .models import Problem

class ProblemsView(APIView):
   permission_classes = [AllowAny]
   @csrf_exempt
   def get(self, request):
       """
       API endpoint that returns all problem data such as
       Problem(problem_name="Two Sum",
               topic="Arrays",
               difficulty_level="easy",
               leetcode_url="https://leetcode.com/problems/two-sum/"  )
       """
       data = core_serializers.serialize("json", Problem.objects.all(), fields=('problem_name','topic','difficulty_level','leetcode_url'))
       return HttpResponse(data, content_type='application/json')

   @csrf_exempt
   def post(self, request):
        """
        API endpoint that will add an question to the Problem table.
        """
        problem_name = request.data.get("problem_name")
        topic = request.data.get("topic")
        difficulty_level = request.data.get("difficulty_level")
        leetcode_url = request.data.get("leetcode_url")
        if None in (problem_name, topic, difficulty_level , leetcode_url):
            return Response({'error': 'Please provide all necessary data'}, status=HTTP_400_BAD_REQUEST)

        a= Problem(problem_name=problem_name,topic=topic,difficulty_level=difficulty_level,leetcode_url=leetcode_url)
        a.save()
        return Response(status=HTTP_200_OK)