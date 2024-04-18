from django.db import models
import uuid
from profiles.models import User, Patient, Specialist

class Notification(models.Model):
    notification_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    sender = models.ForeignKey(User, related_name='sent_notifications', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='received_notifications', on_delete=models.CASCADE)
    content = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
    notification_type = models.CharField(max_length=255)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"From: {self.sender.email} To: {self.receiver.email} Content: {self.content}"

class Appointment(models.Model):
    APPOINTMENT_STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Confirmed', 'Confirmed'),
        ('Completed', 'Completed'),
        ('Canceled', 'Canceled'),
    ]

    appointment_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    specialist = models.ForeignKey(Specialist, on_delete=models.CASCADE)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    symptom_type = models.CharField(max_length=255, default='General')
    symptom_description = models.TextField(default='How Exactly do you feel')
    date = models.DateField()
    time = models.TimeField()
    status = models.CharField(max_length=10, choices=APPOINTMENT_STATUS_CHOICES, default='Pending')
    #notes = models.TextField(blank=True, null=True)


def __str__(self):
    return f"Patient: {self.patient.user.email} Specialist: {self.specialist.user.email} Date: {self.date} Time: {self.time} Status: {self.status}"
