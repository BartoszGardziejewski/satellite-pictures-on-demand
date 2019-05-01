package pl.edu.pwr.student.satelliteserver.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwr.student.satelliteserver.model.ImageModel;
import pl.edu.pwr.student.satelliteserver.model.Position;
import pl.edu.pwr.student.satelliteserver.service.ImageServiceAPI;

@RestController
@RequiredArgsConstructor
public class ImageController {

    private final ImageServiceAPI imageService;

    @GetMapping("satellite/api/image/now")
    public ImageModel getCurrentImage(){

        return this.imageService.getSatelliteImage();
    }

    @GetMapping("satellite/api/image")
    public ImageModel getImageAtPosition(@RequestParam Double longitude,
                                         @RequestParam Double magnitude){

        return this.imageService.getImageAtPosition(new Position(longitude, magnitude));
    }
}
