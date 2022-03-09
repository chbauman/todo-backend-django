# todo-backend-django

Backend for Todo App

## Installation

If the project is checked-out from git, the following commands are
needed to start development.

```
python -m venv venv
venv/Scripts/activate
pip install -r requirements.txt
python manage.py runserver
```

## Updating the Database and manual testing

When there are changes to the database models, run the following
commands to update the database.

```
python manage.py makemigrations api
python manage.py migrate
```

The following command creates some test users / data
for manual testing.

```
python manage.py setup_test
```

## Deploy on PythonAnywhere

If there were some changes to the source code, try the following
for updating the production version on `pythonanywhere.com`.

```
cd ~
source .virtualenvs/venv/bin/activate
cd todo-backend-django/
git pull
python manage.py migrate
python manage.py collectstatic
```

Finally, the project may need to be reloaded.
Under the `Web` tab, choose `Reload chbauman.pythonanywhere.com`.

See: https://medium.com/codex/deploying-react-through-djangos-static-files-part-1-dev-setup-8a3a7b93c809
