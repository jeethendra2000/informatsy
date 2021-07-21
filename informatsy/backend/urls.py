from django.urls import path, include
from . views import *

from rest_framework.routers import DefaultRouter

# creating router object
router = DefaultRouter()

# registering model Notes
router.register('notes', NotesView, basename='notes')
router.register('questionPapers', QuestionPapersView, basename='questionPapers')

urlpatterns = [
    path('profiles/', UserProfileView.as_view(), name="profiles"),
    path('profile/<int:pk>/', UserProfileView.as_view(), name="profile_detail"),
    path('profile/edit/<int:pk>/', UserProfileView.as_view(), name="profile_edit"),
    path('profile/<int:pk>/followers/add', AddFollower.as_view(), name="add_follower"),
    path('profile/<int:pk>/followers/remove', RemoveFollower.as_view(), name="remove_follower"),
    
    path('', include(router.urls)),
    path('contactForm/', ContactFormView.as_view(), name='contactForm'),
    path('syllabus/', SyllabusView.as_view(), name='syllabus'),
    path('course/', CourseView.as_view(), name='course'),
    path('yearOrSem/', YearOrSemView.as_view(), name='yearOrSem'),
]
