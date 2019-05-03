from django.http import JsonResponse
from rest_framework import viewsets, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

from photos.models import Photo
from photos.serializers import PhotoSerializer
from subscriptions.models import Subscription
from subscriptions.serializers import SubscriptionSerializerDetail, SubscriptionSerializerList


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

    def list(self, request, **kwargs):
        queryset = Subscription.objects.filter(user_id=request.user)
        serializer = SubscriptionSerializerList(queryset, many=True)
        return JsonResponse(serializer.data, safe=False)

    def retrieve(self, request, pk=None, *args, **kwargs):
        try:
            queryset = Subscription.objects.filter(user_id=request.user, pk=pk)[0]
        except IndexError:
            return JsonResponse({"message": "This is not your subscription."}, status=status.HTTP_401_UNAUTHORIZED)
        serializer = SubscriptionSerializerDetail(queryset, many=False)
        return JsonResponse(serializer.data, safe=False)
