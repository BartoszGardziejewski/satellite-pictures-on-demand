package pl.edu.pwr.student.satelliteserver.api.position;

public interface PositionServiceAPI {

    Position getSatellitePosition();

    DateModel setSatellitePosition(Position position);

    DateModel getTimeToArrive(Position position);
}
