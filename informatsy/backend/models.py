from django.db import models

# Create your models here.
class ContactForm(models.Model):
    fullName = models.CharField(max_length=30)
    emailAddress = models.EmailField(max_length=254)
    message = models.TextField()
    contactedTime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fullName


class Syllabus(models.Model):
    branchName = models.CharField(max_length=50, primary_key=True, unique=True)
    scheme = models.CharField(max_length=4, default=2018)
    branchImage = models.ImageField(upload_to='branch/')
    documentURL = models.URLField(max_length=200, null=True)

    def __str__(self):
        return self.branchName


# Resourse section
class Course(models.Model):
    courseName = models.CharField(max_length=100, primary_key=True, unique=True)

    def __str__(self):
        return self.courseName


class YearOrSem(models.Model):
    yearOrSemName = models.CharField(max_length=50, primary_key=True, unique=True)

    def __str__(self):
        return self.yearOrSemName


class Notes(models.Model):
    subjectName = models.CharField(max_length=100)
    subjectCode = models.CharField(max_length=20, blank=True, null=True)
    yearOrSem = models.ForeignKey(YearOrSem, on_delete=models.CASCADE, related_name="yearOrSem")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="course")
    documentURL = models.URLField(max_length=512, null=True)

    def __str__(self):
        return self.subjectName

