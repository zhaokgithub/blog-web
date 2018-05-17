# -*- coding: utf-8 -*-
from datetime import date

from django.db import models

# Create your models here.
today = date.isoformat(date.today())


class Article(models.Model):
    article_id = models.IntegerField(
        primary_key=True,
        db_column='article_id')  # 文章id
    title = models.CharField(max_length=64)  # 标题
    author = models.CharField(max_length=32, default="赵凯")  # 作者
    abstract = models.CharField(max_length=64, default="")  # 摘要
    content = models.TextField(default="")  # 内容
    create_date = models.DateField(default=today)  # 创建日期
    status = models.IntegerField()  # 状态
    view_number = models.IntegerField(default=0)  # 浏览数
    popular_numbers = models.IntegerField(default=0)  # 点赞数
    top_value = models.IntegerField(default=0)  # 推荐等级
    type = models.CharField(max_length=16, default='原创')  # 类型

    def __str__(self):
        return self.title
