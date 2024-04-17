from django.urls import path
from . import views

urlpatterns = [
   path('', views.index, name='index'),
   path('users/', views.users, name='users'),
   path('user/add/', views.add_user, name='add_user'),
   path('user/update/<int:user_id>/', views.update_user, name='update_user'),
   path('specialist/', views.get_specialist, name='get_specialist'),
   path('specialist/<int:user_id>/', views.get_specialist, name='get_specialist'),
   path('patient/', views.get_patient, name='get_patient'),
   path('patient/<int:user_id>/', views.get_patient, name='get_patient'),
   path('specialization/', views.get_specialization, name='get_specialization'),
   path('specialization/<int:specialization_id>/', views.get_specialization, name='get_specialization'),
   path('login/', views.login, name='login'),
   
]
