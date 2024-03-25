from django.contrib import admin
from .models import User, Patient, Specialization, Specialist

# Register your models here.
admin.site.register(User)
admin.site.register(Patient)
admin.site.register(Specialization)
admin.site.register(Specialist)
