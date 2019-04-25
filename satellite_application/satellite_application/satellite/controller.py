from rest_framework import generics
from .model import Satellite
from .serializer import SatelliteSerializer


class SatellitePositionController(generics.ListAPIView):

    queryset = Satellite.objects.all()
    serializer_class = SatelliteSerializer
