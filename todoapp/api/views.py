from django.contrib.auth.models import User
from rest_framework import viewsets, generics, permissions
from todoapp.api import models, serializers


class UserViewSet(viewsets.ModelViewSet):
    """API endpoint that allows users to be viewed or edited."""

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class TodoGroupList(generics.ListCreateAPIView):
    queryset = models.TodoGroup.objects.all()
    serializer_class = serializers.TodoGroupSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class TodoGroupDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.TodoGroup.objects.all()
    serializer_class = serializers.TodoGroupSerializer


class TodoItemList(generics.ListCreateAPIView):
    queryset = models.TodoItem.objects.all()
    serializer_class = serializers.TodoItemSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class TodoItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.TodoItem.objects.all()
    serializer_class = serializers.TodoItemSerializer
