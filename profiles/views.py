from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User, Patient, Specialization, Specialist
from .serializers import UserSerializer, PatientSerializer, SpecializationSerializer, SpecialistSerializer
from django.db import transaction

@api_view(['GET'])
def index(request):
    """
    Welcome endpoint for the profiles app.
    """
    return Response({"message": "Welcome to the profiles app."})

@api_view(['GET'])
def users(request, user_id=None):
    """
    Retrieve users by user_id.
    If no user ID is provided, return all users.
    """
    if user_id is None:
        users = User.objects.all()
        user_serializer = UserSerializer(users, many=True)
        return Response(user_serializer.data)
    
    try:
        user = User.objects.get(id=user_id)
        user_serializer = UserSerializer(user)
        return Response(user_serializer.data)
    except User.DoesNotExist:
        return Response({"message": "User not found."}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def add_user(request):
    """
    Create a new user and create a corresponding Patient or Specialist based on the user type.
    """
    with transaction.atomic():
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            user_type = request.data.get('user_type')

            if user_type == 'Specialist':
                # Handle specialist creation
                specialization_title = request.data.get('specialization_title')
                if specialization_title is None:
                    return Response({"message": "Specialization title required for Specialist."}, status=status.HTTP_400_BAD_REQUEST)

                try:
                    specialization = Specialization.objects.get(title=specialization_title)
                    if not Specialist.objects.filter(user=user).exists():
                        specialist = Specialist.objects.create(user=user, specialization=specialization)
                        specialist_serializer = SpecialistSerializer(specialist)
                        return Response(specialist_serializer.data, status=status.HTTP_201_CREATED)
                    else:
                        return Response({"message": "Specialist with this user already exists."}, status=status.HTTP_400_BAD_REQUEST)
                except Specialization.DoesNotExist:
                    return Response({"message": f"Specialization with title '{specialization_title}' not found."}, status=status.HTTP_404_NOT_FOUND)
                
            elif user_type == 'Patient':
                # Handle patient creation
                # will handle the issue with duplicate keys here
                if not Patient.objects.filter(user=user).exists():
                    patient = Patient.objects.create(user=user)
                    patient_serializer = PatientSerializer(patient)
                    return Response(patient_serializer.data, status=status.HTTP_201_CREATED)
                else:
                    return Response({"message": "User created successfully."}, status=status.HTTP_201_CREATED)

        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_patient(request, user_id=None):
    """
    Retrieve patient by user_id.
    If no user ID is provided, return all patients.
    """
    if user_id is None:
        patients = Patient.objects.all()
        patient_serializer = PatientSerializer(patients, many=True)
        return Response(patient_serializer.data)
    
    try:
        patient = Patient.objects.get(user_id=user_id)
        patient_serializer = PatientSerializer(patient)
        return Response(patient_serializer.data)
    except Patient.DoesNotExist:
        return Response({"message": "Patient not found."}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def get_specialization(request, specialization_id=None):
    """
    Retrieve specialization by id.
    If no specialization ID is provided, return all specializations.
    """
    if specialization_id is None:
        specializations = Specialization.objects.all()
        specialization_serializer = SpecializationSerializer(specializations, many=True)
        return Response(specialization_serializer.data)
    
    try:
        specialization = Specialization.objects.get(id=specialization_id)
        specialization_serializer = SpecializationSerializer(specialization)
        return Response(specialization_serializer.data)
    except Specialization.DoesNotExist:
        return Response({"message": "Specialization not found."}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def get_specialist(request, user_id=None):
    """
    Retrieve specialist by user_id.
    If user_id is not provided, return all specialists.
    """
    if user_id is not None:
        try:
            specialist = Specialist.objects.get(user_id=user_id)
            specialist_serializer = SpecialistSerializer(specialist)
            return Response(specialist_serializer.data)
        except Specialist.DoesNotExist:
            return Response({"message": "Specialist not found."}, status=status.HTTP_404_NOT_FOUND)
    else:
        specialists = Specialist.objects.all()
        if specialists.exists():
            specialist_serializer = SpecialistSerializer(specialists, many=True)
            return Response(specialist_serializer.data)
        else:
            return Response({"message": "No specialists found."}, status=status.HTTP_404_NOT_FOUND)
