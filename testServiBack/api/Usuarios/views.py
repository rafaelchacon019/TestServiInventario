from testServiBack.api.Productos.serializers import ProductosSerializer
from testServiBack.api.Productos.models import Productos
from testServiBack.api.Categorias.serializers import CategoriasSerializer
from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Usuarios
from .serializers import UsuariosSerializer, UsuariosGetSerializer
# Create your views here.

class UsuariosView(APIView):

    def get(self, request):
        try:
            lista = Usuarios.objects.all()
            serializer = UsuariosGetSerializer(lista, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

    def post(self, request):
        try:
            serializer = CategoriasSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(['Elemento insertado.'], status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)
        
    def put(self, request, id=None):
        try:
            producto = get_object_or_404(Productos, id=id)
            serializer = ProductosSerializer(producto, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(['Elemento actualizado.'], status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)                
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)
    
    def delete(self, request, id=None):
        try:
            producto = Productos.objects.get(pk=id)
            producto.delete()
            return Response(['Elemento eliminado.'], status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)