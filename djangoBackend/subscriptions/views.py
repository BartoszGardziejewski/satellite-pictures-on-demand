from django.http import JsonResponse
from rest_framework import viewsets, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

from photos.models import Photo
from photos.serializers import PhotoSerializer
from satellite.satellite_manager import current_location, location_at, get_photo
from subscriptions.models import Subscription
from subscriptions.serializers import SubscriptionSerializerDetail, SubscriptionSerializerList

from dateutil.parser import parse


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

        lat, lon = queryset.coordinates.split(';')
        # print(lat, lon)
        # current_photo = get_photo(lat, lon)

        try:
            current_photo = Photo.objects.filter(subscription_id=queryset.id, lat=lat, lon=lon)[0]
        except:
            current_photo = None

        try:
            photo_from_satellite = get_photo(lat, lon)
            if 'img' not in photo_from_satellite:
                raise Exception
        except:
            return JsonResponse({"message": "Satellite not responding."})

        if current_photo:
            if photo_from_satellite['img']:
                current_photo.image_file_ref_path = photo_from_satellite['img']
        else:
            current_photo = Photo.objects.create(lat=lat, lon=lon, subscription_id=queryset)
            if photo_from_satellite['img']:
                current_photo.image_file_ref_path = photo_from_satellite['img']
        current_photo.date = parse(photo_from_satellite['date'])
        current_photo.save()

        serializer = SubscriptionSerializerDetail(queryset, many=False)
        return JsonResponse(serializer.data, safe=False)

    def create(self, request, *args, **kwargs):
        # print(request.data)

        if 'name' not in request.data \
                or 'coordinates' not in request.data \
                or 'end_date' not in request.data \
                or 'periodicity' not in request.data:
            return JsonResponse({"message": "name, coordinates, end_date, periodicity fields are required."},
                                status=status.HTTP_400_BAD_REQUEST)

        try:
            end_date = parse(request.data['end_date'])
            periodicity = int(request.data['periodicity'])
            lat, lon = request.data['coordinates'].split(';')
        except:
            return JsonResponse({"message": "bad format."},
                                status=status.HTTP_400_BAD_REQUEST)

        sub = Subscription.objects.create(**{
            'user_id': request.user,
            'name': request.data['name'],
            'coordinates': '{};{}'.format(lat, lon),
            'periodicity': periodicity,
            'end_date': end_date.date(),
        })
        sub_serializer = SubscriptionSerializerDetail(sub)
        try:
            photo_response = get_photo(lat, lon)
            photo_date = parse(photo_response['date'])

            photo = Photo.objects.create(**{
                'subscription_id': sub,
                'date': photo_date.date(),
                'image_file_ref_path': photo_response['img'],
                'lat': lat,
                'lon': lon,
            })

            # photo_serializer = PhotoSerializer(photo)
            return JsonResponse({
                **sub_serializer.data,
            }, safe=False)
        except Exception as e:
            print(e)
            return JsonResponse({
                'subscription': sub_serializer.data,
                'photo': None,
                'error': 'Photo cannot be fetched from satellite.',
            })
