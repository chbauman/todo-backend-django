from django.contrib.auth.models import User
from rest_framework import generics, permissions
from todoapp.api import models, serializers
from todoapp.api.permissions import IsOwner


class UserCreateView(generics.CreateAPIView):
    """API endpoint that allows users to be created."""

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = serializers.UserCreateSerializer
    permission_classes = []


class OwnedDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated, IsOwner]
    pass


class OwnedListView(generics.ListCreateAPIView):
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        return super().get_queryset().filter(owner=self.request.user)


class TodoGroupList(OwnedListView):
    queryset = models.TodoGroup.objects.all()
    serializer_class = serializers.TodoGroupSerializer


class TodoGroupDetail(OwnedDetailView):
    queryset = models.TodoGroup.objects.all()
    serializer_class = serializers.TodoGroupSerializer


class TodoItemList(OwnedListView):
    queryset = models.TodoItem.objects.all()
    serializer_class = serializers.TodoItemSerializer


class TodoItemDetail(OwnedDetailView):
    serializer_class = serializers.TodoItemSerializer
    queryset = models.TodoItem.objects.all()
