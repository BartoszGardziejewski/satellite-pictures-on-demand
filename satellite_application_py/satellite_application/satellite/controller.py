from rest_framework import generics, viewsets
from .model import Satellite, Position
from .serializer import SatelliteSerializer, PositionSerializer


class SatellitePositionController(generics.ListAPIView):

    queryset = Satellite.objects.all()
    serializer_class = SatelliteSerializer


class PositionViewSet(viewsets.ModelViewSet):

    queryset = Position.objects.all()
    serializer_class = PositionSerializer

    def save(self, serializer):
        serializer.save();
