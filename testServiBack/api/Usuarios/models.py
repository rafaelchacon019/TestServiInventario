from django.db import models

# Create your models here.
class Usuarios(models.Model):
    nombre = models.CharField(max_length=50,blank=True, null=True)
    apellido = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(max_length=150, unique=True, null=True)
    password = models.CharField(max_length=50, blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['password']