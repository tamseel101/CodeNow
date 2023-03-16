from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.ProblemCategoryListCreate.as_view(), name='category_list_create'),
    path('categories/<int:pk>/', views.ProblemCategoryRetrieveUpdateDestroy.as_view(), name='category_retrieve_update_destroy'),
    path('', views.ProblemListCreate.as_view(), name='problem_list_create'),
    path('<int:pk>/', views.ProblemRetrieveUpdateDestroy.as_view(), name='problem_retrieve_update_destroy'),
    path('<int:pid>/attempts/', views.AttemptListCreate.as_view(), name='attempt_list_create'),
    path('<int:pid>/attempts/<int:pk>/', views.AttemptRetrieveUpdateDestroy.as_view(), name='attempt_retrieve_update_destroy'),
]