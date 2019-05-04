from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    first_name = models.CharField(
        max_length=100
    )

    last_name = models.CharField(
        max_length=100
    )

    username = models.CharField(
        max_length=20,
        blank=False,
        unique=True
    )

    # password = ...

    email = models.CharField(
        max_length=255,
        blank=False,
        unique=True
    )

    custom_field = models.CharField(
        max_length=255,
    )
