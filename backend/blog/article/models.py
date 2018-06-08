
# coding:utf-8
from django.db import models
from datetime import datetime
from django.utils import timezone

# Create your models here.

today = timezone.now


class Article(models.Model):
    id = models.AutoField(primary_key=True)
    author = models.CharField(max_length=64,default='厌笔不萧生')  # 作者
    title = models.CharField(max_length=64)  # 作者
    create_time = models.DateField(default=today)
    abstract = models.CharField(max_length=128, default='')
    content = models.TextField(default='')
    popular_number = models.IntegerField(default=0)  # 作者
    views_number = models.IntegerField(default=0)  # 作者
    weight = models.CharField(max_length=64, default=0)  # 作者

    # def __str__(self):
    #     return self.author
