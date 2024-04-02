from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('appointments/', views.appointments, name='appointments'),
    path('appointments/<int:appointment_id>/', views.appointments, name='appointment'),
    path('appointments/create/', views.create_appointment, name='create_appointment'),
    path('notifications/', views.notifications, name='notifications'),
    path('notifications/create/', views.create_notification, name='create_notification'),
]
