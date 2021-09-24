from . models import *
from . serializers import *
import string
import random
from rest_framework_simplejwt.tokens import RefreshToken
from datetime import datetime, timedelta
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# --------class for generating uniqueid for all users----------


class UniqueidGen:
    dataObjects = Accounts
    # method to generate uniqueid for users

    def uniqueIdGenerator():
        uniqueId = "".join(random.choices(
            string.ascii_letters+string.digits, k=30))
        if UniqueidGen.dataObjects.objects.filter(uniqueId=uniqueId):
            UniqueidGen.uniqueIdGenerator()
        else:
            return uniqueId

    def tokenForActivatingEmail(data):
        print(data)
        access_token = RefreshToken.for_user(data)
        access_token.set_exp(lifetime=timedelta(days=2))
        print(access_token)
        return access_token
