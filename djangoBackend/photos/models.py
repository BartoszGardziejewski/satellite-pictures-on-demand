from django.db import models

from subscriptions.models import Subscription


class Photo(models.Model):
    subscription_id = models.ForeignKey(
        Subscription,
        on_delete=models.SET_NULL,
        null=True
    )

    date = models.DateField(
        auto_now_add=True,
        blank=True
    )

    image_file_ref_path = models.CharField(
        max_length=255,
        null=False,
    )
