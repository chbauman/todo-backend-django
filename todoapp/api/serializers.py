from django.contrib.auth.models import User
from rest_framework import serializers

from todoapp.api import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email"]


class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        required=True,
        style={"input_type": "password"},
    )

    class Meta:
        model = User
        fields = ["username", "email", "password", "first_name", "last_name"]

    def create(self, validated_data):
        user = super().create(validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user

    def update(self, instance, validated_data):
        user = super().update(instance, validated_data)
        try:
            user.set_password(validated_data["password"])
            user.save()
        except KeyError:
            pass
        return user


class TodoGroupSerializer(serializers.ModelSerializer):
    parent_name = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = models.TodoGroup
        fields = ["created", "parent_name", "name"]

    def create(self, validated_data):
        par_name = validated_data.pop("parent_name", "")
        if par_name != "":
            parent_group = models.TodoGroup.objects.get(
                name=par_name, owner=self.context["request"].user
            )
            validated_data["parent_id"] = parent_group
        return super().create(validated_data)


class TodoItemSerializer(serializers.ModelSerializer):
    parent_group_name = serializers.CharField()

    class Meta:
        model = models.TodoItem
        fields = ["id", "created", "parent_group_name", "text", "done"]

    def create(self, validated_data):
        par_group_name = validated_data.pop("parent_group_name")
        parent_group = models.TodoGroup.objects.get(
            name=par_group_name, owner=self.context["request"].user
        )
        validated_data["parent_group_name"] = parent_group
        return super().create(validated_data)
