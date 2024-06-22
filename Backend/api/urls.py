from django.urls import path
from . import views


urlpatterns = [
    path('signup/', views.signup, name='sign up rout'),
    path('login/', views.login, name='login'),
    path('protectedview/', views.protectedView, name='protect'),
]
