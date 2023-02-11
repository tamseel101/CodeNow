from rest_framework import serializers
from .models import Problem
from .models import Attempts

class ProblemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Problem
        fields = ['problem_name', 'leetcode_url', 'topic', 'difficulty_level']


class AttemptsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Attempts
        fields = ['user_id', 'problem_id', 'perceived_difficulty', 'time', 'completed']
