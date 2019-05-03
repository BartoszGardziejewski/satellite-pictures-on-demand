package pl.edu.pwr.student.satelliteserver.api.position;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequiredArgsConstructor
public class PositionController {

    private final PositionServiceAPI positionService;


    @GetMapping("satellite/api/position/now")
    public Position getCurrentPosition() {

        return this.positionService.getSatellitePosition();
    }

    @GetMapping("satellite/api/position")
    public Date setCurrentPosition(@RequestParam Double latitude,
                                   @RequestParam Double longitude){

        return this.positionService.setSatellitePosition(new Position(latitude, longitude));
    }

}
