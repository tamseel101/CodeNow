from django.db import models

# Create your models here.

class PrequizProblems(models.Model):
    question_id = models.IntegerField()
    problem_name = models.CharField(max_length=255)
    difficulty_level = models.CharField(max_length=255)
    leetcode_url = models.CharField(max_length=255)

class UserProblems(models.Model):
    question_id = models.IntegerField()
    user_duration = models.IntegerField()
    difficulty = models.IntegerField()
    completion_time = models.IntegerField()

