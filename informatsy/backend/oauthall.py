import json
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

    def linkedInAuth(self, code):
        accessToken_url = f"https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id={config('linkedIn_client_id')}&client_secret={config('linkedIn_client_secret')}&code={code}&redirect_uri={config('linkedIn_redirect_uri')}"
        accesstoken = requests.get(accessToken_url).json()
        print(accesstoken)
        try:
            data = {}
            if accesstoken["access_token"] != "":
                response_info = requests.get(
                    "https://api.linkedin.com/v2/me?projection=(id,firstName,lastName)&oauth2_access_token="+accesstoken["access_token"]).json()
                print(response_info)
                emailAddress = requests.get(
                    "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))&oauth2_access_token="+accesstoken['access_token']).json()
            data = {"status": True, "profile_data": response_info,
                    "email_info": emailAddress}
            print(emailAddress)
            return data
        except Exception as e:
            return {"status": False}
            print("something went wrong")
