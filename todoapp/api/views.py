from django.contrib.auth.models import User
from rest_framework import generics, permissions, status
from rest_framework import serializers as rest_serializers
from rest_framework.response import Response
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
    model_class: object

    def create(self, request, *args, **kwargs):
        """Checks if post request data is an array initializes serializer with many=True
        else executes default CreateModelMixin.create function
        """
        is_many = isinstance(request.data, list)
        if not is_many:
            return super().create(request, *args, **kwargs)
        else:
            # Delete already existing if a list is posted
            self.model_class.objects.filter(owner=self.request.user).delete()

            # A for loop is used here because the groups need to be saved one
            # after another since otherwise if a group refers to another one
            # being currently posted, validation will fail!
            all_data = []
            for item in request.data:
                serializer: rest_serializers.ModelSerializer = self.get_serializer(
                    data=item
                )
                serializer.is_valid(raise_exception=True)
                self.perform_create(serializer)
                all_data.append(serializer.data)

            return Response(all_data, status=status.HTTP_201_CREATED)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        return super().get_queryset().filter(owner=self.request.user)


class TodoGroupList(OwnedListView):
    model_class = models.TodoGroup
    queryset = models.TodoGroup.objects.all()
    serializer_class = serializers.TodoGroupSerializer


class TodoGroupDetail(OwnedDetailView):
    queryset = models.TodoGroup.objects.all()
    serializer_class = serializers.TodoGroupSerializer


class TodoItemList(OwnedListView):
    model_class = models.TodoItem
    queryset = models.TodoItem.objects.all()
    serializer_class = serializers.TodoItemSerializer


class TodoItemDetail(OwnedDetailView):
    serializer_class = serializers.TodoItemSerializer
    queryset = models.TodoItem.objects.all()
