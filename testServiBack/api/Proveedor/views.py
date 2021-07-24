from django.shortcuts import render, get_object_or_404
from rest_framework import serializers, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Proveedor
from .serializers import ProveedorSerializer, ProveedorGetSerializer, MixSerializer

# Create your views here.

class ProveedorViews(APIView):

    def get(self, request):
        try:
            proveedor = Proveedor.objects.all()
            serializer = ProveedorGetSerializer(proveedor, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

    def post(self, request):
        try:
            serializer = ProveedorSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(['Elemento insertado.'], status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

    def put(self, request, id=None):
        try:
            proveedor = get_object_or_404(Proveedor, id=id)
            serializer = ProveedorSerializer(proveedor, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(['Elemento actualizado.'], status=status.HTTP_200_OK)
            else:
                return Response(['Error 400'], status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

    def delete(self, request, id=None):
        try:
            proveedor_eliminar = Proveedor.objects.get(id=id)
            proveedor_eliminar.delete()
            return Response(['Elemento actualizado.'], status=status.HTTP_200_OK)            
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)


class ProveedorInfoProductos(APIView):

    def get(self, request):
        try:
            proveedor = Proveedor.objects.all()
            serializer = MixSerializer(proveedor, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)
