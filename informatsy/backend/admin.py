from django.contrib import admin
from .models import *
from rest_framework_simplejwt.token_blacklist import models
from rest_framework_simplejwt.token_blacklist.admin import OutstandingTokenAdmin
class NewOutstandingTokenAdmin(OutstandingTokenAdmin):
    
    def has_delete_permission(self, *args, **kwargs):
        return True
admin.site.unregister(models.OutstandingToken)
admin.site.register(models.OutstandingToken, NewOutstandingTokenAdmin)


# Register your models here.
admin.site.register(UserProfile)


@admin.register(ContactForm)
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ['id', 'fullName',
                    'emailAddress', 'message', 'contactedTime']
    search_fields = ('fullName','emailAddress', 'message', 'contactedTime')
    list_filter = ['contactedTime']


@admin.register(Syllabus)
class SyllabusAdmin(admin.ModelAdmin):
    list_display = ['branchName', 'scheme', 'branchImage']
    search_fields = ('branchName', 'scheme')
    list_filter = ('branchName', 'scheme')


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['courseName']
    


@admin.register(YearOrSem)
class YearOrSemAdmin(admin.ModelAdmin):
    list_display = ['yearOrSemName']
    


@admin.register(Notes)
class NotesAdmin(admin.ModelAdmin):
    list_display = ['id', 'subjectName', 'subjectCode',
                    'yearOrSem', 'course', 'documentURL']
    search_fields = ('subjectName', 'subjectCode',
                    'yearOrSem', 'course')
    list_filter = ('subjectName',
                    'yearOrSem', 'course')


@admin.register(QuestionPapers)
class QuestionPapersAdmin(admin.ModelAdmin):
    list_display = ['id', 'subjectName', 'subjectCode',
                    'yearOrSem', 'course', 'documentURL']
    search_fields = ('subjectName', 'subjectCode',
                    'yearOrSem', 'course')
    list_filter = ('subjectName',
                    'yearOrSem', 'course')


@admin.register(Notifications)
class NotificationsAdmin(admin.ModelAdmin):
    list_display = ['id', 'notificationTitle',
                    'relatedTo', 'notificationDescription']
    search_fields = ('notificationTitle','relatedTo', 'notificationDescription')
    list_filter = ['relatedTo']


@admin.register(AboutUs)
class AboutUsAdmin(admin.ModelAdmin):
    list_display = ['id', 'fullName', 'work', 'bio']
    search_fields = ('fullName', 'work')


@admin.register(College)
class CollegeAdmin(admin.ModelAdmin):
    list_display = ['id', 'college_name', 'college_code', 'college_address']
    search_fields = ('college_name', 'college_code', 'college_address')


@admin.register(Club)
class ClubAdmin(admin.ModelAdmin):
    list_display = ['id', 'club_name','club_logo', 'college', 'about_club']
    search_fields = ('club_name', 'college')
    list_filter = ['college']


@admin.register(IccContest)
class IccContestAdmin(admin.ModelAdmin):
    list_display = ['id', 'contest_name', 'contest_time', 'contest_link']
    search_fileds = ['contest_name']


@admin.register(SessionRecord)
class SessionRecordAdmin(admin.ModelAdmin):
    list_display = ['id', 'session_name', 'session_image', 'club_name', 'session_speaker', 'session_topic', 'session_time', 'session_material']
    search_fields = ['session_name','club_name', 'session_speaker', 'session_topic']
    list_filter = ('club_name', 'session_speaker', 'session_topic')


@admin.register(Attendance)
class AttendanceAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'usn', 'club_session','feedback']
    search_fields = ['id', 'name', 'usn', 'club_session']
    list_filter = ('name', 'usn', 'club_session')
