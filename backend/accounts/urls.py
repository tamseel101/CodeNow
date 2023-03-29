from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import RegisterView, LogoutView, viewProfile, EditProfile

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', obtain_auth_token, name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('viewProfile/', viewProfile.as_view(), name='viewProfile'),
    path('editProfile/', EditProfile.as_view(), name='editProfile'),

]
