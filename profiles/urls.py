from django.urls import path
from . import views

urlpatterns = [
   path('', views.index, name='index'),
   path('users/', views.users, name='users'),
   path('user/add/', views.add_user, name='add_user'),
]
