from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from problems.models import ProblemCategory
from confidence.models import Confidence
from django.contrib.auth import get_user_model

User = get_user_model()

class ConfidenceUpdateView(APIView):
    def put(self, request, *args, **kwargs):
        user = request.user
        print(user.username)
        if not isinstance(request.data, dict):
            return Response("Invalid input format", status=status.HTTP_400_BAD_REQUEST)

        categories = ProblemCategory.objects.all()
        print(categories)
        if len(request.data) != len(categories):
            return Response("Input data must contain all categories", status=status.HTTP_400_BAD_REQUEST)

        for name, level in request.data.items():
            category = get_object_or_404(ProblemCategory, name=name)
            confidence = get_object_or_404(Confidence, user=user, problem_category=category)
            confidence.level = level
            confidence.save()


        # Retrieve the Attempt instance and update confidence level based on its data
        attempt_id = kwargs.get('pk')
        if attempt_id:
            attempt = get_object_or_404(Attempt, id=attempt_id, user=user)
            time_taken = attempt.time_taken
            perceived_difficulty = attempt.perceived_difficulty
            completed = attempt.completed

            # Update confidence level based on attempt data
            for name, level in request.data.items():
                category = get_object_or_404(ProblemCategory, name=name)
                confidence = get_object_or_404(Confidence, user=user, problem_category=category)
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

        return Response("Confidence levels updated successfully", status=status.HTTP_200_OK)
