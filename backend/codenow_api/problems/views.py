from django.shortcuts import render
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers as core_serializers
from django.http import HttpResponse
from rest_framework.permissions import AllowAny
from .models import Categories
# Create your views here.
class CategoryView(APIView):
    permission_classes = [AllowAny]

    @csrf_exempt
    def get(self, request):
        """
        API endpoint that returns all category data
        """
        #p = Categories(name="Dynamic Programing",description="an optimization strategy for brute force problems" )
        #p.save()
        data = core_serializers.serialize("json", Categories.objects.all(), fields=('name','description'))
        return HttpResponse(data, content_type='application/json')
