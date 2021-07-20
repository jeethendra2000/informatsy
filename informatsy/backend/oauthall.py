import requests
from requests.api import head
from decouple import config


class Alloauth:
    def facebookAuth(self, accessToken):
        accessToken_url = "https://graph.facebook.com/me?fields=id%2Cname%2Cemail%2Cpicture%2Cgender%2Cfirst_name%2Clast_name&access_token="+accessToken
        response_info = requests.get(accessToken_url)
        try:

            print(response_info.json()["id"])
            return {'status': True, 'res': response_info.json()}

        except:
            return {'status': False}

    def googleAuth(self, accesstoken):
        accessToken_url = "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token="+accesstoken
        response_info = requests.get(accessToken_url)
        try:
            return {'status': True, 'res': response_info.json()}
        except:
            return {'status': False}
