from rest_framework import serializers
from .models import Problem
from .models import Attempts
from .models import PrequizProblems

class ProblemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Problem
        fields = ['problem_name', 'leetcode_url',
                  'topic', 'difficulty_level']


class AttemptsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Attempts
        fields = ['user_id', 'problem_id',
                  'perceived_difficulty', 'time',
                  'completed']

class PrequizProblemsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PrequizProblems
        fields = ['question_id', 'problem_name', 'difficulty_level', 'leetcode_url']