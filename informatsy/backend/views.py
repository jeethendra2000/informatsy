from django.shortcuts import render
<<<<<<< HEAD
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth.hashers import make_password
=======

from rest_framework.views import APIView
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework import authentication, permissions
>>>>>>> 9d924708d0f79fcb5bbb39cb9b365b8c10530c41

from backend import oauthall
from backend import essentialClass
from . models import *
from . serializers import *
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView

<<<<<<< HEAD
# Create your views here.

# for social login providing views


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

=======

class UserProfileView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]

    def get(self, request, slug=None, format=None):
        if slug is not None:
            profile = UserProfile.objects.get(user_slug=slug)
            serializer = UserProfileSerializer(profile, context={"request": request})
            followers = profile.followers.all()

            is_following = (True if followers.filter(pk=request.user.id).exists() else False)

            data = {
                'is_following' : is_following,
            }

            data.update(serializer.data)
            return Response(data, status=status.HTTP_200_OK)
        
        profiles = UserProfile.objects.all()
        serializer = UserProfileSerializer(profiles, context={"request":request}, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, slug, format=None):
        profile = UserProfile.objects.get(user_slug=slug)
        serializer = UserProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AddFollower(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]

    def post(self, request, slug, format=None):
        profile = UserProfile.objects.get(user_slug=slug)
        profile.followers.add(request.user.id)
        return Response(status=status.HTTP_200_OK)

class RemoveFollower(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]

    def post(self, request, slug, format=None):
        profile = UserProfile.objects.get(user_slug=slug)
        profile.followers.remove(request.user.id)
        return Response(status=status.HTTP_200_OK)
>>>>>>> 9d924708d0f79fcb5bbb39cb9b365b8c10530c41

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
<<<<<<< HEAD

    def get(self, request):
=======
    
    def get(self, request, format=None):
>>>>>>> 9d924708d0f79fcb5bbb39cb9b365b8c10530c41
        query = Syllabus.objects.all()
        serializer = SyllabusSerializer(query, context={"request": request}, many=True)
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


class NotesView(viewsets.ReadOnlyModelViewSet):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer

<<<<<<< HEAD
    def get(self, request):
        query = Notes.objects.all()
        serializer = NotesSerializer(query, many=True)
        return Response(serializer.data)
=======

class QuestionPapersView(viewsets.ReadOnlyModelViewSet):
    queryset = QuestionPapers.objects.all()
    serializer_class = QuestionPapersSerializer
>>>>>>> 9d924708d0f79fcb5bbb39cb9b365b8c10530c41
