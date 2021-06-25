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