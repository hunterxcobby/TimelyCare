from django.contrib import admin
from .models import MedicalHistory, EmergencyContact, Symptom
# Register your models here.

admin.site.register(MedicalHistory)
admin.site.register(EmergencyContact)
admin.site.register(Symptom)
