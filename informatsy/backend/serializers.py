from django.contrib.auth.hashers import make_password
from django.db.models import fields
from django.http.request import validate_host
from django.core.exceptions import ValidationError
from rest_framework import serializers
from . models import *
from django import forms



class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = "__all__"


class SyllabusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Syllabus
        fields = "__all__"


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


class NotesSerializer(serializers.Serializer):
    course = serializers.StringRelatedField(many=True, read_only=True)
    yearOfSem = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = Notes
        fields = ['subjectName', 'subjectCode', 'yearOrSem', 'course', 'documentURL']


