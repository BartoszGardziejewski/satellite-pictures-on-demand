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
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class SatelliteController {

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
                                   @RequestParam Double longitude) {

        Date arrDate = simulation.calculateTrip(new Position(latitude, longitude));
        simulation.simulateTrip(latitude, longitude);

        return arrDate;
    }

    @GetMapping("satellite/manager/position/time")
    public Date getTimeArrival(@RequestParam Double latitude,
                               @RequestParam Double longitude){

        return simulation.calculateTrip(new Position(latitude, longitude));
    }

    @GetMapping("satellite/manager/image/now")
    public String getCurrentImage() throws IOException {


        return this.service.getCurrentImage();
    }

    @GetMapping("satellite/manager/image")
    public @ResponseBody ImageDaysWrapper getImageAtPosition(@RequestParam Double latitude,
                                                             @RequestParam Double longitude,
                                                             HttpServletResponse response)
                                                             throws IOException {

        Date arrDate = simulation.calculateTrip(new Position(latitude, longitude));

        if(simulation.countDays(arrDate) < 1){
            return new ImageDaysWrapper(new Date(), this.service.getImageAtPosition(latitude, longitude));
        }
        else
            this.simulation.simulateTrip(latitude, longitude);
            return new ImageDaysWrapper(arrDate, null);
    }
}
