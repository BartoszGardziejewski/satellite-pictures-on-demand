from rest_framework import serializers

from subscriptions import models


class SubscriptionSerializerDetail(serializers.ModelSerializer):
    class Meta:
        model = models.Subscription
        fields = ('id', 'user_id', 'name', 'coordinates', 'periodicity', 'start_date', 'end_date')


class SubscriptionSerializerList(serializers.ModelSerializer):
    class Meta:
        model = models.Subscription
        fields = ('id', 'user_id', 'name', 'coordinates')
