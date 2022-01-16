"""todoapp URL Configuration"""
from django.contrib import admin
from django.urls import include, path
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.authtoken import views as authview
from todoapp.api import views


urlpatterns = [
    path("create_user/", views.UserCreateView.as_view()),
    path("todo_groups/", views.TodoGroupList.as_view()),
    path("todo_groups/<int:pk>/", views.TodoGroupDetail.as_view()),
    path("todo_items/", views.TodoItemList.as_view()),
    path("todo_items/<int:pk>/", views.TodoItemDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns += [
    path("admin/", admin.site.urls),
    path("api-token-auth/", authview.obtain_auth_token),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
