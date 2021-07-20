from . models import *
from . serializers import *
import string
import random
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
