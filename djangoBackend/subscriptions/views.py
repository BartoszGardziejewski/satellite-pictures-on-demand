from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from subscriptions.models import Subscription
from subscriptions.serializers import SubscriptionSerializerDetail


class SubscriptionViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
    serializer_class = SubscriptionSerializerDetail
    queryset = Subscription.objects.all()
