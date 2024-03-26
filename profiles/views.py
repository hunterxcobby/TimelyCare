from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User, Patient, Specialization, Specialist
from .serializers import UserSerializer, PatientSerializer, SpecializationSerializer, SpecialistSerializer

@api_view(['GET'])
def index(request):
    """
    Welcome endpoint for the profiles app.
    """
    return Response({"message": "Welcome to the profiles app."})

@api_view(['GET'])
def users(request):
    """
    Retrieve all users.
    """
    users = User.objects.all()
    user_serializer = UserSerializer(users, many=True)
    return Response(user_serializer.data)

@api_view(['POST'])
def add_user(request):
    """
    Create a new user.
    """
    user_serializer = UserSerializer(data=request.data)
    if user_serializer.is_valid():
        user_serializer.save()
        return Response(user_serializer.data, status=status.HTTP_201_CREATED)
    return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_patient(request, user_id):
    """
    Retrieve patient by user_id.
    """
    try:
        patient = Patient.objects.get(user_id=user_id)
        patient_serializer = PatientSerializer(patient)
        return Response(patient_serializer.data)
    except Patient.DoesNotExist:
        return Response({"message": "Patient not found."}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_specialization(request, specialization_id):
    """
    Retrieve specialization by id.
    """
    try:
        specialization = Specialization.objects.get(id=specialization_id)
        specialization_serializer = SpecializationSerializer(specialization)
        return Response(specialization_serializer.data)
    except Specialization.DoesNotExist:
        return Response({"message": "Specialization not found."}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_specialist(request, user_id):
    """
    Retrieve specialist by user_id.
    """
    try:
        specialist = Specialist.objects.get(user_id=user_id)
        specialist_serializer = SpecialistSerializer(specialist)
        return Response(specialist_serializer.data)
    except Specialist.DoesNotExist:
        return Response({"message": "Specialist not found."}, status=status.HTTP_404_NOT_FOUND)
