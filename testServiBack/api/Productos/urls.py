from django.urls import path
from .views import ProductoViews, ProductosInfo, ProductosIdAll

app_name = 'Productos'

urlpatterns = [
    path('', ProductoViews.as_view()),
    path('<int:id>/', ProductoViews.as_view()),
    path('info/', ProductosInfo.as_view()),
    path('filteridall/<int:id>/', ProductosIdAll.as_view())
]