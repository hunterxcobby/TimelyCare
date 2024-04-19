from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.hashers import make_password

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser):
    USER_TYPES = (
        ('Patient', 'Patient'),
        ('Specialist', 'Specialist'),
    )

    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
    )

    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    phone_number = models.CharField(max_length=255)
    street_address = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    user_type = models.CharField(max_length=10, choices=USER_TYPES)

    def save(self, *args, **kwargs):
        if self.password and not self.pk:
            self.password = make_password(self.password)
            super().save(*args, **kwargs)

            # Automatically create Patient or Specialist instance based on user type
            if self.user_type == 'Patient':
                Patient.objects.create(user=self)
            elif self.user_type == 'Specialist':
                Specialist.objects.create(user=self)
        else:
            super().save(*args, **kwargs)

    is_active = models.BooleanField(default=True)
    created_on = models.DateField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'date_of_birth', 'gender', 'phone_number', 'user_type']

    def __str__(self):
        return self.email

class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, unique=True)
    # Add other patient-specific fields here if needed
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"
    

class Specialist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, unique=True)
    # Add other specialist-specific fields here if needed
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"
    

SPECIALIZATION_CHOICES = (
    ('Doctor', 'Doctor'),
    ('Dentist', 'Dentist'),
    ('Pharmacist', 'Pharmacist'),
    ('Nurse', 'Nurse'),
    ('Therapist', 'Therapist'),
    ('Psychologist', 'Psychologist'),
    ('Dietitian', 'Dietitian'),
    ('Physiotherapist', 'Physiotherapist'),
    ('Optometrist', 'Optometrist'),
    ('Chiropractor', 'Chiropractor'),
    ('Occupational Therapist', 'Occupational Therapist'),
    ('Speech Therapist', 'Speech Therapist'),
    ('Radiologist', 'Radiologist'),
    ('Surgeon', 'Surgeon'),
    ('Cardiologist', 'Cardiologist'),
    ('Dermatologist', 'Dermatologist'),
    ('Endocrinologist', 'Endocrinologist'),
    ('Gastroenterologist', 'Gastroenterologist'),
    ('Hematologist', 'Hematologist'),
    ('Neurologist', 'Neurologist'),
    ('Oncologist', 'Oncologist'),
    ('Pediatrician', 'Pediatrician'),
    ('Psychiatrist', 'Psychiatrist'),
    ('Rheumatologist', 'Rheumatologist'),
    ('Urologist', 'Urologist'),
    ('Allergist', 'Allergist'),
    ('Anesthesiologist', 'Anesthesiologist'),
    ('Cardiothoracic Surgeon', 'Cardiothoracic Surgeon'),
    ('Critical Care Specialist', 'Critical Care Specialist'),
    ('Emergency Medicine Specialist', 'Emergency Medicine Specialist'),
    ('Family Physician', 'Family Physician'),
    ('Geriatrician', 'Geriatrician'),
    ('Infectious Disease Specialist', 'Infectious Disease Specialist'),
    ('Internist', 'Internist'),
    ('Medical Geneticist', 'Medical Geneticist'),
    ('Nephrologist', 'Nephrologist'),
    ('Pulmonologist', 'Pulmonologist'),
    ('Radiation Oncologist', 'Radiation Oncologist'),
    ('Sleep Medicine Specialist', 'Sleep Medicine Specialist'),
    ('Sports Medicine Specialist', 'Sports Medicine Specialist'),
    ('Vascular Surgeon', 'Vascular Surgeon'),
    ('Acupuncturist', 'Acupuncturist'),
    ('Audiologist', 'Audiologist'),
    ('Ayurvedic Doctor', 'Ayurvedic Doctor'),
    ('Chiropractor', 'Chiropractor'),
    ('Homeopath', 'Homeopath'),
)

class Specialization(models.Model):
    title = models.CharField(max_length=255, choices=SPECIALIZATION_CHOICES)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    specialist = models.ForeignKey(Specialist, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title} - {self.specialist.user.first_name} {self.specialist.user.last_name}"
