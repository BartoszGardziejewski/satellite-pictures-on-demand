package pl.edu.pwr.student.satelliteserver.api.position;

import java.util.Date;

public interface PositionServiceAPI {

    Position getSatellitePosition();

    Date setSatellitePosition(Position position);

    Date getTimeToArrive(Position position);
}
