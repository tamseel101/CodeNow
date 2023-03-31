from django.urls import include, path
from rest_framework import routers


urlpatterns = [
    path('account/', include('accounts.urls')),
    path('problems/', include('problems.urls')),
    path('confidence/', include('confidence.urls')),
    path('achievements/', include('achievements.urls')),
]
