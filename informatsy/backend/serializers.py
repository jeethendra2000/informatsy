from django.contrib.auth.hashers import make_password
from django.db.models import fields
from django.http.request import validate_host
from django.core.exceptions import ValidationError
from rest_framework import serializers
from . models import *
from django import forms


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


# validation for email


class SignupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Accounts

        fields = ('id', 'userEmail', 'password', 'uniqueId')

        extra_kwargs = {'password': {'write_only': True}}


class alloauthSerializers(serializers.ModelSerializer):
    class Meta:
        model = Accounts
        fields = ('id', 'userEmail', 'uniqueId', 'profileImg',
                  'first_name', 'last_name')


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
