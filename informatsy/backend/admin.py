from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(ContactForm)
admin.site.register(Syllabus)

admin.site.register(Course)
admin.site.register(YearOrSem)
admin.site.register(Notes)

