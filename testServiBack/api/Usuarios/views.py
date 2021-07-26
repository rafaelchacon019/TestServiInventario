from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

# Login
from django.contrib.auth import authenticate, login, logout
from rest_framework.authtoken.models import Token
from django.contrib.auth.tokens import PasswordResetTokenGenerator
# from django.contrib.auth.models import User


from .models import Usuarios
from .serializers import UsuariosSerializer, UsuariosGetSerializer, MixSerializer, CredencialesSerializer#, UserSerializer, UsuarioLoginSerializer

# Create your views here.

class UsuariosViews(APIView):

    def get(self, request):
        try:
            lista = Usuarios.objects.all()
            serializer = UsuariosGetSerializer(lista, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

    def post(self, request):
        try:
            serializer = UsuariosSerializer(data=request.data)
            
            if serializer.is_valid():
                # for usuarios in Usuarios.objects.all():
                #     token_generator = PasswordResetTokenGenerator()
                #     token = token_generator.make_token(usuarios)
                # token = Token.objects.create(token)
                # print(token.key)
                serializer.save()
                return Response(['Elemento insertado.'], status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

    def put(self, request, id=None):
        try:
            usuarios = get_object_or_404(Usuarios, id=id)
            serializer = UsuariosSerializer(usuarios, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(['Elemento actualizado.'], status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

    def delete(self, request, id=None):
        try:
            usuario = Usuarios.objects.get(pk=id)
            usuario.delete()
            return Response(['Elemento eliminado.'], status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

class usuarioInfoProductos(APIView):

    def get(self, request):
        try:
            lista = Usuarios.objects.all()
            serializer = MixSerializer(lista, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

class UsuarioId(APIView):
    
    def get(self, request, id=None):
        try:
            if id is not None:
                lista_proveedor = Usuarios.objects.filter(id=id)
                serializer = UsuariosSerializer(lista_proveedor, many=True)               
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response([], status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

class LoginView(APIView):

    def post(self, request):
        try:
            email = request.data['email']
            password = request.data['password']
            # for usuarios in Usuarios.objects.filter(email=email):
            #     # token_generator = PasswordResetTokenGenerator()
            #     # token = token_generator.make_token(usuarios)
            #     token = Token.objects.get_or_create(usuarios)
            #     print(token)
            if email is not None or password is not None:
                credenciales = Usuarios.objects.filter(email=email, password=password)                
                serializer = CredencialesSerializer(credenciales, many=True)
                return Response(serializer.data,status=status.HTTP_200_OK)               
            else:
                return Response([], status=status.HTTP_400_BAD_REQUEST)
                
        except Exception as e:
            return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

# class UserView(APIView):
#     def get(self, request):
#         try:
#             lista = User.objects.all()
#             serializer = UserSerializer(lista, many=True)
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         except Exception as e:
#             return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)

#     def post(self, request):
#         try:
#             serializer = UserSerializer(data=request.data)
            
#             if serializer.is_valid():
                              
                
#                 serializer.save()
#                 return Response(['Elemento insertado.'], status=status.HTTP_200_OK)
#             else:
#                 return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         except Exception as e:
#             return Response(str(e), status=status.HTTP_503_SERVICE_UNAVAILABLE)
   