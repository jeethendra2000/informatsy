from django.db import models
from django.core.exceptions import ValidationError
# Create your models here.
from django.core.validators import RegexValidator


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
    # validation during store value to db
    validate_userEmail = RegexValidator(
        r'^[A-Z,a-z,0-9,?./""-]+@(gmail|outlook|yahoo|icloud|gov|nic)+[.]+(com|org|net|gov|mil|biz|info|mobi|in|name|aero|jobs|museum|co)+$', "Enter valid emil", "Email should be valid and top level domain")
    validate_password = RegexValidator(
        r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{6,20}$", "Password should reach required pattern", "")

    branchChoice = (
        ('Civil', 'Civil'),
        ('Mechanical', 'Mechanical'),
        ('Electricals', 'Electricals'),
        ('Computer Science', 'Computer Science')
    )
    userEmail = models.CharField(
        max_length=100,   validators=[validate_userEmail], unique=True,)
    password = models.CharField(
        max_length=500,  validators=[validate_password])
    uniqueId = models.CharField(max_length=100,  unique=True)
    userHandle = models.CharField(max_length=50, unique=True)
    token = models.CharField(max_length=500)
    userHandle = models.CharField(max_length=50, default="null")
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    gender = models.CharField(max_length=20)
    profileImg = models.CharField(max_length=500)
    proffesion = models.CharField(max_length=100)
    Branch = models.CharField(max_length=50, choices=branchChoice)
    currentSem = models.CharField(max_length=50)
    isActivated = models.BooleanField(default=False)

    def __str__(self):
        return self.userEmail
