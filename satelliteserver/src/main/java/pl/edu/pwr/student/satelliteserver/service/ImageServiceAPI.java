package pl.edu.pwr.student.satelliteserver.service;

import pl.edu.pwr.student.satelliteserver.model.Position;

public interface ImageServiceAPI {

    byte[] getSatelliteImage();

    byte[] getImageAtPosition(Position position);
}
