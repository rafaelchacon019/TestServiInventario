from rest_framework import serializers
from .models import Categorias

class CategoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = ('nombre',)
    
class CategoriasGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = '__all__'