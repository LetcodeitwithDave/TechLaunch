from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView



urlpatterns = [
    path('signup/', views.signup, name='sign up rout'),
    path('login/', views.login, name='login'),
    path('account', views.account,  name='account'),
    path('protectedview/', views.protectedView, name='protect'),
    path('token/refresh', TokenRefreshView.as_view(), name='token refresh'),
    path('token/access', TokenObtainPairView.as_view(), name='token access')

]
