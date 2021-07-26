from django.urls import path, include
from . views import *

from rest_framework.routers import DefaultRouter

# creating router object
router = DefaultRouter()

# registering model Notes
router.register('notes', NotesView, basename='notes')
router.register('questionPapers', QuestionPapersView, basename='questionPapers')

urlpatterns = [
<<<<<<< HEAD

=======
    path('profiles/', UserProfileView.as_view(), name="profiles"),
    path('profile/<slug:slug>/', UserProfileView.as_view(), name="profile_detail"),
    path('profile/edit/<slug:slug>/', UserProfileView.as_view(), name="profile_edit"),
    path('profile/followers/add/<slug:slug>/', AddFollower.as_view(), name="add_follower"),
    path('profile/followers/remove/<slug:slug>/', RemoveFollower.as_view(), name="remove_follower"),
    
    path('', include(router.urls)),
>>>>>>> 9d924708d0f79fcb5bbb39cb9b365b8c10530c41
    path('contactForm/', ContactFormView.as_view(), name='contactForm'),
    path('syllabus/', SyllabusView.as_view(), name='syllabus'),

    path('signup/', SignupView.as_view(), name="signup"),
    path('OauthAll/', AllOauthView.as_view(), name="OauthAll"),

    path('course/', CourseView.as_view(), name='course'),
    path('yearOrSem/', YearOrSemView.as_view(), name='yearOrSem'),
<<<<<<< HEAD
    path('notes/', NotesView.as_view(), name='notes')

=======
>>>>>>> 9d924708d0f79fcb5bbb39cb9b365b8c10530c41
]
