from django.core import exceptions
from django.middleware import csrf
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
from rest_framework import permissions
from django.contrib.auth.password_validation import validate_password
from django.http import response
from django.http import request
from django.http.request import RAISE_ERROR
from django.shortcuts import redirect, render
from decouple import config
from rest_framework.views import APIView
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework import authentication, permissions
from rest_framework.exceptions import *
import jwt
from datetime import datetime, timedelta
from django.conf import settings
from backend import oauthall
from backend import essentialClass
from . models import *
from . serializers import *
from backend import mails
import os
from django.http import HttpResponse
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,

)
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
JWT_authenticator = JWTAuthentication()


class UserProfileView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.AllowAny]

    def get(self, request, slug=None, format=None):
        if slug is not None:
            profile = UserProfile.objects.get(user_slug=slug)
            serializer = UserProfileSerializer(
                profile, context={"request": request})
            followers = profile.followers.all()

            is_following = (True if followers.filter(
                pk=request.user.id).exists() else False)

            data = {
                'is_following': is_following,
            }

            data.update(serializer.data)
            return Response(data, status=status.HTTP_200_OK)

        profiles = UserProfile.objects.all()
        serializer = UserProfileSerializer(
            profiles, context={"request": request}, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, slug, format=None):
        profile = UserProfile.objects.get(user_slug=slug)
        serializer = UserProfileSerializer(
            profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AddFollower(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.AllowAny]

    def post(self, request, slug, format=None):
        profile = UserProfile.objects.get(user_slug=slug)
        profile.followers.add(request.user.id)
        return Response(status=status.HTTP_200_OK)


class RemoveFollower(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.AllowAny]

    def post(self, request, slug, format=None):
        profile = UserProfile.objects.get(user_slug=slug)
        profile.followers.remove(request.user.id)
        return Response(status=status.HTTP_200_OK)


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
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        query = Syllabus.objects.all()
        serializer = SyllabusSerializer(
            query, context={"request": request}, many=True)
        return Response(serializer.data)


class AboutUsViewSet(viewsets.ReadOnlyModelViewSet):
    # define queryset
    queryset = AboutUs.objects.all()
     
    # specify serializer to be used
    serializer_class = AboutUsSerializer

# ---------Signup view-----------------

# ----------oauth view-------------


class AllOauthView(APIView):
    try:
        def oauth_db_includer(data):

            userObjects = User
            # userProfileObj = UserProfile
            if userObjects.objects.filter(email=data["email"]):
                return {"status": False}
            else:
                oauthserilizersBasic = alloauthBasicProfile(data=data)
                if oauthserilizersBasic.is_valid():
                    print("saved")
                    user = oauthserilizersBasic.save()
                    return {"status": True, "id": user}

                return {"status": False}
    except Exception as e:
        print(e)

    def post(self, request):
        # print(request.data["accesstoken"])
        authInstance = oauthall.Alloauth()
        if request.data["authProvider"] == "facebook":
            auth_status = authInstance.facebookAuth(
                request.data["accesstoken"])

            if auth_status["status"]:
                data = auth_status['res']
                print(data)
                uniqueName = essentialClass.UniqueidGen.Uniquenamegenerator(
                    data["first_name"], data["last_name"])
                dbData = {"first_name": data["first_name"], "last_name": data["last_name"], "user": uniqueName, "username": uniqueName,
                          "email": data["email"], "password": data['id']}
                oauthStatus = AllOauthView.oauth_db_includer(dbData)
                if oauthStatus['status']:
                    token = essentialClass.UniqueidGen.TokenGeneratorOauth(
                        oauthStatus['id'])
                    print(token)
                    return Response({"token": token}, status=status.HTTP_200_OK)

                return Response("Your account is already created please login...!",
                                status=status.HTTP_409_CONFLICT)

            else:
                return Response("Something went wrong", status=status.HTTP_409_CONFLICT)
        elif request.data["authProvider"] == "google":
            auth_status = authInstance.googleAuth(
                request.data["accesstoken"])
            if auth_status["status"]:
                data = auth_status['res']
                # print(data)
                uniqueName = essentialClass.UniqueidGen.Uniquenamegenerator(
                    data["given_name"], data["family_name"])
                dbData = {"first_name": data["given_name"], "last_name": data["family_name"], "password": data['id'],
                          "email": data["email"], "username": uniqueName, "user": uniqueName}

                oauthStatus = AllOauthView.oauth_db_includer(dbData)
                if oauthStatus['status']:
                    token = essentialClass.UniqueidGen.TokenGeneratorOauth(
                        oauthStatus['id'])
                    # print(token)
                    return Response({"token": token}, status=status.HTTP_200_OK)

                return Response("Your account is already created please login...!",
                                status=status.HTTP_409_CONFLICT)

            else:
                return Response("Something went wrong", status=status.HTTP_409_CONFLICT)
        else:
            auth_status = authInstance.linkedInAuth(
                request.data["accesstoken"])
            if auth_status['status']:
                first_name = auth_status['profile_data']['firstName']['localized']['en_US']
                last_name = auth_status['profile_data']['lastName']['localized']['en_US']
                email = auth_status['email_info']['elements'][0]['handle~']['emailAddress']
                id = auth_status['profile_data']['id']
                print(first_name, last_name, email)
                uniqueName = essentialClass.UniqueidGen.Uniquenamegenerator(
                    first_name, last_name)
                dbData = {"first_name": first_name, "last_name": last_name, "password": id,
                          "email": email, "username": uniqueName, "user": uniqueName}
                oauthStatus = AllOauthView.oauth_db_includer(dbData)
                if oauthStatus['status']:
                    token = essentialClass.UniqueidGen.TokenGeneratorOauth(
                        oauthStatus['id'])
                    print(token)
                    return Response({"token": token}, status=status.HTTP_200_OK)

                return Response("Your account is already created please login...!",
                                status=status.HTTP_409_CONFLICT)
            else:
                return Response("Something went wrong", status=status.HTTP_409_CONFLICT)


class SignupView(APIView):
    permission_classes = [permissions.AllowAny]
    serializers_classes = User

    def post(self, request):
        dataObjects = User
        # method to generate uniqueid for users
        if request.method == "POST":
            if dataObjects.objects.filter(email=request.data["email"]):
                return Response("Your Email already registered...!", status=status.HTTP_409_CONFLICT)
            # if no user registered then proceed next
            if request.data['confirm_password'] != request.data['password']:
                return Response("Password does not match..!", status=status.HTTP_409_CONFLICT)

            else:
                data = request.data
                data["is_active"] = False
                serializersWithUniqueid = SignupSerializer(data=data)
                if serializersWithUniqueid.is_valid():
                    serializersWithUniqueid.save(
                        password=make_password(data["password"]))
                    user = dataObjects.objects.get(email=data['email'])
                    print(user)
                    tokenInstance = essentialClass.UniqueidGen
                    activation_token = tokenInstance.tokenForActivatingEmail(
                        user)
                    mails.MailService.sendMail(
                        data['email'], data['username'], activation_token)
                    return Response("User created successfully")
                print(serializersWithUniqueid.errors.get(
                    list(serializersWithUniqueid.errors.keys())[0])[0])
                return Response(serializersWithUniqueid.errors.get(list(serializersWithUniqueid.errors.keys())[0])[0], status=status.HTTP_405_METHOD_NOT_ALLOWED)


class Loginoauth(APIView):
    serializers_class = User
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        authInstance = oauthall.Alloauth()
        if request.data["authProvider"] == "facebook":
            auth_status = authInstance.facebookAuth(
                request.data["accesstoken"])

            if auth_status["status"]:
                data = auth_status['res']
                isUserexist = User.objects.filter(
                    email=data['email']).all()
                # user = isUserexist[0].id.values()
                if isUserexist.exists():
                    token = essentialClass.UniqueidGen.TokenGeneratorOauth(
                        isUserexist[0])
                    print(token)
                    return Response({"token": token}, status=status.HTTP_200_OK)
                else:

                    return Response("Account not registered with given credentials...!",
                                    status=status.HTTP_409_CONFLICT)

            else:
                return Response("Something went wrong", status=status.HTTP_409_CONFLICT)
        elif request.data["authProvider"] == "google":
            auth_status = authInstance.googleAuth(
                request.data["accesstoken"])
            if auth_status["status"]:
                data = auth_status['res']
                isUserexist = User.objects.filter(
                    email=data['email']).all()
                # user = isUserexist[0].id.values()
                if isUserexist.exists():
                    token = essentialClass.UniqueidGen.TokenGeneratorOauth(
                        isUserexist[0])
                    print(token)
                    return Response({"token": token}, status=status.HTTP_200_OK)
                else:

                    return Response("Account not registered with given credentials...!",
                                    status=status.HTTP_409_CONFLICT)

            else:
                return Response("Something went wrong", status=status.HTTP_409_CONFLICT)
        else:
            auth_status = authInstance.linkedInAuth(
                request.data["accesstoken"])
            if auth_status['status']:

                email = auth_status['email_info']['elements'][0]['handle~']['emailAddress']
                isUserexist = User.objects.filter(email=email).all()
                # user = isUserexist[0].id.values()
                if isUserexist.exists():
                    token = essentialClass.UniqueidGen.TokenGeneratorOauth(
                        isUserexist[0])
                    print(token)
                    return Response({"token": token}, status=status.HTTP_200_OK)
                else:

                    return Response("Account not registered with given credentials...!",
                                    status=status.HTTP_409_CONFLICT)

            else:
                return Response("Something went wrong", status=status.HTTP_409_CONFLICT)


class Onetapgoogleauth(APIView):

    def post(self, request):
        data = request.data
        dataObjects = User.objects.filter(email=data['email']).all()
        if dataObjects.exists():
            token = essentialClass.UniqueidGen.TokenGeneratorOauth(
                dataObjects[0])
            print(dataObjects[0].id)
            user = UserProfile.objects.get(user_id=dataObjects[0].id)
            data = {"profile_img": user.profile_picture.url,
                    "name": user.user.username}
            print(token)
            return Response({"token": token, "data": data}, status=status.HTTP_200_OK)
        else:
            uniqueName = essentialClass.UniqueidGen.Uniquenamegenerator(
                data["given_name"], data["family_name"])
            dbData = {"first_name": data["given_name"], "last_name": data["family_name"], "password": data['iat'],
                      "email": data["email"], "username": uniqueName, "user": uniqueName}
            oauthStatus = AllOauthView.oauth_db_includer(dbData)
            if oauthStatus['status']:
                token = essentialClass.UniqueidGen.TokenGeneratorOauth(
                    oauthStatus['id'])
                print(token)
                user = UserProfile.objects.get(user_id=oauthStatus['id'])
                data = {"profile_img": user.profile_picture.url,
                        "name": user.user.username}
                return Response({"token": token, "data": data}, status=status.HTTP_200_OK)

            return Response("Your account is already created please login...!",
                            status=status.HTTP_409_CONFLICT)


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
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]

    queryset = Notes.objects.all()
    serializer_class = NotesSerializer


