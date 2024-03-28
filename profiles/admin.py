from django.contrib import admin
from .models import User, Patient, Specialization, Specialist, MedicalHistory

# Register your models here.
admin.site.register(User)
admin.site.register(Patient)
admin.site.register(Specialization)
admin.site.register(MedicalHistory)

