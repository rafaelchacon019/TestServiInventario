from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Productos
from api.Categorias.models import Categorias
from api.Usuarios.models import Usuarios

class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = ('nombre', 'detalle', 'cantidad', 'precio', 'categoria','usuarios')

class ProductosGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = '__all__'

class MixCategoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = ('id', 'nombre')

class MixUsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = ('id', 'nombre', 'apellido')

class MixSerializer(serializers.ModelSerializer):
    categorias = MixCategoriasSerializer(many=True, read_only=True, source='categorias')
    usuarios = MixUsuariosSerializer(many=True, read_only=True, source='usuarios')
    class Meta:
        model = Productos
        fields = ('id', 'nombre', 'detalle', 'cantidad', 'precio', 'categorias', 'usuarios')