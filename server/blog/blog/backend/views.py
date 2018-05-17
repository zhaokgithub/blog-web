from django.contrib.auth.models import User, Group
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Article
from rest_framework import viewsets, status
from .serializers import UserSerializer, GroupSerializer, ArticleSerialize
from django.views.generic.base import View


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Article.objects.all()
    serializer_class = ArticleSerialize
    # queryset = Group.objects.all()
    # serializer_class = GroupSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerialize

    def list(self, request, *args, **kwargs):
        qs = Article.objects.all()
        page = self.paginate_queryset(qs)
        print("1---------------------")
        print(page)
        if page is not None:
            print("2---------------------")
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(qs, many=True)
        print(serializer.data)
        return Response(serializer.data)

    def single_article(self, request, id=None):
        print('11111==========================')
        snippets = get_object_or_404(self.queryset, pk=id)
        serializer = ArticleSerialize(snippets)
        print(serializer)
        return Response(serializer.data)

    def update(self, request, id=None):
        print('==========================')
        # serializer = ArticleSerialize(data=request.data)
        milestone = get_object_or_404(self.queryset, pk=id)
        print(id)
        serializer = ArticleSerialize(
            milestone, data=request.data, partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        print('tttttttttttttttttttttt')
        print(request)
        print('==========================')
        # serializer = ArticleSerialize(data=request.data)
        milestone = get_object_or_404(self.queryset)
        serializer = ArticleSerialize(
            milestone, data=request.data, partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
