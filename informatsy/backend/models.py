from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
gender_choice = (
    ('Male', 'Male'),
    ('Female', 'Female'),
    ('Others', 'Others')
)

class UserProfile(models.Model):
    user = models.OneToOneField(User, primary_key=True, unique=True, on_delete=models.CASCADE)
    # Below 3 fields are present already in user model
    # first_name = models.CharField(max_length=50, blank=True)
    # last_name = models.CharField(max_length=50, blank=True)
    # email_address = models.EmailField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='user_profiles', default='user_profiles/default.png', blank=True)

    gender = models.CharField(max_length=20, choices=gender_choice, blank=True)
    date_of_birth = models.DateField(blank=True, null=True)
    phone = models.CharField(max_length=13, blank=True, null=True)
    address = models.TextField(max_length=200, blank=True, null=True)
    bio = models.TextField(max_length=128, blank=True, null=True)
    
    usn = models.CharField(max_length=20, blank=True, null=True)
    course = models.CharField(max_length=100, blank=True, null=True)
    college = models.CharField(max_length=200, blank=True, null=True)

    github_profile = models.URLField(max_length=200, blank=True, null=True)
    linkedin_profile = models.URLField(max_length=200, blank=True, null=True)
    facebook_profile = models.URLField(max_length=200, blank=True, null=True)
    instagram_profile = models.URLField(max_length=200, blank=True, null=True)
    twitter_profile = models.URLField(max_length=200, blank=True, null=True)

    codeforces_handle = models.CharField(max_length=20, blank=True, null=True)
    codechef_handle = models.CharField(max_length=20, blank=True, null=True)
    leetcode_handle = models.CharField(max_length=20, blank=True, null=True)
    hackerrank_handle = models.CharField(max_length=20, blank=True, null=True)

    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    followers = models.ManyToManyField(User, blank=True, related_name='followers')

    def __str__(self):
        return f"{self.user.username}'s profile"


# to create user profile automaticatically after user creation
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

# to update the user profile data
@receiver(post_save, sender=User)
def update_user_profile(sender, instance, **kwargs):
    instance.userprofile.save()


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
    courseName = models.CharField(max_length=100,primary_key=True, unique=True)

    def __str__(self):
        return self.courseName


class YearOrSem(models.Model):
    yearOrSemName = models.CharField(max_length=50,primary_key=True, unique=True)

    def __str__(self):
        return self.yearOrSemName


class Notes(models.Model):
    subjectName = models.CharField(max_length=100)
    subjectCode = models.CharField(max_length=100, blank=True, null=True)
    yearOrSem = models.ForeignKey(YearOrSem, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    documentURL = models.URLField(max_length=512, null=True)

    def __str__(self):
        return self.subjectName


class QuestionPapers(models.Model):
    subjectName = models.CharField(max_length=100)
    subjectCode = models.CharField(max_length=100, blank=True, null=True)
    yearOrSem = models.ForeignKey(YearOrSem, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    documentURL = models.URLField(max_length=512, null=True)

    def __str__(self):
        return self.subjectName
