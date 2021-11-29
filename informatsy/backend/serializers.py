from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate
from django.db.models import fields
from django.http.request import validate_host
from django.core.exceptions import ValidationError
from rest_framework import serializers
from . models import *
from django import forms
from django.contrib.auth import password_validation
import re

from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer, TokenRefreshSerializer)


class UserProfileSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('get_username')
    first_name = serializers.SerializerMethodField('get_first_name')
    last_name = serializers.SerializerMethodField('get_last_name')
    email = serializers.SerializerMethodField('get_email')
    last_login = serializers.SerializerMethodField('get_last_login')
    number_of_followers = serializers.SerializerMethodField(
        'get_number_of_followers')

    class Meta:
        model = UserProfile
        fields = "__all__"

    # to get absolute url of image
    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)

    def get_username(self, pk):
        profile = UserProfile.objects.get(pk=pk)
        user = profile.user
        return user.username

    def get_first_name(self, pk):
        profile = UserProfile.objects.get(pk=pk)
        user = profile.user
        return user.first_name

    def get_last_name(self, pk):
        profile = UserProfile.objects.get(pk=pk)
        user = profile.user
        return user.last_name

    def get_email(self, pk):
        profile = UserProfile.objects.get(pk=pk)
        user = profile.user
        return user.email

    def get_last_login(self, pk):
        profile = UserProfile.objects.get(pk=pk)
        user = profile.user
        return user.last_login

    def get_number_of_followers(self, pk):
        profile = UserProfile.objects.get(pk=pk)
        followers = profile.followers.all()

        return len(followers)


class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = "__all__"


class SyllabusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Syllabus
        fields = "__all__"

    # to get absolute url of image
    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)


class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = ("profileImage", "fullName", "work", "bio")

# validation for email


class SignupSerializer(serializers.ModelSerializer):

    class Meta:
        model = User

        fields = '__all__'

        extra_kwargs = {'password': {'write_only': True}}

    def validate_password(self, value):
        pattern = re.compile(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{6,20}$")
        if not re.search(pattern, value):
            raise serializers.ValidationError("Password must be strong")
        return value

    def validate_email(self, value):
        pattern = re.compile(
            "^[A-Z,a-z,0-9,?./""-]+@(gmail|outlook|yahoo|icloud|gov|nic)+[.]+(com|org|net|gov|mil|biz|info|mobi|in|name|aero|jobs|museum|co)+$")
        if not re.search(pattern, value):
            raise serializers.ValidationError("Allowed only top domain email")
        return value


class alloauthBasicProfile(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"



class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = "__all__"


class YearOrSemSerializer(serializers.ModelSerializer):
    class Meta:
        model = YearOrSem
        fields = "__all__"


class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ['id', 'subjectName', 'subjectCode',
                  'yearOrSem', 'course', 'documentURL']


class QuestionPapersSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionPapers
        fields = ['id', 'subjectName', 'subjectCode',
                  'yearOrSem', 'course', 'documentURL']


class NotificationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notifications
        fields = "__all__"


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        customfield = UserProfile.objects.get(user=user.id)
        token['profile_img'] = customfield.profile_picture.url
        # Add custom claims
        token['name'] = user.username
        # token['profile_img'] = user.profile_picture
        token['id'] = user.id
        # Add more custom fields from your custom user model, If you have a
        # custom user model.
        # ...

        return token


class TokenrefreshSerializer(TokenRefreshSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        customfield = UserProfile.objects.get(user=user.id)
        token['profile_img'] = customfield.profile_picture.url
        # Add custom claims
        token['name'] = user.username
        # token['profile_img'] = user.profile_picture
        token['id'] = user.id
        # Add more custom fields from your custom user model, If you have a
        # custom user model.
        # ...

        return token
