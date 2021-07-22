from django.urls import path
from .views import CategoriasViews

app_name = 'Categorias'

urlpatterns = [
    path('', CategoriasViews.as_view()),
    path('<int:id>/', CategoriasViews.as_view())
]