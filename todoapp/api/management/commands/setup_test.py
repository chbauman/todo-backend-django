from django.db.utils import IntegrityError
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

from todoapp.api.models import TodoGroup


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
        root_group = TodoGroup(owner=user, name="root")
        root_group.save()
