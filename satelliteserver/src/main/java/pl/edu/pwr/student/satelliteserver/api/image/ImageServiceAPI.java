package pl.edu.pwr.student.satelliteserver.api.image;

import pl.edu.pwr.student.satelliteserver.api.position.Position;

public interface ImageServiceAPI {

    ImageDaysWrapper getSatelliteImage();

    ImageDaysWrapper getImageAtPosition(Position position);
}
