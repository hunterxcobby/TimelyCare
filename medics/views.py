from django.shortcuts import render
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Symptom
from .serializers import SymptomSerializer
# Create your views here.

@api_view(['GET'])
def symptoms(request, symptom_id=None):
    """
    Retrieve symptoms.
    """
    if request.method == 'GET':
        symptom_id = request.GET.get('id')
        if symptom_id:
            try:
                symptom = Symptom.objects.get(id=symptom_id)
                symptom_serializer = SymptomSerializer(symptom)
                return Response(symptom_serializer.data)
            except Symptom.DoesNotExist:
                return Response("Symptom not found.", status=status.HTTP_404_NOT_FOUND)
        else:
            symptoms = Symptom.objects.all()
            symptom_serializer = SymptomSerializer(symptoms, many=True)
            return Response(symptom_serializer.data)
    else:
        return Response("Invalid request method.", status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def add_symptom(request):
    """
    Add a new symptom.
    """
    if request.method == 'POST':
        symptom_serializer = SymptomSerializer(data=request.data)
        if symptom_serializer.is_valid():
            symptom = symptom_serializer.save()
            return Response(symptom_serializer.data, status=status.HTTP_201_CREATED)
        return Response(symptom_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response("Invalid request method.", status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_symptom(request, symptom_id):
    """
    Update a symptom.
    """
    if request.method == 'PUT':
        try:
            symptom = Symptom.objects.get(symptom_id=symptom_id)
        except Symptom.DoesNotExist:
            return Response("Symptom not found.", status=status.HTTP_404_NOT_FOUND)
        
        symptom_serializer = SymptomSerializer(symptom, data=request.data)
        if symptom_serializer.is_valid():
            symptom = symptom_serializer.save()
            return Response(symptom_serializer.data)
        return Response(symptom_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response("Invalid request method.", status=status.HTTP_400_BAD_REQUEST)