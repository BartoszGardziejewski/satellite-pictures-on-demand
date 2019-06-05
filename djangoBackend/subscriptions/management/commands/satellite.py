from datetime import datetime
from time import sleep

from dateutil.parser import parse
from django.core.management.base import BaseCommand

from photos.models import Photo
from satellite.satellite_manager import get_photo
from subscriptions.models import Subscription


class Command(BaseCommand):
    help = 'Runs the satellite photos downloader on every 5 min.'

    def handle(self, *args, **options):
        print('starting satellite updater..')
        while 1:
            subscriptions = Subscription.objects.all()

            for sub in subscriptions:
                cords = sub.coordinates
                lat, lon = cords.split(';')
                print('latlon', lat, lon)
                photo = get_photo(lat, lon)
                print('photo', photo)
                try:
                    photo_date = parse(photo['date']).date()
                except:
                    photo_date = None

                try:
                    photo_img = photo['img']
                except:
                    photo_img = None

                try:
                    ex_photos = Photo.objects.filter(subscription_id=sub, image_file_ref_path=photo_img)
                    print(
                        'all photos for subscription: {}:'.format(sub),
                        Photo.objects.filter(subscription_id=sub).values_list('image_file_ref_path', flat=True)
                    )
                    existing_photo = ex_photos[0]
                    print('new photo: ', existing_photo.image_file_ref_path)
                    print('*******************************')
                    print('')
                except:
                    existing_photo = None

                if existing_photo:
                    existing_photo.date = photo_date
                    existing_photo.image_file_ref_path = photo_img
                    existing_photo.lat = lat
                    existing_photo.lon = lon
                else:
                    Photo.objects.create(**{
                        'subscription_id': sub,
                        'date': photo_date,
                        'image_file_ref_path': photo_img,
                        'lat': lat,
                        'lon': lon,
                    })
            print('sleep for 5 min.. time:', datetime.now())
            sleep(300)
