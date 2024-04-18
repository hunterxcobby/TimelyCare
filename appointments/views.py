from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Appointment, Notification
from .serializers import AppointmentSerializer, NotificationSerializer

# Create your views here.

@api_view(['GET'])
def index(request):
    """
    Welcome endpoint for the appointments app.
    """
    return Response({"message": "Welcome to the appointments app."})

@api_view(['GET'])
def appointments(request, appointment_id=None):
    """
    Retrieve appointments by appointment_id.
    If no appointment ID is provided, return all appointments.
    """
    if appointment_id is None:
        appointments = Appointment.objects.all()
        appointment_serializer = AppointmentSerializer(appointments, many=True)
        return Response(appointment_serializer.data)
    
    try:
        appointment = Appointment.objects.get(appointment_id=appointment_id)
        appointment_serializer = AppointmentSerializer(appointment)
        return Response(appointment_serializer.data)
    except Appointment.DoesNotExist:
        return Response({"message": "Appointment not found."}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def create_appointment(request):
    """
    Create a new appointment.
    """
    appointment_serializer = AppointmentSerializer(data=request.data)
    if appointment_serializer.is_valid():
        appointment_serializer.save()
        return Response(appointment_serializer.data, status=status.HTTP_201_CREATED)
    return Response(appointment_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def notifications(request):
    """
    Retrieve all notifications.
    """
    notifications = Notification.objects.all()
    notification_serializer = NotificationSerializer(notifications, many=True)
    return Response(notification_serializer.data)

@api_view(['POST'])
def create_notification(request):
    """
    Create a new notification.
    """
    notification_serializer = NotificationSerializer(data=request.data)
    if notification_serializer.is_valid():
        notification_serializer.save()
        return Response(notification_serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(notification_serializer.errors, status=status.HTTP_400_BAD_REQUEST)