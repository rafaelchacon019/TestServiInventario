from django.db import models
from api.Categorias.models import Categorias

# Create your models here.
class Productos(models.Model):
    nombre = models.CharField(max_length=250)
    detalle = models.CharField(max_length=250)
    cantidad = models.BigIntegerField(blank=True, null=True)
    precio = models.BigIntegerField(blank=True, null=True)
    categoria = models.ForeignKey(Categorias, models.CASCADE)