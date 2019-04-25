from django.urls import path
from .controller import SatellitePositionController


urlPatterns = [
    path('sat/', SatellitePositionController.as_view())
]