from django.urls import path
#from .views import UserProblemsView
from .views import BehavioralProblemsView

urlpatterns = [
    #path('userproblems/', UserProblemsView.as_view(), name='userproblems')
    path('behavioral_problems/', BehavioralProblemsView.as_view(), name='behavioralproblems')
]
