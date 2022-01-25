from django.db.utils import IntegrityError
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

from todoapp.api.models import TodoGroup, TodoItem


class Command(BaseCommand):
    help = "Create test users"

    def handle(self, *args, **options):

        # Create test users
        admin_user = ["admin", True]
        basic_user = ["base_user", False]

        for user_name, is_super in [admin_user, basic_user]:

            try:
                user = User.objects.create_user(user_name, password="password")
                if is_super:
                    user.is_superuser = True
                    user.is_staff = True
                user.save()
            except IntegrityError:
                print(f"User {user_name} already exists.")

        # Create test data
        user = User.objects.get(username="admin")
        root_group_name = "root"
        root_group = TodoGroup(owner=user, name=root_group_name)
        self.try_saving(root_group, f"Group {root_group_name}")

        root_item = TodoItem(
            owner=user, parent_group_name=root_group, text="Sample text"
        )
        root_item.save()

        sub_group_name = "sub group"
        sub_group = TodoGroup(owner=user, name=sub_group_name, parent_id=root_group)
        self.try_saving(sub_group, f"Group {sub_group_name}")

        sub_item = TodoItem(
            owner=user, parent_group_name=sub_group, text="Sample sub task text"
        )
        sub_item.save()

    def try_saving(self, obj, name):
        try:
            obj.save()
        except IntegrityError:
            print(f"{name} already exists.")
