from django.contrib import admin
from .models import Appointment, Notification

# Register your models here.
admin.site.register(Appointment)
admin.site.register(Notification)