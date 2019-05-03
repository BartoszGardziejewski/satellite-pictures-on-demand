package pl.edu.pwr.student.satellitemanager.satellite;

import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Period;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;
import java.util.Date;

@Component
public class Simulation {

    private double speed = 28000.0;

    public Date calculateTrip(Position newPosition) throws ParseException {

        double time = calculateDistance(Init.currentPosition, newPosition) / 1000 / speed;
        SimpleDateFormat format = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");

        Calendar c = Calendar.getInstance();
        c.setTime(new Date());
        c.add(Calendar.HOUR, (int) time);

        Date arrivalDate = new Date();
        arrivalDate = format.parse(String.valueOf(c.getTime()));

        return arrivalDate;
    }

    public long countDays(Date dateTo){

        Date today = new Date();

        return dateTo.getTime() - today.getTime();
    }

    static double calculateDistance(Position startingPosition, Position endingPosition){

        final int R = 6371; // Radius of the earth

        double latDistance = Math.toRadians(endingPosition.getLatitude() - startingPosition.getLatitude());
        double lonDistance = Math.toRadians(endingPosition.getLongitude() - startingPosition.getLongitude());
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double distance = R * c * 1000; // convert to meters

        distance = Math.pow(distance, 2);

        return Math.sqrt(distance);
    }

    public static double calculateDistance(Position startingPosition, Position endingPosition,
                                           double startingAltitude, double endingAltitude){

        final int R = 6371; // Radius of the earth

        double latDistance = Math.toRadians(endingPosition.getLatitude() - startingPosition.getLatitude());
        double lonDistance = Math.toRadians(endingPosition.getLongitude() - startingPosition.getLongitude());
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(startingAltitude)) * Math.cos(Math.toRadians(endingAltitude))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double distance = R * c * 1000; // convert to meters

        double height = endingAltitude - startingAltitude;

        distance = Math.pow(distance, 2) + Math.pow(height, 2);

        return Math.sqrt(distance);
    }

    void simulateTrip(Double latitude, Double longitude) {

        double remain = calculateDistance(Init.currentPosition, new Position(latitude, longitude));


    }
}
