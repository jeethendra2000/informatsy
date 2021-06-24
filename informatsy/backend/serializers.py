from django.db.models import fields
from django.http.request import validate_host
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


class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accounts
        widgets = {
            "password": forms.PasswordInput(),
        }
        fields = ('id', 'userEmail', 'password', 'uniqueId')
