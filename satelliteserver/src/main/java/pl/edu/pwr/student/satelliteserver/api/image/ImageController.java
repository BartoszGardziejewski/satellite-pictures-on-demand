package pl.edu.pwr.student.satelliteserver.api.image;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwr.student.satelliteserver.api.position.Position;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class ImageController {

    private final ImageServiceAPI imageService;

    @GetMapping(value = "satellite/api/image/now")
    public String getCurrentImage() throws IOException {

        return this.imageService.getSatelliteImage();
    }

    @GetMapping("satellite/api/image")
    public @ResponseBody ImageDaysWrapper getImageAtPosition(@RequestParam Double latitude,
                                                             @RequestParam Double longitude,
                                                             HttpServletResponse response) throws IOException{

        if(latitude > 90.0 || latitude < -90.0 || longitude > 180.0 || longitude < -180.0){
            response.setStatus( HttpServletResponse.SC_BAD_REQUEST  );
            return null;
        }

        return this.imageService.getImageAtPosition(new Position(latitude, longitude));
    }

    private byte[] processByteArray(Byte[] imageFromService){

        byte[] byteArray = new byte[imageFromService.length];

        int i = 0;
        for (byte wrappedByte : imageFromService) {
            byteArray[i++] = wrappedByte;
        }

        return byteArray;
    }
}
