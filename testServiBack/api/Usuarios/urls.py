from django.urls import path
from .views import UsuariosViews, usuarioInfoProductos, UsuarioId, LoginView#, UserView
from rest_framework.authtoken import views

app_name = 'Usuarios'

urlpatterns = [
    path('', UsuariosViews.as_view()),
    path('<int:id>/', UsuariosViews.as_view()),
    path('info/', usuarioInfoProductos.as_view()),
    path('filterid/<int:id>/', UsuarioId.as_view()),
    path('login/', LoginView.as_view()),
]