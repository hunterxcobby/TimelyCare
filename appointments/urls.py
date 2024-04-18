from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('appointments/', views.appointments, name='appointments'),
    path('appointments/<uuid:appointment_id>/', views.appointments, name='appointment'),
    path('appointments/create/', views.create_appointment, name='create_appointment'),
    path('notifications/', views.notifications, name='notifications'),
    path('notifications/create/', views.create_notification, name='create_notification'),
    path('notifications/<int:notification_id>/', views.notifications, name='notification'),
]
# Additional paths can be added here
# For example, to add a path for updating an appointment, you could use:
#path('appointments/<int:appointment_id>/update/', views.update_appointment, name='update_appointment'),

# Similarly, to add a path for deleting an appointment, you could use:
#path('appointments/<int:appointment_id>/delete/', views.delete_appointment, name='delete_appointment'),