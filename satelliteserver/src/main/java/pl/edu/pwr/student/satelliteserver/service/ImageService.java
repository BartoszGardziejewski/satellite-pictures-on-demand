package pl.edu.pwr.student.satelliteserver.service;

import org.springframework.stereotype.Service;
import pl.edu.pwr.student.satelliteserver.model.ImageModel;
import pl.edu.pwr.student.satelliteserver.model.Position;

@Service
public class ImageService implements ImageServiceAPI {


    @Override
    public ImageModel getSatelliteImage() {

        return new ImageModel();
    }

    @Override
    public ImageModel getImageAtPosition(Position position) {

        return new ImageModel();
    }
}
