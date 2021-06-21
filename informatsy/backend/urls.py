from django.urls import path
from . views import *

urlpatterns = [
    path('contactForm/', ContactFormView.as_view(), name='contactForm'),
    path('syllabus/', SyllabusView.as_view(), name='syllabus')
]
