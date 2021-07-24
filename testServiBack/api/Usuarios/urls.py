from django.urls import path
from .views import UsuariosViews, usuarioInfoProductos

app_name = 'Usuarios'

urlpatterns = [
    path('', UsuariosViews.as_view()),
    path('<int:id>/', UsuariosViews.as_view()),
    path('info/', usuarioInfoProductos.as_view())
]