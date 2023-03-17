from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from problems.models import ProblemCategory
from confidence.models import Confidence
from django.contrib.auth import get_user_model
from accounts.models import CustomUser

User = get_user_model()

class ConfidenceUpdateView(APIView):
    def put(self, request, *args, **kwargs):
        user = get_object_or_404(CustomUser, username=request.data["user"])

        if not isinstance(request.data, dict):
            return Response("Invalid input format", status=status.HTTP_400_BAD_REQUEST)

        categories = ProblemCategory.objects.all()
        if len(request.data) != len(categories) + 1:
            return Response("Input data must contain all categories", status=status.HTTP_400_BAD_REQUEST)

        for name, level in request.data.items():
            if name != "user":
                category = get_object_or_404(ProblemCategory, name=name)
                confidence = get_object_or_404(Confidence, user=user, problem_category=category)
                confidence.level = level
                confidence.save()

        return Response("Confidence levels updated successfully", status=status.HTTP_200_OK)