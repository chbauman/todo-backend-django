# todo-backend-django

Backend for Todo App

## Installation

```
python -m venv venv
venv/Scripts/activate
pip install -r requirements.txt
```

## Initialize DB for testing

```
python manage.py makemigrations api
python manage.py migrate
python manage.py setup_test
python manage.py runserver
```
