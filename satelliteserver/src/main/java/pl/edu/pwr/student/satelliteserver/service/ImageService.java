package pl.edu.pwr.student.satelliteserver.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import pl.edu.pwr.student.satelliteserver.model.Position;

@Service
public class ImageService implements ImageServiceAPI {


    @Override
    public byte[] getSatelliteImage() {

        RestTemplate restTemplate = new RestTemplate();

        String api = "AmafUcgdnpmARanaKddoI44s8GCD6fPSI6eh_Sk5fvKQ3lxCnclNJwjOmSVlAyIh";
        String url = "https://dev.virtualearth.net/REST/v1/Imagery/Map/AerialWithLabels/47.610,-122.107/10?mapSize=100,600&format=png&mapMetadata=0&key=AmafUcgdnpmARanaKddoI44s8GCD6fPSI6eh_Sk5fvKQ3lxCnclNJwjOmSVlAyIh";

        return restTemplate.getForObject(url, byte[].class);
    }

    @Override
    public byte[] getImageAtPosition(Position position) {

        RestTemplate restTemplate = new RestTemplate();

        String url = "https://dev.virtualearth.net/REST/v1/Imagery/Map/AerialWithLabels/47.610,-122.107/10?mapSize=100,600&format=png&mapMetadata=0&key=AmafUcgdnpmARanaKddoI44s8GCD6fPSI6eh_Sk5fvKQ3lxCnclNJwjOmSVlAyIh";

        return restTemplate.getForObject(url, byte[].class);    }
}


//https://docs.microsoft.com/en-us/bingmaps/rest-services/imagery/get-a-static-map#response