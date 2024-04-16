# from rest_framework import serializers
# from profiles.models import User, Patient, Specialization, Specialist

# # User Serializer
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'email', 'first_name', 'last_name', 'date_of_birth')

# # register serializer 
# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'email','password', 'user_type')
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user = User.objects.create_user(validated_data['email'], validated_data['password'], validated_data['user_type'])
#         return user