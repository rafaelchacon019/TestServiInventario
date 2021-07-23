from django.urls import path
from  .views import ProveedorViews

app_name = 'Proveedor'

urlpatterns = [
    path('', ProveedorViews.as_view()),
    path('<int:id>/', ProveedorViews.as_view())
]