from django.urls import path, include

urlpatterns = [
    path('categorias/', include('api.Categorias.urls', namespace='categorias')),
    path('productos/', include('api.Productos.urls', namespace='productos')),
    path('usuarios/', include('api.Usuarios.urls', namespace="usuarios"))
]