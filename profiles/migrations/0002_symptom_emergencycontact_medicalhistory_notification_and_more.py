# Generated by Django 5.0.1 on 2024-03-26 14:35

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Symptom',
            fields=[
                ('symptom_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('symptom_type', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('body_area', models.CharField(blank=True, max_length=255, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='EmergencyContact',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=255)),
                ('relationship', models.CharField(blank=True, max_length=255, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='profiles.user')),
            ],
        ),
        migrations.CreateModel(
            name='MedicalHistory',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('past_diagnoses', models.TextField(blank=True, null=True)),
                ('allergies', models.TextField(blank=True, null=True)),
                ('medications', models.TextField(blank=True, null=True)),
                ('immunizations', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='profiles.user')),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('notification_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('content', models.TextField()),
                ('sent_at', models.DateTimeField(auto_now_add=True)),
                ('notification_type', models.CharField(max_length=255)),
                ('is_read', models.BooleanField(default=False)),
                ('receiver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='received_notifications', to='profiles.user')),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sent_notifications', to='profiles.user')),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('appointment_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('status', models.CharField(choices=[('Pending', 'Pending'), ('Confirmed', 'Confirmed'), ('Completed', 'Completed'), ('Canceled', 'Canceled')], default='Pending', max_length=10)),
                ('notes', models.TextField(blank=True, null=True)),
                ('meeting_room_id', models.CharField(blank=True, max_length=255, null=True)),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='profiles.patient')),
                ('specialist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='profiles.specialist')),
                ('symptom', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='profiles.symptom')),
            ],
        ),
    ]
