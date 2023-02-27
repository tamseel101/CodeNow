from rest_framework import serializers
from .models import PrequizProblems
from .models import UserProblems

class PrequizProblemsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PrequizProblems
        fields = ['question_id', 'problem_name', 'difficulty_level', 'leetcode_url']


class UserProblemsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserProblems
        fields = ['question_id', ' user_duration', 'difficulty', 'completion_time']
