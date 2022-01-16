from django.contrib.auth.models import User
from rest_framework import serializers

from todoapp.api import models


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email"]


class TodoGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TodoGroup
        fields = ["created", "parent_id", "name"]


class TodoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TodoItem
        fields = ["id", "created", "parent_group_name", "text", "done"]