class QuestionPapersView(viewsets.ReadOnlyModelViewSet):
    queryset = QuestionPapers.objects.all()
    serializer_class = QuestionPapersSerializer

# custom claims for jwt auth


# class for activationg user via mail


class ActivateAccount(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        try:
            payload = jwt.decode(
                request.data['token'], config('token_secret'), 'HS256')

            user = User.objects.get(id=payload['user_id'])
            userprofile = UserProfile.objects.get(user_id=payload['user_id'])
            if not user.is_active:
                user.is_active = True
                user.save()
                # print(userprofile.profile_picture)
                # print(userprofile.user)
                Refresh_token = RefreshToken.for_user(user)
                Refresh_token['username'] = str(userprofile.user)
                Refresh_token['profile_picture'] = str(
                    userprofile.profile_picture)
                Access_token = Refresh_token.access_token
                print(Refresh_token)
                return Response({'statusmsg': 'Activated successfully', 'tokens': {'access_token': str(Access_token), 'Refresh_token': str(Refresh_token)}})

            return Response("Your account is already activated please login", status=status.HTTP_409_CONFLICT)
        except jwt.ExpiredSignatureError:
            return Response("Link is expired please contact informatsy@gmail.com", status=status.HTTP_400_BAD_REQUEST)
        except jwt.InvalidSignatureError:
            return Response("This request not authorized by informatsy", status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response("Something is missing you are not authenticated", status=status.HTTP_405_METHOD_NOT_ALLOWED)


class Getuserinfo(APIView):
    # authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        try:
            token = request.headers.get('Authorization').split()[1]
            payload = jwt.decode(
                token, config('token_secret'), 'HS256')

            user = UserProfile.objects.get(user_id=payload['user_id'])
            data = {"profile_img": user.profile_picture.url,
                    "name": user.user.username}
            # print(user.profile_picture.url)
            # print(user.user.username)
            return Response(data)
        except:
            return Response("Not authenticated", status=status.HTTP_401_UNAUTHORIZED)


class NotificationsView(viewsets.ReadOnlyModelViewSet):
    queryset = Notifications.objects.all()
    serializer_class = NotificationsSerializer


class LogoutView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        try:
            token = RefreshToken(str(request.data['refresh']))
            token.blacklist()
            return Response("ok")
        except:
            return Response("Something went wrong", status=status.HTTP_409_CONFLICT)

# forgot password request for users


class ForgotPasswordRequest(APIView):
    def post(self, request):
        try:
            data = request.data['data']
            obj = re.compile(
                "^[A-Z,a-z,0-9,?./""-]+@(gmail|outlook|yahoo|icloud|gov|nic)+[.]+(com|org|net|gov|mil|biz|info|mobi|in|name|aero|jobs|museum|co)+$")
            if not re.search(obj, data):
                # print("something wrong")
                return Response("Email is not valid as per our domain", status=status.HTTP_400_BAD_REQUEST)
            userObj = User.objects.filter(email=data).all()
            if userObj.exists():

                # print(userObj[0].id)
                Access = RefreshToken.for_user(userObj[0])
                print(str(Access.access_token))
                email = userObj[0].email
                name = userObj[0].username
                dataobj = {'email': email,
                           'name': name, 'token': str(Access)}
                mails.MailService.sendPasswordResetReq(dataobj)
                return Response("ok")
            else:
                return Response("Email address is not yet registered", status=status.HTTP_409_CONFLICT)
        except Exception as e:
            print(e)
            return Response("Something went wrong", status=status.HTTP_409_CONFLICT)


class ForgotPasswordResetForm(APIView):
    def post(self, request):
        try:
            data = request.data

            payload = jwt.decode(
                data['token'], config('token_secret'), 'HS256')
            user = User.objects.get(id=payload['user_id'])

            if data['password'] == data['confirmPassword']:

                if user.is_active:
                    user.password = make_password(data['password'])
                    user.save()
                    # token = str(RefreshToken(str(data['token'])))
                    # token.blacklist()
                    return Response("Password reset successfully")
                else:
                    return Response("No active users found with email", status=status.HTTP_409_CONFLICT)
            else:
                return Response("Password and confirm password not matched", status=status.HTTP_405_METHOD_NOT_ALLOWED)
        except jwt.ExpiredSignatureError:
            return Response("Link is expired please raise a new request", status=status.HTTP_400_BAD_REQUEST)
        except jwt.InvalidSignatureError:
            return Response("This request not authorized by informatsy", status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(e, status=status.HTTP_405_METHOD_NOT_ALLOWED)


class ForgotPasswordValidator(APIView):
    def post(self, request):
        try:

            data = request.data
            payload = jwt.decode(
                data['token'], config('token_secret'), 'HS256')
            if payload:
                return Response("OK")
            return Response("Something went wrong", status=status.HTTP_400_BAD_REQUEST)
        except jwt.ExpiredSignatureError:
            return Response("Link is expired please raise a new request", status=status.HTTP_400_BAD_REQUEST)
        except jwt.InvalidSignatureError:
            return Response("This request not authorized by informatsy", status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response("Something is missing you are not authenticated", status=status.HTTP_405_METHOD_NOT_ALLOWED)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class MyTokenRefreshView(TokenRefreshView):
    serializer_class = TokenrefreshSerializer
