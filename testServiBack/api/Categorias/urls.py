from django.urls import path
from .views import CategoriasViews, CategoriasInfoProductos, CategoriasId, CategoriasIdProductos

app_name = 'Categorias'

urlpatterns = [
    path('', CategoriasViews.as_view()),
    path('<int:id>/', CategoriasViews.as_view()),
    path('info/', CategoriasInfoProductos.as_view()),
    path('filterid/<int:id>/', CategoriasId.as_view()),
    path('filteridprod/<int:id>/', CategoriasIdProductos.as_view())
]