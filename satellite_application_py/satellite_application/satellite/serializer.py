from rest_framework import serializers
from .model import Satellite, Position


class SatelliteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Satellite
        fields = ("longitude", "magnitude")


class PositionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Position
        fields = ('longitude', 'magnitude')
