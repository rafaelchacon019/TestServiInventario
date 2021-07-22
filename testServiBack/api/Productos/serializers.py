from rest_framework import serializers
from .models import Productos

class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = ('nombre', 'detalle', 'cantidad', 'precio', 'categoria')

class ProductosGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = '__all__'