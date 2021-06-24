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
    branchChoice = (
        ('Civil', 'Civil'),
        ('Mechanical', 'Mechanical'),
        ('Electricals', 'Electricals'),
        ('Computer Science', 'Computer Science')
    )
    branchName = models.CharField(
        choices=branchChoice, max_length=50, primary_key=True, unique=True)
    scheme = models.CharField(max_length=4, default=2018)
    branchImage = models.ImageField(
        upload_to='branch/', default='branch/system.png')

    def __str__(self):
        return self.branchName

# -----------model for signup forms -------------------


class Accounts(models.Model):
    branchChoice = (
        ('Civil', 'Civil'),
        ('Mechanical', 'Mechanical'),
        ('Electricals', 'Electricals'),
        ('Computer Science', 'Computer Science')
    )
    userEmail = models.CharField(max_length=100)
    password = models.CharField(max_length=500)
    uniqueId = models.CharField(max_length=100)
    token = models.CharField(max_length=500)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    profileImg = models.CharField(max_length=500)
    proffesion = models.CharField(max_length=100)
    Branch = models.CharField(max_length=50, choices=branchChoice)
    currentSem = models.CharField(max_length=50)
    isActivated = models.BooleanField(default=False)

    def __str__(self):
        return self.userEmail
