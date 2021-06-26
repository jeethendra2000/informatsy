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
