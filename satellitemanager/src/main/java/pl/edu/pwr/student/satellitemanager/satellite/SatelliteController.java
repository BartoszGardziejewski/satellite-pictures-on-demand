package pl.edu.pwr.student.satellitemanager.satellite;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;
import java.util.Date;

@RestController
@RequiredArgsConstructor
public class SatelliteController {

//    public static Position currentPosition;
    @Autowired
    private final Simulation simulation;
    @Autowired
    private final Service service;

    @GetMapping("satellite/manager/position/now")
    public Position getCurrentPosition() {

        return Init.currentPosition;
    }

    @GetMapping("satellite/manager/position")
    public Date setCurrentPosition(@RequestParam Double latitude,
                                   @RequestParam Double longitude) throws ParseException {

        Date arrDate = simulation.calculateTrip(new Position(latitude, longitude));

        Init.currentPosition.setLatitude(latitude);
        Init.currentPosition.setLongitude(longitude);

        return arrDate;
    }

    @GetMapping(value = "satellite/manager/image/now", produces = MediaType.IMAGE_PNG_VALUE)
    public @ResponseBody byte[] getCurrentImage(HttpServletResponse response) throws IOException {


        return this.service.getCurrentImage();
    }

    @GetMapping("satellite/manager/image")
    public @ResponseBody ImageDaysWrapper getImageAtPosition(@RequestParam Double latitude,
                                                             @RequestParam Double longitude,
                                                             HttpServletResponse response)
                                                             throws IOException, ParseException {

        Date arrivalAt = simulation.calculateTrip(new Position(latitude, longitude));
        long daysToArrive = simulation.countDays(arrivalAt);

        if(daysToArrive < 1){
            return new ImageDaysWrapper(0, this.service.getCurrentImage());
        }
        else
            this.simulation.simulateTrip(longitude, latitude);
            return new ImageDaysWrapper((int) daysToArrive, null);
    }

}
