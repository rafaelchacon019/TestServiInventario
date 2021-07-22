from rest_framework import serializers
from .models import Categorias

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = ('nombre',)

    
class CategoriaGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = '__all__'