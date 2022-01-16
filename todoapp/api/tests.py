from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from todoapp.api.models import TodoGroup, TodoItem


TEST_USER = "test_user"
TEST_USER_PW = "password"


class BasicTestCase(TestCase):
    def setUp(self):
        """Test setup.

        Create a user and some sample objects.
        """
        user = User.objects.create_user(TEST_USER, password=TEST_USER_PW)
        group = TodoGroup.objects.create(owner=user, name="root")
        TodoItem.objects.create(
            owner=user, parent_group_name=group, text="Sample text."
        )

        self.client = APIClient()
        self.client.login(username=TEST_USER, password=TEST_USER_PW)

    def test_token_auth(self):
        """Test token authentication."""
        self.client.logout()
        data = {"username": TEST_USER, "password": TEST_USER_PW}
        resp = self.client.post("/api-token-auth/", data=data)
        self.assertTrue("token" in resp.json(), resp.json())

    def test_get_items(self):
        """Tests if user can get list of items."""

        resp = self.client.get("/todo_items/")
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(len(resp.json()), 1)

    def test_get_groups(self):
        """Tests if user can get list of groups."""

        resp = self.client.get("/todo_groups/")
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(len(resp.json()), 1)
