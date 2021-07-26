from django.db.models import fields
from rest_framework import serializers

from django.contrib.auth import password_validation, authenticate
from rest_framework.authtoken.models import Token
# from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator

from .models import Usuarios
from api.Productos.models import Productos

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = ('nombre','apellido','email', 'password')
        extra_kwargs = {'password': {'write_only': True}}
        
class CredencialesSerializer(serializers.ModelSerializer):   
    class Meta:
        model = Usuarios
        fields = ('email', 'password','id')
        extra_kwargs = {'password': {'write_only': True}}

class UsuariosGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'
            
class MixProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = ('id','nombre','detalle', 'cantidad', 'precio')

class MixSerializer(serializers.ModelSerializer):
    productos = MixProductosSerializer(many=True, read_only=True, source='productos_set')
    class Meta:
        model = Usuarios
        fields = ('id','nombre','apellido','productos')

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('first_name','last_name','email','password')
        
#         extra_kwargs = {'password': {'write_only': True}}