from rest_framework import serializers
from .models import Proveedor
from api.Productos.models import Productos

class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = ('nombre','direccion','nit','telefono')

class ProveedorGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = '__all__'

class MixProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = ('id','nombre','detalle', 'cantidad', 'precio')

class MixSerializer(serializers.ModelSerializer):
    productos = MixProductosSerializer(many=True, read_only=True, source='productos_set')
    class Meta:
        model = Proveedor
        fields = ('id','nombre','productos')