package pl.edu.pwr.student.satellitemanager.satellite;

import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.TimeUnit;

/*
* ZALOZENIA SATELITY:
*
* - stała wysokosc (altitude) = 35786km
* - stala predkosc liniowa = 11300km
* - jedna godzina ruchu trwa jedną sekunde
*
* */

@Component
public class Simulation {

    private final double speed = 11300.0;
    private final double height = 35786.0;

    Date calculateTrip(Position newPosition) {

        double time = calculateDistance(Init.currentPosition, newPosition) / speed; // h

        Calendar c = Calendar.getInstance();
        c.setTime(new Date());
        c.add(Calendar.HOUR, (int) time);

        return c.getTime(); //arrivalDate;
    }

    long countDays(Date dateTo){

        Date today = new Date();
        long diffInMillies = Math.abs(dateTo.getTime() - today.getTime());

        return TimeUnit.DAYS.convert(diffInMillies, TimeUnit.MILLISECONDS);
    }

    private static double calculateDistance(Position startingPosition, Position endingPosition){

        final int R = 6371; // Radius of the earth
        double height = 35786.0;

        double latDistance = Math.toRadians(endingPosition.getLatitude() - startingPosition.getLatitude());
        double lonDistance = Math.toRadians(endingPosition.getLongitude() - startingPosition.getLongitude());
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(startingPosition.getLatitude())) * Math.cos(Math.toRadians(endingPosition.getLatitude()))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double distance = R * c * 1000;


        distance = Math.pow(distance, 2) + Math.pow(height, 2);

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
        double distance = R * c * 1000;

        double height = endingAltitude - startingAltitude;

        distance = Math.pow(distance, 2) + Math.pow(height, 2);

        return Math.sqrt(distance); // km
    }

    void simulateTrip(Double latitude, Double longitude) {

        final double[] startingDistance = {calculateDistance(Init.currentPosition, new Position(latitude, longitude))};

        double startingX = Init.currentPosition.getLatitude();
        double startingY = Init.currentPosition.getLongitude();

        double startDistance = startingDistance[0];

        Thread t = new Thread(() -> {

            while (true){

                startingDistance[0] -= speed;

                Init.currentPosition.setLatitude(Init.currentPosition.getLatitude() + distanceXY(startDistance, startingX, latitude));
                Init.currentPosition.setLongitude(Init.currentPosition.getLongitude() + distanceXY(startDistance, startingY, longitude));

                if(startingDistance[0] <= 0){

                    Init.currentPosition.setLatitude(latitude);
                    Init.currentPosition.setLongitude(longitude);

                    Thread.currentThread().interrupt();
                    return;
                }

                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

            }
        });
        t.start();

    }

    private Double distanceXY(double distance, double startingXY, double endingXY) {

        double rate = speed / distance;
        double x_distance = endingXY - startingXY;

        return x_distance * rate;
    }

}
