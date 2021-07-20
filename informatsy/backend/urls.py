from django.urls import path
from . views import *

urlpatterns = [

    path('contactForm/', ContactFormView.as_view(), name='contactForm'),
    path('syllabus/', SyllabusView.as_view(), name='syllabus'),
<<<<<<< HEAD
    path('signup/', SignupView.as_view(), name="signup"),
    path('OauthAll/', AllOauthView.as_view(), name="OauthAll")
=======
    path('course/', CourseView.as_view(), name='course'),
    path('yearOrSem/', YearOrSemView.as_view(), name='yearOrSem'),
    path('notes/', NotesView.as_view(), name='notes')
>>>>>>> 0e357f347b97e85280ca4d799cc0ed24f9719b75
]
