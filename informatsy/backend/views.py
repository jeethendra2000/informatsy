from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth.hashers import make_password

from backend import oauthall
from backend import essentialClass
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

# ----------oauth view-------------


class AllOauthView(APIView):
    def oauth_db_includer(data):

        dataObjects = Accounts
        if dataObjects.objects.filter(userEmail=data["userEmail"]):
            return False
        else:
            oauthserilizers = alloauthSerializers(data=data)
            print(data)
            if oauthserilizers.is_valid():
                oauthserilizers.save()
                return True
            return Response("Something went wrong try again after sometime", status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def post(self, request):
        # print(request.data["accesstoken"])
        authInstance = oauthall.Alloauth()
        if request.data["authProvider"] == "facebook":
            auth_status = authInstance.facebookAuth(
                request.data["accesstoken"])

            if auth_status["status"]:
                data = auth_status['res']
                dbData = {"first_name": data["first_name"], "last_name": data["last_name"], "uniqueId": essentialClass.UniqueidGen.uniqueIdGenerator(
                ), "userEmail": data["email"], "profileImg": data["picture"]["data"]["url"]}
                oathStatus = AllOauthView.oauth_db_includer(dbData)
                return Response("User created successfully", status=status.HTTP_200_OK) if oathStatus else Response("Your account is already created...!", status=status.HTTP_409_CONFLICT)

            else:
                return Response("Something went wrong", status=status.HTTP_409_CONFLICT)
        elif request.data["authProvider"] == "google":
            auth_status = authInstance.googleAuth(
                request.data["accesstoken"])
            if auth_status["status"]:
                data = auth_status['res']
                dbData = {"first_name": data["given_name"], "last_name": data["family_name"], "uniqueId": essentialClass.UniqueidGen.uniqueIdGenerator(
                ), "userEmail": data["email"], "profileImg": data["picture"]}

                oathStatus = AllOauthView.oauth_db_includer(dbData)
                return Response("User created successfully", status=status.HTTP_200_OK) if oathStatus else Response("Your account is already created...!", status=status.HTTP_409_CONFLICT)

            else:
                return Response("Something went wrong", status=status.HTTP_409_CONFLICT)
        else:
            auth_status = authInstance.linkedInAuth(
                request.data["accesstoken"])
            return Response("User created successfully", status=status.HTTP_200_OK)


class SignupView(APIView):
    def post(self, request):
        dataObjects = Accounts
        # method to generate uniqueid for users
        if request.method == "POST":
            # to store uniqueid string
            if dataObjects.objects.filter(userEmail=request.data["userEmail"]):
                return Response("Your Email already registered...!", status=status.HTTP_409_CONFLICT)
            # if no user registered then proceed next
            else:
                data = request.data
                data["uniqueId"] = essentialClass.UniqueidGen.uniqueIdGenerator()

                serializersWithUniqueid = SignupSerializer(data=data)
                if serializersWithUniqueid.is_valid():
                    serializersWithUniqueid.save(
                        password=make_password(data["password"]))
                    return Response(SignupSerializer(dataObjects.objects.all(), many=True).data)

                return Response("That email/username and password combination didn't work. Try again.", status=status.HTTP_405_METHOD_NOT_ALLOWED)


class CourseView(APIView):
    serializer_class = CourseSerializer

    def get(self, request):
        query = Course.objects.all()
        serializer = CourseSerializer(query, many=True)
        return Response(serializer.data)


class YearOrSemView(APIView):
    serializer_class = YearOrSemSerializer

    def get(self, request):
        query = YearOrSem.objects.all()
        serializer = YearOrSemSerializer(query, many=True)
        return Response(serializer.data)


class NotesView(APIView):
    serializer_class = NotesSerializer

    def get(self, request):
        query = Notes.objects.all()
        serializer = NotesSerializer(query, many=True)
        return Response(serializer.data)
