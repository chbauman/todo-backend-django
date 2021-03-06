from rest_framework import permissions


class IsOwner(permissions.BasePermission):
    """Custom permission to only allow owners of an object to access it."""

    def has_object_permission(self, request, view, obj):
        # Write permissions are only allowed to the owner of the todo.
        return obj.owner == request.user
