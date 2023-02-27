from django.urls import path
from .views import UserProblemsView, PrequizProblemsView


urlpatterns = [
    path('userproblems/', UserProblemsView.as_view(), name='userproblems'),
    path('prequizproblems/', PrequizProblemsView.as_view(), name='prequizproblems')
]