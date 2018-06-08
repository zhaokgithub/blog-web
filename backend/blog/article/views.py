# coding:utf-8
import json

from django.core import serializers
from django.http import HttpResponse, JsonResponse

# Create your views here.
from django.shortcuts import render
from django.views.generic.base import View

from article.models import Article


class ArticleListView(View):
    def get(self, requst):
        query_data = Article.objects.all()
        data = serializers.serialize('json', query_data, ensure_ascii=False)
        print(data)
        response = HttpResponse(
            data,
            content_type='application/json; charset=utf-8'
        )
        return response

    def post(self, request):
        print('333333333333333333333')
        query_data = Article.objects.all()
        data = serializers.serialize('json', query_data, ensure_ascii=False)
        HttpResponse.status_code = 222
        response = HttpResponse(
            data,
            content_type='application/json; charset=utf-8'
        )
        return response

class ArticleDetailView(View):
    # 获取某条数据
    def get(self, request, id=None):
        print('1111111111111111')
        print(request.path.split('/'))
        length = len(request.path.split('/'))
        id = request.path.split('/')[length-2]
        print(id)
        query_data = Article.objects.filter(id=id)
        data = serializers.serialize('json', query_data, ensure_ascii=False)
        return HttpResponse(data,content_type='application/json; charset=utf-8')

    # 更改数据

    def put(self, request, id=None):
        print(id)
        print('222222222222222222222')
        return JsonResponse('add test')

    # 删除数据

    def delete(self, request, id=None):
        print(id)
        print('4444444444444')
        return JsonResponse('delete test')
