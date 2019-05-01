package pl.edu.pwr.student.satelliteserver.service;

import pl.edu.pwr.student.satelliteserver.model.Position;

import java.util.Date;

public interface PositionServiceAPI {

    Position getSatellitePosition();

    Date setSatellitePosition(Position position);
}
