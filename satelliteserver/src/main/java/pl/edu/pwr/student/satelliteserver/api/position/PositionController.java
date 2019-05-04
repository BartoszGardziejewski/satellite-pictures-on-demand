package pl.edu.pwr.student.satelliteserver.api.position;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
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
    public Date getTimeArrival(@RequestParam Double latitude,
                               @RequestParam Double longitude){

        return this.positionService.getTimeToArrive(new Position(latitude, longitude));
    }

    @PostMapping("satellite/api/position")
    @ResponseBody
    public Date setCurrentPosition(@RequestParam Double latitude,
                                   @RequestParam Double longitude,
                                   HttpServletResponse response){

        if(latitude > 90.0 || latitude < -90.0 || longitude > 180.0 || longitude < -180.0){
            response.setStatus( HttpServletResponse.SC_BAD_REQUEST  );
            return null;
        }

        return this.positionService.setSatellitePosition(new Position(latitude, longitude));
    }

}
