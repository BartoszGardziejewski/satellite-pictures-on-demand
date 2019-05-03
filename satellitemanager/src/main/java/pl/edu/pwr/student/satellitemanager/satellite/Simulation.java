package pl.edu.pwr.student.satellitemanager.satellite;

import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Calendar;
import java.util.Date;

@Component
public class Simulation {

    private final double speed = 28000.0;

    Date calculateTrip(Position newPosition) throws ParseException {

        double time = calculateDistance(Init.currentPosition, newPosition) / 1000 / speed; // h

        Calendar c = Calendar.getInstance();
        c.setTime(new Date());
        c.add(Calendar.HOUR, (int) time);

        return c.getTime(); //arrivalDate;
    }

    long countDays(Date dateTo){

        Date today = new Date();

        return dateTo.getTime() - today.getTime();
    }

    private static double calculateDistance(Position startingPosition, Position endingPosition){

        final int R = 6371; // Radius of the earth

        double latDistance = Math.toRadians(endingPosition.getLatitude() - startingPosition.getLatitude());
        double lonDistance = Math.toRadians(endingPosition.getLongitude() - startingPosition.getLongitude());
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double distance = R * c * 1000;

        distance = Math.pow(distance, 2);

        return Math.sqrt(distance); // km
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

        final double[] startingDistance = {calculateDistance(Init.currentPosition, new Position(latitude, longitude))};

        Thread t = new Thread(() -> {

            while (Thread.interrupted()){

                startingDistance[0] -= speed;

                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

                if(startingDistance[0] <= 0){

                    Init.currentPosition.setLatitude(latitude);
                    Init.currentPosition.setLongitude(longitude);

                    Thread.currentThread().interrupt();
                    return;
                }

            }
        });
        t.start();

    }
}
