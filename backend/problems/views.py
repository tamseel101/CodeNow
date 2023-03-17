# views.py
from rest_framework import generics, permissions
from confidence.models import Confidence
from .models import Problem, ProblemCategory, Attempt
from .serializers import ProblemSerializer, ProblemCategorySerializer, AttemptSerializer
from django.contrib.auth.models import User
from .serializers import UserSerializer
from django.shortcuts import get_object_or_404
from problems.models import BehaviorProblem
from problems.serializers import BehavioralProblemsSerializer
from rest_framework.response import Response
from rest_framework import generics, permissions, status
from rest_framework.views import APIView


class ProblemCategoryListCreate(generics.ListCreateAPIView):
    queryset = ProblemCategory.objects.all()
    serializer_class = ProblemCategorySerializer

class ProblemCategoryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProblemCategory.objects.all()
    serializer_class = ProblemCategorySerializer

class ProblemListCreate(generics.ListCreateAPIView):
    queryset = Problem.objects.all()
    serializer_class = ProblemSerializer

class ProblemRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Problem.objects.all()
    serializer_class = ProblemSerializer

class AttemptListCreate(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Attempt.objects.all()
    serializer_class = AttemptSerializer

    def get_queryset(self):
        problem_id = self.kwargs['pid']
        return Attempt.objects.filter(problem__id=problem_id)

    def perform_create(self, serializer):
        problem_id = self.kwargs['pid']
        problem = get_object_or_404(Problem, id=problem_id)
        serializer.save(user=self.request.user, problem=problem)

    def post(self, request, *args, **kwargs):
        problem_id = self.kwargs['pid']
        problem = get_object_or_404(Problem, id=problem_id)
        for category in problem.categories.all():
            name = category.name

        category = get_object_or_404(ProblemCategory, name=name)
        print(category)
        user=self.request.user
        print(user)
        confidence = get_object_or_404(Confidence, user=user, problem_category=category)
        print(confidence)

        perceived_difficulty = request.data.get("perceived_difficulty")
        time_taken = request.data.get("time_taken")
        completed = request.data.get("completed")
        if completed and confidence.level < 5: # assuming 5 is max
            confidence.level += 1
        elif not completed and confidence.level > 0:
            confidence.level -= 1
        if time_taken >= 40 and perceived_difficulty == 'hard' and confidence.level > 0:
            confidence.level -= 1
        elif time_taken >= 30 and perceived_difficulty == 'medium' and confidence.level > 0:
            confidence.level -= 0.5
        elif time_taken >= 20 and perceived_difficulty == 'easy' and confidence.level < 5:
            confidence.level += 1

        confidence.save()


        return Response(status=status.HTTP_200_OK)



        

    

class AttemptRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Attempt.objects.all()
    serializer_class = AttemptSerializer


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
