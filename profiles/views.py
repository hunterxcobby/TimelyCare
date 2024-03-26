from django.shortcuts import render
from .models import User, Patient, Specialization, Specialist
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, PatientSerializer, SpecializationSerializer, SpecialistSerializer


@api_view(['GET'])
def index(request):
    return Response({"This is the api endpoint for the profiles app.": "Welcome to the profiles app."})

@api_view(['GET'])
def users(request):
    users = User.objects.all()
    user_serializer = UserSerializer(users, many=True)
    return Response(user_serializer.data)  # This will return a JSON response with all the users in the database.
# Path: profiles/urls.py

@api_view(['POST'])
def add_user(request):
    user_serializer = UserSerializer(data=request.data)
    if user_serializer.is_valid():
        user_serializer.save()
        return Response(user_serializer.data)
    return Response(user_serializer.errors)
# Path: profiles/urls.py
# Compare this snippet from profiles/urls.py:


@api_view(['GET'])
def get_patient(request, user_id):
    patient = Patient.objects.get(user_id=user_id)
    patient_serializer = PatientSerializer(patient)
    return Response(patient_serializer.data)

@api_view(['GET'])
def get_specialization(request, specialization_id):
    specialization = Specialization.objects.get(id=specialization_id)
    specialization_serializer = SpecializationSerializer(specialization)
    return Response(specialization_serializer.data)

@api_view(['GET'])
def get_specialist(request, user_id):
    specialist = Specialist.objects.get(user_id=user_id)
    specialist_serializer = SpecialistSerializer(specialist)
    return Response(specialist_serializer.data)
