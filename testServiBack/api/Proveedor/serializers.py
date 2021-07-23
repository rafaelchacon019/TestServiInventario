from rest_framework import serializers
from .models import Proveedor

class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = ('nombre','direccion','nit','telefono')

class ProveedorGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = '__all__'