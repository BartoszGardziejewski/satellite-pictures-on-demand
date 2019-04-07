from django.db import models

from users.models import User


class Subscription(models.Model):
    user_id = models.ForeignKey(
        User,
        null=True,
        on_delete=models.SET_NULL
    )
    name = models.CharField(
        blank=False,
        max_length=255,
    )
    coordinates = models.CharField(
        blank=False,
        max_length=255,
    )
    periodicity = models.IntegerField(
        blank=False,
        default="14",
    )
    start_date = models.DateField(
        auto_now_add=True,
        blank=True
    )
    end_date = models.DateField(
        blank=True,
    )

    def __str__(self):
        return self.name
