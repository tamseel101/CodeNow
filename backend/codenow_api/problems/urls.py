from django.urls import path
from .views import CategoryView, AttemptView

urlpatterns = [
    path('categories', CategoryView.as_view(), name='categories'),
    path('attempts', AttemptView.as_view(), name='attempts')
]