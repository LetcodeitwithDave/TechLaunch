from django.contrib import admin
from .models import MyUser, Account

# Register your models here.
admin.site.register(MyUser)
admin.site.register(Account)