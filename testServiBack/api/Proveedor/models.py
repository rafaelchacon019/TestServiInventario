from django.db import models

# Create your models here.
class Proveedor(models.Model):
    nombre = models.CharField(max_length=50)
    direccion = models.CharField(max_length=20)
    nit = models.IntegerField(blank= False, null=True)
    telefono = models.IntegerField(blank= False, null=True)
