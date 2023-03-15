from django.db import models


class Problem(models.Model):
    """
    Problems Model
    """
    question_id = models.IntegerField()
    leetcode_url = models.CharField(max_length=200)
    # TODO Implement choices here
    topic = models.CharField(max_length=100)
    difficulty = models.CharField(max_length=100)
