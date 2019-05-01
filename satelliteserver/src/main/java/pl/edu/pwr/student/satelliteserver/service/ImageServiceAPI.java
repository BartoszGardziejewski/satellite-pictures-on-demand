package pl.edu.pwr.student.satelliteserver.service;

import pl.edu.pwr.student.satelliteserver.model.ImageModel;
import pl.edu.pwr.student.satelliteserver.model.Position;

public interface ImageServiceAPI {

    ImageModel getSatelliteImage();

    ImageModel getImageAtPosition(Position position);
}
