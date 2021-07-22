from django.urls import path
from .views import UsuariosViews

app_name = 'Usuarios'

urlpatterns = [
    path('', UsuariosViews.as_view()),
    path('<int:id>/', UsuariosViews.as_view())
]