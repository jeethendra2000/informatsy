from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.views import APIView

from . models import *
from . serializers import *

# Create your views here.
class ContactFormView(APIView):

    serializer_class = ContactFormSerializer

    def get(self, request):
        data = [{"fullName":data.fullName, "emailAddress":data.emailAddress, "message":data.message, "contactedTime":data.contactedTime} for data in ContactForm.objects.all()]

        return Response(data)
    
    def post(self, request):
         serializer = ContactFormSerializer(data = request.data)
         if(serializer.is_valid(raise_exception=True)):
             serializer.save()
             return Response(serializer.data)
        # return Response(serializer.errors)