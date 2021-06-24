from django.shortcuts import render
import string
import random
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth.hashers import make_password

from . models import *
from . serializers import *
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
# Create your views here.

# for social login providing views


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter


class ContactFormView(APIView):

    serializer_class = ContactFormSerializer

    def post(self, request):
        serializer = ContactFormSerializer(data=request.data)
        if(serializer.is_valid(raise_exception=True)):
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SyllabusView(APIView):
    serializer_class = SyllabusSerializer

    def get(self, request):
        query = Syllabus.objects.all()
        serializer = SyllabusSerializer(query, many=True)
        return Response(serializer.data)

# ---------Signup view-----------------


class SignupView(APIView):
    def post(self, request):
        dataObjects = Accounts
        # method to generate uniqueid for users

        def uniqueIdGenerator():
            uniqueId = "".join(random.choices(
                string.ascii_letters+string.digits, k=30))
            if dataObjects.objects.filter(uniqueId=uniqueId):
                uniqueIdGenerator()
            else:
                return uniqueId

        if request.method == "POST":
            # to store uniqueid string
            if dataObjects.objects.filter(userEmail=request.data["userEmail"]):
                return Response("Your Email already registered...!", status=status.HTTP_409_CONFLICT)
            # if no user registered then proceed next
            else:
                data = request.data
                data["uniqueId"] = uniqueIdGenerator()
                data["password"] = make_password(data["password"])
                serializersWithUniqueid = SignupSerializer(data=data)
                if serializersWithUniqueid.is_valid():
                    serializersWithUniqueid.save()
                    return Response(SignupSerializer(dataObjects.objects.all(), many=True).data)

                else:
                    print("something went wrong")
                    return Response("Something went wrong", status=status.HTTP_405_METHOD_NOT_ALLOWED)
