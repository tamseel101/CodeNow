from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model
from .models import CustomUser
from rest_framework.generics import CreateAPIView, DestroyAPIView
from rest_framework import generics, permissions, status
from rest_framework.views import APIView
# local imports
from .serializers import UserSerializer

class viewProfile(APIView):
    def get(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return Response({'detail':'user must be logged in'}, status=status.HTTP_401_UNAUTHORIZED)
        user_obj = request.user
        response_data = {'email':user_obj.email, 'username':user_obj.username}

        return Response(response_data, status=status.HTTP_200_OK)


# Login
class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})


# Register
class RegisterView(CreateAPIView):
    permission_classes = (permissions.AllowAny,)
    model = get_user_model()
    serializer_class = UserSerializer


# Logout
class LogoutView(DestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def destroy(self, request, *args, **kwargs):
        Token.objects.filter(user=request.user).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
