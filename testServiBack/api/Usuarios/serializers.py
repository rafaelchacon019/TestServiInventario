from rest_framework import serializers
from .models import Usuarios
from api.Productos.models import Productos

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = ('nombre','apellido','email','password')

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