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