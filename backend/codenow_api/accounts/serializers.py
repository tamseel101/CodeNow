from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'password', 'email']

    def create(self, validated_data):
        """Create and return new user"""

        user = User.objects.create_user(**validated_data)
        return user