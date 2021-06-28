from django.urls import path
from . views import *

urlpatterns = [
    path('contactForm/', ContactFormView.as_view(), name='contactForm'),
    path('syllabus/', SyllabusView.as_view(), name='syllabus'),
    path('course/', CourseView.as_view(), name='course'),
    path('yearOrSem/', YearOrSemView.as_view(), name='yearOrSem'),
    path('notes/', NotesView.as_view(), name='notes')
]
