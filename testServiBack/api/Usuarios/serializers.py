from rest_framework import serializers
from .models import Usuarios

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = ('nombre','apellido','email','password')

class UsuariosGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'