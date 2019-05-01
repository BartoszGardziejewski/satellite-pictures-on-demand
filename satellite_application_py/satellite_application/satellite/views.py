from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from satellite_application.satellite.service import Service

from satellite_application.satellite.model import Position
from satellite_application.satellite.serializer import PositionSerializer


@csrf_exempt
def get_post_position(request):

    if request.method == 'GET':

        # position = Position.objects.all()
        # position.model.longitude = 12.0
        # position.model.magnitude = 1.0
        # serializer = PositionSerializer(position, many=True)

        position = Service.get_position()

        return JsonResponse(position, safe=False)

    elif request.method == "POST":

        data = JSONParser().parse(request)
        serializer = PositionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)

        return JsonResponse(serializer.errors, status=400)

