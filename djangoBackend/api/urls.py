from django.urls import include, path

from rest_framework import routers

from photos.views import PhotoViewSet
from subscriptions.views import SubscriptionViewSet
from users.views import UserViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet, basename='user')
router.register('subscriptions', SubscriptionViewSet, basename='subscription')
router.register('photos', PhotoViewSet, basename='photo')
urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_auth.urls')),
    path('auth/registration/', include('rest_auth.registration.urls')),
]
