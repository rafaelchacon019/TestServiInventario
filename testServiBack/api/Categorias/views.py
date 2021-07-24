from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Categorias
from .serializers import CategoriasSerializer, CategoriasGetSerializer, MixSeriqlizer
# Create your views here.

class CategoriasViews(APIView):

    def get(self, request):
        try:
            categorias = Categorias.objects.all()
            serializer = MixSeriqlizer(categorias, many=True)
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
                return Response(['Error 400'], status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

    
    def put(self, request, id=None):
        try:            
            categorias = get_object_or_404(Categorias, id=id)
            serializer = CategoriasSerializer(categorias, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(['Elemento actualizado.'], status=status.HTTP_200_OK)
            else:
                return Response(['Error 400'], status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)
    
    def delete(self, request, id=None):
        try:            
            categoria_eliminar = Categorias.objects.get(id=id)
            categoria_eliminar.delete()
            return Response(['Elemento actualizado.'], status=status.HTTP_200_OK)            
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)