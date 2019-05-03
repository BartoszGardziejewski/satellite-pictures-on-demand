package pl.edu.pwr.student.satellitemanager.satellite;

import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Calendar;
import java.util.Date;

@Component
public class Simulation {

    private final double speed = 11300.0;
    private final double height = 35786.0;

    Date calculateTrip(Position newPosition) throws ParseException {

        double time = calculateDistance(Init.currentPosition, newPosition) / speed; // h

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
        double height = 35786.0;

        double latDistance = Math.toRadians(endingPosition.getLatitude() - startingPosition.getLatitude());
        double lonDistance = Math.toRadians(endingPosition.getLongitude() - startingPosition.getLongitude());
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(startingPosition.getLatitude())) * Math.cos(Math.toRadians(endingPosition.getLatitude()))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double distance = R * c * 1000; // convert to meters


        distance = Math.pow(distance, 2) + Math.pow(height, 2);

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

        final double[] startingDistance = {calculateDistance(Init.currentPosition, new Position(latitude, longitude))};
        double startingX = Init.currentPosition.getLatitude();
        double startingY = Init.currentPosition.getLongitude();

        Thread t = new Thread(() -> {

            while (!Thread.interrupted()){

                startingDistance[0] -= speed;

                Init.currentPosition.setLatitude(Init.currentPosition.getLatitude() + distanceX(startingDistance[0], startingX, latitude));
                Init.currentPosition.setLongitude(Init.currentPosition.getLongitude() - distanceX(startingDistance[0], startingY, longitude));

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

    private Double distanceX(double distance, double startingX, double endingX) {

        double s = speed;
        double rate = s / distance;
        double x_distance = endingX - startingX;

        return startingX + x_distance * rate;
    }

}
