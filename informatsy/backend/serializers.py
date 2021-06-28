from rest_framework import serializers
from . models import *


class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = "__all__"


class SyllabusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Syllabus
        fields = "__all__"


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

