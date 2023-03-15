# from rest_framework import serializers
#from .models import problems



"""
class UserProblemsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = problems
        fields = ['question_id', ' user_duration', 'difficulty', 'completion_time']
"""
from rest_framework import serializers


class BehavioralProblemsSerializer(serializers.Serializer):
    """
    Behavioral Problems Serializer
    """
    name = serializers.CharField(max_length=200)
    desc = serializers.CharField(max_length=600)