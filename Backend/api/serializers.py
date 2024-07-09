from .models import MyUser, Account
from rest_framework import serializers

class MyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['email', 'password', 'firstname', 'lastname']
        extra_kwargs = {'password': {'write_only':True}}


    def create(self, validated_data):
        user = MyUser.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            firstname=validated_data['firstname'],
            lastname=validated_data['lastname'],
        )
        return user
    # , 'lastname'


class AccountSerializer (serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'