package pl.edu.pwr.student.satelliteserver.api.position;

import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class PositionService implements PositionServiceAPI {

    @Override
    public Position getSatellitePosition() {

        return new Position(10.0, 2.0);
    }

    @Override
    public Date setSatellitePosition(Position position) {

        return new Date();
    }
}
