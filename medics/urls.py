from django.urls import path
from . import views

urlpatterns = [
    path('symptoms/', views.symptoms, name='symptoms'),
    path('symptoms/<int:symptom_id>/', views.symptoms, name='symptom'),
    path('symptoms/add/', views.add_symptom, name='add_symptom'),
    path('symptoms/update/<int:symptom_id>/', views.update_symptom, name='update_symptom'),
    path('symptoms/delete/<int:symptom_id>/', views.delete_symptom, name='delete_symptom'),
    path('medical-history/', views.medical_history, name='medical_history'),
    path('medical-history/<int:history_id>/', views.medical_history, name='history'),
#     path('medical-history/add/', views.add_medical_history, name='add_medical_history'),
#     path('medical-history/update/<int:history_id>/', views.update_medical_history, name='update_medical_history'),
#     path('medical-history/delete/<int:history_id>/', views.delete_medical_history, name='delete_medical_history'),
]
