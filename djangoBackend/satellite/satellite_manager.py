import os

import requests

SATELLITE_MANAGER_BASE_URL = os.getenv('SATELLITE_MANAGER_BASE_URL')


def get(path):
    return requests.get(SATELLITE_MANAGER_BASE_URL + path)


def post(path, body):
    return requests.post(SATELLITE_MANAGER_BASE_URL + path, body)


def current_location():
    response = get('/position/now')
    return response.json()


def location_at(lat, lon):
    response = get('/position?latitude={}&longitude={}'.format(lat, lon))
    return response.json()


def get_photo(lat, lon):
    response = get('/image?latitude={}&longitude={}'.format(lat, lon))
    return response.json()
