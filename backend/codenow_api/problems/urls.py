from django.urls import path
from .views import CategoryView, AttemptView, \
    ProblemsView, PrequizProblemsView


urlpatterns = [
    path('categories', CategoryView.as_view(), name='categories'),
    path('attempts', AttemptView.as_view(), name='attempts'),
    path('', ProblemsView.as_view(), name='problems'),
    path('prequiz_problems/', PrequizProblemsView.as_view(),
         name='prequiz_problems'),
]
