from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

from photos.models import Photo
from photos.serializers import PhotoSerializer
from subscriptions.models import Subscription
from subscriptions.serializers import SubscriptionSerializerDetail


class SubscriptionViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
    serializer_class = SubscriptionSerializerDetail
    queryset = Subscription.objects.all()

    def perform_create(self, serializer):
        return serializer.save(user_id=self.request.user)

    @action(methods=['GET'], detail=True)
    def photos(self, request, pk=None):
        queryset = Photo.objects.filter(subscription_id=pk)
        serializer = PhotoSerializer(queryset, many=True)
        return JsonResponse(serializer.data, safe=False)
