from django.shortcuts import render
from .models import User, Patient, Specialization, Specialist
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def index(request):
    return Response({"The setup was successful!"})