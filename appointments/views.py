from django.shortcuts import render

# Create your views here.

def doctor(request):
    return render(request, 'doctor.html')