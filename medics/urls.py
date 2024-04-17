from django.urls import path
from . import views

urlpatterns = [
    path('symptoms/', views.symptoms, name='symptoms'),
    path('symptom/add/', views.add_symptom, name='add_symptom'),
]
