from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import TagsSerializer, TagsGetSerializes


# Create your views here.
class ApiView(APIView):
    pass