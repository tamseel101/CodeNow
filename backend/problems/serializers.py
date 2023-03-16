from rest_framework import serializers
from .models import Problem, ProblemCategory, Attempt
from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'email')

class ProblemCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProblemCategory
        fields = '__all__'

class ProblemSerializer(serializers.ModelSerializer):
    categories = serializers.PrimaryKeyRelatedField(
        queryset=ProblemCategory.objects.all(),
        many=True,
        allow_null=True
    )

    class Meta:
        model = Problem
        fields = '__all__'

    def create(self, validated_data):
        categories_data = validated_data.pop('categories', [])
        problem = Problem.objects.create(**validated_data)
        for category_id in categories_data:
            problem.categories.add(category_id)
        problem.save()
        return problem

class AttemptSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    problem = ProblemSerializer(read_only=True)

    class Meta:
        model = Attempt
        fields = '__all__'


class BehavioralProblemsSerializer(serializers.Serializer):
    """
    Behavioral Problems Serializer
    """
    name = serializers.CharField(max_length=200)
    desc = serializers.CharField(max_length=600)
