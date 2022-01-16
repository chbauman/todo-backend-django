from django.contrib.auth.models import User
from rest_framework import viewsets, generics, permissions
from todoapp.api import models, serializers
from todoapp.api.permissions import IsOwner


class UserViewSet(viewsets.ModelViewSet):
    """API endpoint that allows users to be viewed or edited."""

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.IsAuthenticated]


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
