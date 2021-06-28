from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from . models import *
from . serializers import *

# Create your views here.
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
    
    def get(self, request):
        query = Syllabus.objects.all()
        serializer = SyllabusSerializer(query, many=True)
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


class NotesView(APIView):
    serializer_class = NotesSerializer
    
    def get(self, request):
        query = Notes.objects.all();
        serializer = NotesSerializer(query, many=True)
        return Response(serializer.data)
