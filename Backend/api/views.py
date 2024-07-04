from django.shortcuts import render
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import MyUserSerializer
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['POST'])
def signup( request):
    serializer = MyUserSerializer(data= request.data)
    if serializer.is_valid():
        serializer.save()
        return Response ({'msg':'User created successfully'}, status=status.HTTP_201_CREATED)
    print(f"this is the error -> {serializer.errors['email']}")
    return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login( request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate( request, email=email, password = password)
    if user is not None:
        # generate a token for user
        refresh = RefreshToken.for_user(user)
        print(refresh.access_token)
        
        # get refresh and access token form RefreshToken
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_200_OK)


    return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protectedView(request):
    user = request.user
    
    user_data = {
        "email" : user.email,
    
    }
    print(user_data)
    return Response(user_data, status=status.HTTP_200_OK)


   