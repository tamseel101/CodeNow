from django.urls import path
from .views import UserProblemsView


urlpatterns = [
    path('userproblems/', UserProblemsView.as_view(), name='userproblems')
]