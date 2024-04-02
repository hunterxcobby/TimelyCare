from django.urls import path
from . import views

urlpatterns = [
    path('symptoms/', views.symptoms, name='symptoms'),
    path('symptoms/<int:symptom_id>/', views.symptoms, name='symptom'),
    path('symptoms/add/', views.add_symptom, name='add_symptom'),
    path('symptoms/update/<int:symptom_id>/', views.update_symptom, name='update_symptom'),
    # path('symptoms/delete/<int:symptom_id>/', views.delete_symptom, name='delete_symptom'),
]
