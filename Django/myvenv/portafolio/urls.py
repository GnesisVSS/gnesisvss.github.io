
from django.conf.urls import url
from django.contrib import admin
from django.urls import path,include
from .views import recetas,elahorcado,quizzes
from . import views

urlpatterns = [
    url(r'^$', views.main, name='main'),
    path('/recetas',recetas,name='recetas'),
    path('/elahorcado',elahorcado,name='elahorcado'),
    path('/quizzes',quizzes,name='quizzes'),
]