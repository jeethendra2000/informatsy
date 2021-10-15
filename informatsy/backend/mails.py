# Python code to illustrate Sending mail from
# your Gmail account
from decouple import config
import smtplib
from django.conf import settings
from . serializers import *
from django.core.mail import send_mail
# creates SMTP session


class MailService:
    def sendMail(reciever, username, urlToken):

        print(urlToken)
        subject = 'welcome to Informatsy'
        email_from = settings.EMAIL_HOST_USER
    
        topic = "Activate your account"
        message = f"<h4>Hi {username}</h4>,<p>Please activate your account<a href = {config('activationDomain')+str(urlToken)}> here </a>this link valid only two days</p>"
        recipient_list = [reciever]
        send_mail(subject, email_from, topic,
                  recipient_list, html_message=message)
        # terminating the sessio
