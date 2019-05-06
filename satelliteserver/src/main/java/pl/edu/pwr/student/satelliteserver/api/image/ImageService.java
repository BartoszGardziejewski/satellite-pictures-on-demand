package pl.edu.pwr.student.satelliteserver.api.image;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import pl.edu.pwr.student.satelliteserver.api.position.Position;

@Service
public class ImageService implements ImageServiceAPI {

    @Override
    public ImageDaysWrapper getSatelliteImage() {

        RestTemplate restTemplate = new RestTemplate();

        String url = "http://127.0.0.1:9009/satellite/manager/image/now";

        return restTemplate.getForObject(url, ImageDaysWrapper.class);
    }

    @Override
    public ImageDaysWrapper getImageAtPosition(Position position) {

        RestTemplate restTemplate = new RestTemplate();

        String url = "http://127.0.0.1:9009/satellite/manager/image?latitude=" + position.getLatitude() +
                "&longitude=" + position.getLongitude();

        return restTemplate.getForObject(url, ImageDaysWrapper.class);
    }
}


//https://docs.microsoft.com/en-us/bingmaps/rest-services/imagery/get-a-static-map#response