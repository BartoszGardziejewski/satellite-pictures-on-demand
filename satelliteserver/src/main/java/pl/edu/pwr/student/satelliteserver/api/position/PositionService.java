package pl.edu.pwr.student.satelliteserver.api.position;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Date;

@Service
public class PositionService implements PositionServiceAPI {

    @Override
    public Position getSatellitePosition() {

        RestTemplate restTemplate = new RestTemplate();

        String url = "localhost:9009/satellite/manager/position";

        return restTemplate.getForObject(url, Position.class);
    }

    @Override
    public Date setSatellitePosition(Position position) {

        RestTemplate restTemplate = new RestTemplate();

        String url = "localhost:9009/satellite/manager/position?longitude=" + position.getLatitude() +
                "&latitude=" + position.getLatitude();

        return restTemplate.getForObject(url, Date.class);
    }
}
