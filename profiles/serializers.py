from rest_framework import serializers
from .models import User, Patient, Specialization, Specialist

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class PatientSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Patient
        fields = '__all__'

class SpecializationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialization
        fields = '__all__'

class SpecialistSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    specialization = SpecializationSerializer()

    class Meta:
        model = Specialist
        fields = '__all__'