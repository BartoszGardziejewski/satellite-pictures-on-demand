package pl.edu.pwr.student.satellitemanager.satellite;

import org.springframework.web.client.RestTemplate;

@org.springframework.stereotype.Service
public class Service {

    private final String bing_api_key = "AmafUcgdnpmARanaKddoI44s8GCD6fPSI6eh_Sk5fvKQ3lxCnclNJwjOmSVlAyIh";


    byte[] getCurrentImage(){

        RestTemplate restTemplate = new RestTemplate();

        String url = "https://dev.virtualearth.net/REST/v1/Imagery/Map/AerialWithLabels/" +
                Init.currentPosition.getLongitude() + "," + Init.currentPosition.getLatitude() +
                "10?mapSize=100,600&format=png&mapMetadata=0&" +
                "key=" + bing_api_key;

        return restTemplate.getForObject(url, byte[].class);
    }

    byte[] getImageAtPosition(Double longitude, Double latitude){

        RestTemplate restTemplate = new RestTemplate();

        String url = "https://dev.virtualearth.net/REST/v1/Imagery/Map/AerialWithLabels/" +
                longitude + "," + latitude +
                "10?mapSize=100,600&format=png&mapMetadata=0&" +
                "key=" + bing_api_key;

        return restTemplate.getForObject(url, byte[].class);

    }

}
