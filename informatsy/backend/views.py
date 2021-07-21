from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework import authentication, permissions

from . models import *
from . serializers import *

# Create your views here.
# class UserProfileView(viewsets.ModelViewSet):
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer
    
#     def list(self, request):
#         profile = UserProfile.objects.all()
#         serializer = UserProfileSerializer(profile, context={"request": request}, many=True)
#         return Response(serializer.data)

class UserProfileView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]

    def get(self, request, pk=None, format=None):
        id = pk
        if id is not None:
            profile = UserProfile.objects.get(pk=id)
            user = profile.user
            serializer = UserProfileSerializer(profile, context={"request": request})
            followers = profile.followers.all()

            number_of_followers = len(followers)
            is_following = (True if followers.filter(pk=request.user.id).exists() else False)

            data = {
                'username' : user.username,
                'first_name': user.first_name,
                'last_name' : user.last_name,
                'email_address' : user.email,
                'last_login' : user.last_login,
                'is_following' : is_following,
                'number_of_followers' : number_of_followers,
            }

            data.update(serializer.data)
            return Response(data, status=status.HTTP_200_OK)
        
        # Not necessary to list all profile (think again)
        profiles = UserProfile.objects.all()
        serializer = UserProfileSerializer(profiles, context={"request":request}, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, pk, format=None):
        profile = UserProfile.objects.get(pk=pk)
        serializer = UserProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AddFollower(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]

    def post(self, request, pk, format=None):
        profile = UserProfile.objects.get(pk=pk)
        profile.followers.add(request.user.id)
        return Response(status=status.HTTP_200_OK)

class RemoveFollower(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]

    def post(self, request, pk, format=None):
        profile = UserProfile.objects.get(pk=pk)
        profile.followers.remove(request.user.id)
        return Response(status=status.HTTP_200_OK)

class ContactFormView(APIView):

    serializer_class = ContactFormSerializer
    
    def post(self, request):
        serializer = ContactFormSerializer(data = request.data)
        if(serializer.is_valid(raise_exception=True)):
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SyllabusView(APIView):
    serializer_class = SyllabusSerializer
    
    def get(self, request, format=None):
        query = Syllabus.objects.all()
        serializer = SyllabusSerializer(query, context={"request": request}, many=True)
        return Response(serializer.data)

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


class QuestionPapersView(viewsets.ReadOnlyModelViewSet):
    queryset = QuestionPapers.objects.all()
    serializer_class = QuestionPapersSerializer