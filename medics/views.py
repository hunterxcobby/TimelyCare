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