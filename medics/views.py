from django.shortcuts import render
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Symptom
from .serializers import SymptomSerializer
# Create your views here.

@api_view(['GET'])
def symptoms(request):
    symptoms = Symptom.objects.all()
    return Response(data=SymptomSerializer(symptoms, many=True).data, status=status.HTTP_200_OK)

@api_view(['POST'])
def add_symptom(request):
    symptom_serializer = SymptomSerializer(data=request.data)
    if symptom_serializer.is_valid():
        symptom = symptom_serializer.save()
        return Response(data=SymptomSerializer(symptom).data, status=status.HTTP_201_CREATED)
    return Response(data=symptom_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

