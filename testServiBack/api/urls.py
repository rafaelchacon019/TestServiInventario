from django.urls import path, include
# from rest_framework import routers

# router = routers.DefaultRouter()

urlpatterns = [
    path('categorias/', include('api.Categorias.urls', namespace='categorias')),
    path('productos/', include('api.Productos.urls', namespace='productos')),
    path('usuarios/', include('api.Usuarios.urls', namespace="usuarios")),
    path('proveedor/', include('api.Proveedor.urls', namespace="proveedor")),
    # path('usuarios/', include(router.urls)),
]