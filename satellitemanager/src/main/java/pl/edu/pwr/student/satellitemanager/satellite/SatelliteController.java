package pl.edu.pwr.student.satellitemanager.satellite;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;
import java.util.Date;

@RestController
@RequiredArgsConstructor
public class SatelliteController {

    public static Position currentPosition;
    private final Simulation simulation;
    private final Service service;

    @GetMapping("satellite/api/position")
    public Position getCurrentPosition() {

        return currentPosition;
    }

    @PostMapping("satellite/api/position")
    public Date setCurrentPosition(@RequestParam Double longitude,
                                   @RequestParam Double latitude) throws ParseException {

        currentPosition.setLongitude(longitude);
        currentPosition.setLatitude(latitude);

        return simulation.calculateTrip(new Position(longitude, latitude));
    }

    @GetMapping(value = "satellite/api/image/now", produces = MediaType.IMAGE_PNG_VALUE)
    public @ResponseBody byte[] getCurrentImage(HttpServletResponse response) throws IOException {


        return this.service.getCurrentImage();
    }

    @GetMapping("satellite/api/image")
    public @ResponseBody int getImageAtPosition(@RequestParam Double longitude,
                                                   @RequestParam Double latitude,
                                                   HttpServletResponse response) throws IOException, ParseException {


        // zawinąć wrapa z intem i puszczac z pustą tablicą lub zdjeciem
        Date arrivalAt = simulation.calculateTrip(new Position(longitude, latitude));
        long daysToArrive = simulation.countDays(arrivalAt);

        if(daysToArrive < 1)
            return 0;
        else
            this.simulation.simulateTrip(longitude, latitude);

        return (int) daysToArrive;
    }
}
