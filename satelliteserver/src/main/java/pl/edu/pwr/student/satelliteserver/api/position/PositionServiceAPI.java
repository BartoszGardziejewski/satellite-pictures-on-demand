package pl.edu.pwr.student.satelliteserver.api.position;

import pl.edu.pwr.student.satelliteserver.api.position.Position;

import java.util.Date;

public interface PositionServiceAPI {

    Position getSatellitePosition();

    Date setSatellitePosition(Position position);
}
