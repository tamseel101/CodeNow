from django.db import models

# Create your models here.
class Categories(models.Model):
    name = models.CharField(max_length=300)
    description = models.CharField(max_length=1000)

class Attempts(models.Model):
    user_id = models.IntegerField()
    problem_id = models.IntegerField()
    category_id = models.IntegerField()
    #date = models.DateField()
    perceived_difficulty = models.IntegerField()
    time = models.IntegerField()
    completed = models.BooleanField(default=False)

class Problem(models.Model):
    problem_name = models.CharField(max_length=255)
    topic = models.CharField(max_length=255)
    difficulty_level = models.CharField(max_length=255)
    leetcode_url = models.CharField(max_length=255)