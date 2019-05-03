package pl.edu.pwr.student.satellitemanager.satellite;

import org.springframework.web.client.RestTemplate;

@org.springframework.stereotype.Service
public class Service {

    private final String bing_api_key = "AmafUcgdnpmARanaKddoI44s8GCD6fPSI6eh_Sk5fvKQ3lxCnclNJwjOmSVlAyIh";

    byte[] getCurrentImage(){

        RestTemplate restTemplate = new RestTemplate();

        String url = "https://dev.virtualearth.net/REST/v1/Imagery/Map/AerialWithLabels/" +
                Init.currentPosition.getLatitude() + "," + Init.currentPosition.getLongitude() +
                "/10?mapSize=100,600&format=png&mapMetadata=0&" +
                "key=" + bing_api_key;

        return restTemplate.getForObject(url, byte[].class);
    }

    byte[] getImageAtPosition(Double latitude, Double longitude){

        RestTemplate restTemplate = new RestTemplate();

        String url = "https://dev.virtualearth.net/REST/v1/Imagery/Map/AerialWithLabels/" +
                latitude + "," + longitude +
                "/10?mapSize=100,600&format=png&mapMetadata=0&" +
                "key=" + bing_api_key;


        return restTemplate.getForObject(url, byte[].class);
    }
}
