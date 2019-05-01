package pl.edu.pwr.student.satelliteserver.api.position;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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