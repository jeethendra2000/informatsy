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
    search_field = ('fullName', 'work')