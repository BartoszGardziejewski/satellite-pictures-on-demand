package pl.edu.pwr.student.satelliteserver.api.image;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import pl.edu.pwr.student.satelliteserver.api.position.Position;

@Service
public class ImageService implements ImageServiceAPI {

    @Override
    public byte[] getSatelliteImage() {

        RestTemplate restTemplate = new RestTemplate();

        String url = "localhost:9009/satellite/manager/image/now";

        return restTemplate.getForObject(url, byte[].class);
    }

    @Override
    public byte[] getImageAtPosition(Position position) {

        RestTemplate restTemplate = new RestTemplate();

        String url = "satellite/manager/image?longitude=" + position.getLongitude() +
                "?latitude=" + position.getLatitude();

        return restTemplate.getForObject(url, byte[].class);
    }
}


//https://docs.microsoft.com/en-us/bingmaps/rest-services/imagery/get-a-static-map#response