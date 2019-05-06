package pl.edu.pwr.student.satelliteserver.api.position;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Date;

@Service
public class PositionService implements PositionServiceAPI {

    @Override
    public Position getSatellitePosition() {

        RestTemplate restTemplate = new RestTemplate();

        String url = "http://127.0.0.1:9009/satellite/manager/position/now";

        return restTemplate.getForObject(url, Position.class);
    }

    @Override
    public DateModel setSatellitePosition(Position position) {

        RestTemplate restTemplate = new RestTemplate();

        String url = "http://127.0.0.1:9009/satellite/manager/position?latitude=" + position.getLatitude() +
                "&longitude=" + position.getLongitude();

        return restTemplate.getForObject(url, DateModel.class);
    }

    @Override
    public DateModel getTimeToArrive(Position position) {

        RestTemplate restTemplate = new RestTemplate();

        String url = "http://127.0.0.1:9009/satellite/manager/position/time?latitude=" + position.getLatitude() +
                "&longitude=" + position.getLongitude();

        return restTemplate.getForObject(url, DateModel.class);
    }
}
