from django.urls import path, include
from . views import *

from rest_framework.routers import DefaultRouter

# creating router object
router = DefaultRouter()

# registering model Notes
router.register('notes', NotesView, basename='notes')
router.register('questionPapers', QuestionPapersView, basename='questionPapers')

urlpatterns = [
    path('contactForm/', ContactFormView.as_view(), name='contactForm'),
    path('syllabus/', SyllabusView.as_view(), name='syllabus'),
    path('course/', CourseView.as_view(), name='course'),
    path('yearOrSem/', YearOrSemView.as_view(), name='yearOrSem'),
    path('', include(router.urls))
]
