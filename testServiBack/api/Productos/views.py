from django.shortcuts import get_object_or_404, render
from rest_framework import serializers, status
from rest_framework import response
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Productos
from .serializers import ProductosSerializer, ProductosGetSerializer, MixSerializer

# Create your views here.

class ProductoViews(APIView):

    def get(self, request):
        try:
            listas = Productos.objects.all()
            serializer = MixSerializer(listas, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)
    
    def  post(self, request):
        try:
            serializer = ProductosSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(['Elemento insertado.'], status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

    def put(self, request, id=None):
        try:
            productos = get_object_or_404(Productos, id=id)
            serializer = ProductosSerializer(productos, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(['Elemento actualizado.'], status=status.HTTP_200_OK)
            else:
                return Response(['Error 400'], status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

    def delete(self, request, id=None):
        try:
            productos = Productos.objects.get(id=id)
            productos.delete()
            return Response(['Elemento Eliminado.'], status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)