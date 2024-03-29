from django.db import models

# Create your models here.

class MedicalHistory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    past_diagnoses = models.TextField(blank=True, null=True)  # consider using standardized codes
    allergies = models.TextField(blank=True, null=True)
    medications = models.TextField(blank=True, null=True)
    immunizations = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class EmergencyContact(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    relationship = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Symptom(models.Model):
    symptom_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    symptom_type = models.CharField(max_length=255)
    description = models.TextField()
    body_area = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
