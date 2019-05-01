package pl.edu.pwr.student.satellitemanager.satellite;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Wrapper;
import java.text.ParseException;
import java.util.Date;

@RestController
@RequiredArgsConstructor
public class SatelliteController {

    public static Position currentPosition;
    private final Simulation simulation;
    private final Service service;

    @GetMapping("satellite/manager/position")
    public Position getCurrentPosition() {

        return currentPosition;
    }

    @GetMapping("satellite/manager/position")
    public Date setCurrentPosition(@RequestParam Double longitude,
                                   @RequestParam Double latitude) throws ParseException {

        currentPosition.setLongitude(longitude);
        currentPosition.setLatitude(latitude);

        return simulation.calculateTrip(new Position(longitude, latitude));
    }

    @GetMapping(value = "satellite/manager/image/now", produces = MediaType.IMAGE_PNG_VALUE)
    public @ResponseBody byte[] getCurrentImage(HttpServletResponse response) throws IOException {


        return this.service.getCurrentImage();
    }

    @GetMapping("satellite/manager/image")
    public @ResponseBody ImageDaysWrapper getImageAtPosition(@RequestParam Double longitude,
                                                   @RequestParam Double latitude,
                                                   HttpServletResponse response) throws IOException, ParseException {

        Date arrivalAt = simulation.calculateTrip(new Position(longitude, latitude));
        long daysToArrive = simulation.countDays(arrivalAt);

        if(daysToArrive < 1){
            return new ImageDaysWrapper(0, this.service.getCurrentImage());
        }
        else
            this.simulation.simulateTrip(longitude, latitude);
            return new ImageDaysWrapper((int) daysToArrive, null);
    }

}
