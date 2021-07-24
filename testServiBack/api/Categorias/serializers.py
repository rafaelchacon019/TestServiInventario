from django.db.models import fields
from rest_framework import serializers
from .models import Categorias
from api.Productos.models import Productos

class CategoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = ('nombre',)
    
class CategoriasGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = '__all__'

class MixProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = ('id','nombre','detalle', 'cantidad', 'precio')

class MixSeriqlizer(serializers.ModelSerializer):
    productos = MixProductosSerializer(many=True, read_only=True, source='productos_set')
    class Meta:
        model = Categorias
        fields = ('productos', 'id','nombre')