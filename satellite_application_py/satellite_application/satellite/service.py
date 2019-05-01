from satellite_application.satellite.model import Position


class Service:

    def get_position(self):

        position = Position.objects.all()
        position.longitude = 10.0
        position.magnitude = 1.0

        return position
