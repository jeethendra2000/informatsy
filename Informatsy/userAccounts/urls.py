from django.urls import path
from . import views

urlpatterns = [
    path('createUser', views.createUserAccount, name='createUser')
]