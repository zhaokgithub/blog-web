from django.contrib.auth.models import User, Group
from .models import Article
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class ArticleSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Article
        fields = (
            'title',
            'author',
            'create_date',
            'type',
            'abstract',
            'status',
            'view_number',
            'popular_numbers',
            'content')