from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(UserProfile)


@admin.register(ContactForm)
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ['id', 'fullName',
                    'emailAddress', 'message', 'contactedTime']


@admin.register(Syllabus)
class SyllabusAdmin(admin.ModelAdmin):
    list_display = ['branchName', 'scheme', 'branchImage']


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


@admin.register(QuestionPapers)
class QuestionPapersAdmin(admin.ModelAdmin):
    list_display = ['id', 'subjectName', 'subjectCode',
                    'yearOrSem', 'course', 'documentURL']
