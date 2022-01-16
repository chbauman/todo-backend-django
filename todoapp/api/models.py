from django.db import models


class TodoBase(models.Model):
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True


class TodoGroup(TodoBase):
    owner = models.ForeignKey(
        "auth.User", related_name="todo_groups", on_delete=models.CASCADE
    )
    parent_id = models.ForeignKey(
        "self",
        blank=True,
        null=True,
        related_name="sub_groups",
        on_delete=models.CASCADE,
    )
    name = models.CharField(max_length=30)

    class Meta:
        ordering = ["created"]


class TodoItem(TodoBase):
    owner = models.ForeignKey(
        "auth.User", related_name="items", on_delete=models.CASCADE
    )
    parent_group_id = models.ForeignKey(
        TodoGroup,
        related_name="sub_todos",
        on_delete=models.CASCADE,
    )
    text = models.TextField()
    done = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ["created"]
