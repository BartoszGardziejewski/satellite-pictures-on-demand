from rest_framework import serializers
from .model import Satellite


class SatelliteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Satellite
        fields = ("longitude", "magnitude")
