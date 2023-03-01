from rest_framework import serializers
from .models import PrequizProblem


"""
class PrequizProblemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PrequizProblem
        fields = ['problem_name', 'difficulty_level', 'leetcode_url',
                  'perceived_difficulty']

class AttemptsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Attempts
        fields = ['user_id', 'problem_id',
                  'perceived_difficulty', 'time',
                  'completed']
"""

"""
class PrequizProblemsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PrequizProblems
        fields = ['question_id', 'problem_name', 'difficulty_level', 'leetcode_url']
"""


class PrequizProblemsSerializer(serializers.Serializer):
    class Meta:
        model = PrequizProblem
        fields = ['question_id', 'problem_name', 'difficulty_level', 'leetcode_url']
