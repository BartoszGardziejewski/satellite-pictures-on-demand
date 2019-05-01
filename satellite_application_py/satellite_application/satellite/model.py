from django.db import models


class Satellite(models.Model):
    longitude = models.FloatField(null=False)
    magnitude = models.FloatField(null=False)

    image = models.BinaryField

    def __str__(self):
        return "{} - {}".format(self.longitude, self.magnitude)


class Position(models.Model):
    longitude = models.FloatField(null=False)
    magnitude = models.FloatField(null=False)

    def __str__(self):
        return "{} - {}".format(self.longitude, self.magnitude)


class Image(models.Model):

    # imgBytes = models.ImageField()
    imgByte = models.IntegerField()