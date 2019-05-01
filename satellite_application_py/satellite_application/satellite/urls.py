from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from satellite_application.satellite.views import get_post_position


urlpatterns = [
    path('position', get_post_position)
]
urlpatterns = format_suffix_patterns(urlpatterns)
