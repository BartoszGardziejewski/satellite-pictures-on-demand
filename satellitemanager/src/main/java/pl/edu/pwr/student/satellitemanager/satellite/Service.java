package pl.edu.pwr.student.satellitemanager.satellite;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Map;

@org.springframework.stereotype.Service
public class Service {

    private final String bing_api_key = "AmafUcgdnpmARanaKddoI44s8GCD6fPSI6eh_Sk5fvKQ3lxCnclNJwjOmSVlAyIh";

    String getCurrentImage() throws IOException {

        byte[] img = downloadImage(Init.currentPosition);

        Map uploadResult = convertToCloudinary(img);

        return uploadResult.get("url").toString();
    }

    String getImageAtPosition(Double latitude, Double longitude) throws IOException {

        byte[] img = downloadImage(new Position(latitude, longitude));

        Map uploadResult = convertToCloudinary(img);

        return uploadResult.get("url").toString();

    }

    private byte[] downloadImage(Position position){

        RestTemplate restTemplate = new RestTemplate();

        String url = "https://dev.virtualearth.net/REST/v1/Imagery/Map/AerialWithLabels/" +
                position.getLatitude() + "," + position.getLongitude() +
                "/10?mapSize=100,600&format=png&mapMetadata=0&" +
                "key=" + bing_api_key;


        return restTemplate.getForObject(url, byte[].class);
    }

    private Map convertToCloudinary(byte[] img) throws IOException {

        try (FileOutputStream fos = new FileOutputStream("img_" + Init.currentPosition.getLatitude() + "," + Init.currentPosition.getLongitude())) {
            if (img != null) {
                fos.write(img);
            }
        }

        Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "dc4vfcohp",
                "api_key", "278947265515886",
                "api_secret", "cYH3z2QwlzEJvot3DoukcKKgI-g"
        ));

        return cloudinary.uploader()
                .upload(new File("img_" + Init.currentPosition.getLatitude() + "," + Init.currentPosition.getLongitude()), ObjectUtils.emptyMap());
    }
}
