from django.urls import path, include
from . views import *

from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
# creating router object
router = DefaultRouter()

# registering model Notes
router.register('notes', NotesView, basename='notes')
router.register('questionPapers', QuestionPapersView,
                basename='questionPapers')
router.register('notifications', NotificationsView, basename='notifications')
router.register(r'aboutUs', AboutUsViewSet, basename='aboutUs')

router.register(r'college', CollegeViewSet, basename='college')
router.register(r'club', ClubViewSet, basename='club')
router.register(r'SessionRecord', SessionRecordViewSet, basename='sessionRecord')
router.register(r'attendance', AttendanceViewSet, basename='attendance')
router.register(r'IccContest', IccContestViewSet, basename='IccContest')


urlpatterns = [
    path('profiles/', UserProfileView.as_view(), name="profiles"),
    path('profile/<slug:slug>/', UserProfileView.as_view(), name="profile_detail"),
    path('profile/edit/<slug:slug>/',
         UserProfileView.as_view(), name="profile_edit"),
    path('profile/followers/add/<slug:slug>/',
         AddFollower.as_view(), name="add_follower"),
    path('profile/followers/remove/<slug:slug>/',
         RemoveFollower.as_view(), name="remove_follower"),

    path('', include(router.urls)),
    path('contactForm/', ContactFormView.as_view(), name='contactForm'),
    path('syllabus/', SyllabusView.as_view(), name='syllabus'),

    path('signup/', SignupView.as_view(), name="signup"),
    path('OauthAll/', AllOauthView.as_view(), name="OauthAll"),
    path('oauthLogin/', Loginoauth.as_view(), name="loginoauth"),
    path('onetaplogin/', Onetapgoogleauth.as_view(), name="onetap login"),
    path('course/', CourseView.as_view(), name='course'),
    path('yearOrSem/', YearOrSemView.as_view(), name='yearOrSem'),

    path('notes/', NotesView.as_view({'get': 'list'}), name='notes'),
    path('activateAccount/', ActivateAccount.as_view(), name="email activate"),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', MyTokenRefreshView.as_view(), name='token_refresh'),
    path('getuserinfo/', Getuserinfo.as_view(), name="getuserinfo"),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('logout/', LogoutView.as_view(), name="logout"),
    path('accounts/forgotpass/', ForgotPasswordRequest.as_view(),
         name="forgot password request"),
    path('accounts/passwordValidator/', ForgotPasswordValidator.as_view(),
         name="forgot password validator"),
    path("accounts/password/change/",
         ForgotPasswordResetForm.as_view(), name="password reset data")
]
