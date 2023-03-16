from django.urls import include, path
from rest_framework import routers


urlpatterns = [
    path('account/', include('accounts.urls')),
    path('prequiz/', include('prequiz.urls')),
    path('problems/', include('problems.urls')),
]
