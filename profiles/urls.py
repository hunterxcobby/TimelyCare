from django.urls import path
from . import views

urlpatterns = [
   path('', views.index, name='index'),
   path('users/', views.users, name='users'),
   path('user/add/', views.add_user, name='add_user'),
   path('patient/<int:user_id>/', views.get_patient, name='get_patient'),
   path('specialization/<int:specialization_id>/', views.get_specialization, name='get_specialization'),
   path('specialist/<int:user_id>/', views.get_specialist, name='get_specialist'),
]
