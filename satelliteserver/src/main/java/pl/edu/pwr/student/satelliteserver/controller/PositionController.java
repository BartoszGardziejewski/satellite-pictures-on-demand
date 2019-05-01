package pl.edu.pwr.student.satelliteserver.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwr.student.satelliteserver.model.Position;
import pl.edu.pwr.student.satelliteserver.service.PositionServiceAPI;

import java.util.Date;

@RestController
@RequiredArgsConstructor
public class PositionController {

    private final PositionServiceAPI positionService;


    @GetMapping("satellite/api/position")
    public Position getCurrentPosition() {

        return this.positionService.getSatellitePosition();
    }

    @PostMapping("satellite/api/position")
    public Date setCurrentPosition(@RequestParam Double longitude,
                                   @RequestParam Double magnitude){

        return this.positionService.setSatellitePosition(new Position(longitude, magnitude));
    }

}
