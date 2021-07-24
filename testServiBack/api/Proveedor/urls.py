from django.urls import path
from  .views import ProveedorViews, ProveedorInfoProductos, ProveedorId

app_name = 'Proveedor'

urlpatterns = [
    path('', ProveedorViews.as_view()),
    path('<int:id>/', ProveedorViews.as_view()),
    path('info/', ProveedorInfoProductos.as_view()),
    path('filterid/<int:id>/', ProveedorId.as_view())
]