from django.urls import include, path
from rest_framework import routers
from codenow_api.accounts import views
from .accounts.views import LoginView


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls',
                              namespace='rest_framework')),
    path('login', LoginView.as_view(), name='login'),
    path('problems/', include('codenow_api.problems.urls')),
    path('UserProblems/', include('codenow_api.UserProblems.urls')),
]
