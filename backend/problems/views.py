# views.py
from rest_framework import generics, permissions
from .models import Problem, ProblemCategory, Attempt
from .serializers import ProblemSerializer, ProblemCategorySerializer, AttemptSerializer
from django.contrib.auth.models import User
from .serializers import UserSerializer
from django.shortcuts import get_object_or_404


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

class AttemptRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Attempt.objects.all()
    serializer_class = AttemptSerializer
