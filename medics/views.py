from django.shortcuts import render
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Symptom, MedicalHistory, EmergencyContact
from .serializers import SymptomSerializer, MedicalHistorySerializer, EmergencyContactSerializer
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
    

@api_view(['DELETE'])
def delete_symptom(request, symptom_id):
    """
    Delete a symptom.
    
    """
    if request.method == 'DELETE':
        try:
            symptom = Symptom.objects.get(symptom_id=symptom_id)
        except Symptom.DoesNotExist:
            return Response("Symptom not found.", status=status.HTTP_404_NOT_FOUND)
        
        symptom.delete()
        return Response("Symptom deleted.", status=status.HTTP_204_NO_CONTENT)
    else:
        return Response("Invalid request method.", status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def medical_history(request, history_id=None):
    """
    Retrieve medical history.
    """
    if request.method == 'GET':
        history_id = request.GET.get('id')
        if history_id:
            try:
                history = MedicalHistory.objects.get(id=history_id)
                history_serializer = MedicalHistorySerializer(history)
                return Response(history_serializer.data)
            except MedicalHistory.DoesNotExist:
                return Response("Medical history not found.", status=status.HTTP_404_NOT_FOUND)
        else:
            history = MedicalHistory.objects.all()
            history_serializer = MedicalHistorySerializer(history, many=True)
            return Response(history_serializer.data)
    else:
        return Response("Invalid request method.", status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def add_medical_history(request):
    """
    Add a new medical history.
    """
    if request.method == 'POST':
        history_serializer = MedicalHistorySerializer(data=request.data)
        if history_serializer.is_valid():
            history = history_serializer.save()
            return Response(history_serializer.data, status=status.HTTP_201_CREATED)
        return Response(history_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response("Invalid request method.", status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT']) 
def update_medical_history(request, history_id):
    """
    Update a medical history.
    """
    if request.method == 'PUT':
        try:
            history = MedicalHistory.objects.get(id=history_id)
        except MedicalHistory.DoesNotExist:
            return Response("Medical history not found.", status=status.HTTP_404_NOT_FOUND)
        
        history_serializer = MedicalHistorySerializer(history, data=request.data)
        if history_serializer.is_valid():
            history = history_serializer.save()
            return Response(history_serializer.data)
        return Response(history_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response("Invalid request method.", status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['DELETE'])
def delete_medical_history(request, history_id):
    """
    Delete a medical history.
    """
    if request.method == 'DELETE':
        try:
            history = MedicalHistory.objects.get(id=history_id)
        except MedicalHistory.DoesNotExist:
            return Response("Medical history not found.", status=status.HTTP_404_NOT_FOUND)
        
        history.delete()
        return Response("Medical history deleted.", status=status.HTTP_204_NO_CONTENT)
    else:
        return Response("Invalid request method.", status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def emergency_contact(request, contact_id=None):
    """
    Retrieve emergency contact.
    """
    if request.method == 'GET':
        contact_id = request.GET.get('id')
        if contact_id:
            try:
                contact = EmergencyContact.objects.get(id=contact_id)
                contact_serializer = EmergencyContactSerializer(contact)
                return Response(contact_serializer.data)
            except EmergencyContact.DoesNotExist:
                return Response("Emergency contact not found.", status=status.HTTP_404_NOT_FOUND)
        else:
            contacts = EmergencyContact.objects.all()
            contact_serializer = EmergencyContactSerializer(contacts, many=True)
            return Response(contact_serializer.data)
    else:
        return Response("Invalid request method.", status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def add_emergency_contact(request):
    """
    Add a new emergency contact.
    """
    if request.method == 'POST':
        contact_serializer = EmergencyContactSerializer(data=request.data)
        if contact_serializer.is_valid():
            contact = contact_serializer.save()
            return Response(contact_serializer.data, status=status.HTTP_201_CREATED)
        return Response(contact_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response("Invalid request method.", status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_emergency_contact(request, contact_id):
    """
    Update an emergency contact.
    """
    if request.method == 'PUT':
        try:
            contact = EmergencyContact.objects.get(id=contact_id)
        except EmergencyContact.DoesNotExist:
            return Response("Emergency contact not found.", status=status.HTTP_404_NOT_FOUND)

        contact_serializer = EmergencyContactSerializer(contact, data=request.data)
        if contact_serializer.is_valid():
            contact = contact_serializer.save()
            return Response(contact_serializer.data)
        return Response(contact_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response("Invalid request method.", status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_emergency_contact(request, contact_id):
    """
    Delete an emergency contact.
    """
    if request.method == 'DELETE':
        try:
            contact = EmergencyContact.objects.get(id=contact_id)
        except EmergencyContact.DoesNotExist:
            return Response("Emergency contact not found.", status=status.HTTP_404_NOT_FOUND)

        contact.delete()
        return Response("Emergency contact deleted.", status=status.HTTP_204_NO_CONTENT)
    else:
        return Response("Invalid request method.", status=status.HTTP_400_BAD_REQUEST)
