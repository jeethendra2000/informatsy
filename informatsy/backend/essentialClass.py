from . models import *
from . serializers import *
import string
import random
from rest_framework_simplejwt.tokens import RefreshToken
from datetime import datetime, timedelta
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
import random

# --------class for generating uniqueid for all users----------


class UniqueidGen:
    dataObjects = User
    # method to generate uniqueid for users

    def __init__(self, data):
        return self

    # def uniqueIdGenerator(self):
    #     uniqueId = "".join(random.choices(
    #         string.ascii_letters+string.digits, k=30))
    #     if UniqueidGen.dataObjects.objects.filter(uniqueId=uniqueId):
    #         UniqueidGen.uniqueIdGenerator()
    #     else:
    #         return uniqueId
    # function to query names in db for unique names
    def uniqueNameQuery(name):
        try:

            if UniqueidGen.dataObjects.objects.filter(username=name).exists():
                return ""
            else:
                return name
        except Exception as e:
            print(e)

    # function to generate new unique name
    def uniqueNameGenMain(name, last):
        try:
            i = 0
            arr = ["_", "__", "@", "-", "."]
            a = ["n", "f", "r"]
            isUserExist = ""
            for k in range(0, 30):
                if isUserExist != "":
                    break
                elif k > 2:
                    i = 2
                for j in range(0, 5):
                    if a[i] == "n":
                        isUserExist = UniqueidGen.uniqueNameQuery(
                            name+arr[j]+last)
                    elif a[i] == "f":
                        isUserExist = UniqueidGen.uniqueNameQuery(arr[j]+name)
                    else:
                        isUserExist = UniqueidGen.uniqueNameQuery(
                            arr[j]+name+str(random.randint(1, 3000)))
                    if isUserExist != "":
                        break
                i += 1
            return isUserExist
        except Exception as e:
            print(e)

    def tokenForActivatingEmail(data):

        access_token = RefreshToken.for_user(data)

        access_token.set_exp(lifetime=timedelta(days=2))
        return access_token

    def Uniquenamegenerator(name, last):
        uniquename = UniqueidGen.uniqueNameGenMain(name, last)
        if uniquename != "":
            return uniquename
        return name+str(random.randint(5000, 10000))

    def TokenGeneratorOauth(id):
        Refresh_token = RefreshToken.for_user(id)
        print(Refresh_token.access_token)
        return {'refresh': str(Refresh_token), 'access': str(Refresh_token.access_token)}
