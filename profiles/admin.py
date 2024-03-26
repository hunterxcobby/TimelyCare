from django.contrib import admin
from .models import User, Patient, Specialization, Specialist, Appointment, MedicalHistory, Notification

# Register your models here.
admin.site.register(User)
admin.site.register(Patient)
admin.site.register(Specialization)
admin.site.register(Appointment)
admin.site.register(MedicalHistory)
admin.site.register(Notification)
